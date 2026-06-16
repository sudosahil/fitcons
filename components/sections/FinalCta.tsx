"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { IMAGES } from "@/lib/data";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Moody gym backdrop */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta}
          alt=""
          fill
          sizes="100vw"
          className="img-grade object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>
      <div className="glow-red pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-12 text-center sm:px-8 sm:py-16">
        <Reveal stagger>
          <Reveal.Item>
            <span className="eyebrow justify-center">Last step</span>
          </Reveal.Item>
          <Reveal.Item>
            <h2 className="display mt-4 text-[1.9rem] leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Your transformation{" "}
              <span className="serif-italic text-accent">starts today</span>
            </h2>
          </Reveal.Item>
          <Reveal.Item>
            <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/60 pretty">
              Stop guessing. Stop restarting. Get expert guidance and finally
              build the physique you&apos;ve always wanted.
            </p>
          </Reveal.Item>
          <Reveal.Item>
            <div className="mt-7 flex justify-center">
              <Link
                href="/apply"
                className="btn-accent w-full sm:w-auto"
              >
                Claim your spot
                <Icon name="arrow" className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal.Item>
          <Reveal.Item>
            <p className="mono-label mt-5 text-white/40">
              Limited spots · Response within 24 hours
            </p>
          </Reveal.Item>
        </Reveal>
      </div>
    </section>
  );
}
