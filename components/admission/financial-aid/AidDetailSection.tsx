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
                Learn More
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
// Move this to a separate data file if preferred:
// e.g. lib/financialAidData.ts
// ─────────────────────────────────────────────

export const studentFinanceData: AidDetailData = {
  id: "student-finance",
  title: "1. Student Finance of England",
  background: "#ffffff",
  learnMoreHref: "https://www.gov.uk/student-finance",
  content: [
    {
      type: "subheading",
      text: "Tuition Fee Loan",
    },
    {
      type: "paragraph",
      text: "Student Finance England provides financial support to eligible students studying in higher education in England. This includes tuition fee loans to cover the cost of your course fees, paid directly to your university or college.",
    },
    {
      type: "bullets",
      items: [
        "Available to UK and EU students studying at a UK university or college.",
        "The loan covers the full cost of tuition fees up to the maximum amount (£9,250 per year).",
        "You will not need to pay anything upfront — the loan is paid directly to your institution.",
        "You only start repaying once you earn over the repayment threshold.",
        "You are eligible to a loan on Tuition Fees TOPUP that is equal to the Tuition fee eligible amount.",
      ],
    },
    {
      type: "subheading",
      text: "Maintenance Loan",
    },
    {
      type: "paragraph",
      text: "A maintenance loan helps with living costs such as accommodation, food, and transport. The amount you can borrow depends on your household income and where you study.",
    },
    {
      type: "bullets",
      items: [
        "2024/25: £10,227 per academic year.",
        "2024/25: £13,022 per academic year for London students.",
        "2024/25: £8,610 per academic year while living at home.",
      ],
    },
  ],
};

export const grantsData: AidDetailData = {
  id: "grants",
  title: "2. Grants and Allowances",
  background: "#FAFAFA",
  learnMoreHref: "/financial-aid/grants",
  content: [
    {
      type: "subheading",
      text: "All the Grants",
    },
    {
      type: "paragraph",
      text: "The government grants allowances are for young people receiving financial finance income.",
    },
    {
      type: "subheading",
      text: "Allowances and requirements",
    },
    {
      type: "paragraph",
      text: "The following conditions and requirements in order to help eligible students who are on grants:",
    },
    {
      type: "subheading",
      text: "Grant A",
    },
    {
      type: "bullets",
      items: [
        "Available to UK and EU students studying in a higher education course.",
        "Students must be in full-time education to receive the grant, for a period of at least a full academic year.",
        "Annual household income of below £25,000 per annum.",
      ],
    },
    {
      type: "subheading",
      text: "Grant B",
    },
    {
      type: "paragraph",
      text: "In addition to Grant A, the following additional criteria also apply for students who are applying for Grant B. You can use Government's official resource to find out more on the criteria.",
    },
    {
      type: "bullets",
      items: [
        "The student must be a UK and EU resident.",
        "The student must be over 21 years of age.",
        "Not published more than 5 years.",
      ],
    },
    {
      type: "subheading",
      text: "What you'll get",
    },
    {
      type: "bullets",
      items: [
        "Up to £1,000 per academic year for Grant A.",
        "£2,000 to £5,000 academic year for Grant B.",
      ],
    },
  ],
};

export const bursariesData: AidDetailData = {
  id: "bursaries",
  title: "3. Bursaries & Scholarships",
  background: "#ffffff",
  learnMoreHref: "/financial-aid/bursaries",
  content: [
    {
      type: "subheading",
      text: "All Bursaries & Scholarships",
    },
    {
      type: "paragraph",
      text: "Bursaries and scholarships are awarded to eligible students based on financial need, academic achievement, or other criteria set by universities.",
    },
    {
      type: "subheading",
      text: "Bursary requirements",
    },
    {
      type: "bullets",
      items: [
        "The following conditions must be met for students to be eligible.",
        "First-time students studying at the institution.",
        "High academic achievement — must have a minimum of 3 A's at A-level or equivalent.",
        "Annual household income must be below a threshold set by the institution.",
      ],
    },
    {
      type: "subheading",
      text: "Special Scholarships",
    },
    {
      type: "bullets",
      items: [
        "The Scholarship is available for students who are in their first year of study and are undertaking a course that ONLY leads to a specific degree.",
      ],
    },
    {
      type: "subheading",
      text: "Special Financial Bursary",
    },
    {
      type: "paragraph",
      text: "The Warwick Bursary is a means-tested bursary provided to eligible students with assessed household income below £45,000 per year. Students do not need to apply as eligibility is assessed automatically.",
    },
    {
      type: "bullets",
      items: [
        "£1,500 per year for those with assessed household income.",
        "£750 per year for those with partially assessed income.",
        "Full financial support for students in Local Authority care.",
      ],
    },
  ],
};