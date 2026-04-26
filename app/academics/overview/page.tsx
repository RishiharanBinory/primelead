import React from "react";
import { HeroSection } from "@/components/academics/Overview";
import FindCourse from "@/components/academics/RightCourse";
import WhyPrimeLeed from "@/components/academics/Whychoose";
import Section from "@/components/mainComponents/Section";
import { ProcessSteps } from "@/components/home/Process";
import { SlidingTestimonial } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/education_consultancy/Faq";
import { ContactSection } from "@/components/mainComponents/Contact";
import CtaComponent from "@/components/home/CTA";
import StatsSection from "@/components/mainComponents/stat";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection/>
      <FindCourse />
      <WhyPrimeLeed />
      <Section>
        <ProcessSteps />
      </Section>
      <Section>
        <SlidingTestimonial />
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
