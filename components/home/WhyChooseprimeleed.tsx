"use client";
import React from "react";
import { motion } from "framer-motion";
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
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};
export function WhyChoosePrimeLeed() {
  return (
    <section className="w-full bg-white  font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: -16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4 md:mb-6 relative inline-block">
              Why Choose PrimeLeed
              
            </h2>
            <p className="text-base md:text-xl text-gray-600 mt-3 md:mt-6 leading-relaxed px-2">
              We remove barriers between ambition and education — guiding
              students through every step of their UK university journey.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 lg:p-8 rounded-xl lg:rounded-2xl border border-brand-border shadow-sm hover:shadow-lg transition-all duration-300 group"
                style={{
                  background:
                    "linear-gradient(145deg, #eff6ff 0%, #ffffff 55%)",
                }}
              >
                {/* Mobile: icon + title inline | Desktop: stacked */}
                <div className="flex items-start gap-3 sm:block">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-blue-50 flex items-center justify-center shrink-0 sm:mb-4 lg:mb-6 relative overflow-hidden">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-brand-blue relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-black mb-1.5 sm:mb-2 lg:mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
