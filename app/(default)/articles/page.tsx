import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { getSortedArticles } from "@/server/keystatic";
import { formatLongDate } from "@/utils/intl";
import { cn } from "@/utils/ui";
import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Writing on random personal tidbits.",
};

export default async function Page() {
  const articles = await getSortedArticles();
  return (
    <ContainerSection
      className="relative space-y-4"
      enableNavShadow
      data-stagger-children
    >
      <h1 className="max-w-screen-sm text-balance text-4xl font-bold">
        Writing on random personal tidbits.
      </h1>
      <p className="!mb-16 max-w-screen-sm space-y-4 text-balance text-zinc-700 dark:text-zinc-300">
        All of my long-form thoughts on programming, probably about love, life, and everything.
      </p>
      <ul
        className="max-w-screen-sm space-y-12"
        data-stagger-children
      >
        {articles.map(({ slug, entry }) => {
          const Icon = entry.redirect.value ? ExternalLinkIcon : ArrowRightIcon;
          if (entry.draft) return null;
          return (
            <li
              key={slug}
              className={cn(
                "group relative flex flex-col",
                "before:absolute before:-z-10 before:transition-[opacity,inset]",
                "before:rounded-lg before:bg-zinc-500/5 dark:before:bg-zinc-500/10",
                "before:opacity-0 hover:before:opacity-100",
                "before:-inset-1 hover:before:-inset-4",
              )}
            >
              <div className="mb-2 text-balance text-xl font-bold">{entry.title}</div>
              <div className="mb-2 text-balance text-sm text-zinc-700 dark:text-zinc-300">{entry.description}</div>
              <div className="mt-4 flex items-center gap-x-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CalendarIcon className="h-3 w-3" />
                <time dateTime={entry.publishedAt}>{formatLongDate(entry.publishedAt)}</time>
                <div className="flex-grow" />
                <AdaptiveLink
                  href={entry.redirect.value?.url || `/articles/${slug}`}
                  className={cn(
                    "flex items-center gap-x-2 hover:underline",
                    "text-primary-600 dark:text-primary-500",
                    "before:absolute before:-inset-4",
                  )}
                >
                  <div>
                    {entry.redirect.value ? `Read on ${new URL(entry.redirect.value.url).hostname}` : "Read article"}
                  </div>
                  <Icon
                    className="h-3 w-3"
                    aria-hidden="true"
                  />
                </AdaptiveLink>
              </div>
            </li>
          );
        })}
      </ul>
    </ContainerSection>
  );
}
