"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraph: ReactNode;
};

export default function MainHero({
  imageSrc,
  imageAlt,
  title,
  paragraph,
}: Props) {
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
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ minHeight: "480px", marginBottom: "160px" }}
    >
      {/* Background image — zoom effect */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        style={{
          transform: animated ? "scale(1)" : "scale(1.15)",
          transition: "transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      {/* Teal content box */}
      <div
        className="absolute text-white w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-auto"
        style={{
          backgroundColor: "#149AB5",
          padding:
            "clamp(32px, 6vw, 90px) clamp(24px, 5vw, 70px) clamp(40px, 7vw, 100px) clamp(24px, 5vw, 70px)",
          maxWidth: "700px",
          bottom: "-100px",
          left: "clamp(16px, 5vw, 280px)",
          opacity: animated ? 1 : 0,
          transform: animated ? "translateY(0)" : "translateY(60px)",
          transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
        }}
      >
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 60px)",
            fontWeight: "800",
            lineHeight: "1.1em",
            color: "#ffffff",
            marginBottom: "16px",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 2vw, 20px)",
            fontWeight: "400",
            lineHeight: "1.6em",
            color: "#ffffff",
            textAlign: "justify",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
          }}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
}
