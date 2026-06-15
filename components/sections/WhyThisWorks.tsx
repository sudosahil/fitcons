"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REASONS } from "@/lib/data";

export function WhyThisWorks() {
  return (
    <section className="section bg-base">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why it works"
          title={
            <>
              Why most people fail —{" "}
              <span className="serif-italic text-accent">
                why my clients succeed
              </span>
            </>
          }
          subtitle="Most plans fail because they ignore the human behind the physique. This system is built differently — around you, your life, and results that last."
        />

        <Reveal stagger className="mt-7 border-t border-line">
          {REASONS.map((r, i) => (
            <Reveal.Item key={r.title}>
              <div className="group grid grid-cols-1 gap-3 border-b border-line py-8 transition-colors duration-500 hover:bg-surface sm:grid-cols-[5rem_1fr] sm:gap-8 sm:px-4 md:grid-cols-[5rem_18rem_1fr]">
                <span className="index-num text-3xl transition-colors duration-500 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-bone sm:text-[1.65rem]">
                  {r.title}
                </h3>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-mute">
                  {r.desc}
                </p>
              </div>
            </Reveal.Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
