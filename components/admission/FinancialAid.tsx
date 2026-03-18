// components/admission/FinancialAid.tsx
// Two-column layout: photo on LEFT, text content on RIGHT.
// This is the mirror image of ApplySection — same grid pattern,
// columns just swapped. White background section.

import Link from "next/link";

export default function FinancialAid() {
  return (
    <section className="bg-white" style={{ padding: "80px 20px" }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: "1000px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left column — library/study photo */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Students studying"
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Right column — text content */}
        <div>
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.2em",
              color: "#292929",
              marginBottom: "16px",
            }}
          >
            Financial Aid
          </h2>

          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "1.4em",
              color: "#292929",
              marginBottom: "20px",
            }}
          >
            Secure Your Student Funding Up To £60,000 For Your Desired Course
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "1.6em",
              color: "#545454",
              marginBottom: "32px",
            }}
          >
            Prime Leed supports students in their pursuit of higher education by
            partnering with universities across the UK to provide funding
            assistance. Through these collaborations, we bridge the financial
            gap, making education more accessible and empowering students to
            achieve their academic aspirations.
          </p>

          {/* "Learn More" teal link */}
          <Link
            href="/financial-aid"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              color: "#149AB5",
              textDecoration: "none",
              borderBottom: "2px solid #149AB5",
              paddingBottom: "2px",
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}