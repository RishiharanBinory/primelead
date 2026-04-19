"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need an education consultancy London service?",
      answer:
        "Working with an education consultancy helps reduce application errors, improves understanding of funding options, and provides professional support throughout the admissions process.",
    },
    {
      question:
        "What makes PrimeLeed the best education consultancy London students choose?",
      answer:
        "We offer personalised guidance, Student Finance assistance, and full journey support from consultation to university enrolment.",
    },
    {
      question: "Can you help with Student Finance applications?",
      answer:
        "Yes. Our advisors guide students step-by-step through funding eligibility and application processes.",
    },
    {
      question: "Is the consultation free?",
      answer: "Yes, all students can book a free initial consultation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-primel-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left Side */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge — white bg, blue text, matches screenshot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-prime-blue text-sm font-semibold mb-4 sm:mb-6 border border-blue-100 shadow-sm">
              ❓ FAQ
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prime-dark mb-4 sm:mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-prime-gray mb-6 sm:mb-10">
              Find answers to common questions about our education consultancy
              services in London.
            </p>

            {/* Image with rounded corners + white border frame */}
            <div className="hidden lg:block rounded-3xl overflow-hidden shadow-xl border-8 border-white h-64 relative">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
                alt="Student studying"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <div className="w-full lg:w-7/12 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
                style={{
                  border:
                    openIndex === index
                      ? "1.5px solid #bfdbfe"
                      : "1.5px solid #e8f0fb",
                  boxShadow:
                    openIndex === index
                      ? "0 4px 20px rgba(14, 165, 233, 0.08)"
                      : "0 1px 4px rgba(0,0,0,0.04)",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span
                    className={`font-bold pr-4 sm:pr-6 text-base sm:text-lg transition-colors leading-snug ${
                      openIndex === index
                        ? "text-prime-blue"
                        : "text-prime-dark group-hover:text-prime-blue"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle — yellow when open, light blue when closed */}
                  <div
                    className="flex-shrink-0 w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200"
                    style={
                      openIndex === index
                        ? {
                            background: "#ffc501",
                            color: "#fff",
                            boxShadow: "0 2px 8px rgba(255,197,1,0.35)",
                          }
                        : { background: "#eff6ff", color: "#0ea5e9" }
                    }
                  >
                    {openIndex === index ? (
                      <Minus size={18} strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-8 sm:pb-7 text-prime-gray text-base sm:text-lg border-t border-blue-50 pt-4 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
