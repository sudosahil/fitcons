"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { TRANSFORMATIONS } from "@/lib/data";

// 21st.dev-style infinite moving testimonial cards
export function Testimonials() {
  const items = [...TRANSFORMATIONS, ...TRANSFORMATIONS];

  return (
    <section className="section overflow-hidden bg-base">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What clients say"
          title={
            <>
              Trusted by{" "}
              <span className="serif-italic text-accent">hundreds</span>
            </>
          }
          subtitle="Real words from real clients who put in the work and got the results."
        />
      </div>

      <div className="group relative mt-7 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-5 sm:pr-5">
          {items.map((t, i) => (
            <article
              key={i}
              className="card w-[280px] shrink-0 p-6 sm:w-[360px] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="pill">{t.tag}</span>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon
                      key={s}
                      name="star"
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-mute">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="text-sm font-medium text-bone">{t.name}</span>
                <span className="font-display text-base text-accent">
                  {t.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
