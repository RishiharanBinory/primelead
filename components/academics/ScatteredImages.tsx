"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  images?: ImageItem[];
};

export default function ScatteredImages({
  images = [
    { src: "/Sudent_lfe.jpg", alt: "Student life" },
    { src: "/funding-student.jpg", alt: "Funding student" },
    { src: "/campus.png", alt: "Campus" },
    { src: "/hands.jpg", alt: "Students" },
    { src: "/Vission.jpeg", alt: "Vision" },
  ],
}: Props) {
  const [animated, setAnimated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const positions = [
    { z: 200, x: 0, scale: 1, opacity: 1, zIndex: 5 },
    { z: 60, x: 300, scale: 0.82, opacity: 0.75, zIndex: 4 },
    { z: -160, x: 180, scale: 0.65, opacity: 0.5, zIndex: 3 },
    { z: -160, x: -180, scale: 0.65, opacity: 0.5, zIndex: 3 },
    { z: 60, x: -300, scale: 0.82, opacity: 0.75, zIndex: 4 },
  ];

  const getPosition = (imageIndex: number) => {
    const offset = (imageIndex - activeIndex + images.length) % images.length;
    return positions[offset];
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-1 md:py-1 overflow-hidden mb-10 md:mb-20"
    >
      {/* ── Mobile: single image centered ── */}
      <div className="flex flex-col items-center gap-6 md:hidden px-5">
        <div
          className="relative w-full max-w-85 mx-auto overflow-hidden rounded-2xl shadow-2xl"
          style={{
            aspectRatio: "4/3",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            fill
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Mobile dots */}
        <div className="flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === activeIndex ? "#0090AA" : "#d1d5db",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop: 3D tilted downward carousel ── */}
      <div
        className="hidden md:flex items-center justify-center relative"
        style={{ height: "560px", perspective: "1200px" }}
      >
        <div
          className="relative"
          style={{
            width: "320px",
            height: "400px",
            transformStyle: "preserve-3d",
            transform: "rotateX(-25deg)", // ← negative = tilts downward
          }}
        >
          {images.map((image, i) => {
            const pos = getPosition(i);
            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className="absolute cursor-pointer"
                style={{
                  width: "320px",
                  height: "400px",
                  top: "50%",
                  left: "50%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow:
                    pos.zIndex === 5
                      ? "0 30px 80px rgba(0,0,0,0.35)"
                      : "0 10px 30px rgba(0,0,0,0.2)",
                  transform: `
                    translate(-50%, -50%)
                    translateX(${animated ? pos.x : 0}px)
                    translateZ(${animated ? pos.z : -200}px)
                    scale(${animated ? pos.scale : 0.5})
                  `,
                  opacity: animated ? pos.opacity : 0,
                  zIndex: pos.zIndex,
                  transition: `
                    transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    opacity 0.7s ease,
                    box-shadow 0.3s ease
                  `,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {pos.zIndex !== 5 && (
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Left arrow */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
          }
          className="absolute left-[10%] z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          style={{
            opacity: animated ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="#1a2e3b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-[10%] z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          style={{
            opacity: animated ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4l4 4-4 4"
              stroke="#1a2e3b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Desktop dots */}
      <div className="hidden md:flex justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: i === activeIndex ? "#0090AA" : "#d1d5db",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              opacity: animated ? 1 : 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
//release1.0
