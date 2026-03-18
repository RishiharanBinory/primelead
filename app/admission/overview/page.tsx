// app/admission/overview/page.tsx
// The Navbar's "Overview" link points to /admission/overview.
// This page shows the same content as the main admission page.

import AdmissionHero from "@/components/admission/AdmissionHero";
import AdmissionIntro from "@/components/admission/AdmissionIntro";
import FactsBanner from "@/components/admission/FactsBanner";
import ApplySection from "@/components/admission/ApplySection";
import FinancialAid from "@/components/admission/FinancialAid";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";

export default function AdmissionOverviewPage() {
  return (
    <main>
      <AdmissionHero />
      <AdmissionIntro />
      <FactsBanner />
      <ApplySection />
      <FinancialAid />
      <FormOverlap />
      <CallToAction />
    </main>
  );
}
