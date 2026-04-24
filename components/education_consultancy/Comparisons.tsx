'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Check, AlertTriangle, GraduationCap, PoundSterling, Globe, Users, UserCheck, Milestone, RefreshCcw } from 'lucide-react'

const GOOGLE_SANS = "'Google Sans', 'Product Sans', system-ui, sans-serif"

const featureIcons: Record<string, React.ReactNode> = {
  'Free service for students': <PoundSterling size={16} strokeWidth={2} />,
  'Student Finance England support': <GraduationCap size={16} strokeWidth={2} />,
  'EU national specialist guidance': <Globe size={16} strokeWidth={2} />,
  'Support for mature & working students': <Users size={16} strokeWidth={2} />,
  '1-to-1 personalised advisor': <UserCheck size={16} strokeWidth={2} />,
  'Post-admission support': <Milestone size={16} strokeWidth={2} />,
  'SFE yearly reapplication help': <RefreshCcw size={16} strokeWidth={2} />,
}

const comparisons = [
  {
    feature: 'Free service for students',
    typical: { icon: 'x' as const, text: 'Often paid' },
    primeleed: 'Always free',
  },
  {
    feature: 'Student Finance England support',
    typical: { icon: 'x' as const, text: 'Rarely offered' },
    primeleed: 'Full SFE service',
  },
  {
    feature: 'EU national specialist guidance',
    typical: { icon: 'x' as const, text: 'Limited' },
    primeleed: 'Specialist expertise',
  },
  {
    feature: 'Support for mature & working students',
    typical: { icon: 'warn' as const, text: 'Not always' },
    primeleed: 'Our core focus',
  },
  {
    feature: '1-to-1 personalised advisor',
    typical: { icon: 'warn' as const, text: 'High-volume approach' },
    primeleed: 'Dedicated advisor',
  },
  {
    feature: 'Post-admission support',
    typical: { icon: 'x' as const, text: 'Stops at application' },
    primeleed: 'Support to graduation',
  },
  {
    feature: 'SFE yearly reapplication help',
    typical: { icon: 'x' as const, text: 'Not offered' },
    primeleed: 'Every year',
  },
]

function StatusIcon({ type, hovered }: { type: 'x' | 'warn' | 'check'; hovered?: boolean }) {
  if (type === 'check') {
    return (
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
        style={{
          background: hovered ? '#149ab5' : '#149ab515',
          boxShadow: hovered ? '0 4px 12px rgba(20,154,181,0.35)' : 'none',
          transform: hovered ? 'scale(1.15)' : 'scale(1)',
        }}
      >
        <Check size={12} strokeWidth={3} style={{ color: hovered ? '#fff' : '#149ab5' }} />
      </div>
    )
  }
  if (type === 'x') {
    return (
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
        style={{ background: '#fee2e2' }}
      >
        <X size={12} className="text-red-400" strokeWidth={3} />
      </div>
    )
  }
  return (
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
      style={{ background: '#fef3c7' }}
    >
      <AlertTriangle size={11} style={{ color: '#d97706' }} strokeWidth={3} />
    </div>
  )
}

