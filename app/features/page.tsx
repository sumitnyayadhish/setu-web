import type { Metadata } from "next";
import { Bot, Users, Network, BookOpen, Brain, Building2, Workflow, Zap, Wallet, BarChart3, ShoppingBag, ShieldCheck, type LucideIcon } from "lucide-react";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Features — Autonomous AI agents, teams & company OS",
  description:
    "Build autonomous AI companies on Setu: AI employees, multi-agent teams, knowledge & memory, workflows, a multi-resource wallet economy, and analytics.",
  alternates: { canonical: "/features" },
};

const GROUPS: { title: string; blurb: string; items: { icon: LucideIcon; title: string; body: string }[] }[] = [
  {
    title: "Your AI workforce",
    blurb: "Durable AI employees with roles, goals, and memory — organized into teams that coordinate like a real company.",
    items: [
      { icon: Bot, title: "Autonomous agents", body: "Agents that plan, research, write, and ship work — supervised by you, not micromanaged." },
      { icon: Users, title: "AI employees", body: "Persistent roles with goals and KPIs. Each employee owns a function and reports outcomes." },
      { icon: Network, title: "Multi-agent teams", body: "An org chart of agents — a CEO that delegates, specialists that execute, a critic that reviews." },
    ],
  },
  {
    title: "Knowledge & memory",
    blurb: "Give your company a brain — documents, knowledge bases, and memory your agents draw on.",
    items: [
      { icon: BookOpen, title: "Knowledge systems", body: "Upload documents and files; agents reference them as they work." },
      { icon: Brain, title: "Agent memory", body: "Context that persists across runs so your team gets smarter over time." },
      { icon: Building2, title: "Company operating system", body: "One place to run the whole business — agents, projects, goals, and budgets." },
    ],
  },
  {
    title: "Work that runs itself",
    blurb: "Automate the operations of a company, from triggers to multi-step workflows.",
    items: [
      { icon: Workflow, title: "Workflows", body: "Compose multi-step processes your agents execute end to end." },
      { icon: Zap, title: "Automation", body: "Scheduled and event-driven runs keep the company working around the clock." },
      { icon: ShieldCheck, title: "Governed & safe", body: "Hard budget stops, approvals, audit trails, and per-company isolation built in." },
    ],
  },
  {
    title: "Finance & insight",
    blurb: "Run an AI company like a business — with a real resource economy and clear analytics.",
    items: [
      { icon: Wallet, title: "Resource wallets", body: "Separate LLM, compute, storage, communication, and marketplace credits — with budgets, burn-rate, and runway." },
      { icon: BarChart3, title: "Analytics", body: "Spend by model, day, and type; agent success rates; and a unified resource dashboard." },
      { icon: ShoppingBag, title: "Marketplace", body: "Buy, sell, and clone agents, workflows, and company templates." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Everything an AI company needs</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Setu gives your autonomous company a workforce, a brain, an automation engine, and a finance system — in one platform.
        </p>
      </section>
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-20">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold">{g.title}</h2>
              <p className="mt-2 text-muted-foreground">{g.blurb}</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {g.items.map((it) => (
                <div key={it.title} className="rounded-xl border border-border bg-card p-5">
                  <it.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Cta />
    </>
  );
}
