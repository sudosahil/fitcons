"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FEATURES } from "@/lib/data";

// Bento: rows of 3 / 2 / 3 on desktop (6-col grid). Indices 3 & 4 are wide.
function isWide(i: number) {
  return i === 3 || i === 4;
}

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="section bg-base">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The program"
          title={
            <>
              Everything you need to{" "}
              <span className="serif-italic text-accent">transform</span>
            </>
          }
          subtitle="A complete coaching system — every tool, plan and touchpoint required to take you from where you are to the physique you want."
        />

        <Reveal
          stagger
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6"
        >
          {FEATURES.map((f, i) => {
            const wide = isWide(i);
            return (
              <Reveal.Item
                key={f.title}
                className={`h-full ${wide ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <SpotlightCard className="card h-full p-6 sm:p-7">
                  <div
                    className={
                      wide
                        ? "flex h-full flex-col gap-5 sm:flex-row sm:items-center"
                        : "flex h-full flex-col"
                    }
                  >
                    <div
                      className={
                        wide ? "shrink-0" : "flex items-center justify-between"
                      }
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors duration-500 group-hover/spot:bg-accent group-hover/spot:text-white">
                        <Icon name={f.icon as IconName} className="h-6 w-6" />
                      </span>
                      {!wide && (
                        <span className="index-num text-2xl">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>
                    <div className={wide ? "" : "mt-6"}>
                      <h3 className="font-display text-xl text-bone">
                        {f.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-mute">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal.Item>
            );
          })}
        </Reveal>

        <Reveal className="mt-8 border-t border-line pt-8 sm:mt-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-md font-display text-2xl text-bone sm:text-3xl">
              Ready to put every one of these to work?
            </p>
            <Link href="/apply" className="btn-accent w-full sm:w-auto sm:shrink-0">
              Start your transformation
              <Icon name="arrow" className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
