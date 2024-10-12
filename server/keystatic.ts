import "server-only";

import keystaticConfig from "@/keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";

export const getReader = cache(() => createReader(process.cwd(), keystaticConfig));

export const getArticle = cache(getReader().collections.articles.readOrThrow);
export const getSortedArticles = cache(async () => {
  const reader = getReader();
  const articles = await reader.collections.articles.all();
  // https://github.com/Thinkmill/keystatic/discussions/406
  const sortedArticles = articles.sort((a, b) => {
    const aDate = new Date(a.entry.publishedAt);
    const bDate = new Date(b.entry.publishedAt);
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });
  return sortedArticles;
});

export const getTalk = cache(getReader().collections.talks.readOrThrow);
export const getSortedTalks = cache(async () => {
  const reader = getReader();
  const talks = await reader.collections.talks.all();
  return talks.sort((a, b) => {
    const dateA = new Date(a.entry.publishedAt).getTime();
    const dateB = new Date(b.entry.publishedAt).getTime();
    return dateB - dateA;
  });
});


export const getCustomPages = cache(getReader().collections.pages.all);
export const getCustomPage = cache(getReader().collections.pages.readOrThrow);

export const getHomeSingleton = cache(getReader().singletons.home.readOrThrow);

export const getProjects = cache(async () => {
  const reader = getReader();
  const { entries } = await reader.singletons.projects.readOrThrow();
  return entries;
});
