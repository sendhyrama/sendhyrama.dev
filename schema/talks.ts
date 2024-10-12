import { collection, fields } from "@keystatic/core";

export const talkSchema = collection({
  label: "Talks",
  slugField: "title",
  path: "content/talks/*",
  entryLayout: "content",
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
        description: "The title of the talk",
        validation: { length: { min: 1 } },
      },
      slug: {
        label: "Slug",
        description: "Automatically generated from the title",
      },
    }),
    description: fields.text({
      label: "Description",
      description: "A brief description of the talk",
      validation: { length: { min: 1 } },
    }),
    publishedAt: fields.date({
      label: "Published At",
      description: "The date the talk was given",
      defaultValue: { kind: "today" },
      validation: { isRequired: true },
    }),
    slideUrl: fields.url({
      label: "Slide URL",
      description: "The URL to the external slides (e.g., Google Slides, Figma, or other platforms)",
      validation: { isRequired: true },
    }),
    postUrl: fields.url({
      label: "Post URL",
      description: "The URL to the post about this talk event",
      validation: { isRequired: false },
    }),
  },
  previewUrl: `${process.env.APP_URL}/talks/{slug}`,
});
