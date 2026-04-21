interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noPadX?: boolean;
}

export default function Section({ children, className, noPadX }: SectionProps) {
  return (
    <section className={["py-8 md:py-12", !noPadX && "px-4 md:px-8", className].filter(Boolean).join(" ")}>
      <div className="max-w-9xl mx-auto *:mt-0 *:mb-0">
        {children}
      </div>
    </section>
  );
}