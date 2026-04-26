"use client";
import React, { Children } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  FileCheck,
  Send,
  Wallet,
  Clock,
  CheckCircle,
} from "lucide-react";
export function WhatWeDoSection() {
  const services = [
 {
  icon: <GraduationCap size={22} className="text-prime-blue" />,
  title: "Find the Right Course & University",
  description:
    "Discover universities and courses that match your goals and future career.",
},
{
  icon: <FileCheck size={22} className="text-prime-blue" />,
  title: "Check Your Eligibility & Entry Requirements",
  description:
    "Understand exactly what you need to qualify, no confusion, no guesswork.",
},
{
  icon: <Send size={22} className="text-prime-blue" />,
  title: "Expert Application Support",
  description:
    "Submit strong, accurate applications that maximise your chances of acceptance.",
},
{
  icon: <Wallet size={22} className="text-prime-blue" />,
  title: "Student Finance & Funding Support",
  description:
    "Get help securing tuition fee loans and maintenance funding.",
},
{
  icon: <Clock size={22} className="text-prime-blue" />,
  title: "Flexible Study Options That Fit Your Life",
  description:
    "Study around your work and lifestyle with flexible course options.",
},
{
  icon: <CheckCircle size={22} className="text-prime-blue" />,
  title: "Enrolment & Ongoing Support",
  description:
    "From offer acceptance to your first day, we're with you all the way.",
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
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <section className="pt-24 pb-14 sm:py-20 lg:py-28 bg-primel-lightbg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Intro Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-10 sm:mb-20">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-prime-blue text-sm font-semibold mb-4 sm:mb-6 border border-blue-100 shadow-sm">
               Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prime-dark mb-4 sm:mb-6 tracking-tight leading-tight">
              What Does an Education Consultancy in London Do?
            </h2>
            <p className="text-base sm:text-lg text-prime-gray leading-relaxed">
              An education consultancy helps students navigate the complex UK
              university system with confidence. Our consultants guide
              applicants through academic choices, funding opportunities, and
              admissions processes, so students receive structured professional
              guidance tailored to their goals.
            </p>
          </motion.div>

          {/* Image - hidden on mobile */}
          <motion.div
            className="hidden lg:block w-full lg:w-1/2"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                alt="Student writing notes"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-prime-blue/10 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>

        {/* ===== MOBILE: Compact list cards (single column) ===== */}
        <motion.div
          className="sm:hidden space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                {service.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-prime-dark leading-snug mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-prime-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== TABLET/DESKTOP: Grid cards ===== */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 flex flex-col h-full border-t-4 border-t-transparent hover:border-t-prime-gold hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-prime-dark mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-prime-gray mt-auto leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
