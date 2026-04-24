"use client";
import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const CountUp = ({ to, duration = 2 }: { to: number; duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, duration]);

  return <span ref={nodeRef}>0</span>;
};

export function SupportSection() {
  return (
    <section className="w-full bg-white overflow-hidden py-0 my-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="relative flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-8">
              <div className="w-8 sm:w-12 h-[2px] bg-[#F5C518]"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
                Student Support
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 sm:mb-8 tracking-tight">
              Empowering your journey to higher education
              <span className="text-[#2563EB]">.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-[20px] text-gray-600 leading-relaxed font-light">
              Our platform offers comprehensive support, including guidance on
              the application process, access to valuable resources, and
              personalised assistance from experienced advisors. We are
              committed to empowering students and ensuring their journey
              towards higher education is smooth and successful, regardless of
              their nationality or background.
            </p>
          </div>

          {/* Right Column: Stat Card */}
          <div className="relative group w-full order-1 lg:order-2">
            <div
              className="relative rounded-[2rem] p-10 md:p-14 overflow-hidden"
              style={{
                backgroundImage: "url('/aboutstat.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-[2rem]"></div>

              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>

              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-8xl md:text-9xl font-bold text-white tracking-tight leading-none">
                    <CountUp to={97} duration={2.5} />
                  </span>
                  <span className="text-6xl md:text-7xl font-bold text-white leading-none">
                    %
                  </span>
                </div>

                <div className="w-16 h-[2px] bg-[#F5C518] rounded-full mb-6"></div>

                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  of our students successfully have been admitted to their first
                  choice of higher education through Prime Leed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}