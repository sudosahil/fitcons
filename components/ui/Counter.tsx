"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    });
    return () => controls.stop();
  }, [inView, to, count, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${to}${suffix}`}>
      <motion.span aria-hidden>{rounded}</motion.span>
    </span>
  );
}
