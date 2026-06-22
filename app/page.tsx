import Link from "next/link";
import { Bot, Layers, Wallet, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { Cta } from "@/components/Cta";
import { GET_STARTED_URL } from "@/lib/site";

const FEATURES = [
  { icon: Bot, title: "Autonomous AI teams", body: "Spin up a full company of AI agents that plan, write, research, and ship — supervised by you." },
  { icon: Layers, title: "Every major model", body: "Claude, GPT, Gemini, DeepSeek, Llama, Qwen, Grok and more via one gateway. Switch anytime." },
  { icon: Wallet, title: "Transparent credits", body: "Prepaid resource wallets for LLM, compute, storage and more. Pay only for what you use." },
  { icon: Zap, title: "Chat from anywhere", body: "Direct your team from Telegram. Approvals and updates come straight to you." },
  { icon: ShieldCheck, title: "Governed & safe", body: "Hard budget stops, approvals, audit trails, and per-company isolation built in." },
  { icon: Sparkles, title: "Start in minutes", body: "Pick a ready-made company template and your team is staffed and working immediately." },
];

const MODELS = ["Claude", "GPT-4o / 5", "Gemini", "DeepSeek", "Llama", "Qwen", "Mistral", "Grok", "Kimi"];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-20 text-center sm:pt-28">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> The operating system for autonomous AI companies
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Build a company that <span className="text-primary">runs itself</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Setu lets you deploy a team of AI agents — employees that plan, execute, and report — to run real business
          operations around the clock. You set the direction and the budget; they do the work.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href={GET_STARTED_URL} className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Get started free
          </Link>
          <Link href="/features" className="rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent">
            See what it does
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-5">
              <f.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-base font-semibold">{f.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Every major model, one gateway</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {MODELS.map((m) => (
            <span key={m} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">{m}</span>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
