"use client";

import React from "react";
import Image from "next/image";

export default function AdmissionHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left max-w-xl w-full lg:max-w-none">
          <h1 className="font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]">
            University application support in London, handled for you
          </h1>

          <p className="text-[#555555] leading-relaxed text-base sm:text-lg">
            Applying to university does not have to be complicated. Primeleed
            provides complete university application support in London, guiding
            you from your first enquiry to the day you enrol, completely free of
            charge.
          </p>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative flex-shrink-0 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px] lg:mr-[-40px]">
          <Image
            src="/admission2.png"
            alt="University application support guidance from start to enrolment"
            fill
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 540px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
