import Link from "next/link";
import { Handshake } from "lucide-react";
import { AnimatedNextImage } from "../animation/Image";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

export default function FundingSupport() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Image — zoom in effect */}
          <div className="relative w-full md:w-[50%] min-h-65 sm:min-h-80 md:min-h-0 order-first md:order-last overflow-hidden">
            <div className="absolute inset-0 scale-130 origin-right">
              <AnimatedNextImage
                src="/Vission.jpeg"
                alt="Student applying for funding"
                priority
                objectPosition="90% center"
              />
            </div>
          </div>

          {/* Left: Text content — padding lives here, not on the section */}
          <div
            className="flex flex-col justify-center
                       px-5 sm:px-10 lg:px-16
                       py-12 md:py-16 lg:py-20
                       w-full md:w-[45%] shrink-0
                       order-last md:order-first"
          >
            <AnimateOnScroll delay="0s" className="mb-5 md:mb-6">
              <Handshake size={44} stroke="#111" strokeWidth={1.8} />
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.15s">
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
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.3s">
              <p
                className="mb-4 md:mb-5 leading-snug"
                style={{
                  fontSize: "clamp(18px, 1.4vw, 18px)",
                  fontWeight: 700,
                  color: "#0d1b2a",
                }}
              >
                Secure Your University Placement Funding
                <br />
                Up To £60,000 For Your Desired Course
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.45s">
              <p
                className="mb-8 md:mb-10 leading-relaxed"
                style={{
                  fontSize: "clamp(18px, 1.2vw, 16px)",
                  fontWeight: 400,
                  color: "#3d4f5e",
                  maxWidth: "480px",
                }}
              >
                Prime Leed supports students in their pursuit of higher
                education by partnering with universities across the UK to
                provide funding assistance. Through these collaborations, we
                bridge the financial gap, making higher education more
                accessible and empowering students to achieve their academic
                aspirations.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.6s">
              <Link
                href="/admission/financial-aid"
                className="inline-flex items-center gap-2 font-semibold underline underline-offset-2 w-fit transition-opacity duration-200 hover:opacity-75"
                style={{
                  color: "#2ab4c0",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                }}
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
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
