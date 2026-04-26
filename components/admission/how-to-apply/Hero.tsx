"use client";

import React from "react";
import Image from "next/image";

export default function HowtoApplyHeroSection() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(36px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hta-animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hta-animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-xl w-full lg:max-w-none">

            <h1
              className="hta-animate-fade-in-up font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]"
              style={{ animationDelay: "0.1s" }}
            >
              University application support that takes the stress away
            </h1>

            <p
              className="hta-animate-fade-in-up text-[#555555] leading-relaxed text-base sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Applying to university in London is simpler than you think. Prime
              Leed provides complete university application support, guiding you
              through every step from start to enrolment. Here is exactly what to
              expect.
            </p>
          </div>

          {/* ── Right: Image ── */}
          <div
            className="hta-animate-fade-in-right relative flex-shrink-0 w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px] lg:mr-[-40px]"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/howtoapply.png"
              alt="University application support guidance from start to enrolment"
              fill
              sizes="(max-width: 640px) 380px, (max-width: 1024px) 420px, 540px"
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>
    </>
  );
}