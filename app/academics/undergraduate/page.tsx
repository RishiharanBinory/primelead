import React from "react";
import HeroSection from "@/components/undergraduate/Herosection";
import University from "@/components/undergraduate/University";
import { FAQSection } from "@/components/undergraduate/Faq";
import CtaComponent from "@/components/home/CTA";
import Section from "@/components/mainComponents/Section";

import CoursesSection from "@/components/mainComponents/Course";
import { courses } from "@/lib/undergraduate";
import StatsSection from "@/components/mainComponents/stat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Undergraduate Courses in London | Prime Leed",
  description:
    " Explore 45+ undergraduate courses in London with Prime Leed. Discover diverse programs at partner universities and build a study path that matches your goals. Contact Us.",
};

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <University />
      <div id="courses">
        <CoursesSection
          courses={courses}
          heading="Explore Undergraduate Courses in London "
          subheading="Explore our full range of undergraduate degrees across Business, Computing, Health, Engineering, Law and more. All courses are government funded and supported by Primeleed from application to graduation."
        />
      </div>
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
