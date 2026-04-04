// components/mainComponents/FAQAccordion.tsx
"use client";

import { useState, ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

type Props = {
  items: FAQItem[];
  defaultOpen?: number |null;
};

function ChevronUp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 15L12 9L6 15" stroke="#1a2e3b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="#1a2e3b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FAQAccordion({ items, defaultOpen = null }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => setOpenIndex((prev) => prev === index ? null : index)}
              className="w-full flex items-center justify-between py-9 text-left gap-4 bg-transparent border-none cursor-pointer"
            >
              <h2
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 26px)",
                  fontWeight: 800,
                  color: "#0d1b2a",
                  lineHeight: "1.3em",
                }}
              >
                {item.question}
              </h2>
              <span className="shrink-0">
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>

            {/* Answer */}
            <div
              className="overflow-hidden"
              style={{
                maxHeight: isOpen ? "1000px" : "0px",
                opacity: isOpen ? 1 : 0,
                transition: "max-height 0.4s ease, opacity 0.3s ease",
              }}
            >
              <div className="pb-8">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}