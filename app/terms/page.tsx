import React from 'react'
import { termsSections } from '@/lib/termsData' 
import { TermsSection } from '../types/terms' 

// ─── Section block ────────────────────────────────────────────────────────────
function TermsSectionBlock({ section }: { section: TermsSection }) {
  const { title, paragraphs, listItems, listPosition } = section

  const list = listItems && listItems.length > 0 && (
    <ul className="mb-4.5 space-y-1.5">
      {listItems.map((item, i) => (
        <li key={i} className="text-[18px] leading-[1.75] text-[#2c2c2c]">
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="mt-8 first:mt-0">
      <h2 className="text-[18px] font-bold text-[#2c2c2c] mb-3.5 leading-snug">
        {title}
      </h2>

      {listPosition === 'before' && list}

      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-[18px] leading-[1.75] text-[#2c2c2c] mb-4.5 last:mb-0"
        >
          {para}
        </p>
      ))}

      {(listPosition === 'after' || !listPosition) && list}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 pt-14 pb-20 mt-30">
      {/* Title – 50px per spec */}
      <h1 className="text-[50px] font-extrabold leading-[1.12] tracking-[-1px] text-[#2c2c2c] mb-10">
        Terms &amp; Conditions
      </h1>

      {/* Prose column – matches screenshot width */}
      <div className="max-w-215">
        {termsSections.map((section) => (
          <TermsSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}

export default Page