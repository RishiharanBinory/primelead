// app/admission/form/page.tsx
// Accessible at /admission/form from the Navbar dropdown.

import CallToAction from "@/components/CallToAction";

export default function AdmissionFormPage() {
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
          Admission Form
        </h1>
      </section>

      {/* Form Content */}
      <section className="bg-white" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: "1.6em",
              color: "#545454",
              marginBottom: "40px",
            }}
          >
            Fill in the form below to start your application. Our admissions
            team will get back to you within 2 working days.
          </p>

          {/* Simple placeholder form — replace with your actual form later */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "600px",
            }}
          >
            {["Full Name", "Email Address", "Phone Number"].map((field) => (
              <div key={field} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#292929",
                  }}
                >
                  {field}
                </label>
                <input
                  type="text"
                  placeholder={field}
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #e6eaed",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    color: "#292929",
                    outline: "none",
                  }}
                />
              </div>
            ))}

            <button
              style={{
                backgroundColor: "#149AB5",
                color: "#ffffff",
                padding: "14px 32px",
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Submit Application
            </button>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}