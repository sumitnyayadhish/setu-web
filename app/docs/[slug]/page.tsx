import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOC_ARTICLES, getDoc } from "@/lib/docs";
import { DocsNav } from "@/components/DocsNav";
import { ContentBlocks } from "@/components/ContentBlocks";

export function generateStaticParams() {
  return DOC_ARTICLES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return { title: "Doc not found" };
  return {
    title: `${doc.title} — Docs`,
    description: doc.description,
    alternates: { canonical: `/docs/${doc.slug}` },
  };
}

export default async function DocArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block"><DocsNav activeSlug={doc.slug} /></aside>
        <article className="max-w-2xl">
          <Link href="/docs" className="text-sm text-primary">← Docs</Link>
          <p className="mt-4 text-xs text-muted-foreground">{doc.category}</p>
          <h1 className="mt-1 text-3xl font-bold">{doc.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{doc.description}</p>
          <div className="mt-6"><ContentBlocks blocks={doc.body} /></div>
        </article>
      </div>
    </div>
  );
}
