// components/about/StatsBanner.tsx
// FULLY RESPONSIVE — content centered on ALL screen sizes (mobile / tablet / laptop / TV)

const STYLES = `
  .sb-section {
    background-color: #FAFAFA;
    padding: 60px 20px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .sb-section { padding: 72px 32px; } }
  @media (min-width: 1024px) { .sb-section { padding: 80px 48px; } }
  @media (min-width: 1440px) { .sb-section { padding: 100px 64px; } }

  .sb-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;      /* horizontally centers children */
    justify-content: center;  /* vertically centers children */
    text-align: center;       /* centers text at all breakpoints */
    gap: 16px;
    margin-top: -150px;
  }
  @media (min-width: 1440px) { .sb-container { max-width: 1200px; } }

  .sb-number {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    line-height: 1em;
    margin: 0;
    font-size: clamp(72px, 18vw, 200px);
  }

  .sb-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 1.3em;
    color: #292929;
    margin: 0;
    max-width: 680px;
    font-size: clamp(16px, 3vw, 26px);
  }
`;

export default function StatsBanner() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="sb-section">
        <div className="sb-container">
          <p className="sb-number">97%</p>
          <p className="sb-text">
            of our students successfully have been admitted to their first choice
            of higher education through Prime Leed.
          </p>
        </div>
      </section>
    </>
  );
}