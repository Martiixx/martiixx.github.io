import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().transform((str) => new Date(str)).optional(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
}; 