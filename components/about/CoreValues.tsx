"use client";

// components/about/CoreValues.tsx

import { useRef, useEffect } from "react";
import {
  ClipboardList,
  MessageSquare,
  CalendarCheck,
  LucideIcon,
} from "lucide-react";
import CoreValueCard from "./CoreValueCard";

const STYLES = `
  .cv-section {
    background-color: #ffffff;
    padding: 60px 0 80px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .cv-section { padding: 72px 0 96px; } }
  @media (min-width: 1024px) { .cv-section { padding: 80px 0 100px; } }
  @media (min-width: 1440px) { .cv-section { padding: 100px 0 120px; } }

  /*
    Self-contained container — mirrors AdmissionContent exactly:
    max-w-7xl (1280px) + px-5 (20px) + md:px-7 (28px)
    Works correctly on every page with no wrapper needed.
  */
  .cv-container {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    .cv-container {
      padding-left: 28px;
      padding-right: 28px;
    }
  }

  .cv-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 48px;
  }
  @media (min-width: 640px)  { .cv-header { margin-bottom: 56px; } }
  @media (min-width: 1024px) { .cv-header { margin-bottom: 64px; } }

  .cv-intro {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 1.5em;
    color: #1a1a1a;
    margin: 0;
    font-size: clamp(18px, 3vw, 26px);
    flex: 1;
  }

  .cv-link {
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #149AB5;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    transition: opacity 0.2s ease;
  }
  .cv-link:hover { opacity: 0.75; text-decoration: underline; }
  @media (min-width: 640px) { .cv-link { font-size: 15px; } }

  .cv-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media (min-width: 640px) {
    .cv-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .cv-cell {
    padding: 28px 0;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
  }
  .cv-cell:first-child { border-top: none; padding-top: 0; }
  .cv-cell:last-child  { padding-bottom: 0; }

  @media (min-width: 640px) {
    .cv-cell { border-top: none; padding: 0; }
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

interface CoreValuesProps {
  introText?: string;
  linkLabel?: string;
  linkHref?: string;
}

export default function CoreValues({ introText, linkLabel, linkHref }: CoreValuesProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>(".cv-card-anim");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("visible"), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section className="cv-section">
        <div className="cv-container">
          <div className="cv-header">
            <p className="cv-intro">{introText ?? "How to Apply"}</p>
            {linkLabel && linkHref && (
              <a className="cv-link" href={linkHref}>{linkLabel}</a>
            )}
          </div>
          <div className="cv-grid" ref={gridRef}>
            {values.map((value, index) => (
              <div key={value.title} className="cv-cell cv-card-anim">
                <CoreValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  showLeftBorder={index === 1}
                  showRightBorder={index === 1}
                  isFirst={index === 0}
                  isLast={index === values.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}