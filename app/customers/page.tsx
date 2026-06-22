import type { Metadata } from "next";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Customers — How teams run AI companies on Setu",
  description:
    "See how teams use Setu to run autonomous AI companies — marketing agencies, solar sales, and consulting firms that staff and operate with AI.",
  alternates: { canonical: "/customers" },
};

const STORIES = [
  { company: "Northwind Marketing", industry: "Marketing agency", quote: "Our AI team drafts a full week of content in the time it used to take to brief a freelancer.", result: "5× content output", detail: "Deployed the Marketing Agency template with a strategist, two writers, a social manager, and a critic. The team plans the calendar, drafts on-brand posts, and routes everything through review — the founder just approves." },
  { company: "Solaris Energy", industry: "Solar / home services", quote: "Every inbound lead gets qualified and a savings proposal drafted within minutes, day or night.", result: "24/7 lead response", detail: "Used the Solar Company template — a lead qualifier, a savings estimator, and a proposal writer working from a knowledge base of panel specs and incentives." },
  { company: "Atlas Consulting", industry: "Professional services", quote: "Research and first-draft proposals that used to eat a day now land before the kickoff call.", result: "Proposals in hours", detail: "The Consulting template's research analyst gathers market context while the proposal writer assembles the deck and a QA reviewer checks rigor — all within a monthly budget the principal controls." },
];

export default function CustomersPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Companies that run on Setu</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Teams across industries deploy AI companies that work continuously — and stay in control of every rupee.</p>
        <p className="mt-2 text-xs text-muted-foreground">Illustrative examples of common use cases.</p>
      </section>
      <div className="mx-auto max-w-5xl space-y-6 px-6 pb-20">
        {STORIES.map((s) => (
          <article key={s.company} className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div><h2 className="text-xl font-semibold">{s.company}</h2><p className="text-sm text-muted-foreground">{s.industry}</p></div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{s.result}</span>
            </div>
            <blockquote className="mt-4 border-l-2 border-primary pl-4 text-lg italic">{s.quote}</blockquote>
            <p className="mt-4 text-muted-foreground">{s.detail}</p>
          </article>
        ))}
      </div>
      <Cta heading="Build your own" sub="Deploy an AI company from a template and see what it can do." />
    </>
  );
}
