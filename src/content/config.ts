import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      title: z.string(),
      description: z.string(),
      tools: z.array(z.string()),
      share: z
        .object({
          image: z.string(),
          title: z.string(),
          description: z.string(),
        })
        .strict(),
    }),
  }),
};
