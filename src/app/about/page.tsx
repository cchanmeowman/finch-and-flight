import type { Metadata } from "next";
import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { btnSoft } from "@/lib/styles";
import aboutPortrait from "@/assets/images/about-portrait.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet your therapist at Finch & Flight Psychotherapy: training, approach, and how sessions work.",
};

export default function About() {
  return (
    <ViewTransition>
      <section className="grid grid-cols-1 items-center gap-11 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:px-[6%]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={aboutPortrait}
            alt="Christian at Mount Rainier"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
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
            Sessions are collaborative, not clinical. You set the
            pace, and we work at the speed that actually feels honest.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 items-start gap-11 border-t border-line px-6 py-16 md:grid-cols-[1fr_1.6fr] md:px-[6%]">
        <div className="md:sticky md:top-24">
          <div data-reveal>
            <h2 className="mb-3 text-[1.3rem] font-semibold">Training &amp; credentials</h2>
            <div className="flex flex-col gap-2 text-[0.95rem] leading-[1.6] text-muted">
              <p>
                <strong>
                  · Licensed Marriage and Family Therapist (LMFT) in
                  Washington State
                </strong>
              </p>
              <p>
                <strong>
                  · Training in Cognitive Processing Therapy (CPT)
                </strong>
              </p>
              <p>
                <strong>
                  · Modalities: Acceptance and Commitment Therapy (ACT),
                  Cognitive Behavioral Therapy (CBT), Emotionally Focused
                  Therapy, Gottman Couples Therapy, Family Systems Therapy
                </strong>
              </p>
              <p>
                <strong>
                  · License Number:{" "}
                  <a href="http://mft.lf/" className="underline">
                    MFT.LF
                  </a>
                  .70154532 · NPI Number: 1558192740
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}>
          <h2 className="mb-3 text-[1.3rem] font-semibold">How I work</h2>
          <div className="flex max-w-[62ch] flex-col gap-5 text-[0.95rem] leading-[1.6] text-muted">
            <p>
              <strong>
                Hello! My name is Christian and I am a couples and family
                therapist.
              </strong>
            </p>
            <p>
              <strong>
                I work with individuals and couples across a range of life
                stages. I also support clients navigating emotional distress,
                relational challenges, and personal growth. As a
                systemically-trained therapist, I see our work through the
                lens of various identities that can influence one’s
                experience, including culture, relationship/family of origin
                dynamics, religion, and queer identities. I look to create a
                therapeutic space grounded in warmth, humility, humor, and
                curiosity. I believe that meaningful change is rooted in the
                strength of the therapeutic relationship and works to build
                trust so clients feel safe exploring both challenges and
                growth.
              </strong>
            </p>
            <p>
              <strong>
                With clients, I take a collaborative approach, tailoring
                therapy to each client’s needs. I use a mix of systemic and
                relational therapy approaches (Gottman Couples Therapy,
                Emotionally-focused Therapy), in addition to Cognitive
                Behavioral Therapy (CBT), Acceptance and Commitment Therapy
                (ACT), and humanistic therapy in my work.
              </strong>
            </p>
            <p>
              <strong>
                My approach aims to help clients better understand themselves,
                their patterns, and their relationships, while fostering
                deeper connection and emotional awareness. I integrate
                introspective questioning with humor, and seek to create a
                space that feels meaningful and approachable. Clients often
                experience me as engaged, supportive, and authentic – someone
                who gently challenges them while walking alongside them in
                their own unique process of change.
              </strong>
            </p>
            <p>
              <strong>
                To play the role of healer is a privilege that I don’t take
                lightly. My previous clients have included couples, families,
                and individuals, all who ultimately seek me out in search of
                a desire to grow in the way they experience themselves, their
                relationships, and how they view the world. I believe each of
                us deserves the opportunity to experience ourselves and the
                world in a way that is motivated by curiosity and not fear,
                and I hold an optimistic stance to assisting my clients in
                moving more in line to their desired lives they seek to live.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="flex flex-wrap items-center justify-between gap-6 bg-dark px-6 py-14 text-dark-ink md:px-[6%]"
      >
        <h2 className="max-w-[24ch] text-[1.5rem] font-semibold text-balance">
          Curious if this is a good fit? Let&apos;s talk!
        </h2>
        <Link href="/contact" className={btnSoft}>
          Request a free 15-min consult
        </Link>
      </section>
    </ViewTransition>
  );
}
