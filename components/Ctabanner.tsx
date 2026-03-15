import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function CTABanner() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#F5C400", minHeight: "340px" }}
    >
      <div
        className="max-w-7xl mx-auto px-7 flex flex-col md:flex-row items-center gap-8"
        style={{ minHeight: "340px" }}
      >
        {/* Left: Heading */}
        <div className="w-full md:w-[42%] shrink-0 py-12 md:py-0">
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", color: "#0d1b2a" }}
          >
            Are you ready to take the next step toward your higher education?
          </h2>
        </div>

        {/* Center: Floating student image */}
        <div
          className="hidden md:block absolute"
          style={{
            width: "260px",
            height: "380px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="/student-cta.jpg"
            alt="Student studying"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Right: CTA buttons */}
        <div className="flex-1 flex flex-col items-end gap-4 pb-12 md:pb-0">
          <div className="w-full max-w-[320px]">
            <Button href="/admission/form" label="Application Form" />
          </div>

          <div className="flex items-center gap-2 w-full max-w-[320px] justify-end">
            <Link
              href="/support/request-info"
              className="font-semibold transition-colors duration-200 hover:text-[#2ab4c0]"
              style={{ color: "#1a2e3b", fontSize: "15px" }}
            >
              Request Info
            </Link>
            <span style={{ color: "#1a2e3b", opacity: 0.5, fontSize: "18px" }}>
              |
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
