"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Clock,
  TrendingUp,
  Users,
  BookOpen,
  FileText,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface TimelineItem {
  milestone: string;
  duration: string;
}

interface Step {
  id: string;
  title: string;
  desc: string;
  thumbnailDesc: string; // subtitle: shown on left card AND in image overlay
  duration: string;
  image: string;
  stat: string;
  icon: React.ElementType;
  timeline?: TimelineItem[];
}

const steps: Step[] = [
  {
    id: "01",
    title: "Free Consultation",
    desc: "Every successful academic journey begins with the right advice. Our free consultation is designed to understand your ambitions, background, and future career plans in detail.",
    thumbnailDesc: "Start with expert guidance tailored to your goals.",
    duration: "STEP 1",
    image: "/consultation.jpg",
    stat: "98% Satisfaction Rate",
    icon: Users,
    timeline: [
      { milestone: "Consultation booking", duration: "Same day" },
      { milestone: "Initial session", duration: "30–60 minutes" },
      { milestone: "Follow-up recommendations", duration: "Within 24–48 hours" },
    ],
  },
  {
    id: "02",
    title: "Course & University Selection",
    desc: "Matching students with suitable programmes across our 500+ university partners worldwide.",
    thumbnailDesc: "Find the right course that matches your future.",
    duration: "STEP 2",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    stat: "500+ University Partners",
    icon: BookOpen,
    timeline: [
      { milestone: "Shortlist review", duration: "1–2 days" },
      { milestone: "Programme matching session", duration: "45–60 minutes" },
      { milestone: "Entry requirement check", duration: "Same session" },
      { milestone: "Final selection confirmed", duration: "Within 3–5 days" },
    ],
  },
  {
    id: "03",
    title: "Application Submission",
    desc: "Preparing and submitting accurate applications tailored to each institution's requirements.",
    thumbnailDesc: "A complete, accurate, and professionally guided application.",
    duration: "STEP 3",
    image: "/application.jpg",
    stat: "95% Acceptance Rate",
    icon: FileText,
    timeline: [
      { milestone: "Document review", duration: "1–2 days" },
      { milestone: "Application drafted", duration: "3–5 days" },
      { milestone: "Submitted to university", duration: "Within 1 week" },
    ],
  },
  {
    id: "04",
    title: "Student Finance Guidance",
    desc: "Supporting funding applications and documentation to secure the best available financial assistance.",
    thumbnailDesc: "Secure your funding with expert step-by-step support.",
    duration: "STEP 4",
    image: "/finance.jpg",
    stat: "£50M+ Funding Secured",
    icon: TrendingUp,
    timeline: [
      { milestone: "Eligibility assessment", duration: "Same day" },
      { milestone: "Finance application prepared", duration: "2–3 days" },
      { milestone: "Submission to Student Finance", duration: "Within 1 week" },
      { milestone: "Confirmation received", duration: "4–6 weeks" },
    ],
  },
  {
    id: "05",
    title: "Enrolment & Final Support",
    desc: "Helping students transition smoothly into university life with end-to-end enrolment assistance.",
    thumbnailDesc: "From offer to enrolment, we stay with you until the end.",
    duration: "STEP 5",
    image: "/enrollment.jpg",
    stat: "10k+ Students Enrolled",
    icon: CheckCircle,
    timeline: [
      { milestone: "Pre-enrolment checklist", duration: "1–2 days" },
      { milestone: "Registration completed", duration: "On enrolment day" },
      { milestone: "Induction support", duration: "First week" },
    ],
  },
];

const AUTO_ADVANCE_MS = 5000;

