"use client";

import { FaqCategory } from "./types";

interface CategoryCardProps {
  category: FaqCategory;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-white rounded-2xl border border-[#e8e8e8] hover:border-[#3AAFB9] hover:shadow-lg hover:shadow-[#3AAFB9]/10 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Illustration zone */}
      <div className="w-full aspect-[4/3] flex items-center justify-center p-6 bg-[#fafafa] group-hover:bg-[#f0fafb] transition-colors duration-300">
        <div className="w-24 h-20 sm:w-28 sm:h-24 transition-transform duration-300 group-hover:scale-105">
          {category.illustration}
        </div>
      </div>

      {/* Card footer */}
      <div className="px-4 py-4 border-t border-[#f0f0f0]">
        <p className="font-semibold text-[#1a1a1a] text-sm sm:text-[0.9rem] leading-snug group-hover:text-[#3AAFB9] transition-colors duration-200">
          {category.title}
        </p>
        <p className="text-[#aaa] text-xs mt-1">{category.questionCount}</p>
      </div>
    </button>
  );
}