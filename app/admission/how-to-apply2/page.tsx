import React from "react";
import AdmissionHeroSection from "@/components/admission/admissionOverview/AdmissionHero";
import HubCards from "@/components/admission/admissionOverview/Hubcards";
import WhatToExpect from "@/components/admission/admissionOverview/Whatapply";
import Section from "@/components/mainComponents/Section";
import CtaComponent from "@/components/home/CTA";
import HowtoApplyHeroSection from "@/components/admission/how-to-apply/Hero";
import EntryRequirementsHeroSection from "@/components/admission/how-to-apply/Requirement";
import ApplicationProcess from "@/components/admission/how-to-apply/Process";
 

const page = () => {
  return (
    <main>
      <HowtoApplyHeroSection />
      <EntryRequirementsHeroSection/>
      <ApplicationProcess/>
      <HubCards />
      <WhatToExpect />
      <Section>
        <CtaComponent />
      </Section>
    </main>
  );
};

export default page;
