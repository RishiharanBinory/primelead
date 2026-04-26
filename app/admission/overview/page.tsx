import React from "react";
import AdmissionHeroSection from "@/components/admission/admissionOverview/AdmissionHero";
import HubCards from "@/components/admission/admissionOverview/Hubcards";
import WhatToExpect from "@/components/admission/admissionOverview/Whatapply";
import Section from "@/components/mainComponents/Section";
import CtaComponent from "@/components/home/CTA";

const page = () => {
  return (
    <main>
      <AdmissionHeroSection />
      <HubCards />
      <WhatToExpect />
      <Section>
        <CtaComponent />
      </Section>
    </main>
  );
};

export default page;
