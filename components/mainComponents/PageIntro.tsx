// components/mainComponents/PageIntro.tsx
import { ReactNode } from "react";

type Props = {
  title?: string;           // optional — some pages have no title
  paragraph?: ReactNode;    // optional — supports text + links inside
};

export default function PageIntro({ title, paragraph }: Props) {
  // If neither title nor paragraph — render nothing
  if (!title && !paragraph) return null;

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Title — only renders if provided */}
        {title && (
          <h2
            className="font-black mb-6 md:mb-8 leading-tight"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#0d1b2a",
            }}
          >
            {title}
          </h2>
        )}

        {/* Paragraph — only renders if provided */}
        {paragraph && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 1.4vw, 18px)",
              color: "#374151",
              lineHeight: "1.75em",
            }}
          >
            {paragraph}
          </div>
        )}

      </div>
    </section>
  );
}