"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../mainComponents/Button";
import { useEffect, useRef, useState } from "react";

export default function CTABanner() {
  const [offset, setOffset] = useState(80);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = 1 - rect.bottom / (windowHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      setOffset(80 - clamped * 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-visible"
      style={{ backgroundColor: "#F5C400", zIndex: 10 }}
    >
      {/* Image directly inside section, NOT inside the inner div */}
      <div
        className="hidden md:block absolute"
        style={{
          width: "300px",
          height: "400px",
          top: "-210px",
          left: "40%",
          transform: `translateX(${offset}%)`,
          transition: "transform 0.05s linear",
          zIndex: 20,
        }}
      >
        <Image
          src="/footer_girl.svg"
          alt="Student studying"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-7 py-16 md:py-20 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Heading */}
        <div className="w-full md:w-[42%] shrink-0">
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", color: "#0d1b2a" }}
          >
            Are you ready to take the next step toward your higher education?
          </h2>
        </div>

        {/* Right: CTA buttons */}
        <div className="flex-1 flex flex-col items-end gap-4 z-10">
          <div className="w-full max-w-[320px]">
            <Button href="/admission/form" label="Application Form" />
          </div>
          <div className="flex items-center gap-5 w-full max-w-[320px] justify-center">
            <Link
              href="/support/request-info"
              className="font-semibold transition-colors duration-200 hover:text-[#2ab4c0]"
              style={{ color: "#1a2e3b", fontSize: "15px" }}
            >
              Request Info
            </Link>
            <span style={{ color: "#1a2e3b", opacity: 0.5, fontSize: "18px" }}>
              |
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}