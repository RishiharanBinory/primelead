"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GraduationCap } from "lucide-react";

const CountUp = ({ to, duration = 2 }: { to: number; duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

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
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ backgroundColor: "#149ab520", color: "#149ab5" }}
              >
                <GraduationCap size={20} strokeWidth={2.5} />
              </div>
              <div className="h-[2px] w-12 bg-brand-yellow rounded-full"></div>
              <span
                className="font-semibold uppercase tracking-widest text-sm"
                style={{ color: "#149ab5" }}
              >
                Student Support
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15] mb-8 tracking-tight">
              Empowering your journey to higher education
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              Our platform offers comprehensive support, including guidance on
              the application process, access to valuable resources, and
              personalised assistance from experienced advisors. We are
              committed to empowering students and ensuring their journey
              towards higher education is smooth and successful, regardless of
              their nationality or background.
            </p>
          </motion.div>

          {/* Right Column: Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background */}

            <div
              className="relative rounded-[2rem] p-10 md:p-14 overflow-hidden group"
              style={{
                backgroundColor: "#149ab5",
                boxShadow:
                  "0 20px 60px -10px rgba(20, 154, 181, 0.35), 0 8px 24px -6px rgba(20, 154, 181, 0.2)",
              }}
            >
              {/* Inner depth gradients */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64  rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>

              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-8xl md:text-9xl font-bold text-white tracking-tighter leading-none">
                    <CountUp to={97} duration={2.5} />
                  </span>
                  <span className="text-6xl md:text-7xl font-bold text-white leading-none">
                    %
                  </span>
                </div>
                <div className="w-16 h-1  rounded-full mb-6"></div>
                <p className="text-xl md:text-2xl text-white/95 font-medium leading-snug">
                  of our students successfully have been admitted to their first
                  choice of higher education through Prime Leed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
