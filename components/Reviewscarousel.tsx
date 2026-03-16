"use client";

import { useRef, useCallback } from "react";
import ReviewCard, { type Review } from "./ReviewCard";

const REVIEWS: Review[] = [
  {
    name: "Stella Dike",
    date: "02/10/2023",
    text: "I had an amazing experience with primeleed. The customer service was outstanding. I was so pleased with the service I received from the team.",
  },
  {
    name: "Nwanya Chukwuemeka",
    date: "02/10/2023",
    text: "They are very reliable and always look out for your interest to your admission problems. I will recommend them for this job.",
  },
  {
    name: "Jazmin Mera",
    date: "25/09/2023",
    text: "I would like to mention that Prime Leed is a very useful resource that helps students in various ways and makes their lives easier thanks to the team they have because they are very useful. Randy in particular is very patience and intelligent who always is willing to help me.",
  },
  {
    name: "Tuğba Arslan Bayat",
    date: "17/08/2023",
    text: "PrimeLeed gave me a professional service by supporting me in every aspect during my higher education application process. I am lucky to have PrimeLeed with me in this journey, and happily recommended.",
  },
  {
    name: "Mariam Shaw",
    date: "14/07/2023",
    text: "Sam and Randy were by my side in every step. I am so grateful to Primeleed team to make it so simple and easy for me to join the university this year. Thank you from me, Mariam Shaw.",
  },
  {
    name: "Zadie Chin",
    date: "10/06/2023",
    text: "Primeleed does all of the Admin that also gives you all of the Student Finances for your University Degree. All you have to do is enjoy your Course Modules and Assessments.",
  },
  {
    name: "Svyatoslav",
    date: "03/05/2023",
    text: "Primeleed family has very good service, good friendly team. Guys help quickly and specifically according to documents all operations are carried out correctly and professionally.",
  },
  {
    name: "Randy's Student",
    date: "22/04/2023",
    text: "He never gave up on me even when I was giving up on myself. He kept his cool and supported me in every area of my weaknesses. Now I am in University of Bolton to study business management. Thank you Randy!",
  },
];

const CARD_WIDTH_DESKTOP = 344;
const CARD_WIDTH_MOBILE = 280;

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  const scroll = useCallback((dir: "left" | "right") => {
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
    const visibleCards = isMobile ? 1 : 3;
    const maxScroll = cardWidth * (REVIEWS.length - visibleCards);

    if (dir === "right") {
      posRef.current = Math.min(posRef.current + cardWidth, maxScroll);
    } else {
      posRef.current = Math.max(posRef.current - cardWidth, 0);
    }
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.35s ease";
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  }, []);

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-7">
        {/* ── Mobile: stacked layout ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Excellent + stars + facebook */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-black tracking-widest text-[#1a2e3b] uppercase">
                Excellent
              </p>
              <div className="flex gap-0.5 my-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="#1877F2"
                  >
                    <path d="M8 1l1.854 3.754L14 5.469l-3 2.922.708 4.129L8 10.354l-3.708 2.166L5 8.391 2 5.469l4.146-.715z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                Based on <strong>58 reviews</strong>
              </p>
            </div>
            <p className="text-[#1877F2] font-black text-2xl tracking-tight">
              facebook
            </p>
          </div>

          {/* Cards + arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="#374151"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="overflow-hidden flex-1">
              <div ref={trackRef} className="flex">
                {REVIEWS.map((review, i) => (
                  <div key={i} className="shrink-0 w-[256px] mx-3">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="#374151"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Desktop: original side-by-side layout ── */}
        <div className="hidden md:flex items-center gap-8">
          {/* Left panel */}
          <div className="shrink-0 w-44">
            <p className="text-base font-black tracking-widest text-[#1a2e3b] uppercase">
              Excellent
            </p>
            <div className="flex gap-0.5 my-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="#1877F2"
                >
                  <path d="M8 1l1.854 3.754L14 5.469l-3 2.922.708 4.129L8 10.354l-3.708 2.166L5 8.391 2 5.469l4.146-.715z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-1">
              Based on <strong>58 reviews</strong>
            </p>
            <p className="text-[#1877F2] font-black text-2xl tracking-tight">
              facebook
            </p>
          </div>

          {/* Cards track + arrows */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={() => scroll("left")}
              className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="#374151"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="overflow-hidden flex-1">
              <div ref={trackRef} className="flex">
                {REVIEWS.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="#374151"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
