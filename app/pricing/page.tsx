import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Pricing — Plans for autonomous AI companies",
  description:
    "Simple prepaid pricing for Setu: Starter, Pro, Team, and Enterprise. Every plan includes LLM + compute credits, separate resource wallets, and no surprise overage.",
  alternates: { canonical: "/pricing" },
};

const PLANS = [
  { id: "starter", name: "Starter", price: "₹999", cadence: "/mo", tagline: "For solo builders trying their first AI team.", points: ["Hosted light agents", "₹500 LLM + ₹200 compute credits / mo", "3 concurrent agents", "Telegram chat", "1 seat"] },
  { id: "pro", name: "Pro", price: "₹2,499", cadence: "/mo", tagline: "A dedicated VM so coding agents build and ship.", featured: true, points: ["Everything in Starter", "Dedicated VPS for coding agents", "₹2,000 LLM + ₹1,000 compute / mo", "10 concurrent agents", "3 seats"] },
  { id: "team", name: "Team", price: "₹7,999", cadence: "/mo", tagline: "Run multiple AI departments with your team.", points: ["Everything in Pro", "₹6,000 LLM + ₹3,000 compute / mo", "25 concurrent agents", "10 seats", "Priority support"] },
  { id: "enterprise", name: "Enterprise", price: "Custom", cadence: "", tagline: "Scaled limits, SSO, and white-glove onboarding.", points: ["Custom credit allocations", "100+ concurrent agents", "SSO & custom limits", "Dedicated support", "Onboarding help"] },
];

const FAQ = [
  { q: "How do credits work?", a: "Every plan includes monthly LLM + compute credits. You can also buy standalone credit packs anytime — purchased credits don't expire. Spend is tracked per resource wallet with budgets and hard stops." },
  { q: "What are the different wallets?", a: "Setu separates LLM, compute, storage, communication, and marketplace credits so AI spend never eats your automation budget — each has its own balance, burn rate, and runway." },
  { q: "Can I change plans or cancel?", a: "Yes — plans are per company and you control spend with monthly budgets and hard stops. Upgrade, downgrade, or cancel anytime." },
  { q: "Do you charge overage?", a: "No surprise overage. When a wallet hits zero, agents pause until you top up. You're always in control." },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-20 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Pricing that scales with your AI company</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Prepaid credits, separate resource wallets, and hard budget stops. Pay for what your agents use — no surprise overage.
        </p>
      </section>
      <div className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((p) => (
          <div key={p.id} className={`flex flex-col rounded-2xl border p-6 ${p.featured ? "border-primary shadow-lg" : "border-border"} bg-card`}>
            {p.featured && <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Most popular</span>}
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <div className="mt-2"><span className="text-3xl font-bold">{p.price}</span><span className="text-sm text-muted-foreground">{p.cadence}</span></div>
            <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> <span>{pt}</span></li>
              ))}
            </ul>
            <Link
              href={p.id === "enterprise" ? "/about" : `/signup?plan=${p.id}`}
              className={`mt-6 rounded-md px-4 py-2 text-center text-sm font-medium ${p.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-accent"}`}
            >
              {p.id === "enterprise" ? "Contact us" : "Get started"}
            </Link>
          </div>
        ))}
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-2xl font-bold">Pricing FAQ</h2>
        <dl className="mt-6 divide-y divide-border">
          {FAQ.map((f) => (
            <div key={f.q} className="py-4">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Cta heading="Start free, scale when you're ready" sub="No card required to create your first AI company." />
    </>
  );
}
