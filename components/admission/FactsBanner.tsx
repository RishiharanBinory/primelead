// components/admission/FactsBanner.tsx
// Dark section with background image, large "FACTS" overlay text,
// and four statistics in a row below — 2500+, 500+, 15+, 2000+.
// Background color is #292929 matching the site's dark color variable.

export default function FactsBanner() {
  // Stats data — easy to update in one place
  const stats = [
    { number: "2500+", label: "REGISTERED STUDENTS" },
    { number: "500+", label: "COURSES AVAILABLE" },
    { number: "15+", label: "PARTNERED INSTITUTIONS" },
    { number: "2000+", label: "STUDENTS ENROLLED" },
  ];

  return (
    <section style={{ backgroundColor: "#292929" }}>

      {/* Top half — background image with FACTS overlay text */}
      <div
        className="relative w-full"
        style={{ height: "360px" }}
      >
        {/* Group meeting image */}
        <img
          src="https://www.primeleed.com/wp-content/uploads/2020/12/1544468-ID-1544468-little-groups-with-big-ideas.jpg"
          alt="Students in a group"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        />

        {/* FACTS overlay text — centered over the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(60px, 15vw, 160px)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            FACTS
          </h2>
        </div>
      </div>

      {/* Bottom half — four statistics in a row */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1000px",
          padding: "60px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
          textAlign: "center",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            {/* The large number — Work Sans bold white */}
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: "700",
                color: "#ffffff",
                lineHeight: "1em",
                marginBottom: "10px",
              }}
            >
              {stat.number}
            </p>

            {/* The label below — Inter smaller, lighter gray */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                color: "#aaaaaa",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}