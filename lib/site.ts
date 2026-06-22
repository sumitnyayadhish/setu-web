/** Central config for the Setu marketing site. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://setu.company";
/** Where the main agent platform (the Paperclip-type app) lives — subscribers go here. */
export const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || "https://app.setu.company";

/** Deep links into the main platform's auth/checkout flows. */
export const SIGN_IN_URL = `${APP_ORIGIN}/auth`;
export const GET_STARTED_URL = "/signup";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/docs", label: "Docs" },
      { href: "/signup", label: "Get started" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/customers", label: "Customers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: `${APP_ORIGIN}/legal/terms`, label: "Terms" },
      { href: `${APP_ORIGIN}/legal/privacy`, label: "Privacy" },
      { href: `${APP_ORIGIN}/legal/refund`, label: "Refund policy" },
    ],
  },
];
