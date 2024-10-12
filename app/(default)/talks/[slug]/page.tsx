import { getTalk } from "@/server/keystatic";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

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

  redirect(talk.url);

  return null;
}
