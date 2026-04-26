import React from "react";
import { AboutHero } from "@/components/about/Hero";
import { VisionMission } from "@/components/about/VisionMission";
import { SupportSection } from "@/components/about/Support";
import Section from "@/components/mainComponents/Section";
import CtaComponent from "@/components/home/CTA";
import HeroSection from "@/components/about/AboutHero";

const page = () => {
  return (
    <main>
      <Section>
        <HeroSection />
      </Section>

      {/* <div className="min-h-[calc(100vh-64px)] max-h-[860px] w-full relative bg-white"> */}
      {/* Cool Blue Glow Right */}
      {/* <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
              radial-gradient(
                circle at top right,
                rgba(70, 130, 180, 0.5),
                transparent 40%
              )
            `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        /> */}
      {/* Your Content/Components */}
      {/* <Section>
          <AboutHero />
        </Section> */}
      {/* </div> */}

      <Section>
        <SupportSection />
      </Section>
      <Section className="!py-0">
        <VisionMission />
      </Section>
      <Section>
        <CtaComponent />
      </Section>
    </main>
  );
};

export default page;
