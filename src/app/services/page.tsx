import type { Metadata } from "next";
import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { btnSoft } from "@/lib/styles";
import individualTherapyPhoto from "@/assets/images/individual-therapy.jpg";
import couplesTherapyPhoto from "@/assets/images/couples-therapy.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual therapy and couples therapy in Seattle and online across Washington, with Emotionally Focused Therapy and mindfulness-based approaches.",
};

export default function Services() {
  return (
    <ViewTransition>
      <section data-reveal className="px-6 py-16 md:px-[6%]">
        <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
          Services
        </p>
        <h1 className="max-w-[20ch] text-[2.1rem] font-semibold text-balance">
          Ways we can work together.
        </h1>
      </section>

      <section
        id="individual-therapy"
        data-reveal
        className="grid scroll-mt-20 grid-cols-1 gap-11 border-t border-line px-6 py-16 md:grid-cols-[1fr_1.2fr] md:px-[6%]"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={individualTherapyPhoto}
            alt="Coastal view of Kahana Bay"
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-[1.6rem] font-semibold">Individual therapy</h2>
          <div className="mb-6 max-w-[54ch] flex flex-col gap-4 leading-[1.65] text-muted">
            <p>
              A focus on better understanding the experiences, beliefs, and
              relational patterns that have shaped you. Exploration of
              familiar narratives to make room for a more updated sense of
              who you are now and who you wish to become.
            </p>
            <p>
              Modalities include ACT, CBT, Strategic Therapy, and Humanistic
              Therapy.
            </p>
          </div>
          <dl className="grid max-w-[420px] grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.9rem]">
            <dt className="text-muted">Session length</dt>
            <dd>53 minutes</dd>
            <dt className="text-muted">Format</dt>
            <dd>Virtual</dd>
            <dt className="text-muted">Frequency</dt>
            <dd>Weekly, to start</dd>
          </dl>
        </div>
      </section>

      <section
        id="couples-therapy"
        data-reveal
        className="grid scroll-mt-20 grid-cols-1 gap-11 border-t border-line bg-paper-deep px-6 py-16 md:grid-cols-[1fr_1.2fr] md:px-[6%]"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={couplesTherapyPhoto}
            alt="Haystack Rock at sunset"
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-[1.6rem] font-semibold">Couples therapy</h2>
          <div className="mb-6 max-w-[54ch] flex flex-col gap-4 leading-[1.65] text-muted">
            <p>
              <strong>
                For partners stuck in the same argument, rebuilding trust
                after a betrayal, or wanting a stronger foundation before a
                big step together. Sessions draw on Emotionally Focused
                Therapy to help you see the pattern underneath the fight, not
                just the fight itself.
              </strong>
            </p>
            <p>
              <strong>
                Modalities include Emotionally focused therapy and Gottman
                Couples Therapy.
              </strong>
            </p>
          </div>
          <dl className="grid max-w-[420px] grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.9rem]">
            <dt className="text-muted">Session length</dt>
            <dd>53 minutes</dd>
            <dt className="text-muted">Format</dt>
            <dd>Video</dd>
            <dt className="text-muted">Frequency</dt>
            <dd>Weekly, to start</dd>
          </dl>
        </div>
      </section>

      <section
        data-reveal
        className="flex flex-wrap items-center justify-between gap-6 bg-dark px-6 py-14 text-dark-ink md:px-[6%]"
      >
        <h2 className="max-w-[24ch] text-[1.5rem] font-semibold text-balance">
          Not sure which is the right fit? Let&apos;s figure it out together.
        </h2>
        <Link href="/contact" className={btnSoft}>
          Request a free 15-min consult
        </Link>
      </section>
    </ViewTransition>
  );
}
