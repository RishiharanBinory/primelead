"use client";

import React, { useRef } from "react";

const UNIVERSITIES_ROW1 = [
  { name: "UCL", file: "/c1_logo.png" },
  { name: "Imperial", file: "/c2_logo.png" },
  { name: "King's College", file: "/c3_logo.png" },
  { name: "LSE", file: "/c4_logo.png" },
  { name: "Queen Mary", file: "/c5_logo.png" },
  { name: "City, London", file: "/c6_logo.png" },
];

const UNIVERSITIES_ROW2 = [
  { name: "Brunel", file: "/c7_logo.png" },
  { name: "Westminster", file: "/c8_logo.png" },
  { name: "Goldsmiths", file: "/c9_logo.png" },
  { name: "Birkbeck", file: "/c10_logo.png" },
  { name: "SOAS", file: "/c11_logo.png" },
  { name: "Royal Holloway", file: "/c12_logo.png" },
];

function repeated<T>(arr: T[], times = 4): T[] {
  return Array.from({ length: times }).flatMap(() => arr);
}

interface UniCardProps {
  name: string;
  file: string;
}

function UniCard({ name, file }: UniCardProps) {
  const [imgError, setImgError] = React.useState(false);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      title={name}
      style={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3px",
        width: "90px",
        height: "64px",
        borderRadius: "8px",
        border: "1px solid rgba(0,0,0,0.08)",
        background: "#ffffff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        padding: "6px",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        el.style.borderColor = "rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
        el.style.borderColor = "rgba(0,0,0,0.08)";
      }}
    >
      {!imgError ? (
        <img
          src={file}
          alt={name}
          onError={() => setImgError(true)}
          style={{ width: "78px", height: "52px", objectFit: "contain" }}
          draggable={false}
        />
      ) : (
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "9px",
            fontWeight: 600,
            color: "#4F46E5",
          }}
        >
          {initials}
        </div>
      )}
      <span
        style={{
          fontSize: "7px",
          fontWeight: 500,
          color: "#9CA3AF",
          textAlign: "center",
          maxWidth: "80px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </span>
    </div>
  );
}

interface ScrollRowProps {
  universities: UniCardProps[];
  direction: "left" | "right";
}

function ScrollRow({ universities, direction }: ScrollRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  const animationName = direction === "left" ? "scrollLeft" : "scrollRight";
  const items = repeated(universities, 4);

  return (
    <div
      ref={trackRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onTouchCancel={resume}
      style={{
        display: "flex",
        gap: "10px",
        width: "max-content",
        animation: `${animationName} 30s linear infinite`,
        animationPlayState: "running",
      }}
    >
      {items.map((uni, i) => (
        <UniCard key={uni.name + "-" + i} {...uni} />
      ))}
    </div>
  );
}

export default function UniCarousel() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `,
        }}
      />

      <div style={{ position: "relative", overflow: "hidden", padding: "4px 0" }}>
        {/* Fade left */}
        <div
          style={{
            position: "absolute", left: 0, top: 0,
            height: "100%", width: "60px",
            background: "linear-gradient(to right, #ffffff, transparent)",
            zIndex: 10, pointerEvents: "none",
          }}
        />
        {/* Fade right */}
        <div
          style={{
            position: "absolute", right: 0, top: 0,
            height: "100%", width: "60px",
            background: "linear-gradient(to left, #ffffff, transparent)",
            zIndex: 10, pointerEvents: "none",
          }}
        />

        <div style={{ overflow: "hidden" }}>
          <ScrollRow universities={UNIVERSITIES_ROW1} direction="left" />
        </div>
        <div style={{ overflow: "hidden", marginTop: "10px" }}>
          <ScrollRow universities={UNIVERSITIES_ROW2} direction="right" />
        </div>
      </div>
    </>
  );
}