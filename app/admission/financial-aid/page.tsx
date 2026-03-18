// app/admission/financial-aid/page.tsx
// Accessible at /admission/financial-aid from the Navbar dropdown.

import CallToAction from "@/components/CallToAction";

export default function FinancialAidPage() {
  return (
    <main>

      {/* Page Hero */}
      <section
        style={{
          minHeight: "320px",
          backgroundColor: "#149AB5",
          display: "flex",
          alignItems: "flex-end",
          padding: "60px 40px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "36px",
            fontWeight: "800",
            color: "#ffffff",
          }}
        >
          Financial Aid
        </h1>
      </section>

      {/* Page Content */}
      <section className="bg-white" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "28px",
              fontWeight: "700",
              color: "#292929",
              marginBottom: "20px",
            }}
          >
            Secure Your Student Funding Up To £60,000 For Your Desired Course
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: "1.6em",
              color: "#545454",
            }}
          >
            Prime Leed supports students in their pursuit of higher education by
            partnering with universities across the UK to provide funding
            assistance. Through these collaborations, we bridge the financial
            gap, making education more accessible and empowering students to
            achieve their academic aspirations.
          </p>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}