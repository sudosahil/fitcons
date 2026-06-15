import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Results } from "@/components/sections/Results";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Real transformations from Tushar Menath's coaching clients — fat loss, muscle gain, full body recomposition and stage-ready contest prep.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client results"
        title={
          <>
            Proof, not{" "}
            <span className="serif-italic text-accent">promises</span>
          </>
        }
        subtitle="Everyday people who committed to the process and changed their bodies — and their lives — for good."
      />
      <Results />
      <FinalCta />
    </>
  );
}
