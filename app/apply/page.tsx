import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Quiz } from "@/components/sections/Quiz";

export const metadata: Metadata = {
  title: "Apply for Coaching",
  description:
    "Apply for personalized coaching with Tushar Menath. Answer a few quick questions and we'll match you with the right plan and contact you within 24 hours.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Start today"
        title={
          <>
            Apply for{" "}
            <span className="serif-italic text-accent">coaching</span>
          </>
        }
        subtitle="Limited spots. Take the 60-second quiz below and we'll recommend your ideal plan — then reach out within 24 hours."
      />
      <Quiz />
    </>
  );
}
