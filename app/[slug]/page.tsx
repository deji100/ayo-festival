import type { Metadata } from "next";
import { FestivalContentPage } from "@/components/festival-site";
import { getPage, pages } from "@/lib/site-data";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    return {
      title: "Page not found | The Grand Ayo Festival"
    };
  }

  return {
    title: `${page.pageTitle} | The Grand Ayo Festival`,
    description: page.intro
  };
}

export default async function SlugPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <FestivalContentPage slug={slug} />;
}
