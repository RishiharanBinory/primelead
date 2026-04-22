"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Buttontwo from "../mainComponents/Buttontwo";
import Example from "./Trust";

// ------------------------------------------------------------------
// Touch detection
// ------------------------------------------------------------------
function detectTouch(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

// ------------------------------------------------------------------
// Scroll parallax — RAF throttled, passive listener
// ------------------------------------------------------------------
function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return scrollY;
}

// ------------------------------------------------------------------
// ParallaxImage
// ------------------------------------------------------------------
interface ParallaxImageProps {
  src: string;
  alt: string;
  figmaHeight: number;
  naturalWidth: number;
  naturalHeight: number;
  rotation: number;
  scrollSpeedY: number;
  scrollY: number;
  revealDelay: number;
  scale: number;
  zIndex: number;
  floatVariant?: "a" | "b" | "c";
  isTouch?: boolean;
  style?: React.CSSProperties;
  priority?: boolean;
}

function ParallaxImage({
  src,
  alt,
  figmaHeight,
  naturalWidth,
  naturalHeight,
  rotation,
  scrollSpeedY,
  scrollY,
  revealDelay,
  scale,
  zIndex,
  floatVariant = "a",
  isTouch = false,
  style = {},
  priority = false,
}: ParallaxImageProps) {
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), revealDelay);
    return () => clearTimeout(t);
  }, [revealDelay]);

  const h = Math.round(figmaHeight * scale);
  const w = Math.round((naturalWidth / naturalHeight) * h);
  const drift = -(scrollY * scrollSpeedY) / 100;
  const floatDuration =
    floatVariant === "b" ? "7s" : floatVariant === "c" ? "4.5s" : "5.5s";
  const hoverTransform =
    hovered && !isTouch && revealed
      ? "rotate3d(0.4, -0.6, 0, 5deg) scale(1.04)"
      : "rotate3d(0, 0, 0, 0deg) scale(1)";
  const entranceScale = revealed ? 1 : 0.82;
  const entranceOpacity = revealed ? 1 : 0;
  const entranceFilter = revealed ? "blur(0px)" : "blur(8px)";

  return (
    <div
      style={{
        position: "absolute",
        transform: `translateY(${drift}px) rotate(${rotation}deg)`,
        willChange: "transform",
        zIndex,
        lineHeight: 0,
        ...style,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: "45px",
          boxShadow: revealed
            ? "0 0 0 5px #ffffff, 0 24px 48px rgba(0,0,0,0.18), 0 8px 16px rgba(0,0,0,0.10)"
            : "0 0 0 5px #ffffff",
          transform: `scale(${entranceScale}) ${hoverTransform}`,
          opacity: entranceOpacity,
          filter: entranceFilter,
          transition: revealed
            ? [
                "transform 0.55s cubic-bezier(0.34,1.56,0.64,1)",
                "box-shadow 0.4s ease",
                "opacity 0.08s linear",
                "filter 0.08s linear",
              ].join(", ")
            : [
                `transform 1.15s cubic-bezier(0.34,1.56,0.64,1) ${revealDelay}ms`,
                `opacity 1.05s cubic-bezier(0.16,1,0.3,1) ${revealDelay}ms`,
                `filter 1.05s cubic-bezier(0.16,1,0.3,1) ${revealDelay}ms`,
                `box-shadow 1.05s cubic-bezier(0.16,1,0.3,1) ${revealDelay}ms`,
              ].join(", "),
          animation: revealed
            ? `float-${floatVariant} ${floatDuration} ease-in-out infinite`
            : "none",
          willChange: "transform, opacity, filter",
          cursor: "default",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          priority={priority}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 35vw, 500px"
          style={{
            display: "block",
            objectFit: "cover",
            width: `${w}px`,
            height: `${h}px`,
            borderRadius: "45px",
          }}
        />
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Hero section
// ------------------------------------------------------------------
export default function StudyInLondon() {
  const [isTouch] = useState<boolean>(detectTouch);
  const scrollY = useScrollY();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 400) setScale(0.34);
      else if (w < 480) setScale(0.42);
      else if (w < 640) setScale(0.52);
      else if (w < 768) setScale(0.62);
      else if (w < 1024) setScale(0.72);
      else if (w < 1280) setScale(0.86);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const clusterW = Math.round(700 * scale);
  const clusterH = Math.round(900 * scale);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:FILL@0..1&display=swap');

        section, section * {
          font-family: 'Google Sans Flex', 'Google Sans', sans-serif !important;
        }

        @keyframes float-a {
          0%   { transform: translateY(0px)    scale(1); }
          30%  { transform: translateY(-7px)   scale(1.005); }
          60%  { transform: translateY(-11px)  scale(1.008); }
          100% { transform: translateY(0px)    scale(1); }
        }
        @keyframes float-b {
          0%   { transform: translateY(0px)    scale(1); }
          40%  { transform: translateY(-15px)  scale(1.01); }
          70%  { transform: translateY(-9px)   scale(1.005); }
          100% { transform: translateY(0px)    scale(1); }
        }
        @keyframes float-c {
          0%   { transform: translateY(0px)   scale(1); }
          50%  { transform: translateY(-8px)  scale(1.006); }
          100% { transform: translateY(0px)   scale(1); }
        }

        @keyframes shimmer-once {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hs-in {
          font-size: 64px;
          font-weight: 800;
          font-variation-settings: 'wght' 800;
          line-height: 1.1;
          color: #1a1a1a;
          display: block;
          letter-spacing: -1px;
        }
        .hs-london {
          font-size: 96px;
          font-weight: 900;
          font-variation-settings: 'wght' 900;
          line-height: 1;
          color: #1a1a1a;
          display: block;
          letter-spacing: -2px;
        }
        .hs-subtitle {
          font-size: 30px;
          font-weight: 600;
          font-variation-settings: 'wght' 600;
          color: #1a1a1a;
          margin-top: 24px;
          line-height: 1.3;
          margin-bottom: 0;
        }
        .hs-desc {
          font-size: 20px;
          font-weight: 400;
          font-variation-settings: 'wght' 400;
          color: #3a3a3a;
          margin-top: 16px;
          line-height: 1.55;
          max-width: 560px;
          margin-bottom: 0;
          padding-bottom: 0; 
        }

        .hs-wrap {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          position: relative;
        }

        .hs-text {
          flex: 1 1 300px;
          max-width: 580px;
          z-index: 2;
          margin-top: -200px;
        }
          @media (max-width: 1280px) {
  .hs-text { margin-top: -120px; }
}

@media (max-width: 1023px) {
  .hs-text { margin-top: -80px; }
}

        /* Floating logo: visible on desktop/tablet, hidden on mobile */
        .hs-logo-floating {
          display: block;
          position: absolute;
          top: 40px;
          left: 30%;
          transform: translateX(-50%);
          z-index: 10;
          pointer-events: none;
        }

        /* Inline logo: hidden on desktop, shown on mobile */
        .hs-logo-mobile {
          display: none;
          margin-bottom: 16px;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        .hs-reveal-wrap {
          overflow: hidden;
          display: block;
        }
        .hs-reveal-item {
          display: block;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hs-reveal-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hs-cta-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-top: 32px;
        }

        .hs-side-image { display: block; }

        /* ── TABLET ── */
        @media (max-width: 1023px) {
          .hs-wrap     { padding: 60px 40px 0; }
          .hs-in       { font-size: 48px !important; letter-spacing: -0.5px !important; }
          .hs-london   { font-size: 72px !important; letter-spacing: -1.5px !important; }
          .hs-subtitle { font-size: 22px !important; margin-top: 16px !important; }
          .hs-desc     { font-size: 18px !important; margin-top: 12px !important; }
          .hs-logo-floating {
            top: 30px;
            left: 38%;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 767px) {
          .hs-wrap {
            flex-direction: column !important;
            align-items: center !important;
            padding: 40px 20px 0px !important;
            gap: 20px !important;
          }
          .hs-text {
            max-width: 100% !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            margin-top: 0 !important;
          }
          .hs-desc { text-align: left !important; }
          .hs-in     { font-size: 36px !important; letter-spacing: -0.5px !important; }
          .hs-london { font-size: 56px !important; letter-spacing: -1px !important; }
          .hs-subtitle { font-size: 18px !important; }
          .hs-desc     { font-size: 16px !important; }

          .hs-cta-row {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 12px 16px !important;
            margin-top: 24px !important;
            width: 100% !important;
          }

          .hs-side-image { display: none !important; }

          /* Hide floating logo on mobile — it overlaps text */
          .hs-logo-floating { display: none !important; }

          /* Show inline logo above heading on mobile */
          .hs-logo-mobile {
            display: flex !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 400px) {
          .hs-in     { font-size: 30px !important; }
          .hs-london { font-size: 46px !important; }
          .hs-wrap   { padding: 32px 16px 0!important; }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes float-a { 0%, 100% { transform: none; } }
          @keyframes float-b { 0%, 100% { transform: none; } }
          @keyframes float-c { 0%, 100% { transform: none; } }
        }
      `}</style>

      <div className="hs-wrap">
        {/* ── FLOATING LOGO — desktop/tablet only ── */}
        <div className="hs-logo-floating">
          <Image
            src="/logo1.png"
            alt="Primeleed logo"
            width={220}
            height={220}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* ── TEXT ── */}
        <div className="hs-text">
          <TextReveal>
            {/* ── INLINE LOGO — mobile only, above heading ── */}
            <div className="hs-logo-mobile">
              <Image
                src="/logo1.png"
                alt="Primeleed logo"
                width={200}
                height={88}
                priority
                style={{ objectFit: "contain", display: "block" }}
              />
            </div>

            <h1 style={{ margin: 0, padding: 0 }}>
              <RevealLine delay={0}>
                <span className="hs-in">Study in</span>
              </RevealLine>
              <RevealLine delay={80}>
                <span className="hs-london">London</span>
              </RevealLine>
            </h1>

            <RevealLine delay={160}>
              <p className="hs-subtitle">
                Universities, Courses &amp; Student Finance Support
              </p>
            </RevealLine>

            <RevealLine delay={220}>
              <p className="hs-desc">
                If you’re planning to study in London, choosing the right
                university, course, and funding pathway can feel overwhelming.
                PrimeLeed guides students step-by-step, from course selection to
                Student Finance support, helping you confidently start your
                journey to study in London and build a strong academic future.
              </p>
            </RevealLine>

            <RevealLine delay={300}>
              <div className="hs-cta-row">
                <Buttontwo
                  text="Apply Now"
                  href="/admission/form"
                  bgColor="#149ab5"
                  textColor="#ffffff"
                  fontSize={20}
                />
                <Example />
              </div>
            </RevealLine>
          </TextReveal>
        </div>

        {/* ── IMAGE CLUSTER ── */}
        <MobileAwareCluster
          clusterW={clusterW}
          clusterH={clusterH}
          scale={scale}
          isTouch={isTouch}
          scrollY={scrollY}
        />
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Cluster: mobile = single Big Ben (smaller), desktop = full 3-image cluster
// ------------------------------------------------------------------
function MobileAwareCluster({
  clusterW,
  clusterH,
  scale,
  isTouch,
  scrollY,
}: {
  clusterW: number;
  clusterH: number;
  scale: number;
  isTouch: boolean;
  scrollY: number;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [vw, setVw] = useState(375);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 767);
      setVw(w);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    const mobileW = Math.round(vw * 0.65);
    const mobileH = Math.round((649 / 400) * mobileW);

    return (
      <div
        style={{
          position: "relative",
          width: `${mobileW}px`,
          height: `${mobileH}px`,
          margin: "0 auto",
          pointerEvents: "none",
        }}
      >
        <ParallaxImage
          src="/home1.jpg"
          alt="Big Ben London"
          figmaHeight={mobileH}
          naturalWidth={400}
          naturalHeight={649}
          rotation={0}
          scrollSpeedY={0}
          scrollY={0}
          revealDelay={150}
          scale={1}
          zIndex={2}
          floatVariant="b"
          isTouch={isTouch}
          priority
          style={{ top: 0, left: 0 }}
        />
      </div>
    );
  }

  // Desktop — full three-image cluster
  return (
    <div
      style={{
        position: "relative",
        flex: "0 0 auto",
        width: `${clusterW}px`,
        height: `${clusterH}px`,
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      {/* TOP — Campus */}
      <div className="hs-side-image" style={{ pointerEvents: "auto" }}>
        <ParallaxImage
          src="/home3.jpg"
          alt="University campus"
          figmaHeight={230.88}
          naturalWidth={204.66}
          naturalHeight={272.88}
          rotation={17.02}
          scrollSpeedY={isTouch ? 0 : 0.04}
          scrollY={scrollY}
          revealDelay={350}
          scale={scale}
          zIndex={1}
          floatVariant="c"
          isTouch={isTouch}
          style={{
            top: `${Math.round(-50 * scale)}px`,
            right: `${Math.round(100 * scale)}px`,
          }}
        />
      </div>

      {/* MAIN — Big Ben */}
      <div style={{ pointerEvents: "auto" }}>
        <ParallaxImage
          src="/home1.jpg"
          alt="Big Ben London"
          figmaHeight={649}
          naturalWidth={400}
          naturalHeight={649}
          rotation={0}
          scrollSpeedY={isTouch ? 0 : 0.08}
          scrollY={scrollY}
          revealDelay={150}
          scale={scale}
          zIndex={2}
          floatVariant="b"
          isTouch={isTouch}
          priority
          style={{
            top: `${Math.round(80 * scale)}px`,
            left: `${Math.round(100 * scale)}px`,
          }}
        />
      </div>

      {/* BOTTOM — Students */}
      <div className="hs-side-image" style={{ pointerEvents: "auto" }}>
        <ParallaxImage
          src="/home2.jpg"
          alt="Students studying"
          figmaHeight={250.26}
          naturalWidth={198.2}
          naturalHeight={297.26}
          rotation={-10}
          scrollSpeedY={isTouch ? 0 : 0.12}
          scrollY={scrollY}
          revealDelay={500}
          scale={scale}
          zIndex={3}
          floatVariant="a"
          isTouch={isTouch}
          style={{
            bottom: `${Math.round(100 * scale)}px`,
            left: `${Math.round(-10 * scale)}px`,
          }}
        />
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Text reveal helpers
// ------------------------------------------------------------------
function TextReveal({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function RevealLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const t = setTimeout(() => setVisible(true), delay + 60);
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(raf);
  }, [delay]);

  return (
    <span className="hs-reveal-wrap">
      <span className={`hs-reveal-item${visible ? " visible" : ""}`}>
        {children}
      </span>
    </span>
  );
}
