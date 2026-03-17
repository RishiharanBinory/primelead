"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  stat: string;
  title: ReactNode;
  paragraph: string;
};

export default function StatHero({ stat, title, paragraph }: Props) {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 md:px-8 lg:px-16 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Top row: stat + title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 mb-8">

          {/* Big number */}
          <span
            className="shrink-0 font-black leading-none"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(72px, 10vw, 130px)",
              color: "#0d1b2a",
              letterSpacing: "-2px",
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease 0s, transform 0.8s ease 0s",
            }}
          >
            {stat}
          </span>

          {/* Title */}
          <h2
            className="font-black leading-tight text-left"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#0d1b2a",
              letterSpacing: "-0.5px",
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.2vw, 17px)",
            color: "#374151",
            lineHeight: "1.75em",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "left",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
}