"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FundingSupport() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch">

          {/* ── Image — zoom in effect ── */}
          <div className="relative w-full md:w-[55%] min-h-65 sm:min-h-80 md:min-h-0 order-first md:order-last overflow-hidden">
            <Image
              src="/Vission.jpeg"
              alt="Student applying for funding"
              fill
              className="object-cover object-center"
              priority
              style={{
                transform: animated ? "scale(1)" : "scale(1.15)",
                transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
          </div>

          {/* ── Left: Text content ── */}
          <div
            className="flex flex-col justify-center
                       px-5 sm:px-10 lg:px-16
                       py-10 sm:py-14 lg:py-20
                       w-full md:w-[45%] shrink-0
                       order-last md:order-first"
          >
            {/* Icon */}
            <div
              className="mb-5 md:mb-6"
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease 0s, transform 0.7s ease 0s",
              }}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 64 64"
                fill="none"
                className="md:w-13 md:h-13"
              >
                <path
                  d="M20 36c0 0 4-4 8-4s6 2 10 2 8-4 8-4"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 28l8 8 6-4 6 4 6-4 6 4 8-8"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 24l4-8h32l4 8"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 44l-4 8h40l-4-8"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main heading */}
            <h2
              className="mb-4 md:mb-6 leading-tight tracking-tight"
              style={{
                fontSize: "clamp(24px, 3.5vw, 42px)",
                fontWeight: 900,
                color: "#0d1b2a",
                opacity: animated ? 1 : 0,
                transform: animated ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
              }}
            >
              Get Funding Support
            </h2>

            {/* Bold subtitle */}
            <p
              className="mb-4 md:mb-5 leading-snug"
              style={{
                fontSize: "clamp(14px, 1.4vw, 17px)",
                fontWeight: 700,
                color: "#0d1b2a",
                opacity: animated ? 1 : 0,
                transform: animated ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
              }}
            >
              Secure Your University Placement Funding
              <br />
              Up To £60,000 For Your Desired Course
            </p>

            {/* Body text */}
            <p
              className="mb-8 md:mb-10 leading-relaxed"
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                fontWeight: 400,
                color: "#3d4f5e",
                maxWidth: "480px",
                opacity: animated ? 1 : 0,
                transform: animated ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
              }}
            >
              Prime Leed supports students in their pursuit of higher education
              by partnering with universities across the UK to provide funding
              assistance. Through these collaborations, we bridge the financial
              gap, making higher education more accessible and empowering
              students to achieve their academic aspirations.
            </p>

            {/* Apply Now link */}
            <Link
              href="/admission/financial-aid"
              className="inline-flex items-center gap-2 font-semibold underline underline-offset-2 w-fit transition-opacity duration-200 hover:opacity-75"
              style={{
                color: "#2ab4c0",
                fontSize: "clamp(14px, 1.2vw, 16px)",
                opacity: animated ? 1 : 0,
                transform: animated ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3"
                  stroke="#2ab4c0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 2h5v5M14 2L8 8"
                  stroke="#2ab4c0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}