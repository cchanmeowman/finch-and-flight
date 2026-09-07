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
            <ul className="flex flex-col gap-2 text-[0.95rem] leading-[1.6] text-muted">
              <li>Licensed Marriage and Family Therapist (LMFT), Washington State</li>
              <li>Certified in Emotionally Focused Therapy (EFT)</li>
              <li>Training in mindfulness-based and somatic approaches</li>
              <li>10+ years supporting individuals and couples</li>
            </ul>
          </div>
        </div>
        <div data-reveal style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}>
          <h2 className="mb-3 text-[1.3rem] font-semibold">How I work</h2>
          <div className="flex max-w-[62ch] flex-col gap-5 text-[0.95rem] leading-[1.6] text-muted">
            <p>
              My name is Christian, and I am a licensed marriage and family
              therapist serving clients throughout Washington state.
            </p>
            <p>
              As a fourth-generation Asian American who grew up in Los
              Angeles, my path into therapy was shaped in part by witnessing
              the mental health challenges within my own community. These
              experiences inspired me to pursue work that makes therapy more
              accessible, culturally responsive, and grounded in an
              understanding of the many factors that shape how we experience
              ourselves and our relationships.
            </p>
            <p>
              I work with individuals and couples navigating anxiety,
              depression, relationship difficulties, life transitions,
              identity, and personal growth. I am particularly passionate
              about working with clients exploring culture, identity, and
              relationships - including those from multicultural and diverse
              backgrounds. With clients, I take an eclectic and collaborative
              approach, tailoring therapy to each client&apos;s needs. I
              primarily draw from Acceptance and Commitment Therapy (ACT),
              Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy
              (EFT), Gottman Method Couples Therapy, Narrative Therapy, and
              Strategic Therapy. My approach aims to help clients better
              understand themselves, their patterns, and their relationships,
              all while fostering a deeper connection and emotional awareness
              with themselves. I integrate introspective questioning with
              humor, both of which create a space that feels meaningful and
              approachable. Clients often experience me as engaged,
              supportive, and authentic, and I see my role in the therapy
              room as someone who can gently challenge clients while walking
              alongside them in their own unique process of change.
            </p>
            <blockquote className="border-l-2 border-accent-soft pl-5">
              <p className="text-[1.3rem] font-medium leading-[1.4] text-ink text-balance">
                &ldquo;I see my role in the therapy room as someone who can
                gently challenge clients while walking alongside them in
                their own unique process of change.&rdquo;
              </p>
            </blockquote>
            <p>
              My approach to therapy has been shaped by previous experience
              in early childhood education, college support programs, crisis
              intervention, and hospital-based settings. In these roles, I
              worked closely with neurodivergent college students, young
              families, and individuals experiencing acute mental health
              crises. These experiences deepened my understanding of the
              varied ways people navigate their stress, development, and
              healing, and reinforced the importance of meeting clients with
              respect for their unique contexts. I began providing therapy
              services in 2023, and continue to draw from these
              interdisciplinary experiences to inform a responsive,
              client-centered approach to care.
            </p>
            <p>
              I graduated with a Master of Arts in Couple and Family Therapy
              from Seattle University, and am currently a licensed marriage
              and family therapist in Washington state (MFT.LF.70154532). My
              NPI number is 1558192740.
            </p>
          </div>
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
