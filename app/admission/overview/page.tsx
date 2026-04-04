// app/admission/overview/page.tsx
// The Navbar's "Overview" link points to /admission/overview.
// This page shows the same content as the main admission page.

import AdmissionHero from "@/components/admission/admissionOverview/AdmissionOverviewHero";
import AdmissionIntro from "@/components/admission/admissionOverview/AdmissionIntro";
import ApplySection from "@/components/admission/admissionOverview/ApplySection";
import FinancialAid from "@/components/admission/admissionOverview/FinancialAid";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";
import AdmissionFacts from "@/components/admission/admissionOverview/AdmissionFacts";
import ApplySectionReverse from "@/components/admission/admissionOverview/Financial";

export default function AdmissionOverviewPage() {
  return (
    <main>
      <AdmissionHero />
      <AdmissionIntro />
      <AdmissionFacts />
      <ApplySection />
      <ApplySectionReverse />
      {/* <FinancialAid /> */}
      <FormOverlap />
      <CallToAction />
    </main>
  );
}
