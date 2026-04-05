// import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatedNextImage } from "@/components/animation/Image";

export default function ApplySection() {
  return (
    <section className="bg-white pt-12 pb-4 md:pt-24 md:pb-8 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-12 items-center px-4 md:px-8">

        {/* Left — text */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#292929] mb-5 md:mb-8">
            Apply for 2023
          </h2>

          <p className="text-base md:text-lg text-[#545454] leading-relaxed mb-8 md:mb-10 max-w-sm">
            <strong className="text-[#292929]">
              September 2023 application is now open!
            </strong>{" "}
            Start your application today and get connected to a member from the
            admissions team so you can see if our partner university is the
            right place for you.
          </p>

          <Link
            href="/how-to-apply"
            className="text-[#149AB5] font-semibold text-base border-b-2 border-[#149AB5] pb-0.5 hover:opacity-75 transition-opacity"
          >
            How To Apply
          </Link>
        </div>

        {/* Right — image + yellow accent */}
        <div className="md:col-span-3 relative pb-8 pr-8 md:pb-16 md:pr-16">

          {/* Yellow accent */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-32 h-32 md:w-60 md:h-60 bg-[#FFC501]" />

          {/* Image wrapper — needs relative + fixed height + overflow-hidden */}
          <div className="relative w-full h-64 sm:h-96 md:h-150 z-10 overflow-hidden">
            <AnimatedNextImage
              src="/admission.jpg"
              alt="University campus building"
            />
          </div>

        </div>
      </div>
    </section>
  );
}