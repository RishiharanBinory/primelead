// app/about/page.tsx

import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import StatsBanner from "@/components/about/StatsBanner";
import AboutMissionVision from "@/components/about/AboutMissionVision"; // ← NEW
import CoreValues from "@/components/about/CoreValues";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <StatsBanner />
      <AboutMissionVision /> {/* ← replaced VisionMission with this */}
      <CoreValues />
      <FormOverlap />
      <CallToAction />
    </main>
  );
}
