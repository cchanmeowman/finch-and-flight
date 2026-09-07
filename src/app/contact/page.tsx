import type { Metadata } from "next";
import { ViewTransition } from "react";
import { linkAccent } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Finch & Flight Psychotherapy to schedule a free 15-minute consultation.",
};

export default function Contact() {
  return (
    <ViewTransition>
      <section data-reveal className="px-6 py-16 md:px-[6%]">
        <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
          Contact
        </p>
        <h1 className="max-w-[22ch] text-[2.1rem] font-semibold text-balance">
          Let&apos;s find a time to talk.
        </h1>
        <p className="mt-4 max-w-[60ch] leading-[1.6] text-muted">
          Email me with the basics - what you&apos;re looking for and days/times
          that generally work - and I&apos;ll follow up to schedule a free
          15-minute consultation call. Please don&apos;t include detailed
          medical or mental health history over email - we&apos;ll talk
          through that on the call.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 border-t border-line px-6 py-16 md:px-[6%]">
        <div
          data-reveal
          className="rounded-[4px] border border-line bg-paper-deep p-6"
        >
          <h2 className="mb-2 text-[1.05rem] font-semibold">
            Christian Chan
          </h2>
          <p className="text-[0.9rem] leading-[1.6] text-muted">
            Email me directly at{" "}
            <a href="mailto:christian@finchandflight.com" className={linkAccent}>
              christian@finchandflight.com
            </a>
            .
          </p>
        </div>
        <div
          data-reveal
          style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          className="rounded-[4px] border border-line bg-paper-deep p-6"
        >
          <h2 className="mb-2 text-[1.05rem] font-semibold">
            Already a client?
          </h2>
          <p className="text-[0.9rem] leading-[1.6] text-muted">
            Ongoing clients can book and manage sessions directly through
            the SimplePractice client portal - check your welcome
            email for your personal login link.
          </p>
        </div>
      </section>
    </ViewTransition>
  );
}
