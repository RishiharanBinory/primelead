"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export function CommitmentsSection() {
  const commitments = [
    {
      title: "Honest & Personalised Guidance",
      desc: "Advice tailored to your goals, not generic recommendations.",
      image: "/st6.jpg",
    },
    {
      title: "Smart Course & University Matching",
      desc: "Carefully selecting the right course for your future success.",
      image: "/st3.jpg",
    },
    {
      title: "Clear Student Finance Support",
      desc: "Making funding simple, transparent, and easy to understand.",
      image: "/st2.jpg",
    },
    {
      title: "Accurate & Complete Applications",
      desc: "Ensuring every detail is correct to maximise your chances.",
      image: "/st4.jpg",
    },
    {
      title: "Dedicated Ongoing Support",
      desc: "Consistent guidance whenever you need it most.",
      image: "/st5.jpg",
    },
    {
      title: "Smooth Enrolment Process",
      desc: "From offer to enrolment, we handle every final step with you.",
      image: "/st1.jpg",
    },
    {
      title: "Long-Term Student Commitment",
      desc: "Supporting your journey beyond admission and into your future.",
      image: "/st7.jpg",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="font-gsf bg-white relative overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] sm:text-[28rem] lg:text-[38rem] font-bold  text-gray-50/70 pointer-events-none select-none z-0 leading-none"
      >
        7
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex text-[#000000] text-sm font-bold tracking-[0.2em] uppercase mb-4 ">
            Our Promise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-prime-dark tracking-tight leading-tight">
            Our 7 Commitments to Every Student
          </h2>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {commitments.slice(0, 4).map((item, i) => (
            <CommitmentCard key={i} item={item} index={i} variants={cardVariants} />
          ))}
        </div>

        {/* Row 2 — 3 cards centred */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 lg:w-3/4 lg:mx-auto">
          {commitments.slice(4, 7).map((item, i) => (
            <CommitmentCard key={i + 4} item={item} index={i + 4} variants={cardVariants} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────── */

type Commitment = { title: string; desc: string; image: string };

function CommitmentCard({
  item,
  index,
  variants,
}: {
  item: Commitment;
  index: number;
  variants: Variants;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={variants}
      className="group rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      {/* Image area */}
      <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Text area */}
      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1.5 text-center">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}