"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { STATS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Full-bleed proof band — hard numbers on pure black, split by hairline
// dividers. Adapted from a 21st.dev stats grid, rebuilt on the site's tokens.
export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <BackgroundFX glowClassName="left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`group relative px-4 py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:px-8 sm:py-10 border-white/10 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${
                i !== 0 ? "lg:border-l" : ""
              }`}
            >
              <span className="block h-px w-8 bg-accent transition-all duration-300 group-hover:w-12" />
              <p className="mt-5 font-display text-[2.65rem] leading-none text-white sm:text-6xl">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mono-label mt-3 leading-tight text-white/45">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
