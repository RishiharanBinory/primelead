// components/about/StatsBanner.tsx

const STYLES = `
  .sb-section {
    background-color: #FAFAFA;
    width: 100%;
    box-sizing: border-box;
    padding: 40px 24px 48px;
  }
  @media (min-width: 640px)  { .sb-section { padding: 48px 40px 56px; } }
  @media (min-width: 1024px) { .sb-section { padding: 56px 64px 64px; } }

  .sb-container {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .sb-number {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #1A1A1A;
    line-height: 0.9;
    margin: 0;
    font-size: clamp(96px, 20vw, 200px);
    letter-spacing: -0.02em;
  }

  .sb-divider {
    width: 48px;
    height: 3px;
    background-color: #E8C32A;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .sb-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    line-height: 1.35;
    color: #1A1A1A;
    margin: 0;
    max-width: 600px;
    font-size: clamp(17px, 2.4vw, 24px);
  }
`;

export default function StatsBanner() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="sb-section">
        <div className="sb-container">
          <p className="sb-number">97%</p>
          <div className="sb-divider" />
          <p className="sb-text">
            of our students successfully have been admitted to their first
            choice of higher education through Primeleed.
          </p>
        </div>
      </section>
    </>
  );
}