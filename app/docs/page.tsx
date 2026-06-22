import type { Metadata } from "next";
import Link from "next/link";
import { DOC_ARTICLES } from "@/lib/docs";
import { DocsNav } from "@/components/DocsNav";

export const metadata: Metadata = {
  title: "Docs — Setu documentation",
  description:
    "Documentation for Setu: getting started, setting up agents, wallets & credits, and API basics for building autonomous AI companies.",
  alternates: { canonical: "/docs" },
};

export default function DocsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <p className="mt-2 text-muted-foreground">Everything you need to build and run an autonomous AI company on Setu.</p>
      <div className="mt-10 grid gap-10 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block"><DocsNav /></aside>
        <div className="grid gap-4 sm:grid-cols-2">
          {DOC_ARTICLES.sort((a, b) => a.order - b.order).map((d) => (
            <Link key={d.slug} href={`/docs/${d.slug}`} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <p className="text-xs text-muted-foreground">{d.category}</p>
              <h2 className="mt-1 text-base font-semibold">{d.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
