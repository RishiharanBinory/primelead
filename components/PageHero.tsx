// components/PageHero.tsx
//
// A REUSABLE hero component used on every page of the site.
// Instead of duplicating the same hero code on every page,
// we accept the changing parts as "props" — just like function parameters.
//
// Usage example:
// <PageHero
//   title="About"
//   description="Prime Leed is a trusted resource..."
//   imageSrc="/your-image.jpg"
// />

// This TypeScript interface defines the "contract" for this component.
// It says: "whoever uses PageHero MUST provide these three values."
// Think of it as the recipe's ingredient list — you can't skip any of them.
interface PageHeroProps {
  title: string; // The large heading text e.g. "About", "Admission & Aid"
  description: string; // The paragraph text below the heading
  imageSrc: string; // The background image URL or path
  strongText?: string; // Optional bolded first sentence (the ? means it's optional)
}

export default function PageHero({
  title,
  description,
  imageSrc,
  strongText,
}: PageHeroProps) {
  return (
    <section className="relative w-full" style={{ minHeight: "480px" }}>
      {/* Background image — receives the imageSrc prop instead of a hardcoded URL.
          This is the key change — each page passes its own image. */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay — same on every page, so it's hardcoded here */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      {/* Teal content box — same styling on every page */}
      <div
        className="absolute bottom-0 left-0 text-white"
        style={{
          backgroundColor: "#149AB5",
          padding: "100px 80px 110px 80px",
          maxWidth: "650px",
          bottom: "-130px", // ← "move it 40px away from the bottom" — adjusts vertical
          left: "220px",
        }}
      >
        {/* Title — receives the title prop */}
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "60px", // scaled down from 55px for the box size
            fontWeight: "800",
            lineHeight: "1.1em",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>

        {/* Description paragraph — receives the description prop.
            If strongText is provided, it renders as bold at the start.
            If not provided, the description renders normally without bold text.
            The {strongText && ...} pattern means "only render this if strongText exists" */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "1.6em",
            color: "#ffffff",
            textAlign: "justify",
          }}
        >
          {strongText && <strong>{strongText} </strong>}
          {description}
        </p>
      </div>
    </section>
  );
}
