// components/about/AboutIntro.tsx
// FULLY RESPONSIVE — Mobile / Tablet / Laptop / TV
//
// Mobile  (<640px)  — stacked column, logo centered, text full-width
// Tablet  (640px+)  — 2-col grid, balanced gap
// Laptop  (1024px+) — wider gap, original proportions restored
// TV      (1440px+) — max-width expanded, larger text

import Image from "next/image";

const STYLES = `
  .ai-section {
    background: #ffffff;
    padding: 48px 20px 120px;  /* ← third value = bottom */
    box-sizing: border-box;
}
  @media (min-width: 640px)  { .ai-section { padding: 60px 32px; } }
  @media (min-width: 1024px) { .ai-section { padding: 80px 48px; } }
  @media (min-width: 1440px) { .ai-section { padding: 100px 64px; } }

  .ai-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;   /* mobile: stack */
    gap: 32px;
    align-items: center;
  }
  @media (min-width: 640px)  {
    .ai-grid {
      grid-template-columns: 1fr 1fr;
      gap: 48px;
    }
  }
  @media (min-width: 1024px) { .ai-grid { gap: 72px; } }
  @media (min-width: 1440px) { .ai-grid { max-width: 1200px; gap: 96px; } }

  /* Logo column */
  .ai-logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ai-logo {
    width: clamp(180px, 40vw, 380px);
    height: auto;
  }

  /* Text column */
  .ai-text {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.7em;
    color: #545454;
    text-align: justify;
    margin: 0;
    font-size: 15px;
  }
  @media (min-width: 640px)  { .ai-text { font-size: 16px; } }
  @media (min-width: 1024px) { .ai-text { font-size: 17px; } }
  @media (min-width: 1440px) { .ai-text { font-size: 18px; } }
`;

export default function AboutIntro() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="ai-section">
        <div className="ai-grid">
          {/* Logo */}
          <div className="ai-logo-wrap">
            <Image
              src="/Prime-Leed-SiteLogo-1536x512.png"
              alt="PrimeLeed Logo"
              width={400}
              height={134}
              className="ai-logo object-contain"
            />
          </div>

          {/* Description */}
          <p className="ai-text">
            Our platform offers comprehensive support, including guidance on the
            application process, access to valuable resources, and personalised
            assistance from experienced advisors. We are committed to empowering
            students and ensuring their journey towards higher education is
            smooth and successful, regardless of their nationality or
            background.
          </p>
        </div>
      </section>
    </>
  );
}
