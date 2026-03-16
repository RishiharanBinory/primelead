// components/CallToAction.tsx
// Background: #FFC501 exact yellow
// Button background: #292929 exact dark

import Link from "next/link";

export default function CallToAction() {
  return (
    <section style={{ backgroundColor: "#FFC501", padding: "80px 20px", textAlign: "center" }}>
      <style>{`
        .form-title {
          font-family: 'Work Sans', sans-serif;
          font-size: 200px;
          font-weight: 1000;
          line-height: 1.4em;
          color: #292929;
          max-width: 400px;
          margin: 0 auto 32px auto;
          margin-top: -225px;
          margin-left: 550px;
        }
        @media (max-width: 1024px) {
          .form-title {
            font-size: 120px;
            margin-top: -80px;
            margin-left: auto;
          }
        }
        @media (max-width: 640px) {
          .form-title {
            font-size: 70px;
            margin-top: 0px;
            margin-left: auto;
          }
        }
      `}</style>

      <h2 className="form-title">FORM</h2>

      <h2 style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "1.4em",
        color: "#292929",
        maxWidth: "400px",
        margin: "0 auto 32px auto",
      }}>
        Are you ready to take the next step toward your future career?
      </h2>

      <Link href="/apply-form" style={{
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
      }}>
        Application Form <span>→</span>
      </Link>

      <div style={{ marginTop: "16px" }}>
        <Link href="/request-info" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "16px",
          color: "#292929",
          textDecoration: "underline",
        }}>
          Request Info
        </Link>
      </div>
    </section>
  );
}
