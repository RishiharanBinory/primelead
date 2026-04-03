import { ReactNode } from "react";
import { AnimatedNextImage } from "../animation/Image";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraph: ReactNode;
};

export default function MainHero({
  imageSrc,
  imageAlt,
  title,
  paragraph,
}: Props) {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: "480px"}}
    >
      {/* Background image — zoom effect */}
      <AnimatedNextImage src={imageSrc} alt={imageAlt} priority />

      {/* Dark overlay */}
      {/* <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.40)" }}
      /> */}

      {/* Teal content box — fixed consistent size */}
      <AnimateOnScroll
        delay="0.3s"
        className="absolute text-white w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-175 lg:translate-x-40"
        style={{
          backgroundColor: "#149AB5",
          padding:
            "clamp(32px, 6vw, 90px) clamp(24px, 5vw, 70px) clamp(40px, 7vw, 100px) clamp(24px, 5vw, 70px)",
          maxWidth: "700px",
          minWidth: "clamp(280px, 50vw, 700px)", // ← never shrinks below this
          minHeight: "clamp(200px, 30vw, 380px)", // ← consistent height always
          bottom: "-100px",
          left: "clamp(16px, 5vw, 280px)",
          transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // ← centers content vertically
        }}
      >
        <AnimateOnScroll
          delay="0.5s"
          as="h1"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 60px)",
            fontWeight: "800",
            lineHeight: "1.1em",
            color: "#ffffff",
            marginBottom: "16px",
            transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
          }}
        >
          {title}
        </AnimateOnScroll>

        <AnimateOnScroll
          delay="0.7s"
          as="p"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 2vw, 20px)",
            fontWeight: "400",
            lineHeight: "1.6em",
            color: "#ffffff",
            textAlign: "justify",
            transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
          }}
        >
          {paragraph}
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  );
}
