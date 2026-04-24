"use client";

import React, { useRef } from "react";

// ─── University data ───────────────────────────────────────────────────────────
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

// ─── Single logo card ──────────────────────────────────────────────────────────
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
        gap: "4px",
        width: "160px",
        height: "106px",
        borderRadius: "12px",
        border: "1px solid rgba(0,0,0,0.08)",
        background: "#ffffff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        padding: "8px",
        transition:
          "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        el.style.borderColor = "rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
        el.style.borderColor = "rgba(0,0,0,0.08)";
      }}
    >
      {!imgError ? (
        <img
          src={file}
          alt={name}
          onError={() => setImgError(true)}
          style={{ width: "100px", height: "500px", objectFit: "contain" }}
          draggable={false}
        />
      ) : (
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 600,
            color: "#4F46E5",
          }}
        >
          {initials}
        </div>
      )}
      <span
        style={{
          fontSize: "9px",
          fontWeight: 500,
          color: "#9CA3AF",
          textAlign: "center",
          maxWidth: "125px",
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

// ─── Scrolling row ─────────────────────────────────────────────────────────────
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
        gap: "16px",
        width: "max-content",
        animation: animationName + " 40s linear infinite",
        animationPlayState: "running",
      }}
    >
      {items.map((uni, i) => (
        <UniCard key={uni.name + "-" + i} {...uni} />
      ))}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function IntegrationHero() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');

        .integration-hero-section {
          font-family: 'Google Sans', ui-sans-serif, system-ui, sans-serif;
        }

        .dot-grid-bg {
          background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 24px 24px;
        }

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

      <section
        className="integration-hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        {/* Dot grid */}
        <div
          className="dot-grid-bg"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              padding: "4px 14px",
              marginBottom: "16px",
              fontSize: "12px",
              fontWeight: 500,
              borderRadius: "999px",
              border: "1px solid rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.8)",
              color: "#6B7280",
              letterSpacing: "0.01em",
            }}
          >
            🎓 University Partnerships
          </span>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#111827",
              maxWidth: "700px",
              margin: "0 auto 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Partner with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              top universities
            </span>{" "}
            in London & beyond
          </h2>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: "17px",
              fontWeight: 400,
              color: "#6B7280",
              maxWidth: "480px",
              margin: "0 auto 28px",
              lineHeight: 1.65,
            }}
          >
            Partnered with 20+ leading universities to help students access the
            best courses and study opportunities.
          </p>

          {/* Carousel wrapper */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              paddingBottom: "4px",
            }}
          >
            {/* Fade left */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: "100px",
                background: "linear-gradient(to right, #ffffff, transparent)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
            {/* Fade right */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: "100px",
                background: "linear-gradient(to left, #ffffff, transparent)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            {/* Row 1 — scrolls left */}
            <div style={{ overflow: "hidden" }}>
              <ScrollRow universities={UNIVERSITIES_ROW1} direction="left" />
            </div>

            {/* Row 2 — scrolls right */}
            <div style={{ overflow: "hidden", marginTop: "16px" }}>
              <ScrollRow universities={UNIVERSITIES_ROW2} direction="right" />
            </div>
          </div>

          {/* Trust line */}
          <p
            style={{
              marginTop: "40px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#D1D5DB",
            }}
          >
            Trusted by leading institutions worldwide
          </p>
        </div>
      </section>
    </>
  );
}
