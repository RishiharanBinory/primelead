"use client";
import React from "react";
import { motion } from "framer-motion";

export function CommitmentsSection() {
  const commitments = [
    {
      title: "Honest academic guidance",
      desc: "Transparent advice tailored to your true potential.",
    },
    {
      title: "Personal course matching",
      desc: "Finding the perfect fit for your career goals.",
    },
    {
      title: "Clear funding explanation",
      desc: "Demystifying Student Finance and scholarships.",
    },
    {
      title: "Accurate application submission",
      desc: "Error-free processing to maximize acceptance.",
    },
    {
      title: "Responsive advisor support",
      desc: "Always here when you need answers.",
    },
    {
      title: "Stress-free enrolment assistance",
      desc: "Smooth transition from offer to day one.",
    },
    {
      title: "Continued support beyond admission",
      desc: "Long-term commitment to your success.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Large Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] sm:text-[30rem] lg:text-[40rem] font-black text-gray-50/80 pointer-events-none select-none z-0 leading-none">
        7
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-primel-gold text-sm font-semibold mb-4 sm:mb-6 border border-orange-100 shadow-sm">
            🤝 Our Promise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prime-dark mb-4 sm:mb-6 tracking-tight">
            Our 7 Commitments to Every Student
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[4.5rem] left-8 right-8 h-0.5 bg-gray-100 -z-10" />
          <div className="absolute top-[22.5rem] left-[20%] right-[20%] h-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-4 gap-8 mb-16">
            {commitments.slice(0, 4).map((commitment, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primel-gold/30 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-primel-gold font-black text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  0{index + 1}.
                </div>
                <h3 className="text-xl font-bold text-prime-dark mb-3 leading-tight">
                  {commitment.title}
                </h3>
                <p className="text-prime-gray text-sm">{commitment.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commitments.slice(4, 7).map((commitment, index) => (
              <motion.div
                key={index + 4}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primel-gold/30 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-primel-gold font-black text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  0{index + 5}.
                </div>
                <h3 className="text-xl font-bold text-prime-dark mb-3 leading-tight">
                  {commitment.title}
                </h3>
                <p className="text-prime-gray text-sm">{commitment.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== MOBILE: Horizontal scroll ===== */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory gap-4 hide-scrollbar">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative overflow-hidden snap-start shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="absolute -right-4 -top-6 text-7xl font-black text-gray-50 pointer-events-none">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <div className="text-primel-gold font-black text-3xl mb-3">
                    0{index + 1}.
                  </div>
                  <h3 className="text-base font-bold text-prime-dark mb-2 leading-snug">
                    {commitment.title}
                  </h3>
                  <p className="text-sm text-prime-gray leading-relaxed">
                    {commitment.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-2 gap-1.5">
            <div className="w-6 h-1.5 rounded-full bg-primel-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
