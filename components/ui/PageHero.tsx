"use client";

import { motion } from "framer-motion";
import { ScanReveal } from "@/components/ui/ScanReveal";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-base pt-24 pb-1 sm:pt-28">
      <div className="glow-red pointer-events-none absolute -right-32 -top-20 h-[34rem] w-[34rem]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <h1 className="display mt-6 max-w-4xl text-[2.5rem] leading-[0.95] text-bone sm:text-7xl sm:leading-[0.92] lg:text-[5rem]">
          <ScanReveal immediate delay={0.1}>{title}</ScanReveal>
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-mute pretty"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="rule mt-7" />
      </div>
    </section>
  );
}
