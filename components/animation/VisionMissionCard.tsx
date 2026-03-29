"use client";
import { useState, CSSProperties } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  title: string;
  text: string;
  className?: string;
  delay?: string;
  style?: CSSProperties;
};

export function VisionMissionCard({
  title,
  text,
  className = "",
  delay = "0s",
  style,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const { ref, animated } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        opacity: animated ? 1 : 0,
        transform: animated ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}, background-color 0.3s`,
        backgroundColor: hovered ? "#2ab4c0" : "#ffffff",
        cursor: "default",
      }}
    >
      <h3
        className="text-[22px] mb-4"
        style={{
          fontWeight: 900,
          color: hovered ? "#ffffff" : "#1a2e3b",
          transition: "color 0.3s",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[18px] leading-[1.8]"
        style={{
          color: hovered ? "rgba(255,255,255,0.92)" : "#4b5563",
          transition: "color 0.3s",
        }}
      >
        {text}
      </p>
    </div>
  );
}