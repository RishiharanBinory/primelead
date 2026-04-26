"use client";

import React from "react";
import Image from "next/image";

export default function FaqHeroSection() {
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

        .faq-animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .faq-animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-xl w-full lg:max-w-none">

            <h1
              className="faq-animate-fade-in-up font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Still unsure about your next step? You are not alone.
            </h1>

            <p
              className="faq-animate-fade-in-up text-[#555555] leading-relaxed text-base sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Most students come to us with the same worries about funding,
              qualifications, choosing the right course, or whether university is
              even possible for them. This page answers all of it, clearly and
              honestly, so you can move forward with confidence.
            </p>
          </div>

          {/* ── Right: Image ── */}
          <div
            className="faq-animate-fade-in-right relative flex-shrink-0 w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/faq.png"
              alt="Frequently asked questions about undergraduate courses in London"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 340px, 420px"
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>
    </>
  );
}