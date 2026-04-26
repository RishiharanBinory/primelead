"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import UniCarousel from "@/components/contact/carosal";

const CONTACT_DETAILS = [
  { Icon: Phone, text: "+44 (0) 20 1234 5678" },
  { Icon: Mail, text: "admissions@primeleed.co.uk" },
  { Icon: MapPin, text: "London, United Kingdom" },
];

export default function ContactLeftPanel() {
  return (
    <div className="flex-1 flex flex-col justify-center gap-8 py-6 lg:py-0 lg:pr-16">
      {/* Text block — shifted down */}
      <div className="mt-10">
        <h2 className="font-bold text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-[#555555] text-base sm:text-lg leading-relaxed">
          Whether you are choosing a course, checking your eligibility, or
          simply unsure where to begin, our advisors are here to help. Get in
          touch and we will guide you personally, completely free of charge.
        </p>
      </div>

      {/* University carousel — pushed further down */}
      <div className="w-full overflow-hidden mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#bbb] mb-3">
          Partnered Universities
        </p>
        <UniCarousel />
      </div>
    </div>
  );
}