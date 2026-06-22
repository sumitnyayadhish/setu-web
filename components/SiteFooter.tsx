import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" aria-label="Setu home" className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" /> Setu
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The operating system for autonomous AI companies — build, staff, and run a business that works 24/7.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold">{col.title}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-muted-foreground hover:text-foreground">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">© 2026 Setu.Company · setu.company</p>
      </div>
    </footer>
  );
}
