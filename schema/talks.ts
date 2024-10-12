// schema/talks.ts
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
    embedCode: fields.text({
      label: "Embed Code",
      description: "The HTML embed code for slides (e.g., iframe from Google Slides, Figma, etc.)",
      validation: { isRequired: true },
    }),
  },
  previewUrl: `${process.env.APP_URL}/talks/{slug}`,
});
