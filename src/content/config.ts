// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default('PoliSync Team'),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      category: z.string().optional(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
  }),
};