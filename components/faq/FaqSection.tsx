"use client";

import { useState } from "react";
import { FaqCategory } from "./types";
import { FAQ_CATEGORIES } from "./Data";
import CategoryCard from "./Card";
import FaqModal from "./Modal";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | null>(
    null,
  );

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <p className="text-[#3AAFB9] text-xs font-semibold uppercase tracking-widest mb-3">
          Browse by topic
        </p>
        <h2 className="font-bold text-[#1a1a1a] text-2xl sm:text-3xl mb-10">
          What would you like to know?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FAQ_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>

      {activeCategory && (
        <FaqModal
          category={activeCategory}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </section>
  );
}
