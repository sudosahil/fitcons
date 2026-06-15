"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { FAQS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Questions"
              title={
                <>
                  Frequently asked{" "}
                  <span className="serif-italic text-accent">questions</span>
                </>
              }
            />
            <Reveal className="mt-8">
              <p className="text-mute">Still have questions?</p>
              <Link href="/apply" className="link-arrow mt-3">
                Apply &amp; ask on your call
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal stagger className="border-t border-line">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal.Item key={f.q}>
                  <div className="border-b border-line">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl text-bone sm:text-2xl">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                          isOpen
                            ? "rotate-45 border-accent bg-accent text-white"
                            : "border-line-2 text-bone"
                        }`}
                      >
                        <PlusIcon />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-6 pr-10 text-[0.98rem] leading-relaxed text-mute">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal.Item>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
