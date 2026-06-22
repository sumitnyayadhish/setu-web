import type { Metadata } from "next";
import { Suspense } from "react";
import { SignupForm } from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Get started — Create your AI company",
  description: "Sign up for Setu and deploy your first autonomous AI company. Pick a plan and complete checkout securely.",
  alternates: { canonical: "/signup" },
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-6 py-20 text-center text-sm text-muted-foreground">Loading…</div>}>
      <SignupForm />
    </Suspense>
  );
}
