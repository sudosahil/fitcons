"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { APPLY_REASONS, IMAGES } from "@/lib/data";

export function WhyApply() {
  return (
    <section className="section bg-base">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal stagger>
            <Reveal.Item>
              <span className="eyebrow">Is this you?</span>
            </Reveal.Item>
            <Reveal.Item>
              <h2 className="display mt-3 text-[2.5rem] leading-[0.98] text-bone sm:text-5xl lg:text-[3.4rem]">
                This coaching is{" "}
                <span className="serif-italic text-accent">for you if…</span>
              </h2>
            </Reveal.Item>

            <ul className="mt-7 border-t border-line">
              {APPLY_REASONS.map((r) => (
                <Reveal.Item key={r}>
                  <li className="flex items-center gap-4 border-b border-line py-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-lg text-bone">{r}</span>
                  </li>
                </Reveal.Item>
              ))}
            </ul>
          </Reveal>

          {/* Image */}
          <Reveal direction="left" className="hidden lg:block">
            <div className="media relative aspect-[4/5] w-full">
              <Image
                src={IMAGES.cta}
                alt="Focused athlete ready to train"
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-xl bg-surface/90 px-5 py-3 backdrop-blur">
                <p className="serif-italic text-lg text-bone">I am &gt; I was</p>
                <p className="text-xs text-mute">The only mindset that wins.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
