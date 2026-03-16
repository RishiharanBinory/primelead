// components/CallToAction.tsx
// Background: #FFC501 exact yellow
// Button background: #292929 exact dark

import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      style={{
        backgroundColor: "#FFC501", // exact yellow
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "200px",
          fontWeight: "1000",
          lineHeight: "1.4em",
          color: "#292929",
          maxWidth: "400px",
          margin: "0 auto 32px auto",
          marginTop: "-225px",
          marginLeft: "550px", // pulls the element upward by 60px — adjust to taste
        }}
      >
        FORM
      </h2>
      {/* h5 style: Work Sans 24px 600 weight */}
      <h2
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "1.4em",
          color: "#292929",
          maxWidth: "400px",
          margin: "0 auto 32px auto",
        }}
      >
        Are you ready to take the next step toward your future career?
      </h2>

      {/* Primary button */}
      <Link
        href="/apply-form"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#292929",
          color: "#ffffff",
          padding: "14px 32px",
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "16px",
          fontWeight: "600",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        Application Form <span>→</span>
      </Link>

      {/* Secondary link */}
      <div style={{ marginTop: "16px" }}>
        <Link
          href="/request-info"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "#292929",
            textDecoration: "underline",
          }}
        >
          Request Info
        </Link>
      </div>
    </section>
  );
}
