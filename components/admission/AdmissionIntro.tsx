// components/admission/AdmissionIntro.tsx
// Two centered paragraphs of body text — white background, centered layout.
// Max width 1000px matching the site-wide container width.

export default function AdmissionIntro() {
  return (
    <section
      className="bg-white"
      style={{ padding: "80px 20px" }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1000px", textAlign: "center" }}
      >
        {/* First paragraph */}
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
          By choosing to apply through Prime Leed, you open doors to a vast
          array of courses spanning our university's various programs and
          colleges. This allows you to venture across disciplines and carve out
          your own distinct academic journey.
        </p>

        {/* Second paragraph */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "1.6em",
            color: "#545454",
          }}
        >
          We understand that the application process can be daunting, especially
          when it comes to selecting the ideal undergraduate or graduate program.
          Rest assured, our admissions team is here to guide you through this
          crucial endeavor. We are committed to helping you make a well-informed
          decision that will shape your intellectual and creative potential in
          meaningful and transformative ways.
        </p>
      </div>
    </section>
  );
}