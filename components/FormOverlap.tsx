// components/FormOverlap.tsx
// This component renders the large "FORM" text that overlaps
// the boundary between the white section above and the yellow
// CTA section below — exactly as seen on primeleed.com.
//
// The overlapping effect works through a simple CSS trick:
// negative marginBottom pulls the element upward, making it
// visually sit on TOP of the section that comes after it.
// Think of it like sliding a piece of paper halfway under a book —
// the paper belongs to the space above, but overlaps what's below.

export default function FormOverlap() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff", // white — matches the section above
        textAlign: "center",
        // This negative marginBottom is the key to the overlap effect.
        // It pulls the yellow CTA section upward so it appears behind
        // the "FORM" text. The clamp() makes it responsive so the
        // overlap scales correctly on different screen sizes.
        paddingBottom: "0",
        marginBottom: "-15px",
      }}
    >
      <h2
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "clamp(60px, 15vw, 200px)",
          fontWeight: "800",
          lineHeight: "1em",
          color: "#292929",
          margin: "0",
          // This transform moves the text downward so it overlaps
          // INTO the yellow section below it, not just sitting above it.
          // translateY with a percentage moves relative to the element's
          // own height — so as the font scales, the overlap scales too.
          transform: "translateY(40%)",
          display: "block",
        }}
      >
        FORM
      </h2>
    </div>
  );
}