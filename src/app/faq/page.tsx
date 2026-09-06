import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { btnSoft } from "@/lib/styles";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about starting therapy at Finch & Flight Psychotherapy.",
};

const faqs = [
  {
    q: "How do I get started?",
    a: "Reach out through the contact form or send an email. We'll schedule a free 15-minute consultation call to talk through what's bringing you to therapy and see if it's a good fit before booking a first full session.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. Video sessions are available for anyone located in Washington State, alongside in-person sessions in Seattle.",
  },
  {
    q: "Do you take insurance?",
    a: "I'm an out-of-network provider, so I don't bill insurance directly, but I can provide a superbill for you to submit for possible reimbursement. See the Fees & Insurance page for details.",
  },
  {
    q: "How long does therapy typically take?",
    a: "It depends entirely on what you're working through. Some people come for a few months around a specific transition; others work together for a year or more. We'll check in regularly on how it's going and whether the pace still makes sense.",
  },
  {
    q: "What's the difference between individual and couples therapy here?",
    a: "Individual therapy focuses on your own patterns, history, and goals. Couples therapy focuses on the relationship itself - the recurring dynamic between two people - using Emotionally Focused Therapy to work through it together.",
  },
];

export default function FAQ() {
  return (
    <ViewTransition>
      <section data-reveal className="px-6 py-16 md:px-[6%]">
        <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
          FAQ
        </p>
        <h1 className="max-w-[20ch] text-[2.1rem] font-semibold text-balance">
          Questions people usually ask first.
        </h1>
      </section>

      {/*
        One reveal for the whole list, not one per row - staggering each
        accordion item in individually is exactly the over-choreographed
        pattern that reads as clunky.
      */}
      <section data-reveal className="border-t border-line px-6 py-4 md:px-[6%]">
        {faqs.map((item) => (
          <details key={item.q} className="group border-b border-line py-5">
            <summary className="cursor-pointer list-none text-[1.02rem] font-medium marker:content-none transition-colors duration-200 ease-out hover:text-accent">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="shrink-0 text-accent transition-transform duration-300 ease-out group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-[1.65] text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </section>

      <section
        data-reveal
        className="flex flex-wrap items-center justify-between gap-6 bg-dark px-6 py-14 text-dark-ink md:px-[6%]"
      >
        <h2 className="max-w-[24ch] text-[1.5rem] font-semibold text-balance">
          Still have a question? Just ask.
        </h2>
        <Link href="/contact" className={btnSoft}>
          Get in touch
        </Link>
      </section>
    </ViewTransition>
  );
}
