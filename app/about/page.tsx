import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";
import { WhyThisWorks } from "@/components/sections/WhyThisWorks";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tushar Menath — natural bodybuilding athlete, ICN Classic & Men's Physique Champion 2025, with 10+ years of training experience and the I AM > I WAS mindset.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tushar"
        title={
          <>
            The man behind the{" "}
            <span className="serif-italic text-accent">mindset</span>
          </>
        }
        subtitle="Ten years, zero shortcuts, one relentless standard. This is the athlete — and the method — you'll be training with."
      />
      <About />
      <WhyThisWorks />
      <FinalCta />
    </>
  );
}
