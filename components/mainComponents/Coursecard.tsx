"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export interface Course {
  id: string;
  subtitle?: string;
  specialization?: string;
  title: string;
  duration: string;
  schedule: string;
  href: string;
}

interface CourseCardProps {
  course: Course;
}

const CORNER = 36;
const NOTCH  = 56;
const SMOOTH = 10;

export default function CourseCard({ course }: CourseCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const { w, h } = size;
  const R = CORNER;
  const N = NOTCH;
  const S = SMOOTH;

  /**
   * SVG path — all corners rounded outward (R=16)
   * except the bottom-right which has a smooth concave arc.
   *
   * The two Q curves before and after the arc act as tangent
   * blenders so there is no sharp kink at the notch entry/exit.
   *
   * Clockwise from top-left:
   *   top edge → rounded top-right → right edge
   *   → Q blend in → concave arc → Q blend out
   *   → bottom edge → rounded bottom-left → left edge → close
   */
  const cardPath = w && h
    ? `
        M ${R} 0
        L ${w - R} 0
        Q ${w} 0 ${w} ${R}
        L ${w} ${h - N - S}
        Q ${w} ${h - N} ${w - S} ${h - N + S * 0.5}
        A ${N} ${N} 0 0 0 ${w - N + S * 0.5} ${h - S}
        Q ${w - N} ${h} ${w - N - S} ${h}
        L ${R} ${h}
        Q 0 ${h} 0 ${h - R}
        L 0 ${R}
        Q 0 0 ${R} 0
        Z
      `
    : "";

  const clipId = `card-clip-${course.id}`;

  return (
    <div className="group block h-full cursor-default">
      <div ref={wrapRef} className="relative h-full min-h-[210px]">

        {/* Drop shadow + white fill behind the clip */}
        {w > 0 && (
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                <path d={cardPath} />
              </clipPath>
              <filter id={`shadow-${course.id}`} x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#00000018" />
              </filter>
            </defs>
            {/* Shadow shape */}
            <path
              d={cardPath}
              fill="white"
              filter={`url(#shadow-${course.id})`}
            />
            {/* White fill */}
            <path d={cardPath} fill="white" />
          </svg>
        )}

        {/* Card content — clipped to notched shape */}
        <div
          className="relative z-10 h-full flex flex-col justify-between p-6 min-h-[210px]"
          style={
            w > 0
              ? { clipPath: `url(#${clipId})` }
              : { borderRadius: R, background: "white" }
          }
        >
          {/* Title block */}
          <div className="pr-14">
            {course.subtitle && (
              <p className="text-sm text-gray-400 leading-snug">
                {course.subtitle}
                {course.specialization && (
                  <>
                    <br />
                    {course.specialization}
                  </>
                )}
              </p>
            )}
            <h3 className="text-xl font-bold text-gray-900 mt-1 leading-tight">
              {course.title}
            </h3>
          </div>

          {/* Duration / Schedule */}
          <div className="flex gap-8 mt-6 pb-1">
            <div>
              <p className="text-xs font-semibold text-[#E07B39] uppercase tracking-wide">
                Duration
              </p>
              <p className="text-sm text-gray-700 mt-0.5">{course.duration}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#E07B39] uppercase tracking-wide">
                Schedule
              </p>
              <p className="text-sm text-gray-700 mt-0.5">{course.schedule}</p>
            </div>
          </div>
        </div>

        {/* Teal circle button — centred in the notch pocket */}
        <div
          className="
            absolute bottom-0 right-0
            w-[48px] h-[48px] rounded-full
            flex items-center justify-center
            text-white
            translate-x-1/4 translate-y-1/4
            z-20
          "
          style={{ backgroundColor: "#105E74" }}
        >
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </div>

      </div>
    </div>
  );
}