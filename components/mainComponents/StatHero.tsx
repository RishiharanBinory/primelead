import { ReactNode } from "react";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

type Props = {
  stat: string;
  title: ReactNode;
  paragraph: string;
};

export default function StatHero({ stat, title, paragraph }: Props) {
  return (
    <section className="w-full px-5 md:px-8 lg:px-16 pt-40 pb-1">
      <div className="max-w-5xl mx-auto text-left">
        {/* Top row: stat + title */}
        <div className="flex flex-col sm:flex-row items-center justify-left gap-4 sm:gap-16 mb-8">
          {/* Big number */}
          <AnimateOnScroll
            delay="0s"
            as="span"
            className="shrink-0 font-black leading-none"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(92px, 10vw, 150px)",
              color: "#0d1b2a",
              letterSpacing: "-2px",
            }}
          >
            {stat}
          </AnimateOnScroll>

          {/* Title */}
          <AnimateOnScroll
            delay="0.2s"
            as="h2"
            className="font-black leading-tight text-left"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#0d1b2a",
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </AnimateOnScroll>
        </div>

        {/* Paragraph */}
        <AnimateOnScroll
          delay="0.4s"
          as="p"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.2vw, 18px)",
            color: "#374151",
            lineHeight: "1.75em",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {paragraph}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
