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
    <div className="flex flex-col justify-center gap-6 lg:gap-8 py-4 lg:py-0 lg:pr-16">
      {/* Text block */}
      <div className="mt-0 lg:mt-10 text-center lg:text-left">
        <h2 className="font-bold text-[#1a1a1a] text-2xl sm:text-3xl lg:text-[2.75rem] leading-tight mb-4 lg:mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-[#555555] text-base sm:text-lg leading-relaxed">
          Whether you are choosing a course, checking your eligibility, or
          simply unsure where to begin, our advisors are here to help. Get in
          touch and we will guide you personally, completely free of charge.
        </p>
      </div>

      {/* University carousel */}
      <div className="w-full overflow-hidden mt-4 lg:mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#bbb] mb-3 text-center lg:text-left">
          Partnered Universities
        </p>
        <UniCarousel />
      </div>
    </div>
  );
}