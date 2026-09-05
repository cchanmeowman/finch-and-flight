import { ViewTransition } from "react";
import Link from "next/link";
import { btnPrimary, btnSoft } from "@/lib/styles";

export default function Home() {
  return (
    <ViewTransition>
      <section className="grid grid-cols-1 items-stretch md:grid-cols-[1.15fr_0.85fr]">
        <div data-reveal className="flex flex-col justify-center px-6 py-14 md:px-[6%] md:py-16">
          <p className="mb-4 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-accent">
            Individual &amp; couples therapy &middot; Seattle &amp; online in WA
          </p>
          <h1 className="mb-5 max-w-[13ch] text-[2.6rem] font-semibold leading-[1.1] tracking-[-0.01em] text-balance">
            Room to slow down and be honest with yourself.
          </h1>
          <p className="mb-7 max-w-[44ch] text-[1.02rem] leading-[1.65] text-muted">
            Finch &amp; Flight is a therapy practice for people navigating anxiety,
            relationship strain, and life transitions &mdash; a steady, unhurried
            space to work through what&apos;s actually going on.
          </p>
          <Link href="/contact" className={btnPrimary}>
            Request a free 15-min consult
          </Link>
        </div>
        <div
          data-reveal
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
          className="placeholder-box flex min-h-[280px] items-center justify-center text-[0.72rem] uppercase tracking-[0.06em] md:min-h-full"
        >
          Portrait placeholder
        </div>
      </section>

      <section className="grid grid-cols-1 border-y border-line md:grid-cols-2">
        <div data-reveal className="border-line px-6 py-12 md:border-r md:px-[6%] md:py-14">
          <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
            Individual therapy
          </p>
          <h3 className="mb-2.5 text-[1.2rem] font-semibold">
            For the quieter transitions
          </h3>
          <p className="text-[0.94rem] leading-[1.6] text-muted">
            Anxiety, burnout, self-doubt, and change that doesn&apos;t have a
            name yet. Weekly, 50-minute sessions, in-person or by video.
          </p>
        </div>
        <div
          data-reveal
          style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          className="border-t border-line px-6 py-12 md:border-t-0 md:px-[6%] md:py-14"
        >
          <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
            Couples therapy
          </p>
          <h3 className="mb-2.5 text-[1.2rem] font-semibold">
            For partners rebuilding trust
          </h3>
          <p className="text-[0.94rem] leading-[1.6] text-muted">
            For couples stuck in the same argument, working through betrayal,
            or wanting a stronger foundation before a big step. 60&ndash;75
            minute sessions.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 items-center gap-11 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:px-[6%]">
        <div
          data-reveal
          className="placeholder-box aspect-[4/5] flex items-center justify-center text-[0.72rem] uppercase tracking-[0.06em]"
        >
          Portrait placeholder
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
          <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
            About your therapist
          </p>
          <h2 className="mb-4 max-w-[16ch] text-[1.7rem] font-semibold text-balance">
            Grounded in relational and somatic work.
          </h2>
          <p className="max-w-[52ch] leading-[1.65] text-muted">
            Trained in Emotionally Focused Therapy and mindfulness-based
            approaches, with over a decade supporting individuals and couples
            through anxiety, conflict, and change. Sessions are collaborative,
            not clinical &mdash; you set the pace.
          </p>
        </div>
      </section>

      <section data-reveal className="bg-paper-deep px-6 py-16 md:px-[6%]">
        <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
          What clients say
        </p>
        <p className="mb-3.5 max-w-[34ch] text-[1.55rem] font-medium leading-[1.42]">
          &ldquo;I finally felt like someone was listening without trying to
          fix me immediately. That made all the difference.&rdquo;
        </p>
        <p className="mb-10 text-[0.82rem] text-accent">
          &mdash; Individual therapy client
        </p>
        <div className="grid grid-cols-1 gap-9 border-t border-[#d6d2be] pt-7 md:grid-cols-2">
          <div>
            <p className="mb-2 text-[0.92rem] leading-[1.55] text-muted">
              &ldquo;We came in barely speaking to each other. Six months
              later we actually look forward to date night again.&rdquo;
            </p>
            <p className="text-[0.78rem] text-[#6b7062]">
              &mdash; Couples therapy client
            </p>
          </div>
          <div>
            <p className="mb-2 text-[0.92rem] leading-[1.55] text-muted">
              &ldquo;Practical, warm, and never judgmental. I recommend Finch
              &amp; Flight to anyone on the fence about starting
              therapy.&rdquo;
            </p>
            <p className="text-[0.78rem] text-[#6b7062]">
              &mdash; Individual therapy client
            </p>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="flex flex-wrap items-center justify-between gap-6 bg-dark px-6 py-14 text-dark-ink md:px-[6%]"
      >
        <h2 className="max-w-[24ch] text-[1.5rem] font-semibold text-balance">
          Ready to start? The first step is a free conversation.
        </h2>
        <Link href="/contact" className={btnSoft}>
          Request a free 15-min consult
        </Link>
      </section>
    </ViewTransition>
  );
}
