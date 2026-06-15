import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Tushar Menath's online coaching — pricing, suitability for beginners, equipment, communication, results and contest prep.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Everything you{" "}
            <span className="serif-italic text-accent">want to know</span>
          </>
        }
        subtitle="The questions serious applicants ask before they commit. Still unsure? Apply and ask on your consultation call."
      />
      <Faq />
      <FinalCta />
    </>
  );
}
