// components/admission/admissionOverview/ApplySectionReverse.tsx

import Link from "next/link";
import { AnimatedNextImage } from "@/components/animation/Image";

export default function ApplySectionReverse() {
  return (
    <section className="bg-white pt-4 pb-12 md:pt-0 md:pb-24 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12 items-center px-4 md:px-8">

        {/* Left — image */}
        <div className="relative pb-8 md:pb-16">

          {/* Image wrapper — needs relative + fixed height + overflow-hidden */}
          <div className="relative w-full h-64 sm:h-96 md:h-150 z-10 overflow-hidden">
            <AnimatedNextImage
              src="/financial.jpg"
              alt="University campus building"
            />
          </div>

        </div>

        {/* Right — text */}
        <div className="md:pl-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#292929] mb-5 md:mb-8">
            Financial Aid
          </h2>

          <p className="text-base md:text-lg text-[#545454] leading-relaxed mb-8 md:mb-10 max-w-sm">
            <strong className="text-[#292929]">
              Secure Your Student Funding Up To £60,000 For Your Desired Course
            </strong>
            <br />
            <br />
            Primeleed supports students in their pursuit of higher education by
            partnering with universities across the UK to provide funding
            assistance. Through these collaborations, we bridge the financial
            gap, making education more accessible and empowering students to
            achieve their academic aspirations.
          </p>

          <Link
            href="/financial-aid"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              color: "#149AB5",
              textDecoration: "none",
              borderBottom: "2px solid #149AB5",
              paddingBottom: "2px",
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}