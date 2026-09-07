import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { btnPrimary, btnSoft } from "@/lib/styles";
import homeHero from "@/assets/images/home-hero.jpg";
import therapistPortrait from "@/assets/images/therapist-portrait.jpg";

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
            relationship strain, and life transitions - a steady, unhurried
            space to work through what&apos;s actually going on.
          </p>
          <Link href="/contact" className={btnPrimary}>
            Request a free 15-min consult
          </Link>
        </div>
        <div
          data-reveal
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
          className="flex md:pr-[6%]"
        >
          <div className="relative min-h-[280px] w-full md:min-h-0">
            <Image
              src={homeHero}
              alt="Sunset over the water at the beach"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
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

      <section className="grid grid-cols-1 items-start gap-11 px-6 py-16 md:grid-cols-[1fr_1.6fr] md:px-[6%]">
        <div className="md:sticky md:top-24">
          <div data-reveal className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={therapistPortrait}
              alt="Christian, your therapist"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
          <p className="mb-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
            About your therapist
          </p>
          <h2 className="mb-4 max-w-[20ch] text-[1.7rem] font-semibold text-balance">
            Grounded in relational and systemic work
          </h2>
          <div className="max-w-[58ch] flex flex-col gap-5 leading-[1.65] text-muted">
            <p>
              At its core, Finch &amp; Flight reflects how I understand the
              work of therapy.
            </p>
            <p>
              The finch refers to the 18 species of finches found across the
              Gal&aacute;pagos Islands that helped inspire Charles
              Darwin&apos;s theory of natural selection. While each species
              adapted to the environment in which it lived, the larger
              takeaway is one that I find deeply relevant to therapy - we are
              shaped by the environments we come from, but we are not limited
              to them.
            </p>
            <blockquote className="border-l-2 border-accent-soft pl-5">
              <p className="text-[1.3rem] font-medium leading-[1.4] text-ink text-balance">
                &ldquo;We are shaped by the environments we come from, but we
                are not limited to them.&rdquo;
              </p>
            </blockquote>
            <p>
              As humans, we are influenced by our upbringing, culture, family
              dynamics, communities, and the significant experiences that
              shape our lives (including loss, divorce, immigration, and
              other moments of significant change). Over time, we develop
              ways of understanding ourselves and relating to others that
              help us navigate the worlds around us.
            </p>
            <p>
              Flight represents the possibility of moving beyond those
              original environments. It represents the freedom to explore
              new ways of relating to ourselves, our relationships, and
              ultimately how we view the world. At its core, this is the
              optimism I bring into each therapy session with you: that
              while our pasts matter, they do not have to determine where we
              go next.
            </p>
            <p>
              With change being this constant, it&apos;s no wonder it is so
              often associated with emotions of anxiety, uncertainty, and
              exhaustion. My hope is that together we can begin to relate to
              change differently - not so much as something to fear or
              resist, but as a natural part of being human. We are
              continually evolving, and I hope our work together can offer a
              space to slow down, become curious about that process, and
              intentionally decide what comes next.
            </p>
          </div>
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
          - Individual therapy client
        </p>
        <div className="grid grid-cols-1 gap-9 border-t border-[#d6d2be] pt-7 md:grid-cols-2">
          <div>
            <p className="mb-2 text-[0.92rem] leading-[1.55] text-muted">
              &ldquo;We came in barely speaking to each other. Six months
              later we actually look forward to date night again.&rdquo;
            </p>
            <p className="text-[0.78rem] text-[#6b7062]">
              - Couples therapy client
            </p>
          </div>
          <div>
            <p className="mb-2 text-[0.92rem] leading-[1.55] text-muted">
              &ldquo;Practical, warm, and never judgmental. I recommend Finch
              &amp; Flight to anyone on the fence about starting
              therapy.&rdquo;
            </p>
            <p className="text-[0.78rem] text-[#6b7062]">
              - Individual therapy client
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
