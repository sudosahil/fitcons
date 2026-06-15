"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { TRANSFORMATIONS } from "@/lib/data";

export function Results() {
  return (
    <section id="results" className="section bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client results"
          title={
            <>
              Real transformations.{" "}
              <span className="serif-italic text-accent">Real results.</span>
            </>
          }
          subtitle="Everyday people who committed to the process and changed their bodies — and their lives — for good."
        />

        <Reveal
          stagger
          className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRANSFORMATIONS.map((t) => (
            <Reveal.Item key={t.name}>
              <article className="group flex h-full flex-col">
                <div className="media relative aspect-[3/4] w-full">
                  <Image
                    src={t.image}
                    alt={`${t.name} transformation`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-surface/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-bone backdrop-blur">
                    {t.tag}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="font-display text-3xl text-bone">{t.result}</p>
                  <p className="text-sm text-mute">in {t.duration}</p>
                  <div className="mt-4 flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-mute">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-medium text-bone">
                    — {t.name}
                  </p>
                </div>
              </article>
            </Reveal.Item>
          ))}
        </Reveal>

        {/* Video reviews */}
        <Reveal className="mt-8 border-t border-line pt-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon name="youtube" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl text-bone">
                  Watch video reviews
                </p>
                <p className="text-sm text-mute">
                  Hear directly from clients on the channel.
                </p>
              </div>
            </div>
            <Link href="/apply" className="link-arrow shrink-0">
              I want these results
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
