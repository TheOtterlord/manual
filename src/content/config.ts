import { z, defineCollection } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
  }),
});

export const collections = {
  docs,
  blog,
};
