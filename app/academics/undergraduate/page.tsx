import React from "react";
import HeroSection from "@/components/undergraduate/Herosection";
import University from "@/components/undergraduate/University";
import { FAQSection } from "@/components/undergraduate/Faq";
import CtaComponent from "@/components/home/CTA";
import Section from "@/components/mainComponents/Section";

import CoursesSection from "@/components/mainComponents/Course";
import { courses } from "@/lib/undergraduate.";
import StatsSection from "@/components/mainComponents/stat";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection/>
      <University />
      <CoursesSection
        courses={courses}
        heading="Explore Undergraduate Courses in London "
        subheading="Explore our full range of undergraduate degrees across Business, Computing, Health, Engineering, Law and more. All courses are government funded and supported by Primeleed from application to graduation."
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
