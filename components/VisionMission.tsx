"use client";

import Link from "next/link";
import { useState } from "react";
import VideoSection from "./VideoSection";

const NAV_LINKS = [
  { label: "Overview", href: "/academics/overview" },
  { label: "Academics", href: "/academics" },
  { label: "How To Apply", href: "/admission/how-to-apply" },
];

const CARDS = [
  {
    id: "vision" as const,
    title: "Our Vision",
    text: "Our vision is to empower lives through higher education, unlocking potential and creating positive impact by providing accessible and inclusive opportunities for personal growth and societal contribution.",
  },
  {
    id: "mission" as const,
    title: "Mission",
    text: "Our mission is to empower students in the UK and EU by providing comprehensive support and guidance for higher education, breaking down barriers and fostering personal and professional growth.",
  },
];

export default function VisionMission() {
  const [hovered, setHovered] = useState<"vision" | "mission" | null>(null);

  return (
    <>
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/Vission.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* ── Mobile layout (< md) ── */}
        <div className="relative z-10 flex flex-col justify-end md:hidden px-5 pb-0 min-h-120">
          <div className="flex flex-col gap-4 mb-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-white text-[15px] font-semibold hover:opacity-70 transition-opacity w-fit"
              >
                {link.label}
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex-1 flex flex-col justify-center px-4 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] bg-white"
              >
                <h3 className="text-[14px] font-black mb-2 text-[#1a2e3b]">
                  {card.title}
                </h3>
                <p className="text-[11px] leading-[1.7] text-[#4b5563]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tablet layout (md to lg) ── */}
        <div className="relative z-10 hidden md:flex lg:hidden flex-col justify-end min-h-125 mx-auto px-6 pb-0">
          <div className="flex gap-6 mb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-white text-[16px] font-semibold hover:opacity-70 transition-opacity w-fit"
              >
                {link.label}
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <div className="flex gap-4" style={{ height: "210px" }}>
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex-1 flex flex-col justify-center px-7 shadow-[0_4px_20px_rgba(0,0,0,0.12)] bg-white"
              >
                <h3 className="text-[18px] font-black mb-3 text-[#1a2e3b]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#4b5563]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop layout (lg+) — original code untouched ── */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-7 hidden lg:flex items-end"
          style={{ height: "540px" }}
        >
          {/* Cards wrapper — touches bottom */}
          <div
            className="flex items-stretch"
            style={{
              width: "65%",
              gap: "24px",
              height: "68%",
              marginLeft: "auto",
            }}
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col justify-center px-9 transition-colors duration-300 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
                style={{
                  width: "50%",
                  backgroundColor: hovered === card.id ? "#2ab4c0" : "#ffffff",
                }}
              >
                <h3
                  className="text-[22px] mb-4 transition-colors duration-300"
                  style={{
                    fontWeight: 900,
                    color: hovered === card.id ? "#ffffff" : "#1a2e3b",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.8] transition-colors duration-300"
                  style={{
                    color:
                      hovered === card.id
                        ? "rgba(255,255,255,0.92)"
                        : "#4b5563",
                  }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Nav links — absolutely centered vertically against the cards */}
          <div
            className="absolute flex flex-col gap-8"
            style={{
              width: "20%",
              left: "180px",
              bottom: "0",
              height: "68%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-white text-[18px] font-semibold hover:opacity-70 transition-opacity group w-fit"
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
            ))}
          </div>
        </div>
      </section>

      <VideoSection />
    </>
  );
}
