import { ContainerSection } from "@/components/container-section";
import { formatLongDate } from "@/utils/intl";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeftIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { getTalk } from "@/server/keystatic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cn } from "@/utils/ui";

interface TalkPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: TalkPageProps): Promise<Metadata> {
  const talk = await getTalk(params.slug).catch(() => notFound());
  return {
    title: talk.title,
    description: talk.description,
  };
}

export default async function TalkPage({ params }: TalkPageProps) {
  const talk = await getTalk(params.slug).catch(() => notFound());

  return (
    <ContainerSection className="relative space-y-4">
      {/* Title and Back Button */}
      <div className="relative">
        <h1 className="max-w-screen-sm text-4xl font-bold">{talk.title}</h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/talks" // Link back to talks list
              className={cn(
                "absolute inset-y-1 -left-8 max-lg:hidden",
                "z-10 h-8 w-8 rounded-full",
                "flex items-center justify-center",
                "hover:text-primary-600 dark:hover:text-primary-500"
              )}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={0}>
            Back to talks
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Description */}
      <p className="max-w-screen-sm space-y-4 text-zinc-700 dark:text-zinc-300">
        {talk.description}
      </p>

      {/* Published Date */}
      <div className="flex items-center gap-x-2 text-sm text-zinc-700 dark:text-zinc-300">
        <CalendarIcon className="h-3 w-3" />
        <span>Published at</span>
        <time dateTime={talk.publishedAt}>{formatLongDate(talk.publishedAt)}</time>
      </div>

      {/* Embed Slide */}
      <div className="relative w-full pb-[56.25%] h-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          dangerouslySetInnerHTML={{ __html: talk.embedCode }}
        />
      </div>
    </ContainerSection>
  );
}
