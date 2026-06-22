import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

/**
 * Default SEO metadata for the whole site. Per-page metadata (in each page's `metadata` export
 * or generateMetadata) overrides title/description/canonical. Next renders this server-side, so
 * crawlers get full HTML + tags natively — no SSR-lite shim needed.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Setu — Build an autonomous AI company",
    template: "%s · Setu",
  },
  description:
    "Setu is the operating system for autonomous AI companies — deploy a team of AI agents that plan, work, and ship, with transparent credits and budgets.",
  applicationName: "Setu",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Setu",
    url: SITE_URL,
    title: "Setu — Build an autonomous AI company",
    description: "Deploy a team of AI agents that plan, work, and ship — supervised by you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setu — Build an autonomous AI company",
    description: "Deploy a team of AI agents that plan, work, and ship — supervised by you.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
