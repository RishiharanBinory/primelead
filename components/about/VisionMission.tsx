"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function VisionMission() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: EASE,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: EASE,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28">
      <motion.div
        className="max-w-[1400px] mx-auto w-full flex flex-col gap-20 sm:gap-28 lg:gap-36 px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Row 1: Vision — Image on top (mobile), left (desktop) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center gap-8 sm:gap-10">
          {/* Image */}
          <motion.div variants={imageVariant} className="relative group w-full">
            {/* Yellow accent bar — hidden on mobile to avoid overflow issues */}
            <div className="hidden lg:block absolute -left-4 top-12 bottom-12 w-[2px] bg-[#F5C518] opacity-50 rounded-full z-10" />
            <div className="w-full h-[260px] sm:h-[360px] lg:h-[520px] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-black/5 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              <Image
                src="/vision.jpg"
                alt="Students collaborating in a bright space"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={item} className="flex flex-col justify-center">
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[2px] bg-[#F5C518]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
                The Future
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
              Our Vision<span className="text-[#2563EB]">.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-600 leading-relaxed font-light">
              Our vision is to empower lives through higher education, unlocking
              potential and creating positive impact by providing accessible and
              inclusive opportunities for personal growth and societal
              contribution.
            </p>
          </motion.div>
        </div>

        {/* Row 2: Mission — Image on top (mobile), right (desktop) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center gap-8 sm:gap-10">
          {/* Image — first on mobile, second on desktop */}
          <motion.div
            variants={imageVariant}
            className="relative group w-full lg:order-2"
          >
            <div className="hidden lg:block absolute -right-4 top-12 bottom-12 w-[2px] bg-[#F5C518] opacity-50 rounded-full z-10" />
            <div className="w-full h-[260px] sm:h-[360px] lg:h-[520px] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[#2563EB]/5 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Warm educational setting"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text — second on mobile, first on desktop */}
          <motion.div
            variants={item}
            className="flex flex-col justify-center lg:order-1"
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[2px] bg-[#F5C518]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
                Our Purpose
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
              Our Mission<span className="text-[#2563EB]">.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-600 leading-relaxed font-light">
              Our mission is to empower students in the UK and EU by providing
              comprehensive support and guidance for higher education, breaking
              down barriers and fostering personal and professional growth.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
