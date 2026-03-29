import Link from "next/link";
import VideoSection from "./VideoSection";
import { AnimateFadeIn } from "../animation/AnimateFadeIn";
import { VisionMissionCard } from "../animation/VisionMissionCard";
import { HeroImage } from "../animation/HeroImage";

const NAV_LINKS = [
  { label: "Overview", href: "/academics/overview" },
  { label: "Academics", href: "/academics" },
  { label: "How To Apply", href: "/admission/how-to-apply" },
];

const CARDS = [
  {
    id: "vision",
    title: "Our Vision",
    text: "Our vision is to empower lives through higher education, unlocking potential and creating positive impact by providing accessible and inclusive opportunities for personal growth and societal contribution.",
  },
  {
    id: "mission",
    title: "Mission",
    text: "Our mission is to empower students in the UK and EU by providing comprehensive support and guidance for higher education, breaking down barriers and fostering personal and professional growth.",
  },
];

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10h12M11 5l5 5-5 5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function VisionMission() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* Background image — zoom effect */}
        <HeroImage src="/Vission.jpeg" />

        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* ── Mobile layout (< md) ── */}
        <div className="relative z-10 flex flex-col md:hidden">
          <div className="flex flex-col items-center gap-6 py-16 px-5">
            {NAV_LINKS.map((link, index) => (
              <AnimateFadeIn key={link.href} delay={`${index * 0.2}s`}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-white text-[18px] font-semibold hover:opacity-70 w-fit"
                >
                  {link.label}
                  <ArrowIcon size={16} />
                </Link>
              </AnimateFadeIn>
            ))}
          </div>

          <div className="flex flex-col px-5 pb-8 gap-4">
            {CARDS.map((card, index) => (
              <VisionMissionCard
                key={card.id}
                title={card.title}
                text={card.text}
                delay={`${index * 0.2}s`}
                className="flex flex-col justify-center px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              />
            ))}
          </div>
        </div>

        {/* ── Tablet layout (md to lg) ── */}
        <div className="relative z-10 hidden md:flex lg:hidden flex-col justify-end min-h-125 mx-auto px-6 pb-0">
          <div className="flex gap-6 mb-6">
            {NAV_LINKS.map((link, index) => (
              <AnimateFadeIn key={link.href} delay={`${index * 0.2}s`}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-white text-[18px] font-semibold hover:opacity-70 w-fit"
                >
                  {link.label}
                  <ArrowIcon size={17} />
                </Link>
              </AnimateFadeIn>
            ))}
          </div>

          <div className="flex gap-4" style={{ height: "210px" }}>
            {CARDS.map((card, index) => (
              <VisionMissionCard
                key={card.id}
                title={card.title}
                text={card.text}
                delay={`${index * 0.2}s`}
                className="flex-1 flex flex-col justify-center px-7 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              />
            ))}
          </div>
        </div>

        {/* ── Desktop layout (lg+) ── */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-7 hidden lg:flex items-end mb-5"
          style={{ height: "540px" }}
        >
          {/* Cards wrapper */}
          <div
            className="flex items-stretch"
            style={{
              width: "65%",
              gap: "24px",
              height: "68%",
              marginLeft: "auto",
            }}
          >
            {CARDS.map((card, index) => (
              <VisionMissionCard
                key={card.id}
                title={card.title}
                text={card.text}
                delay={`${index * 0.2}s`}
                className="flex flex-col justify-center px-9 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
                style={{ width: "50%" }}
              />
            ))}
          </div>

          {/* Nav links */}
          <div
            className="absolute flex flex-col gap-8"
            style={{
              width: "20%",
              left: "180px",
              bottom: "0",
              height: "68%",
              justifyContent: "center",
            }}
          >
            {NAV_LINKS.map((link, index) => (
              <AnimateFadeIn key={link.href} delay={`${index * 0.2}s`}>
                <Link
                  href={link.href}
                  className="flex items-center gap-3 text-white text-[18px] font-semibold hover:opacity-70 group w-fit"
                >
                  {link.label}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="group-hover:translate-x-1.5 transition-transform duration-200"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </AnimateFadeIn>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />
    </>
  );
}
