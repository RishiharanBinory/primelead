"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Complete Application Form",
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete. Required: Passport/Resident permit, Qualification Certificates/Transcripts, CV)",
  },
  {
    number: "02",
    title: "Confirmation of Application",
    description:
      "After submitting your application, our team will promptly acknowledge receipt within two working days via phone or email. We will then assess your academic background and recommend a suitable university/college and course that align with your potential for success.",
  },
  {
    number: "03",
    title: "Application Review",
    description:
      "Our team will review your application to confirm you meet our requirements. This may include: helping to create a CV, Personal Statement also guiding with application forms. If so, you will then be asked to meet either face to face or online as part of the review process.",
  },
  {
    number: "04",
    title: "Application Interview",
    description:
      "We offer comprehensive interview preparation to enhance your performance in academic interviews with your desired university or college. We also provide valuable guidance on excelling in exams. As a testament to our dedication to your success, we conduct free interview preparation workshops, empowering our students to unlock their full potential and achieve success in their interviews.",
  },
  {
    number: "05",
    title: "Payment of Fees",
    description:
      "Upon approval of your application, the university will generate an invoice for the remaining balance of your first-year tuition fees, which must be settled prior to the commencement date. Once the invoice is paid, you will receive a receipt as confirmation of your payment. If you require guidance or assistance regarding funding options, please feel free to reach out to us.",
  },
  {
    number: "06",
    title: "Attend University",
    description:
      "After completing the enrollment process with the university or college, you can fully embrace and enjoy your university/college experience.",
  },
];

const requirements = [
  "Students who are 18 years and above at the start of the course are eligible to apply.",
  "If English is not your first language, you will need to demonstrate English language proficiency equivalent to IELTS (Academic) 6.0 overall, with a minimum of 5.5 in each band and 6.0 in speaking.",
  "All applicants are interviewed as part of the admissions process.",
  "Applicants who do not meet the specified entry criteria may undergo individual consideration by the Academic Director. In such cases, evaluation will take into account relevant factors such as previous academic achievements, work experience, and life skills experience, as supported by evidence.",
];

function DocumentIcon() {
  return (
    <svg
      width="36"
      height="40"
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="33"
        rx="2"
        stroke="#333"
        strokeWidth="2"
        fill="none"
      />
      <line x1="7" y1="11" x2="25" y2="11" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="17" x2="25" y2="17" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="23" x2="19" y2="23" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function HowToApplyContent() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "150px",
        paddingBottom: "100px",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── INTRO PARAGRAPH ── */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "24px",
            fontWeight: "700",
            color: "#1a1a1a",
            lineHeight: "1.7",
            textAlign: "justify",
            marginBottom: "100px",
          }}
        >
          To ensure you are well-prepared when filling out the application
          online, we have provided a comprehensive list of all the things
          that will be covered throughout the application. This will help
          you anticipate and navigate through the application process with ease.
        </p>

        {/* ── REQUIREMENTS SECTION ── */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>

          {/* Icon + Heading */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <DocumentIcon />
            <h2
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "48px",
                fontWeight: "800",
                color: "#1a1a1a",
                margin: 0,
                lineHeight: "1.1",
              }}
            >
              Requirements
            </h2>
          </div>

          {/* Subheading */}
          <h3
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "18px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "32px",
              marginTop: 0,
            }}
          >
            Undergraduate &amp; Graduate Diploma Requirements:
          </h3>

          {/* Requirements list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {requirements.map((req, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  color: "#010101",
                  lineHeight: "1.8",
                  margin: 0,
                  textAlign: "justify",
                }}
              >
                - {req}
              </p>
            ))}
          </div>
        </div>

        {/* ── SIX NUMBERED STEPS ── */}
        <div>
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "32px",
                alignItems: "start",
                paddingTop: index === 0 ? "0" : "48px",
                paddingBottom: "48px",
                borderTop: index > 0 ? "1px solid #000000" : "none",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "27px",
                  fontWeight: "800",
                  color: "#000000",
                  lineHeight: "1",
                  paddingTop: "2px",
                }}
              >
                {step.number}
              </div>

              {/* Step content */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "25px",
                    fontWeight: "900",
                    color: "#000000",
                    margin: "0 0 12px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "17px",
                    color: "#000000",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Final border after last step */}
          <div style={{ borderTop: "1px solid #020202" }} />
        </div>

        {/* ── APPLICATION FORM BUTTON ── */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "56px",
          }}
        >
          <Link
            href="/admission/admission-form"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "0.03em",
              padding: "20px 48px",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#149AB5";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1a1a1a";
            }}
          >
            Application Form
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7H17M11 1L17 7L11 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div> */}

      </div>
    </section>
  );
}
