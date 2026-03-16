import Image from "next/image";
import Link from "next/link";

export default function FundingSupport() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* ── Image — top on mobile, right on desktop ── */}
          {/* Rendered first in DOM but shown second on desktop via order */}
          <div className="relative w-full md:w-[55%] min-h-65 sm:min-h-80 md:min-h-0 order-first md:order-last">
            <Image
              src="/Vission.jpeg"
              alt="Student applying for funding"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* ── Left: Text content ── */}
          <div
            className="flex flex-col justify-center
                       px-5 sm:px-10 lg:px-16
                       py-10 sm:py-14 lg:py-20
                       w-full md:w-[45%] shrink-0
                       order-last md:order-first"
          >
            {/* Icon */}
            <div className="mb-5 md:mb-6">
              <svg
                width="44"
                height="44"
                viewBox="0 0 64 64"
                fill="none"
                className="md:w-13 md:h-13"
              >
                <path
                  d="M20 36c0 0 4-4 8-4s6 2 10 2 8-4 8-4"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 28l8 8 6-4 6 4 6-4 6 4 8-8"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 24l4-8h32l4 8"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 44l-4 8h40l-4-8"
                  stroke="#111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main heading */}
            <h2
              className="mb-4 md:mb-6 leading-tight tracking-tight"
              style={{
                fontSize: "clamp(24px, 3.5vw, 42px)",
                fontWeight: 900,
                color: "#0d1b2a",
              }}
            >
              Get Funding Support
            </h2>

            {/* Bold subtitle */}
            <p
              className="mb-4 md:mb-5 leading-snug"
              style={{
                fontSize: "clamp(14px, 1.4vw, 17px)",
                fontWeight: 700,
                color: "#0d1b2a",
              }}
            >
              Secure Your University Placement Funding
              <br />
              Up To £60,000 For Your Desired Course
            </p>

            {/* Body text */}
            <p
              className="mb-8 md:mb-10 leading-relaxed"
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                fontWeight: 400,
                color: "#3d4f5e",
                maxWidth: "480px",
              }}
            >
              Prime Leed supports students in their pursuit of higher education
              by partnering with universities across the UK to provide funding
              assistance. Through these collaborations, we bridge the financial
              gap, making higher education more accessible and empowering
              students to achieve their academic aspirations.
            </p>

            {/* Apply Now link */}
            <Link
              href="/admission/financial-aid"
              className="inline-flex items-center gap-2 font-semibold
                         underline underline-offset-2 w-fit
                         transition-opacity duration-200 hover:opacity-75"
              style={{ color: "#2ab4c0", fontSize: "clamp(14px, 1.2vw, 16px)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3"
                  stroke="#2ab4c0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 2h5v5M14 2L8 8"
                  stroke="#2ab4c0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
