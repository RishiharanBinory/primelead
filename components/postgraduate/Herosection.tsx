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

        .pg-animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .pg-animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-xl w-full lg:max-w-none">

            <h1
              className="pg-animate-fade-in-up font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Postgraduate Degrees in London to advance your career
            </h1>

            <p
              className="pg-animate-fade-in-up text-[#555555] leading-relaxed text-base sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Explore 20+ government-funded postgraduate degrees across accredited
              universities in London. Whether you hold a degree or have years of
              professional experience, Primeleed handles everything from
              application to enrolment, completely free of charge
            </p>

            <div
              className="pg-animate-fade-in-up"
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
            className="pg-animate-fade-in-right relative flex-shrink-0 w-[360px] h-[360px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/postgraduate.png"
                alt="Student studying undergraduate courses in London"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 340px, 420px"
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