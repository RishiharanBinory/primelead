import React from "react";
import HeroSection from "@/components/postgraduate/Herosection";
import University from "@/components/undergraduate/University";
import { FAQSection } from "@/components/undergraduate/Faq";
import CtaComponent from "@/components/home/CTA";
import Section from "@/components/mainComponents/Section";

import CoursesSection from "@/components/mainComponents/Course";
import { courses } from "@/lib/postgraduate";
import StatsSection from "@/components/mainComponents/stat";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection/>
      <University />
      <CoursesSection
        courses={courses}
        heading="Explore Postgraduate Degrees in London"
        subheading="Browse our full range of postgraduate programmes across Business, Computing, Health, Law and more. All courses are available at accredited universities in London, supported by Primeleed from application to graduation."
      />
      <Section>
        <FAQSection />
      </Section>

      <Section>
        <CtaComponent />
      </Section>
    </main>
  );
};

export default page;
