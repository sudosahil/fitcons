"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Subtle Garden / view-source scan reveal: a quick left→right wipe with a thin
// accent line. `immediate` plays on mount (use for above-the-fold headings so
// they always appear); otherwise it triggers once on scroll into view.
export function ScanReveal({
  children,
  className,
  immediate = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
  delay?: number;
}) {
  const trigger = immediate
    ? { animate: "show" as const }
    : {
        whileInView: "show" as const,
        viewport: { once: true, margin: "-80px" } as const,
      };

  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <motion.span
        initial="hidden"
        {...trigger}
        variants={{
          hidden: { clipPath: "inset(0 100% 0 0)" },
          show: { clipPath: "inset(0 0% 0 0)" },
        }}
        transition={{ duration: 0.55, ease, delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden
        initial="hidden"
        {...trigger}
        variants={{
          hidden: { left: "0%", opacity: 0 },
          show: { left: "100%", opacity: [0, 0.7, 0] },
        }}
        transition={{ duration: 0.55, ease, delay }}
        className="pointer-events-none absolute inset-y-0 w-px bg-accent/70"
      />
    </span>
  );
}
