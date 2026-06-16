import { Reveal } from "@/components/ui/Reveal";
import { ScanReveal } from "@/components/ui/ScanReveal";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      stagger
      className={
        isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"
      }
    >
      <Reveal.Item>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal.Item>
      <h2 className="display mt-3 text-[2.5rem] leading-[0.98] text-bone sm:text-5xl lg:text-[3.6rem]">
        <ScanReveal>{title}</ScanReveal>
      </h2>
      {subtitle && (
        <Reveal.Item>
          <p
            className={`mt-3.5 text-lg leading-relaxed text-mute pretty ${
              isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        </Reveal.Item>
      )}
    </Reveal>
  );
}
