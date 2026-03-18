// components/admission/ApplySection.tsx
// Two-column layout: text content on left, campus photo on right.
// Same layout pattern as AboutMissionVision — text left, image right,
// with the yellow (#FFC501) decorative square peeking from the corner.

import Link from "next/link";

export default function ApplySection() {
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
        {/* Left column — text content */}
        <div>
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.2em",
              color: "#292929",
              marginBottom: "24px",
            }}
          >
            Apply for 2023
          </h2>

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
            <strong style={{ color: "#292929" }}>
              September 2023 application is now open!
            </strong>{" "}
            Start your application today and get connected to a member from the
            admissions team so you can see if our partner university is the
            right place for you.
          </p>

          {/* "How To Apply" teal link — matches original */}
          <Link
            href="/how-to-apply"
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
            How To Apply
          </Link>
        </div>

        {/* Right column — photo with yellow accent block */}
        <div
          className="relative"
          style={{ paddingBottom: "20px", paddingRight: "20px" }}
        >
          <img
            src="https://www.primeleed.com/wp-content/uploads/2020/12/wonderlane-6zlgM-GUd6I-unsplash-Copy-2.jpg"
            alt="University campus building"
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Yellow decorative block — exact #FFC501 */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "80px",
              height: "80px",
              backgroundColor: "#FFC501",
            }}
          />
        </div>
      </div>
    </section>
  );
}