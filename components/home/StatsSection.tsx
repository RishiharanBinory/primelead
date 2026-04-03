"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  animated,
}: {
  stat: { number: string; label: string };
  index: number;
  animated: boolean;
}) {
  // Parse number and suffix (e.g. "2500+" → 2500, "+")
  const match = stat.number.match(/^(\d+)(\D*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const count = useCountUp(numericTarget, 1800, animated);

  return (
    <div
      className={`
        flex flex-col gap-2 items-center text-center
        py-6 sm:py-8 md:py-0
        ${index % 2 === 0 ? "border-r border-gray-200" : ""}
        ${index < 2 ? "border-b border-gray-200 md:border-b-0" : ""}
        md:border-r md:border-gray-200
        last:border-r-0
        px-4 sm:px-6 md:px-8
      `}
      style={{
        opacity: animated ? 1 : 0,
        transform: animated ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      <span
        className="font-black leading-none tracking-tight text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]"
        style={{ color: "#111111" }}
      >
        {animated ? count.toLocaleString() : 0}
        {suffix}
      </span>

      <span
        className="font-semibold uppercase leading-snug text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
        style={{ color: "#1a2e3b", letterSpacing: "0.08em" }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsSection() {
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "2500+", label: "Registered Students" },
    { number: "500+", label: "Courses Available" },
    { number: "15+", label: "Partnered Institutions" },
    { number: "2000+", label: "Students Enrolled" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: "#fAfAfA" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-7 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              animated={animated}
            />
          ))}
        </div>
      </div>
    </section>
  );
}