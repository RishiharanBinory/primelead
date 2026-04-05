// components/financial/AidDetailSection.tsx
//
// Matches the detailed aid sections on primeleed.com/financial-aid/ exactly.
// Used 3 times on the page — once per aid type:
//   <AidDetailSection data={studentFinanceData} />
//   <AidDetailSection data={grantsData} />
//   <AidDetailSection data={bursariesData} />
//
// Layout per section:
//   LEFT  col (30%) — large bold title e.g. "1. Student Finance of England"
//   RIGHT col (70%) — subheadings, paragraphs, bullet lists, "Learn More" link
//
// Background: alternates #ffffff / #FAFAFA per section (passed via prop)
// Fully responsive — Mobile / Tablet / Laptop / TV

import Link from "next/link";
import { ReactNode } from "react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

// A content block in the right column can be one of:
//   - paragraph: plain text
//   - subheading: bold heading
//   - bullets: unordered list of strings
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] };

export interface AidDetailData {
  id: string;              // anchor id for deep linking e.g. "student-finance"
  title: string;           // left column title e.g. "1. Student Finance of England"
  content: ContentBlock[]; // right column content blocks
  learnMoreHref?: string;  // optional "Learn More" link
  background?: string;     // section bg color, defaults to #ffffff
}

interface AidDetailSectionProps {
  data: AidDetailData;
}

// ─────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────

