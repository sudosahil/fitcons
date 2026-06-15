"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { STATS, IMAGES } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section bg-base">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal direction="right" className="lg:sticky lg:top-28">
            <div className="media relative aspect-[4/5] w-full">
              <Image
                src={IMAGES.about}
                alt="Tushar Menath, natural physique athlete"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal stagger>
            <Reveal.Item>
              <span className="eyebrow">Meet your coach</span>
            </Reveal.Item>
            <Reveal.Item>
              <h2 className="display mt-5 text-[2.5rem] leading-[0.98] text-bone sm:text-5xl lg:text-[3.6rem]">
                A decade of{" "}
                <span className="serif-italic text-accent">natural</span>{" "}
                discipline
              </h2>
            </Reveal.Item>
            <Reveal.Item>
              <p className="mt-7 text-lg leading-relaxed text-mute pretty">
                Tushar Menath didn&apos;t inherit his physique — he built it.
                Over <span className="text-bone">10+ years</span> of relentless,
                100% natural training, he transformed himself from an average
                beginner into a national-level champion, earning the{" "}
                <span className="text-bone">
                  ICN Classic &amp; Men&apos;s Physique title in 2025
                </span>
                .
              </p>
            </Reveal.Item>
            <Reveal.Item>
              <p className="mt-5 text-lg leading-relaxed text-mute pretty">
                His philosophy is simple and lived by every single day —{" "}
                <span className="serif-italic text-bone">I am &gt; I was</span>.
                No shortcuts, no enhancement, no quick fixes. Just sustainable
                science, hard work, and a system refined across hundreds of
                client transformations.
              </p>
            </Reveal.Item>
            <Reveal.Item>
              <p className="mt-5 text-lg leading-relaxed text-mute pretty">
                Today he coaches a{" "}
                <span className="text-bone">60,000+ strong</span> community and
                works one-on-one with serious individuals ready to commit to a
                physique that lasts a lifetime.
              </p>
            </Reveal.Item>

            {/* Stats */}
            <Reveal.Item>
              <div className="mt-8 grid grid-cols-2 border-t border-line sm:grid-cols-4">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-6 ${
                      i !== 0 ? "sm:border-l sm:border-line sm:pl-5" : ""
                    } ${i % 2 !== 0 ? "border-l border-line pl-5 sm:pl-5" : ""}`}
                  >
                    <p className="font-display text-4xl text-bone">
                      <Counter
                        to={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </p>
                    <p className="mono-label mt-2 leading-tight text-mute">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal.Item>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
