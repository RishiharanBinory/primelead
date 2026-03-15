import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/Reviewscarousel";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import LogoCarousel from "@/components/LogoCarousel";
import StatsSection from "@/components/StatsSection";
import FundingSupport from "@/components/Fundingsupport";
import StudentFinance from "@/components/Studentfinacehome";
import HowToApply from "@/components/Howtoapply";
import ApplyToday from "@/components/Applytoday";
import AdmissionContent from "@/components/Admission";
import StudentLife from "@/components/Studenlife";
import CTABanner from "@/components/Ctabanner";

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
      <StudentFinance />
      <HowToApply />
      <ApplyToday />
      <AdmissionContent />
      <StudentLife />
      <div className="h-40 bg-white" />
      <CTABanner />
    </>
  );
}
