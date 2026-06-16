import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { PlanFinder } from "@/components/sections/PlanFinder";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatYouGet />
      <StatsBand />
      <PlanFinder />
      <Testimonials />
      <FinalCta />
    </>
  );
}
