// components/about/AboutMissionVision.tsx
"use client";

import { useEffect, useRef } from "react";

const STYLES = `
  .amv-section {
    background-color: #FAFAFA;
    padding: 60px 20px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .amv-section { padding: 80px 32px; } }
  @media (min-width: 1024px) { .amv-section { padding: 100px 48px; } }
  @media (min-width: 1440px) { .amv-section { padding: 120px 64px; } }

  .amv-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
  }
  @media (min-width: 640px) {
    .amv-grid {
      grid-template-columns: 45fr 55fr;
      gap: 80px;
    }
  }
  @media (min-width: 1024px) { .amv-grid { gap: 80px; } }
  @media (min-width: 1440px) { .amv-grid { max-width: 1400px; } }

  .amv-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 850;
    line-height: 1.2em;
    color: #292929;
    margin: 0 0 24px 0;
    margin-top: -180px;
    font-size: clamp(32px, 5vw, 48px);
  }

  .amv-body {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    line-height: 1.6em;
    color: #545454;
    margin: 0 0 20px 0;
    font-size: clamp(15px, 2vw, 18px);
    text-align: justify;
  }

  .amv-body:last-child { margin-bottom: 0; }
  .amv-bold {
    color: #000000;
    font-weight: 900;
}

  .amv-text-anim {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .amv-text-anim.visible {
    opacity: 1;
    transform: translateX(0);
  }
  .amv-text-anim.visible .amv-heading {
    animation: amvFadeUp 0.6s ease 0.1s both;
  }
  .amv-text-anim.visible .amv-body:nth-of-type(1) {
    animation: amvFadeUp 0.6s ease 0.25s both;
  }
  .amv-text-anim.visible .amv-body:nth-of-type(2) {
    animation: amvFadeUp 0.6s ease 0.4s both;
  }
  @keyframes amvFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .amv-img-wrap {
    position: relative;
    order: -1;
    padding-bottom: 20px;
    padding-right: 20px;
    overflow: hidden;
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  @media (min-width: 640px) {
    .amv-img-wrap { order: 0; }
  }
  .amv-img-wrap.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .amv-img {
  width: 625px;
  max-width: 100%;
  height: 550px;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 1;
  margin-left: 80px;
  transform: scale(1.12);
  transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

  .amv-img-wrap.visible .amv-img {
    transform: scale(1);
  }

  .amv-yellow {
    position: absolute;
    bottom: -10px;
    right: -10px;
    background-color: #FFC501;
    width: 300px;
    height: 250px;
    z-index: 0;
    opacity: 0;
    transform: translate(20px, 20px);
    transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
  }
  .amv-img-wrap.visible .amv-yellow {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export default function AboutMissionVision() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgWrap = imgWrapRef.current;
    const text = textRef.current;
    if (!imgWrap || !text) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(imgWrap);
    observer.observe(text);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section className="amv-section">
        <div className="amv-grid">
          {/* LEFT — slides in from left, children stagger up */}
          <div className="amv-text-anim" ref={textRef}>
            <h2 className="amv-heading">Mission &amp; Vision Statement</h2>

            <p className="amv-body" style={{ marginTop: "70px" }}>
              <strong className="amv-bold">Our mission</strong> is to provide
              comprehensive support and guidance for higher education,
              empowering students in the UK and EU. We strive to break down
              barriers and nurture personal and professional growth, enabling
              students to reach their full potential.
            </p>

            <p className="amv-body">
              <strong className="amv-bold">Our vision</strong> will empower
              lives through education, unlocking potential and creating positive
              impact by providing accessible and inclusive opportunities for
              personal growth and societal contribution.
            </p>
          </div>

          {/* RIGHT — slides in from right + image zooms out + yellow slides in */}
          <div className="amv-img-wrap" ref={imgWrapRef}>
            <img
              src="https://www.primeleed.com/wp-content/uploads/2020/12/wonderlane-6zlgM-GUd6I-unsplash-Copy-2.jpg"
              alt="University campus"
              className="amv-img"
            />
            <div className="amv-yellow" />
          </div>
        </div>
      </section>
    </>
  );
}
