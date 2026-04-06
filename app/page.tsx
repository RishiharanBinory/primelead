import Hero from "@/components/home/Hero";
import ReviewsCarousel from "@/components/home/Reviewscarousel";
import AboutSection from "@/components/home/AboutSection";
import VisionMission from "@/components/home/VisionMission";
import LogoCarousel from "@/components/mainComponents/LogoCarousel";
import StatsSection from "@/components/home/StatsSection";
import FundingSupport from "@/components/home/Fundingsupport";
import StudentFinance from "@/components/home/Studentfinacehome";

import ApplyToday from "@/components/home/Applytoday";
import AdmissionContent from "@/components/home/Admission";
import StudentLife from "@/components/home/Studenlife";
import CTABanner from "@/components/home/Ctabanner";
import CoreValues from "@/components/about/CoreValues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primeleed | Secure UK University Placement",
  description:
    "Prime Leed Have Assisted More Than 2,000 Students In Securing Their Higher Education Placements Throughout The UK.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ReviewsCarousel />
      <AboutSection />
      <VisionMission />
      <LogoCarousel />
      <StatsSection />
      <FundingSupport />
      <div className="h-20 bg-white" />
      <StudentFinance />
      <CoreValues
        introText="How to Apply"
        linkLabel="View All Requirements"
        linkHref="admission/how-to-apply"
      />
      <ApplyToday />
      <AdmissionContent />
      <StudentLife />
      <div
        className="hidden md:block h-50 bg-white relative"
        style={{ zIndex: 1 }}
      />
      <CTABanner />
    </>
  );
}
