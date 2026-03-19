// components/mainComponents/ResourcesList.tsx
import Link from "next/link";

type Resource = {
  label: string;
  href: string;
};

type Props = {
  title?: string;
  description?: string;
  resources: Resource[];
};

function PDFIcon() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M4 0C2.9 0 2 0.9 2 2V26C2 27.1 2.9 28 4 28H20C21.1 28 22 27.1 22 26V8L14 0H4Z"
        fill="#E8E8E8"
      />
      <path d="M14 0L22 8H16C14.9 8 14 7.1 14 6V0Z" fill="#BDBDBD" />
      <rect x="0" y="14" width="18" height="10" rx="2" fill="#292929" />
      <text
        x="9"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

export default function ResourcesList({
  title = "University Guides",
  description = "Here you can review useful guidance to progress your application:",
  resources,
}: Props) {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Title */}
        <h2
          className="font-black mb-6"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#0d1b2a",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="mb-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.2vw, 16px)",
            color: "#374151",
            lineHeight: "1.7em",
          }}
        >
          {description}
        </p>

        {/* Resource links */}
        <div className="flex flex-col gap-4">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity w-fit"
              style={{
                color: "#1a2e3b",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.2vw, 16px)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              <PDFIcon />
              {resource.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
