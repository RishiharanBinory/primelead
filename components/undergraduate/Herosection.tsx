"use client";

import React from "react";
import Image from "next/image";
import Buttontwo from "@/components/mainComponents/Buttontwo";

export default function HeroSection() {
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

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-xl w-full lg:max-w-none">

            <h1
              className="animate-fade-in-up font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Undergraduate Courses in London to build the career you deserve
            </h1>

            <p
              className="animate-fade-in-up text-[#555555] leading-relaxed text-base sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Browse 50+ government-funded undergraduate courses across 20+
              accredited universities in London. Whether you are starting fresh or
              returning to education, Primeleed handles everything from
              application to enrolment, completely free of charge.
            </p>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Buttontwo
                text="Explore Courses"
                href="#courses"
                bgColor="#3AAFB9"
                textColor="#ffffff"
                fontSize={17}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>

          {/* ── Right: Circular Image ── */}
          <div
            className="animate-fade-in-right relative flex-shrink-0 w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/undergraduate.png"
                alt="Student studying undergraduate courses in London"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 340px, 420px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}