// ── Timeline panel — frosted glass, anchored bottom-right of image ─────────
function ImageTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-8 right-8"
      style={{
        width: "208px",
        background: "rgba(10, 10, 15, 0.52)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.13)",
        borderRadius: "16px",
        padding: "16px 18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "14px",
          paddingBottom: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <Clock style={{ width: "11px", height: "11px", color: "rgba(255,255,255,0.45)", flexShrink: 0 }} />
        <span
          style={{
            fontSize: "9.5px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Estimated Timeline
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" as const }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              paddingBottom: i < items.length - 1 ? "12px" : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                flexShrink: 0,
                width: "10px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  marginTop: "4px",
                  flexShrink: 0,
                  background: i === items.length - 1 ? "rgba(255,255,255,0.25)" : "#F5C518",
                  boxShadow: i === items.length - 1 ? "none" : "0 0 7px rgba(245,197,24,0.6)",
                }}
              />
              {i < items.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    flex: 1,
                    minHeight: "18px",
                    marginTop: "4px",
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.90)", lineHeight: 1.35, margin: 0 }}>
                {item.milestone}
              </p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.42)", marginTop: "3px", lineHeight: 1.3, margin: "3px 0 0" }}>
                {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Mobile timeline ────────────────────────────────────────────────────────
function MobileStepTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div style={{ marginTop: "16px", padding: "14px 16px", background: "#F8FAFC", border: "0.5px solid #E5E7EB", borderRadius: "14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
        <Clock style={{ width: "11px", height: "11px", color: "#9CA3AF", flexShrink: 0 }} />
        <span style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#9CA3AF" }}>
          Estimated Timeline
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" as const }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", paddingBottom: i < items.length - 1 ? "10px" : 0 }}>
            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", flexShrink: 0, width: "10px" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", marginTop: "4px", flexShrink: 0, background: i === items.length - 1 ? "#9CA3AF" : "#2869A3" }} />
              {i < items.length - 1 && (
                <div style={{ width: "1px", flex: 1, minHeight: "16px", marginTop: "4px", background: "#E5E7EB" }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#111827", lineHeight: 1.35, margin: 0 }}>{item.milestone}</p>
              <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "3px 0 0", lineHeight: 1.3 }}>{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView || isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
      setProgressKey((k) => k + 1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, isInView]);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goToStep(Math.min(activeIndex + 1, steps.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goToStep(Math.max(activeIndex - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e: React.TouchEvent) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goToStep(Math.min(activeIndex + 1, steps.length - 1));
    if (distance < -minSwipeDistance) goToStep(Math.max(activeIndex - 1, 0));
  };

  const activeStep = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-[#111827] font-gsf overflow-hidden flex items-center my-0 py-0"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-350 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <span className="text-[#000000] text-sm font-bold tracking-[0.2em] uppercase">How it works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
            Your <span style={{ color: "#149ab5" }}>journey</span> to university
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-stretch">

          {/* ── DESKTOP: Left Column — title + thumbnailDesc ONLY ── */}
          <div className="hidden lg:flex flex-col gap-2 relative">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const isPast = index < activeIndex;

              return (
                <motion.div
                  key={step.id}
                  onClick={() => goToStep(index)}
                  onMouseEnter={() => { setHoveredStep(index); setIsPaused(true); }}
                  onMouseLeave={() => { setHoveredStep(null); setIsPaused(false); }}
                  className={`relative cursor-pointer rounded-2xl p-5 transition-colors duration-300 ${
                    isActive
                      ? "bg-[#F8FAFC] border border-[#E5E7EB]"
                      : "hover:bg-[#FAFBFC] border border-transparent"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  {/* Row: number badge + title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? "bg-[#F5C518] text-white"
                          : isPast
                          ? "bg-[#2869A3] text-white"
                          : "bg-[#F3F4F6] text-[#9CA3AF]"
                      }`}
                    >
                      {step.id}
                    </div>
                    <h3
                      className={`text-base font-bold transition-colors duration-300 leading-snug ${
                        isActive ? "text-[#111827]" : "text-[#6B7280]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* thumbnailDesc — the ONLY text below title on left card */}
                  <p
                    className={`text-xs leading-relaxed pl-11 pr-2 transition-colors duration-300 ${
                      isActive ? "text-[#2869A3] font-medium" : "text-[#9CA3AF]"
                    }`}
                  >
                    {step.thumbnailDesc}
                  </p>

                  {/* Progress bar */}
                  {isActive && (
                    <div className="mt-3 ml-11 mr-2 h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div
                        key={progressKey}
                        className={`h-full bg-[#2869A3] rounded-full animate-progress ${isPaused ? "pause-anim" : ""}`}
                      />
                    </div>
                  )}

                  {/* Hover floating image preview */}
                  <AnimatePresence>
                    {hoveredStep === index && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-full ml-4 top-2 w-44 aspect-video rounded-xl overflow-hidden border border-[#E5E7EB] shadow-xl z-50 pointer-events-none"
                      >
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-2.5">
                          <p className="text-white text-[10px] font-semibold leading-tight">{step.thumbnailDesc}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ── DESKTOP: Right Column — Image panel ── */}
          {/* onMouseEnter/Leave here makes hovering the image pause auto-advance too */}
          <div
            className="hidden lg:block relative w-full rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg"
            style={{ minHeight: "480px" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <motion.img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 38%, transparent 60%)" }}
                />

                {/* Stat Badge — top right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute top-6 right-6 px-4 py-2.5 bg-white rounded-full border border-[#E5E7EB] flex items-center gap-2.5 shadow-md"
                >
                  <activeStep.icon className="w-4 h-4 text-[#2869A3]" />
                  <span className="text-sm font-bold text-[#111827]">{activeStep.stat}</span>
                </motion.div>

                {/* Step Counter — top left */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="absolute top-6 left-6 px-4 py-2.5 bg-white rounded-full border border-[#E5E7EB] flex items-center gap-2 shadow-md"
                >
                  <span className="text-sm font-black text-[#2869A3]">Step {activeIndex + 1}</span>
                  <span className="text-sm text-[#9CA3AF] font-medium">of {steps.length}</span>
                </motion.div>

                {/* Content — bottom left: title + thumbnailDesc + desc */}
                <div className="absolute bottom-0 left-0 p-8" style={{ maxWidth: "calc(100% - 232px)" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.45 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#F5C518] font-black text-3xl">{activeStep.id}</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-1.5">{activeStep.title}</h3>

                    {/* thumbnailDesc — yellow subtitle */}
                    <p className="text-sm font-semibold text-[#F5C518] mb-3 leading-snug">
                      {activeStep.thumbnailDesc}
                    </p>

                    {/* Full description */}
                    <p className="text-base text-white/75 leading-relaxed">{activeStep.desc}</p>
                  </motion.div>
                </div>

                {/* Timeline panel — bottom right */}
                {activeStep.timeline && activeStep.timeline.length > 0 && (
                  <ImageTimeline items={activeStep.timeline} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── MOBILE: Swipeable Carousel ── */}
          <div className="lg:hidden w-full relative">
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#F9FAFB] mb-6"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEndHandler}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img src={activeStep.image} alt={activeStep.title} className="w-full h-full object-cover" />
                  {/* thumbnailDesc overlay on mobile image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-sm font-semibold leading-snug">{activeStep.thumbnailDesc}</p>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-[#E5E7EB] flex items-center gap-2 shadow-sm">
                    <activeStep.icon className="w-3.5 h-3.5 text-[#2869A3]" />
                    <span className="text-xs font-bold text-[#111827]">{activeStep.stat}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile text — title + thumbnailDesc + desc */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#F5C518] font-black text-3xl tracking-tighter leading-none">{activeStep.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-1">{activeStep.title}</h3>
                  <p className="text-sm font-semibold text-[#2869A3] mb-3 leading-snug">{activeStep.thumbnailDesc}</p>
                  <p className="text-[#4B5563] leading-relaxed">{activeStep.desc}</p>
                  {activeStep.timeline && activeStep.timeline.length > 0 && (
                    <MobileStepTimeline items={activeStep.timeline} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#2869A3]">{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-[#9CA3AF]">/</span>
                <span className="text-sm font-medium text-[#9CA3AF]">{String(steps.length).padStart(2, "0")}</span>
              </div>
              <div className="flex items-center gap-2">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-[#2869A3]" : "w-1.5 bg-[#E5E7EB]"}`}
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
                  onClick={() => goToStep(Math.min(steps.length - 1, activeIndex + 1))}
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
  );
}