// components/about/AboutMissionVision.tsx
// h2: Work Sans 50px 700 weight, line-height 1.2em, color #292929
// Body text: Inter 18px 400 weight, line-height 1.6em, color #545454
// Yellow accent: #FFC501

export default function AboutMissionVision() {
  return (
    <section className="bg-white" style={{ padding: "80px 20px", backgroundColor: "#FAFAFA", }}>
      <div
        className="mx-auto grid items-center"
        style={{
          maxWidth: "1000px",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
        }}
      >
        {/* Left — text content */}
        <div>
          {/* h2 exact styles from CSS variables */}
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "36px",        // h3 size fits better here visually
              fontWeight: "700",
              lineHeight: "1.2em",
              color: "#292929",
              marginBottom: "32px",
            }}
          >
            Mission & Vision Statement
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "1.6em",
              color: "#545454",
              marginBottom: "24px",
            }}
          >
            <strong style={{ color: "#292929" }}>Our mission</strong> is to
            provide comprehensive support and guidance for higher education,
            empowering students in the UK and EU. We strive to break down
            barriers and nurture personal and professional growth, enabling
            students to reach their full potential.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "1.6em",
              color: "#545454",
            }}
          >
            <strong style={{ color: "#292929" }}>Our vision</strong> will
            empower lives through education, unlocking potential and creating
            positive impact by providing accessible and inclusive opportunities
            for personal growth and societal contribution.
          </p>
        </div>

        {/* Right — photo with yellow accent block */}
        <div className="relative" style={{ paddingBottom: "20px", paddingRight: "20px" }}>
          <img
            src="https://www.primeleed.com/wp-content/uploads/2020/12/wonderlane-6zlgM-GUd6I-unsplash-Copy-2.jpg"
            alt="University campus"
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Yellow decorative block — exact color #FFC501 */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "80px",
              height: "80px",
              backgroundColor: "#FFC501",  // exact yellow
            }}
          />
        </div>
      </div>
    </section>
  );
}