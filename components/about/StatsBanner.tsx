// components/about/StatsBanner.tsx
// The 97% uses the typography variable: 200px, Work Sans, weight 700
// But we scale it responsively. Background is #FAFAFA from accent_4.

export default function StatsBanner() {
  return (
    <section
      style={{
        backgroundColor: "#FAFAFA", // exact --e-global-color-vamtam_accent_4
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Giant number — Work Sans 700, scaled from the 200px variable */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(80px, 15vw, 160px)", // responsive scaling
            fontWeight: "800",
            color: "#292929", // exact --vamtam_h1_color
            lineHeight: "1em",
            marginBottom: "20px",
            marginLeft: "375px",
            marginTop: "200px",
          }}
        >
          97%
        </p>

        {/* Supporting text — h4 style: Work Sans 26px 800 weight */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "26px", // exact h4 font size
            fontWeight: "800", // exact h4 font weight
            lineHeight: "1.2em", // exact h4 line height
            color: "#292929",
            maxWidth: "850px",
            marginLeft: "190px",
          }}
        >
          of our students successfully have been admitted to their first choice
          of higher education through Prime Leed.
        </p>
      </div>
    </section>
  );
}
