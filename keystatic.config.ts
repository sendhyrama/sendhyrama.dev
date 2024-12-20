import { config } from "@keystatic/core";
import { aboutSchema } from "./schema/about";
import { articleSchema } from "./schema/articles";
import { customPageSchema } from "./schema/custom-pages";
import { homeSchema } from "./schema/home";
import { projectSchema } from "./schema/projects";
import { defaultMetadata } from "./site.config";
import { talkSchema } from "./schema/talks";

const isVercelProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

/** @see https://keystatic.com/docs/configuration */
export default config({
  storage: isVercelProd
    ? {
        kind: "github",
        repo: {
          owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER || defaultMetadata.github.username,
          name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG || defaultMetadata.github.repository,
        },
        branchPrefix: 'my-prefix/'
      }
    : {
        kind: "local",
      },
  collections: {
    articles: articleSchema,
    pages: customPageSchema,
    talks: talkSchema,
  },
  singletons: {
    home: homeSchema,
    about: aboutSchema,
    projects: projectSchema,
  },
  ui: {
    brand: {
      name: defaultMetadata.title,
    },
    navigation: {
      Content: ["articles", "talks", "pages", "projects"],
      Settings: ["home", "about"],
    },
  },
});