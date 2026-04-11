import React from "react";
import Section from "@/components/mainComponents/Section";
import StudyInLondon from "@/components/home/Hometwo";
import { ProcessSteps } from "@/components/home/Process";
import { StatsSection } from "@/components/mainComponents/Statsection";
import Component from "@/components/mainComponents/Background";
import IntegrationHero from "@/components/home/Carosal2";
import { SlidingTestimonial } from "@/components/home/Testimonials";
import { WhyChoosePrimeLeed } from "@/components/home/WhyChooseprimeleed";

const page = () => {
  return (
    <main>
      <Section>
        <Component />
      </Section>
      <Section>
        <IntegrationHero />
      </Section>
      <Section>
        <SlidingTestimonial />
      </Section>

      <Section>
        <StatsSection />
      </Section>
      <Section>
        <ProcessSteps />
      </Section>
      <Section>
        <WhyChoosePrimeLeed />
      </Section>
    </main>
  );
};

export default page;
