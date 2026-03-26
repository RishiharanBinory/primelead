// components/about/AboutMissionVision.tsx
// FULLY RESPONSIVE — Mobile / Tablet / Laptop / TV
//
// Mobile  (<640px)  — stacked, image full-width, yellow accent visible
// Tablet  (640px+)  — 2-col grid, image right, text left
// Laptop  (1024px+) — wider gap, original proportions
// TV      (1440px+) — larger container and text

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
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
  }
  @media (min-width: 640px) {
    .amv-grid {
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
  }
  @media (min-width: 1024px) { .amv-grid { gap: 80px; } }
  @media (min-width: 1440px) { .amv-grid { max-width: 1200px; } }

  /* ── LEFT: text ── */
  .amv-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    color: #292929;
    margin: 0 0 24px 0;
    font-size: clamp(24px, 4vw, 36px);
  }

  .amv-body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.7em;
    color: #545454;
    margin: 0 0 20px 0;
    font-size: clamp(15px, 2vw, 18px);
  }
  .amv-body:last-child { margin-bottom: 0; }

  .amv-bold { color: #292929; }

  /* ── RIGHT: image + yellow accent ── */
  .amv-img-wrap {
    position: relative;
    /* On mobile: image stacks above text (order matters) */
    order: -1;
    /* Reserve space for yellow corner */
    padding-bottom: 20px;
    padding-right: 20px;
  }
  @media (min-width: 640px) {
    /* On tablet+: image goes to the right naturally */
    .amv-img-wrap { order: 0; }
  }

  .amv-img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
  }

  .amv-yellow {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #FFC501;
    /* Scales from 48px mobile → 80px desktop */
    width:  clamp(48px, 7vw, 80px);
    height: clamp(48px, 7vw, 80px);
  }
`;

export default function AboutMissionVision() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="amv-section">
        <div className="amv-grid">

          {/* LEFT — text */}
          <div>
            <h2 className="amv-heading">Mission &amp; Vision Statement</h2>

            <p className="amv-body">
              <strong className="amv-bold">Our mission</strong> is to provide
              comprehensive support and guidance for higher education, empowering
              students in the UK and EU. We strive to break down barriers and
              nurture personal and professional growth, enabling students to reach
              their full potential.
            </p>

            <p className="amv-body">
              <strong className="amv-bold">Our vision</strong> will empower lives
              through education, unlocking potential and creating positive impact
              by providing accessible and inclusive opportunities for personal
              growth and societal contribution.
            </p>
          </div>

          {/* RIGHT — image + yellow accent */}
          <div className="amv-img-wrap">
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