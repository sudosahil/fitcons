import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { PlanFinder } from "@/components/sections/PlanFinder";
import { WhyApply } from "@/components/sections/WhyApply";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "The Program",
  description:
    "Everything included in Tushar Menath's coaching — custom training, personalized nutrition, weekly check-ins, WhatsApp support, progress tracking, contest prep and more.",
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="The program"
        title={
          <>
            The complete coaching{" "}
            <span className="serif-italic text-accent">system</span>
          </>
        }
        subtitle="Training, nutrition, accountability and mindset — engineered into one system built to transform your physique and keep it."
      />
      <WhatYouGet />
      <PlanFinder />
      <WhyApply />
      <FinalCta />
    </>
  );
}
