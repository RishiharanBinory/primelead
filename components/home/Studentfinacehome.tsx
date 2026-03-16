"use client";

import { useEffect, useRef, useState } from "react";

export default function StudentFinance() {
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
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* Background image — zoom effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Finanace.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: animated ? "scale(1)" : "scale(1.15)",
          transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content row */}
      <div
        className="relative z-10 max-w-7xl mx-auto
                   px-5 md:px-7
                   py-12 md:py-0
                   flex flex-col md:flex-row items-center
                   gap-8 md:gap-0"
        style={{ minHeight: "520px" }}
      >
        {/* Left: Text */}
        <div
          className="w-full flex flex-col gap-5 md:gap-7"
          style={{ maxWidth: "580px", paddingRight: "0px" }}
        >
          {/* Heading */}
          <h2
            className="text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(30px, 4.5vw, 68px)",
              fontWeight: 900,
              color: "#ffffff",
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease 0s, transform 0.7s ease 0s",
            }}
          >
            Student Finance
            <br />
            England
          </h2>

          {/* Paragraph 1 */}
          <p
            className="text-white/90 leading-[1.7]"
            style={{
              fontSize: "clamp(13px, 1.15vw, 16px)",
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Student loans and grants in the United Kingdom are primarily
            provided by the government through the Student Loans Company (SLC),
            a non-departmental public body.
          </p>

          {/* Paragraph 2 */}
          <p
            className="text-white/90 leading-[1.7]"
            style={{
              fontSize: "clamp(13px, 1.15vw, 16px)",
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            The SLC is responsible for Student Finance England and Student
            Finance Wales, and is a delivery partner of Student Finance NI and
            the Student Awards Agency for Scotland.
          </p>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:w-12 shrink-0" />

        {/* Right: Video — zoom in effect */}
        <div
          className="w-full md:flex-1 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? "scale(1)" : "scale(0.92)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}
        >
          <video
            src="/Student-Finance-Explained-2022-to-2023.mp4"
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}