"use client";



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
      <rect x="1.5" y="1.5" width="29" height="33" rx="2" stroke="#333" strokeWidth="2" fill="none" />
      <line x1="7" y1="11" x2="25" y2="11" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="17" x2="25" y2="17" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="23" x2="19" y2="23" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function HowToApplyContent() {
  return (
    <>
      <style>{`
        /* ── BASE (Desktop) — pixel-perfect original ── */
        .hta-section {
          background-color: #ffffff;
          padding-top: 150px;
          padding-bottom: 100px;
          padding-left: 60px;
          padding-right: 60px;
        }

        .hta-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .hta-intro {
          font-family: 'Work Sans', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.7;
          text-align: justify;
          margin-bottom: 100px;
        }

        .hta-requirements {
          text-align: center;
          margin-bottom: 80px;
        }

        .hta-req-heading-wrap {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .hta-req-heading {
          font-family: 'Work Sans', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.1;
        }

        .hta-req-subheading {
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 32px;
          margin-top: 0;
        }

        .hta-req-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hta-req-item {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #010101;
          line-height: 1.8;
          margin: 0;
          text-align: justify;
        }

        .hta-step {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 32px;
          align-items: start;
          padding-bottom: 48px;
        }

        .hta-step-border {
          padding-top: 48px;
          border-top: 1px solid #000000;
        }

        .hta-step-number {
          font-family: 'Work Sans', sans-serif;
          font-size: 27px;
          font-weight: 800;
          color: #000000;
          line-height: 1;
          padding-top: 2px;
        }

        .hta-step-title {
          font-family: 'Work Sans', sans-serif;
          font-size: 25px;
          font-weight: 900;
          color: #000000;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .hta-step-desc {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: #000000;
          line-height: 1.8;
          margin: 0;
        }

        .hta-final-divider {
          border-top: 1px solid #020202;
        }

        /* ── TABLET (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .hta-section {
            padding-top: 100px;
            padding-bottom: 80px;
            padding-left: 40px;
            padding-right: 40px;
          }

          .hta-intro {
            font-size: 20px;
            margin-bottom: 72px;
          }

          .hta-req-heading {
            font-size: 38px;
          }

          .hta-req-subheading {
            font-size: 16px;
          }

          .hta-req-item {
            font-size: 16px;
          }

          .hta-step {
            grid-template-columns: 90px 1fr;
            gap: 24px;
          }

          .hta-step-number {
            font-size: 23px;
          }

          .hta-step-title {
            font-size: 21px;
          }

          .hta-step-desc {
            font-size: 16px;
          }
        }

        /* ── MOBILE (≤ 640px) ── */
        @media (max-width: 640px) {
          .hta-section {
            /*
              Key fix: large top padding to fully clear the hero/banner
              that overlaps this section on mobile viewports.
              Adjust this value (320px) to match your hero's actual height.
            */
            padding-top: 150px;
            padding-bottom: 48px;
            padding-left: 20px;
            padding-right: 20px;
          }

          .hta-intro {
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 44px;
            text-align: left;
          }

          .hta-requirements {
            text-align: left;
            margin-bottom: 44px;
          }

          .hta-req-heading-wrap {
            gap: 10px;
            margin-bottom: 20px;
          }

          .hta-req-heading {
            font-size: 28px;
          }

          .hta-req-subheading {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .hta-req-list {
            gap: 16px;
          }

          .hta-req-item {
            font-size: 14px;
            line-height: 1.75;
            text-align: left;
          }

          /* Stack number above content */
          .hta-step {
            grid-template-columns: 1fr;
            gap: 6px;
            padding-bottom: 28px;
          }

          .hta-step-border {
            padding-top: 28px;
          }

          .hta-step-number {
            font-size: 18px;
          }

          .hta-step-title {
            font-size: 17px;
            margin-bottom: 8px;
          }

          .hta-step-desc {
            font-size: 14px;
            line-height: 1.75;
          }
        }

        /* ── VERY SMALL MOBILE (≤ 390px) ── */
        @media (max-width: 390px) {
          .hta-section {
            padding-top: 340px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .hta-req-heading {
            font-size: 24px;
          }

          .hta-step-title {
            font-size: 16px;
          }

          .hta-step-desc {
            font-size: 13px;
          }
        }
      `}</style>

      <section className="hta-section">
        <div className="hta-inner">

          {/* ── INTRO PARAGRAPH ── */}
          <p className="hta-intro">
            To ensure you are well-prepared when filling out the application
            online, we have provided a comprehensive list of all the things
            that will be covered throughout the application. This will help
            you anticipate and navigate through the application process with ease.
          </p>

          {/* ── REQUIREMENTS SECTION ── */}
          <div className="hta-requirements">
            <div className="hta-req-heading-wrap">
              <DocumentIcon />
              <h2 className="hta-req-heading">Requirements</h2>
            </div>

            <h3 className="hta-req-subheading">
              Undergraduate &amp; Graduate Diploma Requirements:
            </h3>

            <div className="hta-req-list">
              {requirements.map((req, i) => (
                <p key={i} className="hta-req-item">
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
                className={`hta-step${index > 0 ? " hta-step-border" : ""}`}
              >
                <div className="hta-step-number">{step.number}</div>
                <div>
                  <h3 className="hta-step-title">{step.title}</h3>
                  <p className="hta-step-desc">{step.description}</p>
                </div>
              </div>
            ))}

            <div className="hta-final-divider" />
          </div>


        </div>
      </section>
    </>
  );
}