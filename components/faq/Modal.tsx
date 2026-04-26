"use client";

import { useEffect, useCallback } from "react";
import { FaqCategory } from "./types";
import AccordionItem from "./Accordian";

interface FaqModalProps {
  category: FaqCategory;
  onClose: () => void;
}

export default function FaqModal({ category, onClose }: FaqModalProps) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Close on backdrop click
  const handleBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-0 sm:px-4"
      onClick={handleBackdrop}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
        style={{ animation: "slideUp 0.25s ease-out both" }}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-[#ddd]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 sm:pt-6 pb-4 border-b border-[#f0f0f0] flex-shrink-0">
          <div>
            <h2 className="font-bold text-[#1a1a1a] text-lg sm:text-xl">
              {category.title}
            </h2>
            <p className="text-[#999] text-xs mt-0.5">{category.questionCount}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center transition-colors duration-150"
            aria-label="Close modal"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 1l10 10M11 1L1 11"
                stroke="#555"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          {category.faqs.length > 0 ? (
            <div className="flex flex-col gap-3">
              {category.faqs.map((faq, i) => (
                <AccordionItem key={i} faq={faq} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0fafb] flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="#3AAFB9" strokeWidth="1.8" />
                  <path
                    d="M14 9v6M14 18v1"
                    stroke="#3AAFB9"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-[#1a1a1a] font-semibold text-base">
                Questions coming soon
              </p>
              <p className="text-[#888] text-sm mt-1.5 max-w-xs leading-relaxed">
                We are preparing FAQs for this section. Please contact one of
                our advisors for immediate help.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}