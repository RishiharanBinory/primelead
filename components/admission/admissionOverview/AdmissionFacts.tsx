"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 2500, suffix: "+", label: "REGISTERED", sub: "STUDENTS" },
  { number: 500, suffix: "+", label: "COURSES", sub: "AVAILABLE" },
  { number: 15, suffix: "+", label: "PARTNERED", sub: "INSTITUTIONS" },
  { number: 2000, suffix: "+", label: "STUDENTS", sub: "ENROLLED" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1600, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);
  return count;
}

function StatItem({
  stat,
  active,
  index,
}: {
  stat: (typeof stats)[0];
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.number, active);
  return (
    <div className={`flex flex-col gap-3 ${index !== 0 ? "sm:pl-10" : ""}`}>
      <p className="text-white font-extrabold text-6xl sm:text-6xl lg:text-7xl leading-none tabular-nums">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-white/55 font-semibold text-[15px] tracking-widest uppercase leading-relaxed">
        {stat.label}
        <br />
        {stat.sub}
      </p>
    </div>
  );
}

export default function AdmissionFacts() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white">
      {/* Wrapper: image + dark bg behind bottom half */}
      <div className="relative">
        {/* Dark bg — covers bottom half of this wrapper */}
        <div className="bg-[#2a2a2a] absolute bottom-0 left-0 right-0 top-1/2" />

        {/* Image wrapper */}
        <div className="relative px-4 sm:px-8 lg:px-80 pt-8 sm:pt-12 lg:pt-16">
          <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[460px]">
            <Image
              src="https://www.primeleed.com/wp-content/uploads/2020/12/1544468-ID-1544468-little-groups-with-big-ideas.jpg"
              alt="Students collaborating in a group session"
              fill
              className="object-cover object-[center_25%]"
              priority
            />

            {/* FACTS — anchored to bottom of image, half overlapping dark section */}
            <h2 className="absolute bottom-0 translate-y-1/2 inset-x-0 text-center !text-white font-black leading-none tracking-tight text-[clamp(56px,14vw,180px)] pointer-events-none select-none z-10">
              FACTS
            </h2>
          </div>
        </div>
      </div>

      {/* Dark section — stats */}
      <div className="bg-[#2a2a2a] pb-16 sm:pb-32 lg:pb-48">
        <div
          ref={statsRef}
          className="max-w-5xl mx-auto px-5 pt-24 sm:pt-32 lg:pt-40 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
