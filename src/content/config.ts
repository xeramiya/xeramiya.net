import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    synopsis: z.string(),
    date: z.object({
      created: z.date(),
      modified: z.date().nullable(),
    }),
  }),
});

export const collections = {
  blog: blogCollection,
};
