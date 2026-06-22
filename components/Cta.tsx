import Link from "next/link";
import { GET_STARTED_URL } from "@/lib/site";

export function Cta({
  heading = "Build your first AI company",
  sub = "Pick a template and your team is staffed in minutes.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
        <p className="mt-2 text-muted-foreground">{sub}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href={GET_STARTED_URL}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get started free
          </Link>
          <Link href="/pricing" className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
