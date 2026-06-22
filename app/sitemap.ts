import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";
import { DOC_ARTICLES } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/features", "/pricing", "/about", "/customers", "/blog", "/docs", "/signup"];
  const now = new Date();
  return [
    ...staticPaths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: "weekly" as const })),
    ...BLOG_POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly" as const })),
    ...DOC_ARTICLES.map((d) => ({ url: `${SITE_URL}/docs/${d.slug}`, lastModified: now, changeFrequency: "monthly" as const })),
  ];
}
