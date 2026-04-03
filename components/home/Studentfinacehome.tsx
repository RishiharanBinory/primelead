import { HeroImage } from "../animation/HeroImage";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

export default function StudentFinance() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "380px" }}  // ← was 520px
    >
      <HeroImage src="/Finanace.jpeg" />
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="relative z-10 max-w-7xl mx-auto
                   px-5 md:px-7
                   py-8 md:py-10
                   flex flex-col md:flex-row items-center
                   gap-8 md:gap-12"
        style={{ minHeight: "380px" }}  // ← was 520px, matches section
      >
        <div className="w-full flex flex-col gap-4 md:gap-5" style={{ maxWidth: "580px" }}>
          <AnimateOnScroll delay="0s">
            <h2
              className="text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(26px, 4vw, 56px)", fontWeight: 900,color: "#ffffff" }}
            >
              Student Finance
              <br />
              England
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay="0.2s">
            <p className="text-white/90 leading-[1.7]" style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}>
              Student loans and grants in the United Kingdom are primarily
              provided by the government through the Student Loans Company (SLC),
              a non-departmental public body.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay="0.4s">
            <p className="text-white/90 leading-[1.7]" style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}>
              The SLC is responsible for Student Finance England and Student
              Finance Wales, and is a delivery partner of Student Finance NI and
              the Student Awards Agency for Scotland.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="hidden md:block md:w-12 shrink-0" />

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