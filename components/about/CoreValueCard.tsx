"use client";

// components/about/CoreValueCard.tsx

import { LucideIcon } from "lucide-react";

const STYLES = `
  .cvc-card         { padding: 0 24px 0 0; box-sizing: border-box; }
  .cvc-card--padded { padding: 0 24px; }
  .cvc-card--last   { padding: 0 0 0 24px; }

  @media (min-width: 1024px) {
    .cvc-card         { padding: 0 36px 0 0; }
    .cvc-card--padded { padding: 0 36px; }
    .cvc-card--last   { padding: 0 0 0 36px; }
  }
  @media (min-width: 1440px) {
    .cvc-card         { padding: 0 48px 0 0; }
    .cvc-card--padded { padding: 0 48px; }
    .cvc-card--last   { padding: 0 0 0 48px; }
  }

  /* Mobile — all flush left */
  @media (max-width: 639px) {
    .cvc-card,
    .cvc-card--padded,
    .cvc-card--last { padding: 0 !important; }
  }

  @media (min-width: 640px) {
    .cvc-card--border-left  { border-left:  1px solid #e0e0e0; }
    .cvc-card--border-right { border-right: 1px solid #e0e0e0; }
  }

  .cvc-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }
  @media (min-width: 1024px) { .cvc-header { gap: 14px; margin-bottom: 18px; } }

  .cvc-icon {
    flex-shrink: 0;
    width:  clamp(24px, 3vw, 36px) !important;
    height: clamp(24px, 3vw, 36px) !important;
    transform: scale(0.5);
    opacity: 0;
    transition:
      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity   0.4s ease;
  }
  .cv-card-anim.visible .cvc-icon {
    transform: scale(1);
    opacity: 1;
  }

  .cvc-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    line-height: 1.2;
    font-size: clamp(16px, 2vw, 20px);
  }

  .cvc-desc {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.7em;
    color: #545454;
    margin: 0;
    text-align: justify;
    font-size: clamp(13px, 1.5vw, 15px);
  }
`;

interface CoreValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  showLeftBorder?: boolean;
  showRightBorder?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function CoreValueCard({
  icon: Icon,
  title,
  description,
  showLeftBorder = false,
  showRightBorder = false,
  isFirst = false,
  isLast = false,
}: CoreValueCardProps) {
  const baseClass = isFirst
    ? "cvc-card"
    : isLast
    ? "cvc-card cvc-card--last"
    : "cvc-card cvc-card--padded";

  const cardClass = [
    baseClass,
    showLeftBorder  ? "cvc-card--border-left"  : "",
    showRightBorder ? "cvc-card--border-right" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <style>{STYLES}</style>
      <div className={cardClass}>
        <div className="cvc-header">
          <Icon className="cvc-icon" size={36} strokeWidth={1.5} color="#333333" />
          <h3 className="cvc-title">{title}</h3>
        </div>
        <p className="cvc-desc">{description}</p>
      </div>
    </>
  );
}