export function ComparisonSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section className="bg-white relative overflow-hidden" style={{ fontFamily: GOOGLE_SANS }}>
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(20,154,181,0.06)' }} />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(255,197,1,0.06)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div
            className="text-[#000000] text-sm font-bold tracking-[0.2em] uppercase mb-5 "
            
          >
           Why Primeleed
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prime-dark mb-4 tracking-tight"
            style={{ fontFamily: GOOGLE_SANS, letterSpacing: '-0.02em' }}
          >
            Why Choose Our Education Consultancy in London
          </h2>
          <p className="text-base sm:text-lg text-prime-gray leading-relaxed">
            Choosing the right education consultancy in London can determine how smoothly your university journey begins.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE: Side-by-side comparison cards
        ══════════════════════════════════════════ */}
        <div className="sm:hidden space-y-3">
          {/* Mobile column legend */}
          <div className="grid grid-cols-2 gap-2 mb-4 px-1">
            <div
              className="rounded-xl py-2.5 flex items-center justify-center gap-2"
              style={{ background: '#f5f5f5' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#374151" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <span className="text-xs font-bold tracking-wide uppercase" style={{ color: '#111827', fontSize: '14px' }}>Others</span>
            </div>
            <div
              className="rounded-xl py-2.5 flex items-center justify-center gap-2"
              style={{ background: '#149ab5', boxShadow: '0 4px 14px rgba(20,154,181,0.3)' }}
            >
              <Check size={14} color="white" strokeWidth={3} />
              <span className="text-xs font-bold text-white tracking-wide uppercase" style={{ fontSize: '14px' }}>Primeleed</span>
            </div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              {/* Feature label */}
              <div
                className="px-4 py-2.5 flex items-center gap-3 border-b"
                style={{ background: '#fafafa', borderColor: 'rgba(0,0,0,0.07)' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#e8f8fb', color: '#149ab5' }}
                >
                  {featureIcons[item.feature]}
                </div>
                <span className="text-sm font-semibold text-gray-700 leading-tight">{item.feature}</span>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-2">
                {/* Typical */}
                <div
                  className="px-4 py-4 flex items-center gap-2 border-r"
                  style={{ background: '#fff8f8', borderColor: 'rgba(0,0,0,0.07)' }}
                >
                  <StatusIcon type={item.typical.icon} />
                  <span className="text-xs leading-snug font-medium" style={{ color: '#4b5563' }}>{item.typical.text}</span>
                </div>
                {/* Primeleed */}
                <div
                  className="px-4 py-4 flex items-center gap-2"
                  style={{ background: '#f0fbfd' }}
                >
                  <StatusIcon type="check" />
                  <span className="text-xs font-bold leading-snug" style={{ color: '#0e7d96' }}>{item.primeleed}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP: Premium comparison table
        ══════════════════════════════════════════ */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            {/* ── Header Row ── */}
            <div className="grid grid-cols-[2fr_1fr_1fr]">
              {/* Col 1 */}
              <div
                className="px-8 py-5 border-b border-r flex items-center"
                style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#f9f9f9' }}
              >
                <span
                  className="font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: GOOGLE_SANS, fontSize: '14px', color: '#111827' }}
                >
                  What to look for
                </span>
              </div>

              {/* Col 2 — Typical agents */}
              <div
                className="px-6 py-5 border-b border-r flex flex-col gap-2"
                style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#f9f9f9' }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: '#efefef' }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#374151" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <span
                  className="font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: GOOGLE_SANS, fontSize: '14px', color: '#111827' }}
                >
                  Typical London Agents
                </span>
              </div>

              {/* Col 3 — Primeleed branded */}
              <div
                className="px-6 py-5 border-b flex flex-col gap-2 relative overflow-hidden"
                style={{
                  borderColor: 'rgba(0,0,0,0.08)',
                  background: '#149ab5',
                }}
              >
                {/* Decorative orb */}
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full pointer-events-none"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                />
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center relative z-10"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <Check size={15} color="white" strokeWidth={2.5} />
                </div>
                <span
                  className="font-bold uppercase tracking-[0.2em] text-white relative z-10"
                  style={{ fontFamily: GOOGLE_SANS, fontSize: '14px' }}
                >
                  Primeleed
                </span>
              </div>
            </div>

            {/* ── Data Rows ── */}
            {comparisons.map((item, index) => {
              const isHovered = hoveredRow === index
              const isLast = index === comparisons.length - 1

              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-[2fr_1fr_1fr] ${!isLast ? 'border-b' : ''}`}
                  style={{
                    borderColor: 'rgba(0,0,0,0.06)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + index * 0.06 }}
                >
                  {/* Feature col */}
                  <div
                    className="px-8 py-5 flex items-center gap-4 border-r"
                    style={{
                      borderColor: 'rgba(0,0,0,0.06)',
                      background: isHovered ? '#f0fbfd' : 'white',
                      transition: 'background 0.18s ease',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: isHovered ? '#149ab5' : '#e8f8fb',
                        color: isHovered ? 'white' : '#149ab5',
                        transform: isHovered ? 'scale(1.08) rotate(-3deg)' : 'scale(1)',
                        boxShadow: isHovered ? '0 6px 16px rgba(20,154,181,0.28)' : 'none',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      {featureIcons[item.feature]}
                    </div>
                    <span
                      className="text-sm leading-snug"
                      style={{
                        fontFamily: GOOGLE_SANS,
                        fontWeight: 600,
                        color: isHovered ? '#0c1a24' : '#374151',
                        transition: 'color 0.18s ease',
                      }}
                    >
                      {item.feature}
                    </span>
                  </div>

                  {/* Typical agent col */}
                  <div
                    className="px-6 py-5 flex items-center gap-3 border-r"
                    style={{
                      borderColor: 'rgba(0,0,0,0.06)',
                      background: isHovered ? '#fff5f5' : '#fefafa',
                      transition: 'background 0.18s ease',
                    }}
                  >
                    <StatusIcon type={item.typical.icon} />
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: GOOGLE_SANS,
                        color: '#4b5563',
                        fontWeight: 500,
                      }}
                    >
                      {item.typical.text}
                    </span>
                  </div>

                  {/* Primeleed col */}
                  <div
                    className="px-6 py-5 flex items-center gap-3"
                    style={{
                      background: isHovered ? '#e0f7fc' : '#f4fefe',
                      transition: 'background 0.18s ease',
                    }}
                  >
                    <StatusIcon type="check" hovered={isHovered} />
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: GOOGLE_SANS,
                        fontWeight: 700,
                        color: isHovered ? '#149ab5' : '#0e4f5e',
                        transition: 'color 0.18s ease',
                      }}
                    >
                      {item.primeleed}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Bottom tagline ── */}
        <motion.p
          className="text-center mt-10 sm:mt-14 text-base sm:text-lg font-semibold text-prime-dark"
          style={{ fontFamily: GOOGLE_SANS }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
        >
          Primeleed focuses on long-term student success, not just admissions.
        </motion.p>

      </div>
    </section>
  )
}