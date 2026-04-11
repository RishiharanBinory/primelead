'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Clock,
  TrendingUp,
  Users,
  BookOpen,
  FileText,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
const steps = [
  {
    id: '01',
    title: 'Free Consultation',
    desc: 'Understanding academic goals and background.',
    duration: 'STEP 1',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
    stat: '98% Satisfaction Rate',
    icon: Users,
  },
  {
    id: '02',
    title: 'Course & University Selection',
    desc: 'Matching students with suitable programmes.',
    duration: 'STEP 2',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    stat: '500+ University Partners',
    icon: BookOpen,
  },
  {
    id: '03',
    title: 'Application Submission',
    desc: 'Preparing and submitting accurate applications.',
    duration: 'STEP 3',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    stat: '95% Acceptance Rate',
    icon: FileText,
  },
  {
    id: '04',
    title: 'Student Finance Guidance',
    desc: 'Supporting funding applications and documentation.',
    duration: 'STEP 4',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
    stat: '£50M+ Funding Secured',
    icon: TrendingUp,
  },
  {
    id: '05',
    title: 'Enrolment Support',
    desc: 'Helping students transition smoothly into university life.',
    duration: 'STEP 5',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    stat: '10k+ Students Enrolled',
    icon: CheckCircle,
  },
]
const AUTO_ADVANCE_MS = 5000
export function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [progressKey, setProgressKey] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, {
    once: false,
    margin: '-100px 0px',
  })
  // Mobile swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  // Auto-advance timer — runs when section is in view and not paused by step hover
  useEffect(() => {
    if (!isInView || isPaused) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length)
      setProgressKey((k) => k + 1)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [activeIndex, isPaused, isInView])
  // Reset progress bar on manual step change
  const goToStep = (index: number) => {
    setActiveIndex(index)
    setProgressKey((k) => k + 1)
  }
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top > window.innerHeight || rect.bottom < 0) return
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        const next = Math.min(activeIndex + 1, steps.length - 1)
        goToStep(next)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const prev = Math.max(activeIndex - 1, 0)
        goToStep(prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])
  // Mobile Swipe Handlers
  const minSwipeDistance = 50
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) {
      goToStep(Math.min(activeIndex + 1, steps.length - 1))
    }
    if (distance < -minSwipeDistance) {
      goToStep(Math.max(activeIndex - 1, 0))
    }
  }
  const activeStep = steps[activeIndex]
  return (
    <section
      ref={sectionRef}
      className="relative w-full  bg-white text-[#111827] font-gsf overflow-hidden  flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-350 w-full">
        {/* Header — Centered */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="h-[2px] w-8 bg-[#F5C518]" />
            <span className="text-[#2869A3] text-sm font-bold tracking-[0.2em] uppercase">
              How it works
            </span>
            <div className="h-[2px] w-8 bg-[#F5C518]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Your{' '}
            <span className="bg-gradient-to-r from-[#2869A3] to-[#4A9FD8] bg-clip-text text-transparent">
              journey
            </span>{' '}
            to university
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-stretch">
          {/* ── DESKTOP: Left Column Navigator ── */}
          <div className="hidden lg:flex flex-col gap-2 relative">
            {steps.map((step, index) => {
              const isActive = activeIndex === index
              const isPast = index < activeIndex
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.id}
                  onClick={() => goToStep(index)}
                  onMouseEnter={() => {
                    setHoveredStep(index)
                    setIsPaused(true)
                  }}
                  onMouseLeave={() => {
                    setHoveredStep(null)
                    setIsPaused(false)
                  }}
                  className={`relative cursor-pointer rounded-2xl p-5 transition-colors duration-300 ${isActive ? 'bg-[#F8FAFC] border border-[#E5E7EB]' : 'hover:bg-[#FAFBFC] border border-transparent'}`}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                >
                  {/* Step Number + Icon Row */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-all duration-300 ${isActive ? 'bg-[#F5C518] text-white' : isPast ? 'bg-[#2869A3] text-white' : 'bg-[#F3F4F6] text-[#9CA3AF]'}`}
                    >
                      {step.id}
                    </div>
                    <h3
                      className={`text-base font-bold transition-colors duration-300 ${isActive ? 'text-[#111827]' : 'text-[#6B7280]'}`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Expandable Description */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-[#6B7280] leading-relaxed pl-11 pr-2 pb-1">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Per-step progress bar — only on active step */}
                  {isActive && (
                    <div className="mt-3 ml-11 mr-2 h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div
                        key={progressKey}
                        className={`h-full bg-[#2869A3] rounded-full animate-progress ${isPaused ? 'pause-anim' : ''}`}
                      />
                    </div>
                  )}

                  {/* Hover Preview Tooltip */}
                  <AnimatePresence>
                    {hoveredStep === index && !isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 10,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          x: 10,
                          scale: 0.95,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="absolute left-full ml-4 top-2 w-44 aspect-video rounded-xl overflow-hidden border border-[#E5E7EB] shadow-xl z-50 pointer-events-none"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* ── DESKTOP: Right Column Featured Image Card ── */}
          <div
            className="hidden lg:block relative w-full rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg"
            style={{
              minHeight: '480px',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0"
              >
                {/* Full-bleed Image — no white fade */}
                <motion.img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover"
                  initial={{
                    scale: 1.04,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                  }}
                />

                {/* Minimal bottom gradient for text readability only */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Stat Badge — top right */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                  }}
                  className="absolute top-6 right-6 px-4 py-2.5 bg-white rounded-full border border-[#E5E7EB] flex items-center gap-2.5 shadow-md"
                >
                  <activeStep.icon className="w-4 h-4 text-[#2869A3]" />
                  <span className="text-sm font-bold text-[#111827]">
                    {activeStep.stat}
                  </span>
                </motion.div>

                {/* Step Counter — top left */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="absolute top-6 left-6 px-4 py-2.5 bg-white rounded-full border border-[#E5E7EB] flex items-center gap-2 shadow-md"
                >
                  <span className="text-sm font-black text-[#2869A3]">
                    Step {activeIndex + 1}
                  </span>
                  <span className="text-sm text-[#9CA3AF] font-medium">
                    of {steps.length}
                  </span>
                </motion.div>

                {/* Content Overlay — bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.45,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#F5C518] font-black text-3xl">
                        {activeStep.id}
                      </span>
                      <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold tracking-wider text-white uppercase">
                        <Clock className="w-3.5 h-3.5 text-[#F5C518]" />
                        {activeStep.duration}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {activeStep.title}
                    </h3>

                    <p className="text-base text-white/80 leading-relaxed max-w-lg">
                      {activeStep.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── MOBILE: Swipeable Carousel ── */}
          <div className="lg:hidden w-full relative">
            {/* Swipeable Image Area */}
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#F9FAFB] mb-6"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEndHandler}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Stat Badge */}
                  <div className="absolute top-4 right-4 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-[#E5E7EB] flex items-center gap-2 shadow-sm">
                    <activeStep.icon className="w-3.5 h-3.5 text-[#2869A3]" />
                    <span className="text-xs font-bold text-[#111827]">
                      {activeStep.stat}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Area (Syncs with swipe) */}
            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[#F5C518] font-black text-3xl tracking-tighter leading-none">
                        {activeStep.id}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-xs font-bold tracking-wider text-[#4B5563] uppercase">
                      <Clock className="w-3.5 h-3.5 text-[#F5C518]" />
                      {activeStep.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#111827] mb-3">
                    {activeStep.title}
                  </h3>

                  <p className="text-[#4B5563] leading-relaxed">
                    {activeStep.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#2869A3]">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-[#9CA3AF]">/</span>
                <span className="text-sm font-medium text-[#9CA3AF]">
                  {String(steps.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#2869A3]' : 'w-1.5 bg-[#E5E7EB]'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToStep(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F9FAFB] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    goToStep(Math.min(steps.length - 1, activeIndex + 1))
                  }
                  disabled={activeIndex === steps.length - 1}
                  className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F9FAFB] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
