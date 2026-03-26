// components/about/CoreValues.tsx
// FULLY RESPONSIVE — Mobile / Tablet / Laptop / TV
//
// Mobile  (<640px)  — 1 column, horizontal rules between cards
// Tablet  (640px+)  — 3 columns (only 3 items, fits perfectly), vertical borders
// Laptop  (1024px+) — wider spacing
// TV      (1440px+) — max-width expanded

import { ClipboardList, MessageSquare, CalendarCheck, LucideIcon } from "lucide-react";
import CoreValueCard from "./CoreValueCard";

const STYLES = `
  .cv-section {
    background-color: #ffffff;
    padding: 60px 20px 80px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .cv-section { padding: 72px 32px 96px; } }
  @media (min-width: 1024px) { .cv-section { padding: 80px 48px 100px; } }
  @media (min-width: 1440px) { .cv-section { padding: 100px 64px 120px; } }

  .cv-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) { .cv-container { max-width: 1400px; } }

  .cv-intro {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 1.5em;
    color: #1a1a1a;
    margin: 0 0 48px 0;
    font-size: clamp(18px, 3vw, 26px);
  }
  @media (min-width: 640px)  { .cv-intro { margin-bottom: 56px; } }
  @media (min-width: 1024px) { .cv-intro { margin-bottom: 64px; } }

  /* Grid */
  .cv-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media (min-width: 640px) {
    .cv-grid { grid-template-columns: repeat(3, 1fr); }
  }

  /* Each cell — row spacing & horizontal rules on mobile */
  .cv-cell {
    padding: 28px 0;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
  }
  .cv-cell:first-child { border-top: none; padding-top: 0; }
  .cv-cell:last-child  { padding-bottom: 0; }

  /* Tablet+: all 3 are in one row — remove top borders entirely */
  @media (min-width: 640px) {
    .cv-cell {
      border-top: none;
      padding: 0;
    }
  }
`;

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: ClipboardList,
    title: "You Apply",
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
  },
  {
    icon: MessageSquare,
    title: "We Connect",
    description:
      "After you submit your application, an admissions representative will contact you and will help you to complete the process.",
  },
  {
    icon: CalendarCheck,
    title: "You Get Ready",
    description:
      "Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.",
  },
];

export default function CoreValues() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="cv-section">
        <div className="cv-container">
          <p className="cv-intro">
            Aligned with global shifts in the economy, society, and environment,
            our vision drives our mission and upholds our core values
          </p>

          <div className="cv-grid">
            {values.map((value, index) => (
              <div key={value.title} className="cv-cell">
                <CoreValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  showLeftBorder={index === 1}
                  showRightBorder={index === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}