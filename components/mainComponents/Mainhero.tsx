// components/mainComponents/Mainhero.tsx
import Image from "next/image";
import { ReactNode } from "react";

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
      style={{ minHeight: "480px", marginBottom: "160px" }}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      {/* Teal content box */}
      <div
        className="absolute text-white w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-auto"
        style={{
          backgroundColor: "#149AB5",
          padding: "clamp(32px, 6vw, 90px) clamp(24px, 5vw, 70px) clamp(40px, 7vw, 100px) clamp(24px, 5vw, 70px)",
          maxWidth: "700px",
          bottom: "-100px",
          left: "clamp(16px, 5vw, 280px)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 60px)",
            fontWeight: "800",
            lineHeight: "1.1em",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 2vw, 20px)",
            fontWeight: "400",
            lineHeight: "1.6em",
            color: "#ffffff",
            textAlign: "justify",
          }}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
}