"use client";

import React from "react";
import Image from "next/image";

export default function BlogHeroSection() {
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

        .adm-animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .adm-animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-xl w-full lg:max-w-none">

            <h1
              className="adm-animate-fade-in-up font-bold text-[#1a1a1a] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Insights, Guides and News for Aspiring Students
            </h1>

            <p
              className="adm-animate-fade-in-up text-[#555555] leading-relaxed text-base sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Stay informed with the latest advice on university applications,
              student life, career pathways and higher education in the UK.
              Whether you are just starting out or ready to apply, our blog is
              here to help you make confident decisions every step of the way.
            </p>
          </div>

          {/* ── Right: Image ── */}
          <div
            className="adm-animate-fade-in-right relative flex-shrink-0 w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px] lg:mr-[-40px]"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/admission2.png"
              alt="Student reading university blog and guides"
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