import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { btnSoft } from "@/lib/styles";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet your therapist at Finch & Flight Psychotherapy: training, approach, and how sessions work.",
};

export default function About() {
  return (
    <ViewTransition>
      <section className="grid grid-cols-1 items-center gap-11 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:px-[6%]">
        <div
          data-reveal
          className="placeholder-box aspect-[4/5] flex items-center justify-center text-[0.72rem] uppercase tracking-[0.06em]"
        >
          Portrait placeholder
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
          <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
            About
          </p>
          <h1 className="mb-5 max-w-[16ch] text-[2.1rem] font-semibold text-balance">
            Grounded in relational and somatic work.
          </h1>
          <p className="max-w-[54ch] leading-[1.65] text-muted">
            I&apos;m trained in Emotionally Focused Therapy (EFT) and
            mindfulness-based approaches, with over a decade supporting
            individuals and couples through anxiety, conflict, and change.
            Sessions are collaborative, not clinical - you set the
            pace, and we work at the speed that actually feels honest.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-11 border-t border-line px-6 py-16 md:grid-cols-2 md:px-[6%]">
        <div data-reveal>
          <h2 className="mb-3 text-[1.3rem] font-semibold">Training &amp; credentials</h2>
          <ul className="flex flex-col gap-2 text-[0.95rem] leading-[1.6] text-muted">
            <li>Licensed Marriage and Family Therapist (LMFT), Washington State</li>
            <li>Certified in Emotionally Focused Therapy (EFT)</li>
            <li>Training in mindfulness-based and somatic approaches</li>
            <li>10+ years supporting individuals and couples</li>
          </ul>
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}>
          <h2 className="mb-3 text-[1.3rem] font-semibold">How I work</h2>
          <p className="text-[0.95rem] leading-[1.6] text-muted">
            I don&apos;t believe therapy should feel clinical or performative.
            Early sessions are about understanding what&apos;s actually going
            on and what you want to be different - not filling out a
            checklist. From there, we build a shared language for the
            patterns that keep showing up, whether that&apos;s in your own
            head or between you and a partner.
          </p>
        </div>
      </section>

      <section
        data-reveal
        className="flex flex-wrap items-center justify-between gap-6 bg-dark px-6 py-14 text-dark-ink md:px-[6%]"
      >
        <h2 className="max-w-[24ch] text-[1.5rem] font-semibold text-balance">
          Curious if this is a good fit? Let&apos;s talk it through first.
        </h2>
        <Link href="/contact" className={btnSoft}>
          Request a free 15-min consult
        </Link>
      </section>
    </ViewTransition>
  );
}
