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

// Desktop card dimensions
const CARD_W = 420;
const CARD_H = 540;

// Mobile card dimensions (smaller)
const MOBILE_CARD_W = 280;
const MOBILE_CARD_H = 340;

const PEEK_SCALE = 0.88;

// Desktop peek
const PEEK_H = Math.round(CARD_H * PEEK_SCALE);
const PEEK_W = Math.round(CARD_W * PEEK_SCALE);
const PEEK_OFFSET_X = CARD_W - PEEK_W + 36;
const PEEK_OFFSET_Y = Math.round((CARD_H - PEEK_H) / 2);
const STAGE_W = CARD_W + 60;

// Mobile peek
const MOBILE_PEEK_H = Math.round(MOBILE_CARD_H * PEEK_SCALE);
const MOBILE_PEEK_W = Math.round(MOBILE_CARD_W * PEEK_SCALE);
const MOBILE_PEEK_OFFSET_X = MOBILE_CARD_W - MOBILE_PEEK_W + 24;
const MOBILE_PEEK_OFFSET_Y = Math.round((MOBILE_CARD_H - MOBILE_PEEK_H) / 2);
const MOBILE_STAGE_W = MOBILE_CARD_W + 40;

const PAUSE_DURATION = 1700;
const SWEEP_MS = 300;
const SWEEP_S = SWEEP_MS / 1000;
const INTERVAL = PAUSE_DURATION + SWEEP_MS;

function CardStack({
  index,
  prevIndex,
  nextIndex,
  isMobile,
}: {
  index: number;
  prevIndex: number;
  nextIndex: number;
  isMobile: boolean;
}) {
  const cardW = isMobile ? MOBILE_CARD_W : CARD_W;
  const cardH = isMobile ? MOBILE_CARD_H : CARD_H;
  const peekW = isMobile ? MOBILE_PEEK_W : PEEK_W;
  const peekH = isMobile ? MOBILE_PEEK_H : PEEK_H;
  const peekOffsetX = isMobile ? MOBILE_PEEK_OFFSET_X : PEEK_OFFSET_X;
  const peekOffsetY = isMobile ? MOBILE_PEEK_OFFSET_Y : PEEK_OFFSET_Y;
  const stageW = isMobile ? MOBILE_STAGE_W : STAGE_W;

  return (
    <div
      style={{
        position: "relative",
        width: `${stageW}px`,
        height: `${cardH}px`,
        maxWidth: "100%",
      }}
    >
      {/* ── PEEK CARD ── */}
      <div
        style={{
          position: "absolute",
          width: `${peekW}px`,
          height: `${peekH}px`,
          top: peekOffsetY,
          left: peekOffsetX,
          borderRadius: "1.5rem",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            key={nextIndex}
            src={IMAGES[nextIndex].src}
            alt={IMAGES[nextIndex].alt}
            fill
            className="object-cover object-center"
            sizes={`${peekW}px`}
          />
        </div>
        {/* Frosted overlay */}
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
          width: `${cardW}px`,
          height: `${cardH}px`,
          borderRadius: "1.5rem",
          overflow: "hidden",
          zIndex: 2,
          boxShadow:
            "0 20px 60px -10px rgba(0,0,0,0.20), 0 6px 20px -4px rgba(0,0,0,0.08)",
        }}
      >
        {/*
          BASE LAYER — always shows the PREVIOUS image.
          This fills the card at all times so the white background
          is never exposed during the slide transition.
        */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <Image
            src={IMAGES[prevIndex].src}
            alt={IMAGES[prevIndex].alt}
            fill
            className="object-cover object-center"
            sizes={`${cardW}px`}
          />
        </div>

        {/*
          SLIDE LAYER — the NEW (current) image slides in from the right
          on top of the previous image. Re-mounts on every index change
          so it always starts from x: "100%".
        */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={`slide-${index}`}
            initial={{ x: "100%" }}
            animate={{
              x: "0%",
              transition: {
                duration: SWEEP_S,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            exit={{ x: "0%", transition: { duration: 0 } }}
            style={{ position: "absolute", inset: 0, zIndex: 2 }}
          >
            <Image
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              fill
              className="object-cover object-center"
              sizes={`${cardW}px`}
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % IMAGES.length;
        // Capture the outgoing index as prevIndex before advancing
        setPrevIndex(current);
        return next;
      });
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const nextIndex = (index + 1) % IMAGES.length;

  const handleExploreCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("find-course");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

            {/* ── Left Content — top on mobile, left on desktop ── */}
            <motion.div
              className="max-w-2xl text-center lg:text-left order-1"
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
                  <button
                    onClick={handleExploreCourses}
                    className="appearance-none bg-transparent border-none p-0 m-0"
                  >
                    <Buttontwo
                      text="Explore Courses"
                      href="#"
                      bgColor="#149ab5"
                      textColor="#ffffff"
                      fontSize={18}
                    />
                  </button>
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

            {/* ── Right — Card stack — below text on mobile ── */}
            <motion.div
              className="order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
            >
              <CardStack
                index={index}
                prevIndex={prevIndex}
                nextIndex={nextIndex}
                isMobile={isMobile}
              />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}