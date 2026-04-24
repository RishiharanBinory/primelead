"use client";
import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";

const ease = "easeOut" satisfies Transition["ease"];

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease },
    },
  };

  return (
    <div className="h-fit w-full relative bg-white m-0">
      {/* Teal Glow — top right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(
      circle at 100% 25%,
      rgba(20, 154, 181, 0.4),
      transparent 60%
    )`,
          filter: "blur(80px)",
        }}
      />

      {/* Hero Section */}
      <section className="w-full bg-transparent min-h-[600px] flex items-center overflow-hidden pt-24 md:pt-35 relative z-10">
        <div
          className="w-full mx-auto px-6 md:px-12 lg:px-20"
          style={{ maxWidth: "1400px" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-16">
            {/* ── LEFT / TOP: Text ─────────────────────────────────────── */}
<motion.div
  className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left md:-mt-24"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
              {/* Trust badge */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center md:justify-start"
              >
                <span className="ml-1 font-bold" style={{ color: "#149ab5" }}>About Primeleed</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-extrabold text-gray-900 leading-[1.1]"
                style={{ fontSize: "clamp(38px, 6vw, 64px)" }}
              >
                We Don&apos;t Just
                <br />
                Place Students.
                <br />
                <span style={{ color: "#149ab5" }}>We Launch</span>
                <br />
                <span style={{ color: "#149ab5" }}>Futures.</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                variants={itemVariants}
                className="text-gray-600 leading-relaxed mx-auto md:mx-0 max-w-lg"
                style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              >
                With a successful track record spanning over four years, we
                cater to both UK and EU students, guiding you through every step
                of your higher education journey.
              </motion.p>

              {/* Avatar cluster */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center md:justify-start divide-x divide-gray-300"
              >
                <div className="flex -space-x-3 pr-3">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-white hover:-translate-y-1 transition z-[1]"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"
                  />
                </div>
                <div className="pl-3">
                  <span className="text-gray-600 text-sm font-medium">
                    Trusted by students across UK &amp; EU
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT / BOTTOM: Image cluster ───────────────────────── */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <div
                className="relative w-[340px] h-[380px] md:w-[600px] md:h-[660px]"
                style={{ maxWidth: "100%" }}
              >
                {/* ── MAIN FIGURE — no shadow ──────────────────────────── */}
                <div
                  className="absolute"
                  style={{
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "clamp(200px, 55%, 390px)",
                    height: "95%",
                    zIndex: 10,
                  }}
                >
                  <Image
                    src="/about.png"
                    alt="Student"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>

                {/* Circle TL */}
                <motion.div
                  className="absolute rounded-full border-[3px] border-white shadow-xl md:shadow-none overflow-hidden"
                  style={{
                    width: "clamp(72px, 23%, 140px)",
                    height: "clamp(72px, 23%, 140px)",
                    top: "3%",
                    left: "13%",
                    zIndex: 20,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Image
                    src="/about1.jpg"
                    alt="Graduation cap"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Circle TR */}
                <motion.div
                  className="absolute rounded-full border-[3px] border-white shadow-xl md:shadow-none overflow-hidden"
                  style={{
                    width: "clamp(72px, 23%, 140px)",
                    height: "clamp(72px, 23%, 140px)",
                    top: "3%",
                    right: "8%",
                    zIndex: 20,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                >
                  <Image
                    src="/about2.jpg"
                    alt="Students in hallway"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Circle BL */}
                <motion.div
                  className="absolute rounded-full border-[3px] border-white shadow-xl md:shadow-none overflow-hidden"
                  style={{
                    width: "clamp(72px, 23%, 140px)",
                    height: "clamp(72px, 23%, 140px)",
                    top: "37%",
                    left: "1%",
                    zIndex: 20,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Image
                    src="/about3.jpg"
                    alt="University building"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Circle BR */}
                <motion.div
                  className="absolute rounded-full border-[3px] border-white shadow-xl md:shadow-none overflow-hidden"
                  style={{
                    width: "clamp(72px, 23%, 140px)",
                    height: "clamp(72px, 23%, 140px)",
                    top: "37%",
                    right: "1%",
                    zIndex: 20,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.95, duration: 0.5 }}
                >
                  <Image
                    src="/about4.jpg"
                    alt="Student portrait"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}