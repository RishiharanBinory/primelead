'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function FAQSection() {
  const faqs = [
    {
      question: 'Can I study in London while working?',
      answer:
        'Yes. Many universities offer flexible programmes allowing students to balance work and study.',
    },
    {
      question: 'How to study in London with Student Finance?',
      answer:
        'Eligible students can apply for funding through Student Finance England with advisor guidance throughout the process.',
    },
    {
      question: 'Do mature students qualify to study in London?',
      answer:
        'Yes. Universities actively support mature students entering higher education.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 lg:py-28 bg-primel-lightbg">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Image & Heading */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-prime-blue text-sm font-semibold mb-6 border border-blue-100 shadow-sm">
              ❓ FAQ
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-prime-dark mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-primel-gray mb-10">
              Find answers to common questions about our education consultancy
              services in London.
            </p>

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
          <div className="w-full lg:w-7/12 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-primel-border overflow-hidden shadow-soft hover:shadow-soft-hover transition-shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 sm:px-8 sm:py-7 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span
                    className={`font-bold pr-8 text-lg transition-colors ${
                      openIndex === index
                        ? 'text-prime-blue'
                        : 'text-prime-dark group-hover:text-prime-blue'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? 'bg-primel-gold text-white shadow-md'
                        : 'bg-prime-blue/10 text-prime-blue group-hover:bg-prime-blue/20'
                    }`}
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-primel-gray text-lg border-t border-primel-border pt-4 leading-relaxed">
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
  )
}