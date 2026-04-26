"use client";

import React from "react";
import Image from "next/image";
import Buttontwo from "@/components/mainComponents/Buttontwo";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left max-w-xl w-full lg:max-w-none">
          <h1 className="font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]">
            Undergraduate Courses in London to build the career you deserve
          </h1>

          <p className="text-[#555555] leading-relaxed text-base sm:text-lg">
            Browse 50+ government-funded undergraduate courses across 20+
            accredited universities in London. Whether you are starting fresh or
            returning to education, Prime Leed handles everything from
            application to enrolment, completely free of charge.
          </p>

          <Buttontwo
            text="Explore Courses"
            href="/courses"
            bgColor="#3AAFB9"
            textColor="#ffffff"
            fontSize={17}
          />
        </div>

        {/* ── Right: Circular Image ── */}
        <div className="relative flex-shrink-0 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/undergraduate.png"
              alt="Student studying undergraduate courses in London"
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
