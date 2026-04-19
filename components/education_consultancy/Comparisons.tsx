'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

export function ComparisonSection() {
  const comparisons = [
    {
      standard: 'General advice',
      primeleed: 'Personalised academic planning',
    },
    {
      standard: 'Limited application help',
      primeleed: 'End-to-end university support',
    },
    {
      standard: 'Minimal funding guidance',
      primeleed: 'Full Student Finance assistance',
    },
    {
      standard: 'One-time interaction',
      primeleed: 'Continuous student support',
    },
    {
      standard: 'Complex process',
      primeleed: 'Clear step-by-step journey',
    },
  ]

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(255,197,1,0.05)' }} />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-red-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4 sm:mb-6 border shadow-sm"
            style={{ background: '#fffbeb', color: '#ffc501', borderColor: '#fde68a' }}
          >
            ⭐ Why PrimeLeed
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prime-dark mb-4 sm:mb-6 tracking-tight">
            Why Choose Our Education Consultancy in London
          </h2>
          <p className="text-base sm:text-lg text-prime-gray leading-relaxed">
            Choosing the right education consultancy in London can determine how
            smoothly your university journey begins.
          </p>
        </div>

        {/* ===== MOBILE: Stacked comparison cards ===== */}
        <div className="sm:hidden space-y-4 max-w-md mx-auto">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="px-5 py-3.5 bg-red-50/60 flex items-center gap-3 border-b border-red-100/50">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <X size={14} className="text-red-500" />
                </div>
                <span className="text-gray-700 font-medium line-through decoration-red-300/60">
                  {item.standard}
                </span>
              </div>
              <div className="px-5 py-3.5 bg-green-50/40 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-prime-green" strokeWidth={3} />
                </div>
                <span className="text-prime-dark font-semibold">{item.primeleed}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== DESKTOP/TABLET: Side-by-side table ===== */}
        <motion.div
          className="hidden sm:block max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-2">
              <div className="bg-red-50 px-8 py-5 border-b border-red-100 flex items-center justify-center gap-2">
                <X size={16} className="text-red-400" />
                <h3 className="text-lg font-bold text-red-400 text-center">
                  Standard Consultancy
                </h3>
              </div>
              <div
                className="px-8 py-5 border-b flex items-center justify-center gap-2"
                style={{ background: '#149ab5', borderColor: '#e6b200' }}
              >
                <Check size={16} className="text-white" />
                <h3 className="text-lg font-bold text-white text-center">
                  PrimeLeed Education
                </h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-2 ${index < comparisons.length - 1 ? 'border-b border-gray-100' : ''}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                <div className="px-8 py-5 flex items-center gap-4 bg-red-50/30">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={12} className="text-red-500" />
                  </div>
                  <span className="text-base text-gray-700 font-medium line-through decoration-red-300/50">
                    {item.standard}
                  </span>
                </div>
                <div className="px-8 py-5 flex items-center gap-4 bg-green-50/30">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={12} className="text-prime-green" strokeWidth={3} />
                  </div>
                  <span className="text-base text-prime-dark font-semibold">
                    {item.primeleed}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA */}
            <div className="bg-prime-light-blue px-8 py-5 flex items-center justify-center">


            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-center mt-8 sm:mt-12 text-base sm:text-lg font-semibold text-prime-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          PrimeLeed focuses on long-term student success, not just admissions.
        </motion.p>
      </div>
    </section>
  )
}