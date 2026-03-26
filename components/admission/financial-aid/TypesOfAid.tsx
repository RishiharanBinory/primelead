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
//        - Teal "Learn More →" link
//
// Background: white (#ffffff)
// Fully responsive — Mobile / Tablet / Laptop / TV

import Link from "next/link";

const STYLES = `
  /* ── SECTION ── */
  .toa-section {
    background-color: #ffffff;
    padding: 48px 20px 64px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .toa-section { padding: 56px 32px 72px; } }
  @media (min-width: 1024px) { .toa-section { padding: 64px 48px 80px; } }
  @media (min-width: 1440px) { .toa-section { padding: 80px 64px 100px; } }

  /* ── CONTAINER ── */
  .toa-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) { .toa-container { max-width: 1200px; } }

  /* ── SECTION HEADING ── */
  .toa-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    margin: 0 0 40px 0;
    line-height: 1.1em;
    font-size: clamp(26px, 4vw, 40px);
  }
  @media (min-width: 640px)  { .toa-heading { margin-bottom: 48px; } }
  @media (min-width: 1024px) { .toa-heading { margin-bottom: 56px; } }

  /* ── GRID — 1 col mobile → 3 col tablet+ ── */
  .toa-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 640px) {
    .toa-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }
  @media (min-width: 1024px) { .toa-grid { gap: 40px; } }
  @media (min-width: 1440px) { .toa-grid { gap: 48px; } }

  /* ── CARD ── */
  .toa-card {
    display: flex;
    flex-direction: column;
  }

  /* ── CARD IMAGE ── */
  .toa-img {
    width: 100%;
    /* Fixed height on mobile, aspect-ratio driven on larger screens */
    height: 200px;
    object-fit: cover;
    display: block;
    margin-bottom: 20px;
  }
  @media (min-width: 640px) {
    .toa-img {
      height: 160px;
    }
  }
  @media (min-width: 1024px) {
    .toa-img {
      height: 200px;
    }
  }
  @media (min-width: 1440px) {
    .toa-img {
      height: 240px;
    }
  }

  /* ── CARD TITLE (number + name) ── */
  .toa-card-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #292929;
    margin: 0 0 12px 0;
    line-height: 1.3em;
    font-size: clamp(15px, 1.8vw, 18px);
  }

  /* ── CARD DESCRIPTION ── */
  .toa-card-desc {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #545454;
    line-height: 1.7em;
    margin: 0 0 16px 0;
    flex: 1; /* pushes Learn More link to bottom */
    font-size: clamp(13px, 1.5vw, 15px);
  }

  /* ── LEARN MORE LINK ── */
  .toa-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    color: #149AB5;
    text-decoration: none;
    font-size: clamp(13px, 1.5vw, 14px);
    transition: color 0.2s ease;
    margin-top: auto;
  }
  .toa-link:hover { color: #0e7a90; }

  /* Arrow icon inside link */
  .toa-link-arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .toa-link:hover .toa-link-arrow {
    transform: translateX(3px);
  }
`;

const aids = [
  {
    number: "1.",
    title: "Student Finance of England",
    description:
      "Student Finance England provides financial support to help eligible students with the costs of higher education. It includes tuition fee loans and maintenance loans to help with living costs.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    imageAlt: "Students on university campus",
    href: "#student-finance",
  },
  {
    number: "2.",
    title: "Grants and Allowances",
    description:
      "Grants and allowances are forms of financial assistance provided to students based on financial need or specific circumstances. Unlike loans, they do not need to be repaid.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    imageAlt: "Student studying with books",
    href: "#grants",
  },
  {
    number: "3.",
    title: "Bursaries & Scholarships",
    description:
      "Bursaries and scholarships are awarded based on academic achievement, financial need, or other criteria set by universities and colleges to support students throughout their studies.",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80",
    imageAlt: "Graduation ceremony",
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
                  Learn More
                  <span className="toa-link-arrow">
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

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}