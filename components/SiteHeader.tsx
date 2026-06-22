import Link from "next/link";
import { Sparkles } from "lucide-react";
import { NAV_LINKS, SIGN_IN_URL, GET_STARTED_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Setu home" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" /> Setu
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm md:flex">
          {NAV_LINKS.map((n) => (
            <Link key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={SIGN_IN_URL} className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">
            Sign in
          </a>
          <Link
            href={GET_STARTED_URL}
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
