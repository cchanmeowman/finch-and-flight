import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { btnSoft, linkAccent } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Fees & Insurance",
  description:
    "Session rates, insurance and superbill policy, and Good Faith Estimate information for Finch & Flight Psychotherapy.",
};

export default function Fees() {
  return (
    <ViewTransition>
      <section data-reveal className="px-6 py-16 md:px-[6%]">
        <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
          Fees &amp; insurance
        </p>
        <h1 className="max-w-[22ch] text-[2.1rem] font-semibold text-balance">
          Straightforward pricing, no surprises.
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-11 border-t border-line px-6 py-16 md:grid-cols-2 md:px-[6%]">
        <div data-reveal>
          <h2 className="mb-3 text-[1.2rem] font-semibold">Session rates</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-[0.95rem]">
            <dt className="text-muted">Individual session (50 min)</dt>
            <dd>$[XXX]</dd>
            <dt className="text-muted">Couples session (60&ndash;75 min)</dt>
            <dd>$[XXX]</dd>
            <dt className="text-muted">Free consultation (15 min)</dt>
            <dd>No charge</dd>
          </dl>
          <p className="mt-4 text-[0.85rem] text-muted">
            Rates placeholder - replace with actual pricing before
            launch.
          </p>
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}>
          <h2 className="mb-3 text-[1.2rem] font-semibold">Insurance</h2>
          <p className="text-[0.95rem] leading-[1.6] text-muted">
            I&apos;m an out-of-network provider, which means I don&apos;t
            bill insurance directly. Many PPO plans reimburse a portion of
            out-of-network mental health costs. Upon request, I can provide a
            monthly superbill - an itemized receipt you can submit to
            your insurance company for possible reimbursement. I&apos;d
            recommend calling your insurer beforehand to ask about your
            out-of-network mental health benefits.
          </p>
        </div>
      </section>

      <section data-reveal className="border-t border-line bg-paper-deep px-6 py-16 md:px-[6%]">
        <h2 className="mb-3 text-[1.2rem] font-semibold">Good Faith Estimate</h2>
        <p className="max-w-[70ch] text-[0.95rem] leading-[1.6] text-muted">
          Under the No Surprises Act, health care providers are required to
          give patients who don&apos;t have insurance or who are not using
          insurance an estimate of the expected charges for services. If you
          are not using insurance, you have the right to receive a Good
          Faith Estimate of what your care may cost, in writing, before your
          first appointment and any time your services change. If you
          receive a bill that is at least $400 more than your Good Faith
          Estimate, you have the right to dispute it. For questions or more
          information, visit{" "}
          <a href="https://www.cms.gov/nosurprises" className={linkAccent}>
            cms.gov/nosurprises
          </a>
          .
        </p>
      </section>

      <section
        data-reveal
        className="flex flex-wrap items-center justify-between gap-6 bg-dark px-6 py-14 text-dark-ink md:px-[6%]"
      >
        <h2 className="max-w-[24ch] text-[1.5rem] font-semibold text-balance">
          Have a question about cost before reaching out?
        </h2>
        <Link href="/faq" className={btnSoft}>
          Read the FAQ
        </Link>
      </section>
    </ViewTransition>
  );
}
