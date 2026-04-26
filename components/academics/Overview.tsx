"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import Buttontwo from "../mainComponents/Buttontwo";

const ease = "easeOut" satisfies Transition["ease"];

const IMAGES = [
  { src: "/overview1.jpg", alt: "Students at university campus" },
  { src: "/overview2.jpg", alt: "London university buildings" },
  { src: "/overview5.jpg", alt: "Students celebrating graduation" },
  { src: "/overview4.jpg", alt: "Students studying together" },
];

const CARD_W = 420;
const CARD_H = 540;

const PEEK_SCALE = 0.88;
const PEEK_H = Math.round(CARD_H * PEEK_SCALE);
const PEEK_W = Math.round(CARD_W * PEEK_SCALE);
const PEEK_OFFSET_X = CARD_W - PEEK_W + 36;
const PEEK_OFFSET_Y = Math.round((CARD_H - PEEK_H) / 2);
const STAGE_W = CARD_W + 60;

const PAUSE_DURATION = 1700;
const SWEEP_MS = 300;
const SWEEP_S = SWEEP_MS / 1000;
const INTERVAL = PAUSE_DURATION + SWEEP_MS;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const nextIndex = (index + 1) % IMAGES.length;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease },
    },
  };

  return (
    <div className="sm:min-h-[calc(100vh-64px)] w-full bg-white">
      <section className="pt-8 pb-10 sm:pt-16 sm:pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">
            {/* ── Left Content ── */}
            <motion.div
              className="max-w-2xl text-center lg:text-left order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="font-gsf text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
                style={{ color: "var(--dark, #1a1a1a)" }}
              >
                Find the Right Degree
                <br />
                in London &amp; Build{" "}
                <span style={{ color: "var(--primel-blue, #149ab5)" }}>
                  Your Future
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-xl mb-9 leading-relaxed max-w-xl mx-auto lg:mx-0"
                style={{ color: "var(--body-text, #4a4a4a)" }}
              >
                Over 100 courses across 20+ universities in London, fully funded
                by the government. Primeleed guides you every step of the way,
                from choosing your course to the day you graduate. Course
                selection, application, Student Finance support, all completely
                free of charge.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
              >
                <div className="w-fit mx-auto lg:mx-0">
                  <Buttontwo
                    text="Explore Courses"
                    href="/courses"
                    bgColor="#149ab5"
                    textColor="#ffffff"
                    fontSize={18}
                  />
                </div>
                <div className="w-fit mx-auto lg:mx-0">
                  <Buttontwo
                    text="Talk to an Advisor"
                    href="/contact"
                    bgColor="#f0f0f0"
                    textColor="#1a1a1a"
                    fontSize={18}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right — Card stack ── */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
            >
              <div
                style={{
                  position: "relative",
                  width: `${STAGE_W}px`,
                  height: `${CARD_H}px`,
                  maxWidth: "100%",
                }}
              >
                {/* ── PEEK CARD ── */}
                <div
                  style={{
                    position: "absolute",
                    width: `${PEEK_W}px`,
                    height: `${PEEK_H}px`,
                    top: PEEK_OFFSET_Y,
                    left: PEEK_OFFSET_X,
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    zIndex: 1,
                  }}
                >
                  <AnimatePresence mode="sync" initial={false}>
                    <motion.div
                      key={`peek-img-${nextIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.25 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      style={{ position: "absolute", inset: 0 }}
                    >
                      <Image
                        src={IMAGES[nextIndex].src}
                        alt={IMAGES[nextIndex].alt}
                        fill
                        className="object-cover object-center"
                        sizes={`${PEEK_W}px`}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(255,255,255,0.38)",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* ── MAIN CARD ── */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${CARD_W}px`,
                    height: `${CARD_H}px`,
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    zIndex: 2,
                    boxShadow:
                      "0 20px 60px -10px rgba(0,0,0,0.20), 0 6px 20px -4px rgba(0,0,0,0.08)",
                  }}
                >
                  <AnimatePresence mode="sync" initial={false}>
                    <motion.div
                      key={`img-${index}`}
                      initial={{ x: "100%" }}
                      animate={{
                        x: "0%",
                        transition: {
                          duration: SWEEP_S,
                          ease: [0.76, 0, 0.24, 1],
                        },
                      }}
                      exit={{
                        x: "-8%",
                        opacity: 0,
                        transition: { duration: SWEEP_S * 0.6, ease: "easeIn" },
                      }}
                      style={{ position: "absolute", inset: 0, zIndex: 2 }}
                    >
                      <Image
                        src={IMAGES[index].src}
                        alt={IMAGES[index].alt}
                        fill
                        className="object-cover object-center"
                        sizes={`${CARD_W}px`}
                        priority={index === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}