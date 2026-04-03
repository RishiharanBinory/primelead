import Link from "next/link";
import { HeroImage } from "../animation/HeroImage";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{
        height: "calc(100vh - 80px)",
        minHeight: "500px",
        maxHeight: "900px",
      }}
    >
      {/* Background image — zoom effect */}
      <HeroImage src="/Home_img.jpg" />

      <div className="absolute inset-0 bg-black/30" />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-start"
        style={{
          paddingTop: "clamp(80px, 10vw, 50px)",
          paddingBottom: "clamp(200px, 5vw, 80px)",
          paddingLeft: "clamp(20px, 4vw, 28px)",
          paddingRight: "clamp(20px, 4vw, 28px)",
        }}
      >
        <AnimateOnScroll
          delay="0s"
          className="text-white leading-tight mb-6 font-black"
          style={{
            fontSize: "clamp(28px, 5.5vw, 50px)",
            fontWeight: 900,
            color: "#ffffff",
            transition:
              "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.9s ease",
          }}
          as="h1"
        >
          Start your journey
          <br />
          in higher education &amp;
          <br />
          pursue your passion
        </AnimateOnScroll>

        <AnimateOnScroll
          delay="0.3s"
          style={{
            transition:
              "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, opacity 0.9s ease 0.3s",
          }}
        >
          <Link
            href="/admission/form"
            className="inline-flex items-center gap-2 font-semibold hover:opacity-75 transition-opacity w-fit"
            style={{
              color: "#ffffff",
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 9h12M10 4l5 5-5 5"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Apply Now
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
