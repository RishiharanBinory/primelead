"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

export function StudentsSection() {
  const students = [
    {
      title: "School leavers starting higher education",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    },
    {
      title: "Mature students returning to study",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    },
    {
      title: "Professionals changing careers",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
      title: "Students seeking flexible degrees",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
    },
    {
      title: "EU students exploring UK study options",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    },
    {
      title: "Individuals balancing study and work",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      } as Transition,
    },
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-primel-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-prime-blue text-sm font-semibold mb-4 sm:mb-6 border border-blue-100 shadow-sm">
            👥 Who We Help
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prime-dark mb-3 sm:mb-6 tracking-tight">
            Students We Support in London
          </h2>
          <p className="text-base sm:text-lg text-prime-gray leading-relaxed">
            Our education consultancy London services support a wide range of
            students from diverse backgrounds.
          </p>
        </div>

        {/* ===== MOBILE: Horizontal scroll ===== */}
        <div className="sm:hidden">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory gap-4 hide-scrollbar">
            {students.map((student, index) => (
              <motion.div
                key={index}
                className="relative w-70 h-56 rounded-2xl overflow-hidden group shadow-md snap-start shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Image
                  src={student.image}
                  alt={student.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-prime-dark/90 via-prime-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <div className="w-8 h-0.5 bg-prime-gold mb-3 rounded-full" />
                  <h3 className="font-bold text-white text-base leading-snug">
                    {student.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-2 gap-1.5">
            <div className="w-6 h-1.5 rounded-full bg-prime-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* ===== TABLET/DESKTOP: Grid ===== */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {students.map((student, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-64 lg:h-80 rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={student.image}
                alt={student.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-prime-dark/90 via-prime-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-1 bg-prime-gold mb-4 rounded-full" />
                <h3 className="font-bold text-white text-lg lg:text-2xl leading-snug">
                  {student.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
