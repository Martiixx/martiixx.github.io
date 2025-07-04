---
title: "Performance Optimization Techniques for High-Traffic Applications"
description: "Learn proven techniques for optimizing application performance, from database queries to caching strategies. Real-world examples from systems processing millions of requests daily."
pubDate: "2024-01-10"
updatedDate: "2024-01-15"
author: "Martin Carrasco"
image: "/blog/performance-optimization.jpg"
tags: ["performance", "optimization", "backend", "caching", "database"]
---

# Performance Optimization Techniques for High-Traffic Applications

Performance optimization is crucial for applications that need to handle high traffic and process large amounts of data. In this post, I'll share the techniques I've used to optimize systems processing millions of requests daily.

## Understanding Performance Bottlenecks

Before diving into optimization techniques, it's essential to identify where the bottlenecks are:

1. **Database Queries**: Often the biggest performance killer
2. **Network Latency**: External API calls and service communication
3. **Memory Usage**: Inefficient data structures and memory leaks
4. **CPU Intensive Operations**: Complex calculations and data processing

## Technique 1: Database Query Optimization

### Indexing Strategy

Proper indexing can dramatically improve query performance:

```sql
-- Before: Full table scan
SELECT * FROM orders WHERE customer_id = 123 AND status = 'pending';

-- After: Proper indexing
CREATE INDEX idx_orders_customer_status ON orders(customer_id, status);
```

### Query Optimization

```typescript
// Before: N+1 query problem
const orders = await Order.find({ customerId: 123 });
for (const order of orders) {
  const customer = await Customer.findById(order.customerId); // N queries!
}

// After: Single query with join
const orders = await Order.aggregate([
  { $match: { customerId: 123 } },
  {
    $lookup: {
      from: 'customers',
      localField: 'customerId',
      foreignField: '_id',
      as: 'customer'
    }
  }
]);
```

### Connection Pooling

```typescript
// Configure connection pool
const pool = new Pool({
  host: 'localhost',
  database: 'myapp',
  user: 'user',
  password: 'password',
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

## Technique 2: Caching Strategies

### Redis Caching

```typescript
@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private redisService: RedisService
  ) {}

  async getUserById(id: string): Promise<User> {
    // Try cache first
    const cached = await this.redisService.get(`user:${id}`);
    if (cached) {
      return JSON.parse(cached);
    }

    // Fetch from database
    const user = await this.userRepository.findById(id);
    
    // Cache for 1 hour
    await this.redisService.setex(`user:${id}`, 3600, JSON.stringify(user));
    
    return user;
  }
}
```

### Application-Level Caching

```typescript
@Injectable()
export class ProductService {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  async getProduct(id: string): Promise<Product> {
    const cached = this.cache.get(id);
    const now = Date.now();

    if (cached && (now - cached.timestamp) < this.CACHE_TTL) {
      return cached.data;
    }

    const product = await this.productRepository.findById(id);
    this.cache.set(id, { data: product, timestamp: now });

    return product;
  }
}
```

## Technique 3: Asynchronous Processing

### Background Jobs

```typescript
@Injectable()
export class EmailService {
  constructor(private queueService: QueueService) {}

  async sendWelcomeEmail(userId: string): Promise<void> {
    // Don't block the request
    await this.queueService.add('send-welcome-email', { userId });
  }
}

// Worker
@Processor('send-welcome-email')
export class EmailProcessor {
  async process(job: Job<{ userId: string }>) {
    const user = await this.userService.findById(job.data.userId);
    await this.emailProvider.sendWelcomeEmail(user.email);
  }
}
```

### Event-Driven Processing

```typescript
@Injectable()
export class OrderService {
  constructor(private eventBus: EventBus) {}

  async createOrder(orderData: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepository.create(orderData);
    
    // Publish event for async processing
    this.eventBus.publish(new OrderCreatedEvent(order));
    
    return order;
  }
}

@EventsHandler(OrderCreatedEvent)
export class OrderEventHandler {
  async handle(event: OrderCreatedEvent) {
    // Process in background
    await this.inventoryService.updateStock(event.order.items);
    await this.notificationService.sendOrderConfirmation(event.order);
  }
}
```

## Technique 4: Load Balancing and Scaling

### Horizontal Scaling

```typescript
// Use PM2 for process management
module.exports = {
  apps: [{
    name: 'api',
    script: 'dist/main.js',
    instances: 'max', // Use all CPU cores
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

### Load Balancing with Nginx

```nginx
upstream api_servers {
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
    server 127.0.0.1:3003;
    server 127.0.0.1:3004;
}

server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://api_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Technique 5: Memory Optimization

### Efficient Data Structures

```typescript
// Before: Inefficient object creation
const users = [];
for (let i = 0; i < 10000; i++) {
  users.push({
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`
  });
}

// After: Use Map for better performance
const userMap = new Map();
for (let i = 0; i < 10000; i++) {
  userMap.set(i, {
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`
  });
}
```

### Memory Leak Prevention

```typescript
@Injectable()
export class DataProcessor {
  private cache = new WeakMap(); // Automatically garbage collected

  processData(data: any) {
    if (this.cache.has(data)) {
      return this.cache.get(data);
    }

    const result = this.heavyComputation(data);
    this.cache.set(data, result);
    return result;
  }
}
```

## Technique 6: Monitoring and Profiling

### Performance Monitoring

```typescript
@Injectable()
export class PerformanceMonitor {
  private metrics = new Map<string, number[]>();

  @UseInterceptors(new PerformanceInterceptor())
  async trackPerformance(methodName: string, duration: number) {
    if (!this.metrics.has(methodName)) {
      this.metrics.set(methodName, []);
    }
    
    this.metrics.get(methodName)!.push(duration);
    
    // Alert if performance degrades
    const avg = this.calculateAverage(this.metrics.get(methodName)!);
    if (avg > 1000) { // 1 second threshold
      this.alertSlowMethod(methodName, avg);
    }
  }
}
```

### Database Query Monitoring

```typescript
// Log slow queries
const slowQueryThreshold = 100; // ms

mongoose.set('debug', (collectionName, methodName, ...methodArgs) => {
  const start = Date.now();
  
  return function() {
    const duration = Date.now() - start;
    if (duration > slowQueryThreshold) {
      console.warn(`Slow query detected: ${collectionName}.${methodName} took ${duration}ms`);
    }
  };
});
```

## Best Practices Summary

1. **Measure First**: Always profile before optimizing
2. **Cache Strategically**: Cache at multiple levels (application, database, CDN)
3. **Use Async Processing**: Don't block requests with heavy operations
4. **Optimize Database**: Index properly, avoid N+1 queries
5. **Monitor Continuously**: Set up alerts for performance degradation
6. **Scale Horizontally**: Use load balancing and multiple instances

## Conclusion

Performance optimization is an ongoing process. Start by identifying bottlenecks, implement these techniques incrementally, and continuously monitor your application's performance.

Remember, premature optimization is the root of all evil. Focus on the areas that will have the biggest impact on your specific use case.

---

*What performance optimization techniques have you found most effective? Share your experiences in the comments below!* 