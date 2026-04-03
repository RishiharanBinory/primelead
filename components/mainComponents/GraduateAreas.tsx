import Link from "next/link";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

type AreaLink = {
  label: string;
  href: string;
};

type Props = {
  title?: string;
  paragraph?: string;
  areas?: AreaLink[];
};

export default function GraduateAreas({
  title = "Graduate Areas of Study",
  paragraph = "Our unique academic programs break free from conventional limits, allowing students to explore a wide range of subjects and learn from different perspectives. They have the freedom to choose courses from various colleges and disciplines, immersing themselves in multiple areas of study aligned with their interests.",
  areas = [
    { label: "Graduate", href: "/academics/postgraduate" },
    { label: "Undergraduate", href: "/academics/undergraduate" },
  ],
}: Props) {
  return (
    <section className="w-full py-1 md:py-10 px-5 md:px-8">

      {/* Heading + paragraph — centered */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <AnimateOnScroll delay="0s" as="h2"
          className="font-black mb-6"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#0d1b2a",
            letterSpacing: "-0.5px",
          }}
        >
          {title}
        </AnimateOnScroll>

        <AnimateOnScroll delay="0.2s" as="p"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.2vw, 18px)",
            color: "#374151",
            lineHeight: "1.75em",
          }}
        >
          {paragraph}
        </AnimateOnScroll>
      </div>

      {/* Links row — hover state stays, just wrapped in scroll animation */}
      <AnimateOnScroll delay="0.4s">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6">
          {areas.map((area) => (
            <Link
              key={area.label}
              href={area.href}
              className="relative flex items-center justify-center transition-all duration-300 hover:bg-gray-100 group"
              style={{
                width: "100%",
                maxWidth: "340px",
                minHeight: "160px",
                padding: "0 40px",
                margin: "0 auto",
              }}
            >
              <span
                className="font-black transition-all duration-300 text-[#c0c0c0] group-hover:text-[#0d1b2a]"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  letterSpacing: "-0.5px",
                }}
              >
                {area.label}
              </span>
            </Link>
          ))}
        </div>
      </AnimateOnScroll>

    </section>
  );
}