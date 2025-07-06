# 🚀 Martiixx Portfolio Website

A modern, high-performance personal portfolio website built with **Astro** and **Tailwind CSS**. Showcasing software engineering projects, professional experience, and technical expertise with a focus on performance, accessibility, and user experience.

![Portfolio Preview](https://pub-55f502b1bb8a47b18e001af1f25c9d6c.r2.dev/Screenshot%202025-07-06%20at%2012.14.05.png)

## ✨ Features

### 🎨 **Modern Design & UX**
- **Dark/Light Theme Toggle** - Seamless theme switching with smooth transitions
- **Responsive Design** - Perfect experience across all devices and screen sizes
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Interactive Elements** - Hover effects, loading states, and visual feedback
- **Typography Excellence** - Beautiful typography with proper hierarchy

### 🚀 **Performance Optimized**
- **Static Site Generation** - Lightning-fast page loads with Astro's SSG
- **Image Optimization** - Optimized images for web performance
- **Lazy Loading** - Efficient resource loading for better performance
- **Minimal JavaScript** - Astro's partial hydration for optimal performance
- **Core Web Vitals** - Optimized for excellent Lighthouse scores

### 🎯 **Enhanced User Experience**
- **Smooth Scrolling Navigation** - Seamless page navigation with active link highlighting
- **Search Functionality** - Global search with keyboard shortcuts (Ctrl+K)
- **Loading States** - Professional loading indicators and skeleton screens
- **Back to Top Button** - Easy navigation with scroll progress indicator
- **Mobile Menu** - Intuitive mobile navigation with slide-in animation

### 🔍 **SEO & Analytics**
- **Comprehensive SEO** - Meta tags, Open Graph, and structured data
- **Google Analytics 4** - Privacy-compliant analytics integration
- **Performance Monitoring** - Real-time performance tracking
- **Sitemap Generation** - Automatic sitemap for search engines
- **Social Media Cards** - Optimized sharing on social platforms

### ♿ **Accessibility First**
- **WCAG 2.1 AA Compliance** - Full accessibility standards compliance
- **Keyboard Navigation** - Complete keyboard accessibility
- **Screen Reader Support** - Proper ARIA labels and semantic HTML
- **Focus Management** - Clear focus indicators and logical tab order
- **Reduced Motion Support** - Respects user motion preferences

### 🛠 **Developer Experience**
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Component Architecture** - Reusable, modular components
- **Hot Reload** - Fast development with instant updates
- **ESLint & Prettier** - Code quality and formatting

## 🏗 **Tech Stack**

### Core Technologies
- **[Astro 5.9.4](https://astro.build/)** - Modern static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 3.4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Cursor](https://cursor.sh/)** - AI-powered code editor

### Key Integrations
- **Google Analytics 4** - Website analytics and tracking
- **Performance Monitoring** - Real-time performance insights
- **GitHub Pages** - Static site hosting
- **Cloudflare R2** - Image and asset hosting

## 📁 **Project Structure**

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Core UI components
│   │   ├── ThemeToggle.astro      # Dark/light theme toggle
│   │   ├── LoadingSpinner.astro   # Loading indicators
│   │   ├── SearchBar.astro        # Global search functionality
│   │   └── SmoothScroll.astro     # Smooth scrolling navigation
│   ├── SEO.astro        # SEO component
│   ├── Analytics.astro  # Analytics integration
│   ├── PerformanceMonitor.astro   # Performance tracking
│   └── Animations.astro # Animation system
├── layouts/             # Page layouts
│   └── BaseLayout.astro # Main layout with navigation
├── pages/               # Astro pages (file-based routing)
│   ├── index.astro      # Homepage
│   ├── projects/        # Projects pages
│   ├── about.astro      # About page
│   ├── blog/            # Blog pages
│   └── contact.astro    # Contact page
├── styles/              # Global styles
│   └── styles.css       # Base styles and CSS variables
└── data/                # Static data
    └── projects.json    # Project information
```

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/martiixx/martiixx.github.io.git
   cd martiixx.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Type-check and lint |

## 🎨 **Customization**

### Theme Configuration
The website uses CSS custom properties for theming. Modify the variables in `src/layouts/BaseLayout.astro`:

```css
:root {
  --primary-color: #f23551;
  --text-color: #fff;
  --background-color: #181c23;
  /* ... more variables */
}
```

### Adding Projects
Update `src/data/projects.json` to add new projects:

```json
{
  "id": 5,
  "name": "Project Name",
  "description": "Project description",
  "image": "project-image-url",
  "technologies": ["Tech1", "Tech2"],
  "links": {
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com"
  }
}
```

## 🌟 **Key Features in Detail**

### Theme System
- Automatic theme detection based on user preference
- Smooth transitions between themes
- Persistent theme selection
- System theme synchronization

### Animation System
- Scroll-triggered animations
- Stagger animations for lists
- Hover micro-interactions
- Loading state animations
- Reduced motion support

### Search Functionality
- Global search with keyboard shortcuts
- Real-time search results
- Search history
- Keyboard navigation support

### Mobile Experience
- Touch-optimized interactions
- Swipe gestures support
- Mobile-first responsive design
- Optimized touch targets

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 **Links**

- **Live Site**: [www.martiixx.dev](https://www.martiixx.dev)
- **GitHub Repository**: [github.com/martiixx/martiixx.github.io](https://github.com/martiixx/martiixx.github.io)
- **Portfolio**: [martiixx.github.io](https://www.martiixx.dev/about)

## 👨‍💻 **About the Developer**

**Martin Carrasco** - Software Engineer Consultant specializing in backend architecture, microservices, and high-performance systems. Available for consulting projects and technical leadership.

- **LinkedIn**: [Martin Carrasco](https://linkedin.com/in/martiixx)
- **GitHub**: [@martiixx](https://github.com/martiixx)
- **Email**: [martingodoycarrasco@gmail.com](mailto:contact@martiixx.dev)

---

⭐ **Star this repository if you found it helpful!**
