import React from "react";
import { HeroSection } from "@/components/education_consultancy/HeroSection";
import { WhatWeDoSection } from "@/components/education_consultancy/Whatdoes";
import { ComparisonSection } from "@/components/education_consultancy/Comparisons";
import { StudentsSection } from "@/components/education_consultancy/StudentsWeSupport";
import { CommitmentsSection } from "@/components/education_consultancy/Commitments";
import { FAQSection } from "@/components/education_consultancy/Faq";
import CtaComponent from "@/components/home/CTA";
import { ContactSection } from "@/components/mainComponents/Contact";
import Section from "@/components/mainComponents/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Agents & Consultancy in London | Prime Leed",
  description:
    "Prime Leed education agents help you study in the UK with course selection, applications, personal statements, interviews, and financial aid support. Contact us.",
};

const page = () => {
  return (
    <main>
      <HeroSection />
      <Section noPadX>
        <WhatWeDoSection />
      </Section>
      <Section>
        <ComparisonSection />
      </Section>

      {/* <StudentsSection/> */}
      <Section>
        <CommitmentsSection />
      </Section>

      <Section noPadX>
        <FAQSection />
      </Section>

      <Section>
        <CtaComponent />
      </Section>
    </main>
  );
};

export default page;
