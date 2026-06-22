"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, LoaderCircle } from "lucide-react";
import { APP_ORIGIN } from "@/lib/site";

const PLANS: Record<string, { name: string; price: string }> = {
  starter: { name: "Starter", price: "₹999/mo" },
  pro: { name: "Pro", price: "₹2,499/mo" },
  team: { name: "Team", price: "₹7,999/mo" },
};

export function SignupForm() {
  const params = useSearchParams();
  const planId = (params.get("plan") || "pro").toLowerCase();
  const plan = PLANS[planId] ?? PLANS.pro;

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const valid = /.+@.+\..+/.test(email.trim()) && company.trim().length > 1;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setSubmitting(true);
    // Hand off to the main platform's signup + Cashfree checkout (existing, tested flow), with
    // the plan + details preselected. Native on-Vercel Cashfree checkout is Phase 2 (needs the
    // shared managed database — see BACKLOG).
    const url = new URL(`${APP_ORIGIN}/auth`);
    url.searchParams.set("intent", "subscribe");
    url.searchParams.set("plan", planId);
    url.searchParams.set("email", email.trim());
    url.searchParams.set("company", company.trim());
    window.location.href = url.toString();
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create your AI company</h1>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-3 py-2 text-sm">
          <Check className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>Selected plan: <span className="font-semibold">{plan.name}</span> · {plan.price}</span>
        </div>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="mb-1 block text-xs text-muted-foreground">Work email</label>
            <input id="email" type="email" required autoFocus placeholder="you@company.com"
              className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="company" className="mb-1 block text-xs text-muted-foreground">Company name</label>
            <input id="company" type="text" required placeholder="e.g. Northwind Marketing"
              className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <button type="submit" disabled={!valid || submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50">
            {submitting ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            Continue to secure checkout
          </button>
          <p className="text-center text-xs text-muted-foreground">
            You&apos;ll create your account and complete payment securely. Cancel anytime.
          </p>
        </form>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account? <a href={`${APP_ORIGIN}/auth`} className="text-primary hover:underline">Sign in</a>
      </p>
    </div>
  );
}
