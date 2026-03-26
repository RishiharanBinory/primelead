"use client";
// components/CallToAction.tsx

import Link from "next/link";
import Button from "./mainComponents/Button";

const STYLES = `
  .cta-section {
    background-color: #FFC501;
    text-align: center;
    box-sizing: border-box;
    padding: 100px 20px 60px;
  }
  @media (min-width: 640px)  { .cta-section { padding: 110px 32px 72px; } }
  @media (min-width: 1024px) { .cta-section { padding: 120px 48px 80px; } }
  @media (min-width: 1440px) { .cta-section { padding: 140px 64px 100px; } }

  .cta-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    line-height: 1.4em;
    color: #292929;
    margin: 0 auto 32px;
    font-size: clamp(18px, 3vw, 24px);
    max-width: 420px;
  }
  @media (min-width: 1440px) { .cta-heading { max-width: 500px; } }

  /* Always stacked vertically, centered */
  .cta-actions {
    display: flex;
    flex-direction: column;   /* ← always column, never row */
    align-items: center;      /* ← centers both items horizontally */
    gap: 16px;
  }

  .cta-btn-wrap {
    width: 100%;
    max-width: 280px;
  }

  .cta-link-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .cta-link {
    font-weight: 600;
    transition: color 0.2s ease;
    color: #000000;
    font-size: clamp(14px, 1.5vw, 15px);
    text-decoration: none;
  }
  .cta-link:hover { color: #2ab4c0; }

  .cta-divider {
    color: #0a161e;
    opacity: 0.5;
    font-size: 18px;
    line-height: 1;
  }
`;

export default function CallToAction() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="cta-section">
        <h2 className="cta-heading">
          Are you ready to take the next step toward your future career?
        </h2>

        <div className="cta-actions">
          {/* Application Form button — centered */}
          <div className="cta-btn-wrap">
            <Button href="/admission/form" label="Application Form" />
          </div>

          {/* Request Info — sits below button, centered */}
          <div className="cta-link-row">
            <Link href="/support/request-info" className="cta-link">
              Request Info
            </Link>
            <span className="cta-divider">|</span>
          </div>
        </div>
      </section>
    </>
  );
}