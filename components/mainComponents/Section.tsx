import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={["py-16 md:py-20 px-4 md:px-8", className].filter(Boolean).join(" ")}>
      <div className="max-w-9xl mx-auto *:mt-0 *:mb-0">
        {children}
      </div>
    </section>
  );
}