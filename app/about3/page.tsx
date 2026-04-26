// app/about/page.tsx

import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import StatsBanner from "@/components/about/StatsBanner";
import AboutMissionVision from "@/components/about/AboutMissionVision"; // ← NEW
import CoreValues from "@/components/about/CoreValues";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";
import AdmissionFormBanner from "@/components/about/AdmissionFormbanner";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <StatsBanner />
      <AboutMissionVision /> {/* ← replaced VisionMission with this */}
      <CoreValues introText="Aligned with global shifts in the economy, society, and environment, our vision drives our mission and upholds our core values" />
      <AdmissionFormBanner />
    </main>
  );
}
