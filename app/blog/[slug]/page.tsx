import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost, fmtDate } from "@/lib/blog";
import { ContentBlocks } from "@/components/ContentBlocks";
import { Cta } from "@/components/Cta";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, url: `${SITE_URL}/blog/${post.slug}` },
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (post.related ?? []).map(getPost).filter((p): p is NonNullable<typeof p> => !!p);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { "@type": "Organization", name: "Setu" },
        publisher: { "@type": "Organization", name: "Setu" },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        keywords: post.tags.join(", "),
      },
      ...(post.faq?.length
        ? [{
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-2xl px-6 pb-16 pt-16">
        <Link href="/blog" className="text-sm text-primary">← Blog</Link>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded bg-muted px-2 py-0.5">{post.cluster}</span>
          <span>{fmtDate(post.date)}</span>
          <span>· {post.readMins} min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
        <div className="mt-6"><ContentBlocks blocks={post.body} /></div>

        {post.faq?.length ? (
          <section className="mt-12">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <dl className="mt-4 divide-y divide-border">
              {post.faq.map((f) => (
                <div key={f.q} className="py-4">
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {related.length > 0 && (
          <section className="mt-12 border-t border-border pt-6">
            <h2 className="text-sm font-semibold text-muted-foreground">Keep reading</h2>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}><Link href={`/blog/${r.slug}`} className="text-primary hover:underline">{r.title}</Link></li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <Cta />
    </>
  );
}
