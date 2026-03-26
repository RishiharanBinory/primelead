"use client";

import Image from "next/image";
import { useState } from "react";

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  images?: ImageItem[];
};

/**
 * Carefully measured from Image 1 (the original target).
 * Viewport ~1500px wide. Section height 520px (tight, no excess whitespace).
 *
 * Image 1 layout:
 *  [0] Left-top small:      library/classroom   ~195×190  top:245  left:17%  rotate:-2  zIndex:1
 *  [1] Left-bottom large:   student group       ~195×195  top:390  left:25%  rotate:2   zIndex:2
 *  [2] Center:              campus building     ~205×200  top:170  left:42%  rotate:0   zIndex:1
 *  [3] Right-top large:     smiling student     ~200×195  top:235  left:70%  rotate:3   zIndex:2
 *  [4] Right-bottom small:  campus entrance     ~200×200  top:365  left:62%  rotate:-3  zIndex:1
 */
const layout = [
  { top: 180, left: "17%", width: 260, height: 260, rotate: 0, zIndex: 1 },
  { top: 390, left: "25%", width: 260, height: 260, rotate: 0, zIndex: 2 },
  { top: 10, left: "42%", width: 260, height: 260, rotate: 0, zIndex: 1 },
  { top: 180, left: "70%", width: 260, height: 260, rotate: 0, zIndex: 1 },
  { top: 390, left: "62%", width: 260, height: 260, rotate: 0, zIndex: 2 },
];

export default function ScatteredImages({
  images = [
    { src: "/Sudent_lfe.jpg", alt: "Student life" },
    { src: "/hands.jpg", alt: "Students" },
    { src: "/campus.png", alt: "Campus" },
    { src: "/Vission.jpeg", alt: "Vision" },
    { src: "/funding-student.jpg", alt: "Funding student" },
  ],
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      {/* ── MOBILE: single image + dot nav ── */}
      <div className="flex flex-col items-center gap-5 md:hidden px-5 py-10">
        <div
          className="relative w-full overflow-hidden shadow-xl"
          style={{
            maxWidth: "340px",
            aspectRatio: "4/3",
            borderRadius: "12px",
          }}
        >
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            fill
            className="object-cover"
            style={{ transition: "opacity 0.4s ease" }}
          />
        </div>

        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show image ${i + 1}`}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === activeIndex ? "#0090AA" : "#d1d5db",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: scattered collage matching Image 1 ── */}
      <div
        className="hidden md:block relative w-full"
        style={{ height: "580px" }}
      >
        {images.slice(0, layout.length).map((image, i) => {
          const pos = layout[i];
          return (
            <div
              key={i}
              className="absolute overflow-hidden"
              style={{
                top: `${pos.top}px`,
                left: pos.left,
                width: `${pos.width}px`,
                height: `${pos.height}px`,
                transform: `rotate(${pos.rotate}deg)`,
                borderRadius: "10px",
                zIndex: pos.zIndex,
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
