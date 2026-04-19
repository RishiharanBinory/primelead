import React from "react";
import { AboutHero } from "@/components/about/Hero";
import { VisionMission } from "@/components/about/VisionMission";
import { SupportSection } from "@/components/about/Support";
import Section from "@/components/mainComponents/Section";
import CtaComponent from "@/components/home/CTA";

const page = () => {
  return (
    <main>
      
      <div className="min-h-screen w-full relative bg-white">
        {/* Cool Blue Glow Right */}
        <div
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
        />
        {/* Your Content/Components */}
        <Section>
          <AboutHero />
        </Section>
      </div>

      <Section>
        <SupportSection />
      </Section>
      <Section>
        <VisionMission />
      </Section>
      <CtaComponent />
    </main>
  );
};

export default page;
