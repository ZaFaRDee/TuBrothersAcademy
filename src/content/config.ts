import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      author: z.string().default("Diyorbek Turgunboev"),
      publishedAt: z.coerce.date(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      readingMinutes: z.number().default(5),
      featured: z.boolean().default(false),
    }),
});

export const collections = { articles };
