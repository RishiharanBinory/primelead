// components/financial/TypesOfAid.tsx
//
// Matches the "Types of Aid" section on primeleed.com/financial-aid/ exactly:
//
// Layout (top → bottom):
//   1. "Types of Aid" section heading — Work Sans 800
//   2. Three cards in a row, each containing:
//        - Photo (top, full width of card)
//        - Number + Title  e.g. "1. Student Finance of England"
//        - Short description paragraph
//        - Teal "Learn More →" link with icon
//
// Background: white (#ffffff)
// Fully responsive — Mobile / Tablet / Laptop / TV

import Link from "next/link";

const STYLES = `
  /* ── SECTION ── */
  .toa-section {
    background-color: #ffffff;
    padding: 60px 20px 80px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .toa-section { padding: 70px 32px 90px; } }
  @media (min-width: 1024px) { .toa-section { padding: 80px 48px 100px; } }
  @media (min-width: 1440px) { .toa-section { padding: 100px 64px 120px; } }

  /* ── CONTAINER ── */
  .toa-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) { .toa-container { max-width: 1320px; } }

  /* ── SECTION HEADING ── */
  .toa-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #292929;
    margin: 0 0 48px 0;
    line-height: 1.2;
    font-size: 28px;
  }
  @media (min-width: 640px)  { .toa-heading { font-size: 32px; margin-bottom: 52px; } }
  @media (min-width: 1024px) { .toa-heading { font-size: 36px; margin-bottom: 56px; } }
  @media (min-width: 1440px) { .toa-heading { font-size: 40px; margin-bottom: 64px; } }

  /* ── GRID — 1 col mobile → 3 col tablet+ ── */
  .toa-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 768px) {
    .toa-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
  }
  @media (min-width: 1024px) { .toa-grid { gap: 36px; } }
  @media (min-width: 1440px) { .toa-grid { gap: 44px; } }

  /* ── CARD ── */
  .toa-card {
    display: flex;
    flex-direction: column;
  }

  /* ── CARD IMAGE ── */
  .toa-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    margin-bottom: 24px;
  }
  @media (min-width: 640px) {
    .toa-img {
      height: 180px;
    }
  }
  @media (min-width: 768px) {
    .toa-img {
      height: 200px;
    }
  }
  @media (min-width: 1024px) {
    .toa-img {
      height: 220px;
      margin-bottom: 28px;
    }
  }
  @media (min-width: 1440px) {
    .toa-img {
      height: 260px;
      margin-bottom: 32px;
    }
  }

  /* ── CARD TITLE (number + name) ── */
  .toa-card-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    margin: 0 0 16px 0;
    line-height: 1.3;
    font-size: 18px;
  }
  @media (min-width: 640px) { .toa-card-title { font-size: 17px; } }
  @media (min-width: 1024px) { .toa-card-title { font-size: 20px; margin-bottom: 18px; } }
  @media (min-width: 1440px) { .toa-card-title { font-size: 22px; margin-bottom: 20px; } }

  /* ── CARD DESCRIPTION ── */
  .toa-card-desc {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #545454;
    line-height: 1.75;
    margin: 0 0 20px 0;
    flex: 1;
    font-size: 14px;
  }
  @media (min-width: 640px) { .toa-card-desc { font-size: 13px; line-height: 1.7; } }
  @media (min-width: 1024px) { .toa-card-desc { font-size: 15px; line-height: 1.75; margin-bottom: 24px; } }
  @media (min-width: 1440px) { .toa-card-desc { font-size: 16px; } }

  /* ── LEARN MORE LINK ── */
  .toa-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    color: #149AB5;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;
    margin-top: auto;
  }
  @media (min-width: 1024px) { .toa-link { font-size: 15px; } }
  @media (min-width: 1440px) { .toa-link { font-size: 16px; } }
  .toa-link:hover { color: #0d7a8f; }

  /* Arrow icon inside link */
  .toa-link-icon {
    display: inline-flex;
    align-items: center;
    transition: transform 0.2s ease;
  }
  .toa-link:hover .toa-link-icon {
    transform: translateX(3px);
  }
`;

const aids = [
  {
    number: "1.",
    title: "Student Finance of England",
    description:
      "Private loans for UK universities are offered by private lenders to help students cover higher education costs. They can be used for tuition, accommodation, and living expenses. Terms vary, and eligibility may require a credit check and potentially a co-signer.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=90&auto=format&fit=crop",
    imageAlt: "Students in classroom learning",
    href: "#student-finance",
  },
  {
    number: "2.",
    title: "Grants and Allowances",
    description:
      "University grants are non-repayable financial aid provided by universities to support students in their education. They are awarded based on factors like academic merit, financial need, or specific areas of study. Grants help cover tuition fees and other educational expenses.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=90&auto=format&fit=crop",
    imageAlt: "Students collaborating together",
    href: "#grants",
  },
  {
    number: "3.",
    title: "Bursaries & Scholarships",
    description:
      "Universities may offer scholarships based on academic merit and alignment with their mission, along with additional options through third-party scholarships, providing alternative means to finance your education.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=90&auto=format&fit=crop",
    imageAlt: "Students studying together",
    href: "#bursaries",
  },
];

export default function TypesOfAid() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="toa-section">
        <div className="toa-container">

          {/* Section heading */}
          <h2 className="toa-heading">Types of Aid</h2>

          {/* 3-card grid */}
          <div className="toa-grid">
            {aids.map((aid) => (
              <div key={aid.number} className="toa-card">

                {/* Photo */}
                <img
                  src={aid.image}
                  alt={aid.imageAlt}
                  className="toa-img"
                />

                {/* Number + Title */}
                <h3 className="toa-card-title">
                  {aid.number} {aid.title}
                </h3>

                {/* Description */}
                <p className="toa-card-desc">{aid.description}</p>

                {/* Learn More link */}
                <Link href={aid.href} className="toa-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#149AB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Learn More
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}