// app/admission/how-to-apply/page.tsx
// Accessible at /admission/how-to-apply from the Navbar dropdown.

import CallToAction from "@/components/CallToAction";

export default function HowToApplyPage() {
  return (
    <main>

      {/* Page Hero — same teal box pattern */}
      <section
        className="relative w-full"
        style={{ minHeight: "320px", backgroundColor: "#149AB5" }}
      >
        <div
          className="flex items-end"
          style={{ minHeight: "320px", padding: "60px 40px" }}
        >
          <h1
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "36px",
              fontWeight: "800",
              color: "#ffffff",
            }}
          >
            How to Apply
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="bg-white" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: "1.6em",
              color: "#545454",
            }}
          >
            Start your application today. Our convenient online application tool
            only takes 10 minutes to complete. Get connected to a member from
            the admissions team to see if our partner university is the right
            place for you.
          </p>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}