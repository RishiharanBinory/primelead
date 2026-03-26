// components/financial/FinancialAidProcess.tsx
//
// Matches primeleed.com/financial-aid/ PROCESS section exactly:
//
// ┌─────────────────────────────────────────────────┐
// │  YELLOW background (#FFC501)                    │
// │                                                 │
// │  PROCESS          ← giant Work Sans 800         │
// │                                                 │
// │  The Financial Aid Process  ← bold subtitle     │
// │                                                 │
// │  01. Apply for Aid   02. Review   03. Make...   │
// └─────────────────────────────────────────────────┘
//
// - No borders/dividers between the 3 steps
// - Steps are spread across the full width (space-between)
// - All text is dark #292929 on yellow background
// - Fully responsive — Mobile / Tablet / Laptop / TV

const STYLES = `
  /* ── SECTION — full-width yellow ── */
  .fap-section {
    background-color: #FFC501;
    padding: 60px 20px 64px;
    box-sizing: border-box;
    width: 100%;
  }
  @media (min-width: 640px)  { .fap-section { padding: 72px 32px 72px;  } }
  @media (min-width: 1024px) { .fap-section { padding: 80px 48px 80px;  } }
  @media (min-width: 1440px) { .fap-section { padding: 100px 64px 100px; } }

  /* ── INNER CONTAINER ── */
  .fap-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) { .fap-container { max-width: 1200px; } }

  /* ── GIANT "PROCESS" HEADING ── */
  .fap-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: #292929;
    line-height: 0.9em;
    margin: 0 0 28px 0;
    letter-spacing: -0.02em;
    /* Scales smoothly: ~72px on small phones → 160px on TV */
    font-size: clamp(72px, 14vw, 100px);
  }
  @media (min-width: 640px)  { .fap-heading { margin-bottom: 32px; } }
  @media (min-width: 1024px) { .fap-heading { margin-bottom: 36px; } }

  /* ── SUBTITLE — "The Financial Aid Process" ── */
  .fap-subtitle {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: #292929;
    margin: 0 0 40px 0;
    font-size: clamp(26px, 1.8vw, 18px);
    letter-spacing: 0.01em;
  }
  @media (min-width: 640px)  { .fap-subtitle { margin-bottom: 48px; } }
  @media (min-width: 1024px) { .fap-subtitle { margin-bottom: 52px; } }

  /* ── STEPS ROW ── */
  /* Mobile: stacked column
     Tablet+: side by side, spread across full width */
  .fap-steps {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (min-width: 640px) {
    .fap-steps {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }
  }

  /* ── SINGLE STEP ── */
  .fap-step {
    display: flex;
    align-items: center;
    gap: 0;
  }

  /* ── STEP LABEL — number + text together, bold, dark ── */
  /* Matches screenshot: "01. Apply for Aid" all as one bold line */
  .fap-step-label {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: #292929;
    margin: 0;
    line-height: 1.2em;
    font-size: clamp(25px, 1.8vw, 18px);
  }
`;

const steps = [
  { label: "01. Apply for Aid" },
  { label: "02. Review" },
  { label: "03. Make Your Deposit" },
];

export default function FinancialAidProcess() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="fap-section">
        <div className="fap-container">

          {/* Giant PROCESS heading */}
          <h2 className="fap-heading">PROCESS</h2>

          {/* Subtitle */}
          <p className="fap-subtitle">The Financial Aid Process</p>

          {/* Three step labels — spread across full width */}
          <div className="fap-steps">
            {steps.map((step) => (
              <div key={step.label} className="fap-step">
                <p className="fap-step-label">{step.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}