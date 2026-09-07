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
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-[1.6rem] font-semibold">Individual therapy</h2>
          <p className="mb-6 max-w-[54ch] leading-[1.65] text-muted">
            For anxiety, burnout, self-doubt, and the quieter transitions
            that don&apos;t have a name yet. We work through what&apos;s
            keeping you stuck, at a pace that respects where you actually
            are - not where you think you&apos;re supposed to be.
          </p>
          <dl className="grid max-w-[420px] grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.9rem]">
            <dt className="text-muted">Session length</dt>
            <dd>50 minutes</dd>
            <dt className="text-muted">Format</dt>
            <dd>In-person or video</dd>
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
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-[1.6rem] font-semibold">Couples therapy</h2>
          <p className="mb-6 max-w-[54ch] leading-[1.65] text-muted">
            For partners stuck in the same argument, rebuilding trust after a
            betrayal, or wanting a stronger foundation before a big step
            together. Sessions draw on Emotionally Focused Therapy to help
            you see the pattern underneath the fight, not just the fight
            itself.
          </p>
          <dl className="grid max-w-[420px] grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.9rem]">
            <dt className="text-muted">Session length</dt>
            <dd>60&ndash;75 minutes</dd>
            <dt className="text-muted">Format</dt>
            <dd>In-person or video</dd>
            <dt className="text-muted">Approach</dt>
            <dd>Emotionally Focused Therapy</dd>
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
