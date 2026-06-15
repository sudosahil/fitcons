import { Hero } from "@/components/sections/Hero";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatYouGet />
      <Testimonials />
      <FinalCta />
    </>
  );
}
