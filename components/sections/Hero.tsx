"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ScanReveal } from "@/components/ui/ScanReveal";
import { TRUST_INDICATORS, IMAGES } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const up = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.12 * i, ease },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] flex-col overflow-hidden"
    >
      {/* Full-bleed gym image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Athlete training in the gym"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        {/* Darken for legibility + mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/75 to-base/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-base/90 via-base/30 to-transparent" />
      </div>

      {/* Red adrenaline glow */}
      <div className="glow-red pointer-events-none absolute -left-32 top-1/3 h-[40rem] w-[40rem]" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 items-center pt-24 pb-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <motion.span
              custom={0}
              variants={up}
              initial="hidden"
              animate="show"
              className="eyebrow"
            >
              ICN Classic &amp; Physique Champion 2025
            </motion.span>

            <h1 className="display mt-6 text-[2.85rem] leading-[0.88] text-bone sm:text-7xl sm:leading-[0.84] lg:text-[7.5rem]">
              <ScanReveal immediate delay={0.15}>
                Transform your physique.
                <span className="mt-1 block">
                  Become the{" "}
                  <span className="serif-italic text-accent">strongest</span>{" "}
                  you.
                </span>
              </ScanReveal>
            </h1>

            <motion.p
              custom={2}
              variants={up}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
            >
              Personalized coaching from ICN Classic &amp; Men&apos;s Physique
              Champion 2025, Tushar Menath. Build muscle, lose fat, and forge a
              physique that lasts —{" "}
              <span className="text-bone">100% naturally.</span>
            </motion.p>

            <motion.div
              custom={3}
              variants={up}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="/apply" className="btn-accent w-full sm:w-auto">
                Apply for coaching
                <Icon name="arrow" className="arrow h-4 w-4" />
              </Link>
              <Link href="/results" className="btn-outline w-full sm:w-auto">
                See transformations
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust bar — in normal flow at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 border-t border-line/60 bg-base/40 backdrop-blur-sm"
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-5 py-5 sm:px-8 lg:grid-cols-4">
          {TRUST_INDICATORS.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2.5 text-xs text-mute sm:text-sm lg:justify-center"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-bone">{t}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
