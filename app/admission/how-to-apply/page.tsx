// app/admission/how-to-apply/page.tsx
// Accessible at /admission/how-to-apply from the Navbar dropdown.


import HowToApplyContent from "@/components/admission/how-to-apply/HowToApplyContent";

import PageHero from "@/components/admission/how-to-apply/htaHero";
import AdmissionFormBanner from "@/components/about/AdmissionFormbanner";

export default function HowToApplyPage() {
  return (
    <main>
      {/* Page Hero — same teal box pattern */}
      <PageHero />
      <HowToApplyContent />
      {/* <FormOverlap />
      <CallToAction /> */}
       <AdmissionFormBanner/>
    </main>
  );
}
