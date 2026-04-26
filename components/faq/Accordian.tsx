"use client";

import { useState } from "react";
import { FaqItem } from "./types";

interface AccordionItemProps {
  faq: FaqItem;
  index: number;
}

export default function AccordionItem({ faq, index }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-[#ebebeb] rounded-xl overflow-hidden transition-shadow duration-200 ${
        open ? "shadow-sm" : ""
      }`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f9fafa] transition-colors duration-150"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f0fafb] text-[#3AAFB9] text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="text-[#1a1a1a] font-medium text-sm sm:text-[0.95rem] leading-snug">
            {faq.question}
          </span>
        </div>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#e0e0e0] flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[#3AAFB9] border-[#3AAFB9] rotate-45" : "bg-white"
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1V9M1 5H9"
              stroke={open ? "#fff" : "#888"}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 pt-3 text-[#555] text-sm sm:text-[0.9rem] leading-relaxed border-t border-[#f0f0f0]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}