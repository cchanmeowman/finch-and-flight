import type { Metadata } from "next";
import { ViewTransition } from "react";
import { btnPrimary, linkAccent } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Finch & Flight Psychotherapy to schedule a free 15-minute consultation.",
};

const inputClass =
  "rounded-[3px] border border-line bg-paper px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors duration-200 ease-out focus:border-accent";

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
          Fill out the form below with the basics and I&apos;ll follow up by
          email to schedule a free 15-minute consultation call. Please
          don&apos;t include detailed medical or mental health history here
          - we&apos;ll talk through that on the call.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-11 border-t border-line px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-[6%]">
        {/*
          TODO before launch: wire `action` up to a real static-form
          endpoint (e.g. Formspree, Web3Forms) - this is a static export
          with no backend, so the form won't send anywhere until then.
        */}
        <form
          action="https://formspree.io/f/REPLACE_WITH_REAL_FORM_ID"
          method="POST"
          data-reveal
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[0.85rem] font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[0.85rem] font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-[0.85rem] font-medium">
              Phone <span className="text-muted">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="interest" className="text-[0.85rem] font-medium">
              I&apos;m interested in
            </label>
            <select
              id="interest"
              name="interest"
              className={inputClass}
            >
              <option>Individual therapy</option>
              <option>Couples therapy</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="times" className="text-[0.85rem] font-medium">
              Days/times that generally work for you
            </label>
            <input
              id="times"
              name="times"
              type="text"
              placeholder="e.g. weekday mornings, Tuesday evenings"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="note" className="text-[0.85rem] font-medium">
              Anything else you&apos;d like me to know?{" "}
              <span className="text-muted">(optional)</span>
            </label>
            <textarea
              id="note"
              name="note"
              rows={4}
              className={inputClass}
            />
          </div>
          <button type="submit" className={`mt-2 w-fit ${btnPrimary}`}>
            Send
          </button>
        </form>

        <aside data-reveal style={{ "--reveal-delay": "0.08s" } as React.CSSProperties} className="flex flex-col gap-6">
          <div className="rounded-[4px] border border-line bg-paper-deep p-6">
            <h2 className="mb-2 text-[1.05rem] font-semibold">
              Prefer a different way to reach out?
            </h2>
            <p className="text-[0.9rem] leading-[1.6] text-muted">
              You can also find and message me through my{" "}
              <a href="https://www.psychologytoday.com/" className={linkAccent}>
                Psychology Today profile
              </a>
              , or email directly at{" "}
              <a href="mailto:christian@finchandflight.com" className={linkAccent}>
                christian@finchandflight.com
              </a>
              .
            </p>
          </div>
          <div className="rounded-[4px] border border-line bg-paper-deep p-6">
            <h2 className="mb-2 text-[1.05rem] font-semibold">
              Already a client?
            </h2>
            <p className="text-[0.9rem] leading-[1.6] text-muted">
              Ongoing clients can book and manage sessions directly through
              the SimplePractice client portal - check your welcome
              email for your personal login link.
            </p>
          </div>
        </aside>
      </section>
    </ViewTransition>
  );
}
