import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_BY_DATE, fmtDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Autonomous AI companies, AI employees & agentic workflows",
  description:
    "Guides and ideas on building autonomous AI companies: AI employees, multi-agent systems, agentic workflows, and AI business automation.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-20 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">The Setu blog</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          How to build and run autonomous AI companies — agents, teams, workflows, and the economics of AI work.
        </p>
      </section>
      <div className="mx-auto max-w-3xl space-y-4 px-6 pb-20">
        {BLOG_BY_DATE.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded bg-muted px-2 py-0.5">{p.cluster}</span>
              <span>{fmtDate(p.date)}</span>
              <span>· {p.readMins} min read</span>
            </div>
            <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-primary">Read more →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
