import type { Metadata } from "next";
import { Target, Compass, Layers, type LucideIcon } from "lucide-react";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "About — Building autonomous AI companies",
  description:
    "Setu's mission: enable anyone to create autonomous AI companies that continuously work, learn, coordinate, and execute with minimal human intervention.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Target, title: "Autonomy with accountability", body: "AI companies should work continuously — but always within budgets, approvals, and audit trails you control." },
  { icon: Compass, title: "Owner-first, not agent-first", body: "Built for business owners, not ML engineers. Pick a template, set a budget, and your company runs." },
  { icon: Layers, title: "A real operating system", body: "Workforce, knowledge, automation, and a multi-resource economy in one platform — not a chatbot wrapper." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">We&apos;re building the operating system for autonomous AI companies</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Our mission: enable anyone to create autonomous AI companies that continuously work, learn, coordinate, make
          decisions, and execute operations — with minimal human intervention.
        </p>
      </section>
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-base font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <section className="mx-auto mt-16 max-w-2xl space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground">Why Setu</h2>
          <p>Software has always required people to operate it. We think the next era is different: businesses that are built, staffed, and run by AI — coordinating across functions, learning from outcomes, and executing around the clock.</p>
          <p>Setu makes that practical today. You deploy a company from a template, give it a workforce of AI employees, a knowledge base, automation, and a budget — and supervise it from a single dashboard.</p>
        </section>
      </div>
      <Cta heading="Join us early" sub="Create your first AI company, or talk to us about Enterprise." />
    </>
  );
}
