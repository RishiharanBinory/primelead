"use client";
import React, { useEffect, useRef, Children } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
};
const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, inView, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}
export function AboutHero() {
  return (
    <section className="relative w-full min-h-[90vh] py-8 px-6 md:px-12 lg:px-20 flex items-center justify-center bg-[#fffff] overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center z-10">
        {/* LEFT COLUMN: Text & Hook */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUpVariants} className="inline-block mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primel-blue border border-blue-200 bg-blue-50/50 px-3 py-1.5 rounded-full">
              About Primeleed
            </span>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
              We Don&apos;t Just Place Students. <br />
              <span className="relative inline-block mt-3">
                <span className="relative z-10 text-primel-blue">
                  We Launch Futures.
                </span>
                {/* Custom SVG Underline for editorial feel */}
                <svg
                  className="absolute -bottom-2 left-0 w-[300px] h-3"
                  style={{ color: "var(--yellow)", opacity: 0.5 }}
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,0 100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl leading-relaxed text-gray-600 mb-10 max-w-lg font-medium"
          >
            With a successful track record spanning over four years, we cater to
            both UK and EU students, guiding you through every step of your
            higher education journey.
          </motion.p>

          {/* Social Proof Avatars */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-2 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Student avatar"
                  className="w-9 h-9 rounded-full border-2 border-[#fafaf9] object-cover shadow-sm"
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 font-medium">
              Trusted by students across{" "}
              <strong className="text-[#111827]">UK & EU</strong>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Visuals & Stats Collage */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="relative w-full h-[450px] md:h-[550px] lg:h-[600px]"
        >
          {/* Main Image */}
          <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] border-[8px] border-white group">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
              alt="Students celebrating their university placements"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Secondary Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              y: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
            }}
            className="absolute bottom-[5%] left-0 w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.15)] border-[8px] border-white z-10 -rotate-2 hover:rotate-0 transition-all duration-500 ease-out group"
          >
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
              alt="University Campus"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </motion.div>

          {/* Floating Stat Card 1: Students */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[10%] -left-4 md:-left-8 bg-white px-6 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 z-20 flex flex-col items-start"
          >
            <div className="text-4xl font-extrabold text-[#149ab5] tracking-tight mb-1">
              <AnimatedCounter value={2000} suffix="+" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Students Placed
            </div>
          </motion.div>

          {/* Floating Stat Card 2: Years */}
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[15%] -right-4 md:-right-6 bg-white px-6 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 z-20 flex flex-col items-start"
          >
            <div className="text-4xl font-extrabold text-[#149ab5] tracking-tight mb-1">
              <AnimatedCounter value={4} suffix="+" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Years of Excellence
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
