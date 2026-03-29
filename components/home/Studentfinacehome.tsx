import { HeroImage } from "../animation/HeroImage";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

export default function StudentFinance() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* Background image — zoom effect */}
      <HeroImage src="/Finanace.jpeg" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content row */}
      <div
        className="relative z-10 max-w-7xl mx-auto
                   px-5 md:px-7
                   py-12 md:py-0
                   flex flex-col md:flex-row items-center
                   gap-8 md:gap-0"
        style={{ minHeight: "520px" }}
      >
        {/* Left: Text */}
        <div
          className="w-full flex flex-col gap-5 md:gap-7"
          style={{ maxWidth: "580px" }}
        >
          {/* Heading */}
          <AnimateOnScroll delay="0s">
            <h2
              className="text-white leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(30px, 4.5vw, 68px)",
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              Student Finance
              <br />
              England
            </h2>
          </AnimateOnScroll>

          {/* Paragraph 1 */}
          <AnimateOnScroll delay="0.2s">
            <p
              className="text-white/90 leading-[1.7]"
              style={{ fontSize: "clamp(18px, 1.15vw, 21px)" }}
            >
              Student loans and grants in the United Kingdom are primarily
              provided by the government through the Student Loans Company (SLC),
              a non-departmental public body.
            </p>
          </AnimateOnScroll>

          {/* Paragraph 2 */}
          <AnimateOnScroll delay="0.4s">
            <p
              className="text-white/90 leading-[1.7]"
              style={{ fontSize: "clamp(18px, 1.15vw, 21px)" }}
            >
              The SLC is responsible for Student Finance England and Student
              Finance Wales, and is a delivery partner of Student Finance NI and
              the Student Awards Agency for Scotland.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:w-12 shrink-0" />

        {/* Right: Video */}
        <AnimateOnScroll
          delay="0.3s"
          className="w-full md:flex-1 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
        >
          <video
            src="/Student-Finance-Explained-2022-to-2023.mp4"
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9", display: "block" }}
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}