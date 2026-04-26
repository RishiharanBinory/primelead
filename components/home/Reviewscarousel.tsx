"use client";

import { useRef, useCallback, useEffect, useState } from "react";
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
    text: "I would like to mention that Primeleed is a very useful resource that helps students in various ways and makes their lives easier thanks to the team they have because they are very useful. Randy in particular is very patience and intelligent who always is willing to help me.",
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

const VISIBLE_DESKTOP = 3;

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopIndexRef = useRef(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileAutoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const desktopAutoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Get actual card width from DOM
  const getCardWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.children[0] as HTMLElement;
    return card ? card.offsetWidth + 16 : 0; // width + mx-2 * 2
  }, []);

  // Desktop scroll to index
  const scrollDesktopTo = useCallback(
    (index: number) => {
      if (!trackRef.current) return;
      const cardWidth = getCardWidth();
      trackRef.current.style.transition = "transform 0.4s ease";
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    },
    [getCardWidth],
  );

  const scrollDesktop = useCallback(
    (dir: "left" | "right") => {
      const maxIndex = REVIEWS.length - VISIBLE_DESKTOP;
      let next = desktopIndexRef.current + (dir === "right" ? 1 : -1);
      if (next > maxIndex) next = 0;
      if (next < 0) next = maxIndex;
      desktopIndexRef.current = next;
      scrollDesktopTo(next);
    },
    [scrollDesktopTo],
  );

  // Mobile scroll to index
  const scrollMobileTo = useCallback((index: number) => {
    if (!mobileTrackRef.current) return;
    const cardWidth = mobileTrackRef.current.offsetWidth;
    mobileTrackRef.current.style.transition = "transform 0.4s ease";
    mobileTrackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, []);

  const mobileScroll = useCallback(
    (dir: "left" | "right") => {
      setMobileIndex((prev) => {
        const next =
          dir === "right"
            ? prev >= REVIEWS.length - 1
              ? 0
              : prev + 1
            : prev <= 0
              ? REVIEWS.length - 1
              : prev - 1;
        scrollMobileTo(next);
        return next;
      });
    },
    [scrollMobileTo],
  );

  // Desktop auto-play
  useEffect(() => {
    desktopAutoPlayRef.current = setInterval(() => {
      const maxIndex = REVIEWS.length - VISIBLE_DESKTOP;
      desktopIndexRef.current =
        desktopIndexRef.current >= maxIndex ? 0 : desktopIndexRef.current + 1;
      scrollDesktopTo(desktopIndexRef.current);
    }, 3000);

    return () => {
      if (desktopAutoPlayRef.current) clearInterval(desktopAutoPlayRef.current);
    };
  }, [scrollDesktopTo]);

  // Mobile auto-play
  useEffect(() => {
    mobileAutoPlayRef.current = setInterval(() => {
      setMobileIndex((prev) => {
        const next = prev >= REVIEWS.length - 1 ? 0 : prev + 1;
        if (mobileTrackRef.current) {
          const cardWidth = mobileTrackRef.current.offsetWidth;
          mobileTrackRef.current.style.transition = "transform 0.4s ease";
          mobileTrackRef.current.style.transform = `translateX(-${next * cardWidth}px)`;
        }
        return next;
      });
    }, 3000);

    return () => {
      if (mobileAutoPlayRef.current) clearInterval(mobileAutoPlayRef.current);
    };
  }, []);

  return (
    <section className="pt-12 pb-6 md:pt-30 md:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-7">
        {/* ── Mobile layout ── */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <div className="flex flex-col items-center text-center gap-1">
            <p className="text-lg font-black tracking-widest text-[#1a2e3b] uppercase">
              Excellent
            </p>
            <div className="flex gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                  fill="#1877F2"
                >
                  <path d="M8 1l1.854 3.754L14 5.469l-3 2.922.708 4.129L8 10.354l-3.708 2.166L5 8.391 2 5.469l4.146-.715z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Based on <strong>58 reviews</strong>
            </p>
            <p className="text-[#1877F2] font-black text-3xl tracking-tight mt-1">
              facebook
            </p>
          </div>

          <div className="flex items-center gap-3 w-full">
            <button
              onClick={() => mobileScroll("left")}
              className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
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
              <div ref={mobileTrackRef} className="flex">
                {REVIEWS.map((review, i) => (
                  <div key={i} className="shrink-0 w-full px-1">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => mobileScroll("right")}
              className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
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

          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setMobileIndex(i);
                  scrollMobileTo(i);
                }}
                className="w-2 h-2 rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: i === mobileIndex ? "#1a2e3b" : "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex items-center gap-8">
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

          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={() => scrollDesktop("left")}
              className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
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
              onClick={() => scrollDesktop("right")}
              className="shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
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
