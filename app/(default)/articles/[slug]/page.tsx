import { ContainerSection } from "@/components/container-section";
import { getArticleRenderers } from "@/components/keystatic/article-renderers";
import { ProseArticle } from "@/components/prose-article";
import { getArticleLayoutSearchString } from "@/components/satori/types";
import { TopScroller } from "@/components/top-scroller";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getArticle, getSortedArticles } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { formatLongDate } from "@/utils/intl";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { ArrowLeftIcon, CalendarIcon, SlashIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Props["params"][]> {
  const articles = await getSortedArticles();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug).catch(() => notFound());
  if (article.redirect.discriminant) redirect(article.redirect.value.url);
  const search = getArticleLayoutSearchString(
    {
      title: article.title,
      description: article.description,
      imgSrc: article.cover || undefined,
      path: `/articles/${params.slug}`,
    },
    { encoded: true },
  );
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${defaultMetadata.url}/articles/${params.slug}`,
      images: [`${defaultMetadata.url}/api/opengraph/article?${search}`],
    },
    authors: [
      {
        name: defaultMetadata.title,
        url: defaultMetadata.url,
      },
    ],
  };
}

export default async function Page({ params }: Props) {
  const article = await getArticle(params.slug).catch(() => notFound());
  const document = await article.content();
  const renderers = getArticleRenderers();
  return (
    <ContainerSection
      className="relative space-y-4"
      enableNavShadow
      data-stagger-children
    >
      {article.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.cover}
          alt="article cover image"
          className="mb-8 aspect-video w-full max-w-screen-sm rounded bg-zinc-500 object-cover"
        />
      )}
      <div className="relative">
        <h1 className="max-w-screen-sm text-4xl font-bold">{article.title}</h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/articles"
              className={cn(
                "absolute inset-y-1 -left-8 max-lg:hidden",
                "z-10 h-8 w-8 rounded-full",
                "flex items-center justify-center",
                "hover:text-primary-600 dark:hover:text-primary-500",
              )}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={0}
          >
            Back to articles
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="max-w-screen-sm space-y-4 text-zinc-700 dark:text-zinc-300">{article.description}</p>
      <div className="!mb-16 flex items-center gap-x-1 text-sm text-zinc-700 dark:text-zinc-300">
        <CalendarIcon
          className="h-3 w-3"
          aria-hidden="true"
        />
        <span>Published at</span>
        <time dateTime={article.publishedAt}>{formatLongDate(article.publishedAt)}</time>
        {article.updatedAt && (
          <>
            <SlashIcon className="mx-2 h-3 w-3" />
            <span>Updated at</span>
            <time dateTime={article.updatedAt}>{formatLongDate(article.updatedAt)}</time>
          </>
        )}
      </div>
      <ProseArticle>
        <DocumentRenderer
          document={document}
          renderers={renderers}
        />
      </ProseArticle>
      <div
        className={cn(
          "container pointer-events-none fixed inset-x-0 bottom-4 z-10",
          "flex justify-end",
          //
        )}
      >
        <TopScroller />
      </div>
    </ContainerSection>
  );
}
