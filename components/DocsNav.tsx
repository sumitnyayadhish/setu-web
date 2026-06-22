import Link from "next/link";
import { DOC_ARTICLES, DOC_CATEGORIES } from "@/lib/docs";

export function DocsNav({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav aria-label="Docs" className="space-y-5 text-sm">
      {DOC_CATEGORIES.map((cat) => (
        <div key={cat}>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{cat}</p>
          <ul className="mt-2 space-y-1">
            {DOC_ARTICLES.filter((d) => d.category === cat)
              .sort((a, b) => a.order - b.order)
              .map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/docs/${d.slug}`}
                    className={`block rounded px-2 py-1 ${d.slug === activeSlug ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
