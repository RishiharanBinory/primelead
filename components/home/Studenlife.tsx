"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StudentLife() {
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
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{ minHeight: "650px" }}
    >
      {/* ── Mobile layout (< md) ── */}
      <div className="flex flex-col md:hidden">

        {/* Teal — heading + image side by side */}
        <div
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: "#0090AA", minHeight: "200px" }}
        >
          <div className="relative z-10 px-6 pt-8 pb-8">
            <h2
              className="text-white font-black leading-tight"
              style={{ fontSize: "clamp(36px, 8vw, 52px)", color: "#ffffff" }}
            >
              Student
              <br />
              Life
            </h2>
          </div>

          {/* Student image — top right corner */}
          <div
            className="absolute top-0 right-0"
            style={{ width: "45%", height: "100%" }}
          >
            <Image
              src="/vetor.png"
              alt="Student"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Black — nav links */}
        <div
          className="flex flex-col justify-center px-8 gap-8 py-10"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          {[
            { label: "FAQ", href: "/support/faq" },
            { label: "Support & Guidance", href: "/support/guidance" },
            { label: "Request Info", href: "/support/request-info" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 text-white font-semibold hover:opacity-70 transition-opacity group"
              style={{ fontSize: "18px" }}
            >
              {link.label}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="group-hover:translate-x-1.5 transition-transform duration-200 shrink-0"
              >
                <path
                  d="M3 9h12M10 4l5 5-5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* Yellow — quote */}
        <div
          className="relative flex items-center justify-center px-8 py-10 overflow-hidden"
          style={{ backgroundColor: "#F5C400" }}
        >
          <svg
            className="absolute right-6 top-1/2 -translate-y-1/2 opacity-70"
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
          >
            <line x1="40" y1="10" x2="10" y2="60" stroke="#1a2e3b" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <line x1="55" y1="20" x2="25" y2="70" stroke="#1a2e3b" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
            <line x1="28" y1="5" x2="5" y2="45" stroke="#1a2e3b" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
          </svg>
          <p
            className="font-bold leading-snug text-center relative z-10"
            style={{ fontSize: "16px", color: "#0d1b2a" }}
          >
            Empower your life through higher education by applying to our
            partnered institutions.
          </p>
        </div>

        {/* Full image */}
        <div className="relative w-full" style={{ minHeight: "280px" }}>
          <Image
            src="/Sudent_lfe.jpg"
            alt="Students collaborating"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── Desktop layout (md+) ── */}
      <div
        className="hidden md:flex flex-row"
        style={{ minHeight: "650px" }}
      >
        {/* Col 1: Teal */}
        <div
          className="relative md:w-[40%] shrink-0 overflow-hidden"
          style={{ backgroundColor: "#0090AA", minHeight: "650px" }}
        >
          <div className="relative z-10 px-65 pt-20">
            <h2
              className="text-white font-black leading-tight"
              style={{ fontSize: "clamp(40px, 4vw, 60px)", color: "#ffffff" }}
            >
              Student
              <br />
              Life
            </h2>
          </div>

          <div
            className="absolute bottom-0"
            style={{
              height: "100%",
              left: "55%",
              right: "0%",
              transform: animated ? "translateX(0%)" : "translateX(60%)",
              transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Image
              src="/vetor.png"
              alt="Student"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Col 2: Black + Yellow */}
        <div
          className="flex flex-col md:w-[20%] shrink-0"
          style={{ minHeight: "650px", position: "relative", zIndex: 10 }}
        >
          <div
            className="flex flex-col justify-center px-10 gap-8"
            style={{ backgroundColor: "#0d0d0d", flex: "0 0 50%" }}
          >
            {[
              { label: "FAQ", href: "/support/faq" },
              { label: "Support & Guidance", href: "/support/guidance" },
              { label: "Request Info", href: "/support/request-info" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-white font-semibold hover:opacity-70 transition-opacity group"
                style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
              >
                {link.label}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="group-hover:translate-x-1.5 transition-transform duration-200 shrink-0"
                >
                  <path
                    d="M3 9h12M10 4l5 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <div
            className="relative flex items-center px-10 py-8 overflow-hidden"
            style={{ backgroundColor: "#F5C400", flex: "0 0 50%" }}
          >
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-70"
              width="60"
              height="80"
              viewBox="0 0 60 80"
              fill="none"
            >
              <line x1="40" y1="10" x2="10" y2="60" stroke="#1a2e3b" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
              <line x1="55" y1="20" x2="25" y2="70" stroke="#1a2e3b" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
              <line x1="28" y1="5" x2="5" y2="45" stroke="#1a2e3b" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
            </svg>
            <p
              className="font-bold leading-snug relative z-10"
              style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#0d1b2a" }}
            >
              Empower your life through higher education by applying to our
              partnered institutions.
            </p>
          </div>
        </div>

        {/* Col 3: Full image */}
        <div className="relative flex-1" style={{ minHeight: "520px" }}>
          <Image
            src="/Sudent_lfe.jpg"
            alt="Students collaborating"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}