const STYLES = `
  /* ── SECTION ── */
  .ads-section {
    padding: 56px 20px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .ads-section { padding: 64px 32px; } }
  @media (min-width: 1024px) { .ads-section { padding: 72px 48px; } }
  @media (min-width: 1440px) { .ads-section { padding: 88px 64px; } }

  /* ── CONTAINER ── */
  .ads-container {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    /* Mobile: stacked */
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: start;
  }
  /* Tablet+: 30/70 split matching the screenshot */
  @media (min-width: 768px) {
    .ads-container {
      grid-template-columns: 3fr 7fr;
      gap: 60px;
    }
  }
  @media (min-width: 1024px) { .ads-container { gap: 80px; } }
  @media (min-width: 1440px) { .ads-container { max-width: 1200px; gap: 100px; } }

  /* ── LEFT: TITLE ── */
  .ads-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    line-height: 1.2em;
    margin: 0;
    /* Sticky on desktop so it stays visible while scrolling through long content */
    font-size: clamp(18px, 2.5vw, 26px);
  }
  @media (min-width: 768px) {
    .ads-title {
      position: sticky;
      top: 32px; /* offset from top of viewport */
    }
  }

  /* ── RIGHT: CONTENT WRAPPER ── */
  .ads-content {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* ── SUBHEADING ── */
  .ads-subheading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #292929;
    margin: 28px 0 10px 0;
    line-height: 1.3em;
    font-size: clamp(14px, 1.8vw, 16px);
  }
  .ads-subheading:first-child { margin-top: 0; }

  /* ── PARAGRAPH ── */
  .ads-para {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #545454;
    line-height: 1.75em;
    margin: 0 0 16px 0;
    font-size: clamp(13px, 1.5vw, 15px);
  }
  .ads-para:last-child { margin-bottom: 0; }

  /* ── BULLET LIST ── */
  .ads-list {
    margin: 0 0 16px 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ads-list-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #545454;
    line-height: 1.7em;
    font-size: clamp(13px, 1.5vw, 15px);
  }

  /* Teal dash bullet */
  .ads-bullet {
    color: #149AB5;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 14px;
  }

  /* ── LEARN MORE LINK ── */
  .ads-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    color: #149AB5;
    text-decoration: none;
    font-size: clamp(13px, 1.5vw, 14px);
    transition: color 0.2s ease;
    margin-top: 20px;
  }
  .ads-link:hover { color: #0e7a90; }
  .ads-link-arrow { transition: transform 0.2s ease; display: inline-flex; }
  .ads-link:hover .ads-link-arrow { transform: translateX(3px); }

  /* ── TOP BORDER between repeated sections ── */
  .ads-section + .ads-section {
    border-top: 1px solid #e0e0e0;
  }
`;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function AidDetailSection({ data }: AidDetailSectionProps) {
  const { id, title, content, learnMoreHref, background = "#ffffff" } = data;

  return (
    <>
      <style>{STYLES}</style>
      <section
        id={id}
        className="ads-section"
        style={{ backgroundColor: background }}
      >
        <div className="ads-container">

          {/* ── LEFT: Title (sticky on desktop) ── */}
          <h2 className="ads-title">{title}</h2>

          {/* ── RIGHT: Content blocks ── */}
          <div className="ads-content">
            {content.map((block, i) => {
              if (block.type === "subheading") {
                return (
                  <h3 key={i} className="ads-subheading">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="ads-para">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "bullets") {
                return (
                  <ul key={i} className="ads-list">
                    {block.items.map((item, j) => (
                      <li key={j} className="ads-list-item">
                        <span className="ads-bullet">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}

            {/* Optional Learn More link */}
            {learnMoreHref && (
              <Link href={learnMoreHref} className="ads-link">
                Apply Now
                <span className="ads-link-arrow">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5H13M8 1L13 5L8 9"
                      stroke="#149AB5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────
// DATA — the 3 aid sections
// ─────────────────────────────────────────────

export const studentFinanceData: AidDetailData = {
  id: "student-finance",
  title: "1. Student Finance of England",
  background: "#ffffff",
  learnMoreHref: "/apply-form",
  content: [
    {
      type: "subheading",
      text: "1.1 Undergraduate Students",
    },
    {
      type: "subheading",
      text: "Tuition Fee Funding",
    },
    {
      type: "paragraph",
      text: "Your university or college sets your tuition fee, and the loan is paid directly to them.",
    },
    {
      type: "bullets",
      items: [
        "If you're a full-time student, you can get up to £9,250.",
        "If you're studying an accelerated degree course, you could get up to £11,100.",
      ],
    },
    {
      type: "subheading",
      text: "Maintenance Allowance for Living Cost",
    },
    {
      type: "paragraph",
      text: "The allowance is paid directly into the student's bank account at the start of each semester.",
    },
    {
      type: "bullets",
      items: [
        "If you're a full-time student, you can get up to £13,022 per annum.",
        "If you're a full-time student, living with your parents you can get up to £8,400 per annum",
      ],
    },
    {
      type: "subheading",
      text: "1.2 Postgraduate Students",
    },
    {
      type: "bullets",
      items: [
        "Students are eligible for a maximum Tuition fee of 11,500£ for the full duration of the postgraduate degree.",
        "Your university or college sets your tuition fee, Each University has a different set of tuition fees for each course.",
        "If you have a balance amount after paying the tuition fee you can use that as your personal expenses.",
      ],
    },
  ],
};

export const grantsData: AidDetailData = {
  id: "grants",
  title: "2. Grants and Allowances",
  background: "#FAFAFA",
  learnMoreHref: "/apply-form",
  content: [
    {
      type: "subheading",
      text: "2.0 Grants & Allowances",
    },
    {
      type: "paragraph",
      text: "All the available grants & allowances are for Undergraduate Students provided by Student Finance England",
    },
    {
      type: "subheading",
      text: "2.1 Parents Learning Allowance:",
    },
    {
      type: "paragraph",
      text: "The Parents' Learning Allowance is additional funding to help students who are also parents.",
    },
    {
      type: "subheading",
      text: "Eligibility",
    },
    {
      type: "bullets",
      items: [
        "Needs to be a full-time Undergraduate student.",
        "The parent should have dependent child/children under the age of 16.",
        "Parents who live together and who are both students can both apply for Parents' Learning Allowance for the same child.",
      ],
    },
    {
      type: "subheading",
      text: "What you'll get",
    },
    {
      type: "bullets",
      items: [
        "2022/23 – £1,863 per academic Year",
        "2023/24 – £1,915 per academic Year",
      ],
    },
    {
      type: "subheading",
      text: "2.2 Adult Dependent Grant:",
    },
    {
      type: "paragraph",
      text: "If you're a full-time student in higher education and an adult depends on you financially, you can apply for an Adult Dependants' Grant",
    },
    {
      type: "subheading",
      text: "Eligibility",
    },
    {
      type: "bullets",
      items: [
        "Needs to be a full-time Undergraduate student.",
        "Adult dependant should be husband, wife, partner or civil partner or a relative, such as a parent or a grandparent.",
        "If you're under 25, the adult dependant cannot be your partner unless you're married or in a civil partnership.",
      ],
    },
    {
      type: "subheading",
      text: "What you'll get",
    },
    {
      type: "bullets",
      items: [
        "£3,354 for the 2023 to 2024 academic year",
        "£3,263 for the 2022 to 2023 academic year",
      ],
    },
    {
      type: "subheading",
      text: "2.3 Child Care Grant",
    },
    {
      type: "paragraph",
      text: "Childcare Grant will be paid directly to the childcare provider which is registered with Ofsted Early Years or General Childcare Register",
    },
    {
      type: "subheading",
      text: "Eligibility",
    },
    {
      type: "bullets",
      items: [
        "Needs to be a full-time Undergraduate student.",
        "The parent should have dependent child/children under the age of 16.",
      ],
    },
    {
      type: "subheading",
      text: "What you'll get",
    },
    {
      type: "bullets",
      items: [
        "Up to £188.90 a week for 1 child",
        "Up to £323.85 a week for 2 or more children",
      ],
    },
    {
      type: "subheading",
      text: "2.4 Disabled Students' Allowance (DSA)",
    },
    {
      type: "paragraph",
      text: "Disabled Students Allowance is support to cover the study-related costs you have because of a mental health problem, long-term illness or any other disability.",
    },
    {
      type: "subheading",
      text: "Eligibility",
    },
    {
      type: "bullets",
      items: [
        "Specific learning difficulty, for example dyslexia or ADHD.",
        "Mental health condition, for example anxiety or depression.",
        "Physical disability, for example if you have to use crutches, a wheelchair or a special keyboard.",
        "Sensory disability, for example if you're visually impaired, deaf or have a hearing impairment.",
        "Long-term health condition, for example cancer, chronic heart disease or HIV.",
      ],
    },
    {
      type: "subheading",
      text: "What you'll get",
    },
    {
      type: "bullets",
      items: [
        "Specialist equipment, for example a computer if you need one because of your disability.",
        "Non-medical helpers, for example a British Sign Language (BSL) interpreter or specialist note taker.",
        "Extra travel to attend your course or placement because of your disability.",
        "Other disability-related study support, for example having to print additional copies of documents for proof-reading.",
        "Buying a new laptop.",
      ],
    },
  ],
};

export const bursariesData: AidDetailData = {
  id: "bursaries",
  title: "3. Bursaries & Scholarships",
  background: "#ffffff",
  learnMoreHref: "/apply-form",
  content: [
    {
      type: "subheading",
      text: "3.0 Bursaries & Scholarships",
    },
    {
      type: "paragraph",
      text: "The above facilities are provided by the Universities listed below:",
    },
    {
      type: "paragraph",
      text: "Anglia Ruskin University / University of Northampton / University of Bolton (Manchester)",
    },
    {
      type: "subheading",
      text: "Undergraduate Scholarships",
    },
    {
      type: "bullets",
      items: [
        "Entry Scholarship: £1,000 scholarship in your first year could be available:",
        "Top Achievers: Scholarships of £2,000 are available for the overall top achievers in Year 0, Year 1 and Year 2.",
      ],
    },
    {
      type: "subheading",
      text: "Postgraduate Scholarships",
    },
    {
      type: "bullets",
      items: [
        "All applicants are offered the chance to receive a scholarship of up to 50%.",
        "Any applicant who has achieved a First-Class honours degree from a university in the UK will be offered a £1,000 scholarship upon admission.",
      ],
    },
    {
      type: "subheading",
      text: "Sports Scholarship",
    },
    {
      type: "bullets",
      items: [
        "If you're a talented athlete, apply for our Anglia Ruskin Sports Scholarship worth £1,000.",
      ],
    },
    {
      type: "subheading",
      text: "Student Travel Bursary",
    },
    {
      type: "paragraph",
      text: "The Travel Bursary Eligible students can receive a payment of £250 for each semester, with the opportunity of receiving up to £500 per Academic Year.",
    },
    {
      type: "subheading",
      text: "Eligibility Criteria",
    },
    {
      type: "bullets",
      items: [
        "Studying an undergraduate degree.",
        "80% minimum attendance across all modules for the semester.",
        "Submitted all assessments on time.",
        "Payment:",
      ],
    },
    {
      type: "paragraph",
      text: "For qualifying students, the payment will be £250 after the assessment results are confirmed for Semester 1, and £250 after the results are confirmed for Semester 2.",
    },
    {
      type: "subheading",
      text: "Other Travel Discounts",
    },
    {
      type: "bullets",
      items: [
        "Oyster Card – Students can get up to 30% for their transportation.",
        "Railway Card Discount",
      ],
    },
    {
      type: "subheading",
      text: "Financial Hardship Bursary",
    },
    {
      type: "paragraph",
      text: "The Financial Hardship Bursary is a bursary provided by ARU London to assist undergraduate and postgraduate students who are experiencing financial hardship and their Student Finance Loan does not cover their expenses.",
    },
    {
      type: "paragraph",
      text: "A bursary of up to £500 for undergraduate or £250 for postgraduate students will be awarded to students with a successful application that does not need to be paid back.",
    },
    {
      type: "subheading",
      text: "Hardship Fund",
    },
    {
      type: "paragraph",
      text: "Hardship Fund is a grant provided by ARU London to assist undergraduate students who are experiencing long-term financial difficulties and are therefore unable to pay their outstanding tuition fees. If the application for financial relief is successful, a partial discount will be offered on the current outstanding tuition fees. The Hardship Fund only applies to your tuition fees.",
    },
    {
      type: "paragraph",
      text: "When applying for Hardship Fund, relevant evidence will be requested to demonstrate how your financial difficulty is impacting your essential day-to-day living costs and inability to pay your outstanding tuition fees.",
    },
    {
      type: "subheading",
      text: "Short-Term Loan",
    },
    {
      type: "paragraph",
      text: "A Short-Term Loan of £500 is available to students who experience an unexpected, short-term financial issue that will impact their essential day-to-day living costs or studies.",
    },
    {
      type: "paragraph",
      text: "The loan is paid across four weeks in instalments of £125. You would be required to pay back the loan in full as soon as you have received your first maintenance loan instalment from Student Finance England.",
    },
  ],
};