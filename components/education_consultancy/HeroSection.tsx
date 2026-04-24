"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";
import { Star, Award, Users } from "lucide-react";
import Buttontwo from "../mainComponents/Buttontwo";

const ease = "easeOut" satisfies Transition["ease"];

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease },
    },
  };

  return (
    // Removed max-h so mobile content isn't constrained; min-h keeps desktop full-viewport
    <div className="min-h-[calc(100vh-64px)] w-full relative overflow-hidden">
      <section className="relative overflow-hidden pt-8 pb-6 sm:pt-16 sm:pb-8 lg:pt-28 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Reduced gap-16 → gap-6 on mobile so there's no huge dead space */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

            {/* Left Content */}
            <motion.div
              className="max-w-2xl text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Trust badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 sm:mb-8"
                style={{
                  background: "var(--primel-lightbg)",
                  color: "var(--primel-blue)",
                  border: "1px solid var(--primel-border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      style={{ fill: "var(--yellow)", color: "var(--yellow)" }}
                    />
                  ))}
                </div>
                <span className="ml-1">Trusted by 2,000+ students</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-gsf text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 sm:mb-6 tracking-tight"
                style={{ color: "var(--dark)" }}
              >
                Trusted Education Consultancy in{" "}
                <span
                  className="relative whitespace-nowrap"
                  style={{ color: "var(--primel-blue)" }}
                >
                  London
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
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
              </motion.h1>

              {/* Body */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-xl mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                style={{ color: "var(--body-text)" }}
              >
                Looking for a trusted education consultancy London students rely
                on for university applications and funding support? PrimeLeed
                provides personalised guidance for students planning to study in
                the UK.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-5 items-center lg:items-start"
              >
                <div className="w-fit mx-auto lg:mx-0">
                  <Buttontwo
                    text="Book Free Consultation"
                    href="/contact"
                    bgColor="#149ab5"
                    textColor="#ffffff"
                    fontSize={18}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Images */}
            <motion.div
              // FIX: taller on mobile (260px), proper height on sm+ (500px), auto on lg
              className="relative h-[260px] sm:h-[500px] lg:h-[560px] w-full lg:ml-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              {/* Main image — FIX: full width/height on mobile, 85%/80% on sm+ */}
              <motion.div
                className="absolute top-0 right-0 w-full h-full sm:w-[85%] sm:h-[80%] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/consultancy.jpg"
                  alt="London Skyline"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(41,41,41,0.4), transparent)",
                  }}
                />
              </motion.div>

              {/* Overlapping image — hidden on mobile */}
              <motion.div
                className="hidden sm:block absolute bottom-0 left-0 w-[65%] h-[60%] rounded-4xl overflow-hidden border-8 border-white shadow-2xl z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.03, rotate: -2 }}
              >
                <Image
                  src="/consultancy_student.jpg"
                  alt="Students studying together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 700px) 60vw, 25vw"
                />
              </motion.div>

              {/* Stats card 1 — hidden on mobile */}
              <motion.div
                className="hidden sm:flex absolute top-12 -left-8 bg-white p-4 sm:p-5 rounded-2xl items-center gap-4 z-30"
                style={{
                  boxShadow: "var(--shadow-soft-hover)",
                  border: "1px solid var(--primel-border)",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--primel-lightbg)",
                    color: "var(--primel-blue)",
                  }}
                >
                  <Award size={24} />
                </div>
                <div>
                  <p
                    className="text-xl font-bold leading-tight font-gsf"
                    style={{ color: "var(--dark)" }}
                  >
                    98%
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--body-text)" }}
                  >
                    Success Rate
                  </p>
                </div>
              </motion.div>

              {/* Stats card 2 — hidden on mobile */}
              <motion.div
                className="hidden sm:flex absolute bottom-12 -right-8 bg-white p-4 sm:p-5 rounded-2xl items-center gap-4 z-30"
                style={{
                  boxShadow: "var(--shadow-soft-hover)",
                  border: "1px solid var(--primel-border)",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#fff8e1", color: "var(--yellow)" }}
                >
                  <Users size={24} />
                </div>
                <div>
                  <p
                    className="text-xl font-bold leading-tight font-gsf"
                    style={{ color: "var(--dark)" }}
                  >
                    3,000+
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--body-text)" }}
                  >
                    Students Enrolled
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}