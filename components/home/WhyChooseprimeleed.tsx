"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  PoundSterling,
  GraduationCap,
  Briefcase,
  Globe,
  Monitor,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    title: "Student Finance Help in London",
    description:
      "We guide students through funding eligibility and Student Finance applications so financial barriers don't stop educational goals.",
    icon: PoundSterling,
  },
  {
    title: "University Application Support UK",
    description:
      "Professional support to apply to university UK institutions accurately and efficiently.",
    icon: GraduationCap,
  },
  {
    title: "Study While Working in London",
    description:
      "Flexible degree options allow students to continue employment while studying.",
    icon: Briefcase,
  },
  {
    title: "EU Students - Study & Funding in the UK",
    description:
      "Specialised guidance for EU students navigating UK university admissions and funding options.",
    icon: Globe,
  },
  {
    title: "Online & Part-Time Degrees UK",
    description:
      "Access flexible education pathways including online degrees UK programmes designed around modern lifestyles.",
    icon: Monitor,
  },
  {
    title: "End-to-End Student Support",
    description:
      "Comprehensive university support UK students receive from first enquiry through enrolment.",
    icon: HeartHandshake,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function WhyChoosePrimeLeed() {
  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

          {/* ── LEFT: Girl + Circle — hidden on mobile, visible on desktop ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            style={{ flex: "0 0 35%" }}
          >
            <div className="relative w-full h-[700px]">
              {/* Teal circle */}
              <div
                className="absolute"
                style={{
                  width: "52%",
                  paddingBottom: "52%",
                  height: 0,
                  borderRadius: "50%",
                  background: "#17A7AF",
                  top: "55%",
                  left: "43%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              {/* Girl image */}
              <Image
                src="/whyChoose.png"
                alt="Student advisor"
                fill
                className="object-contain z-10"
                priority
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Heading + Cards ──────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-8">

            {/* Heading — center on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Why <span style={{ color: "#149ab5" }}>Choose </span>Primeleed
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                We remove barriers between ambition and education — guiding
                students through every step of their UK university journey.
              </p>
            </motion.div>

            {/* 6 Cards — 1 col mobile → 2 col tablet → 3 col desktop */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group p-5 rounded-2xl border border-blue-50 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(145deg, #EFF6FF 0%, #FFFFFF 60%)",
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}