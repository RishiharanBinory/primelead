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
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Study in London & Manchester | Prime Leed',
  description: 'Prime Leed has helped over 2,000 students study in London, Manchester, and across the UK. Contact Us today.',
}

const page = () => {
  return (
    <main>
      <Section className="!pb-2 md:!pb-2">
        <Component />
      </Section>
      <Section>
        <IntegrationHero />
      </Section>
      <Section className="!py-0">
        <WhyChoosePrimeLeed />
      </Section>
      <Section>
        <ProcessSteps />
      </Section>
      <Section noPadX>
        <StatSection />
      </Section>
      <Section>
        <SlidingTestimonial />
      </Section>

      <Section noPadX>
        <FAQSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
      <Section>
        <CtaComponent />
      </Section>
    </main>
  );
};

export default page;
