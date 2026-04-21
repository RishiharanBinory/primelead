import React from "react";
import Section from "@/components/mainComponents/Section";
import { ProcessSteps } from "@/components/home/Process";
import StatSection from "@/components/mainComponents/Statsection";
import Component from "@/components/mainComponents/Background";
import IntegrationHero from "@/components/home/Carosal2";
import { SlidingTestimonial } from "@/components/home/Testimonials";
import { WhyChoosePrimeLeed } from "@/components/home/WhyChooseprimeleed";
import { FAQSection } from "@/components/home/Faq";
import CtaComponent from "@/components/home/CTA";
import { ContactSection } from "@/components/mainComponents/Contact";

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
        <WhyChoosePrimeLeed />
      </Section>
      <Section>
        <ProcessSteps />
      </Section>
      <Section noPadX>
        <StatSection />
      </Section>
      <Section >
        <SlidingTestimonial />
      </Section>

      <Section noPadX>
        <FAQSection />
      </Section>
     

      <ContactSection />

      <CtaComponent />
    </main>
  );
};

export default page;
