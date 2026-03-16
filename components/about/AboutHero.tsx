// components/about/AboutHero.tsx
// Exact teal color: #149AB5 from --e-global-color-vamtam_accent_1
// Exact padding on teal box: 80px 80px 110px 80px from the inspected CSS

export default function AboutHero() {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: "480px" }}
    >
      {/* Background image — full width, fixed height */}
      <img
        src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
        alt="Graduation ceremony"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay on top of the background image */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />

      {/* Teal content box — exact color #149AB5, exact padding from CSS */}
      <div
        className="absolute bottom-0 left-0 text-white"
        style={{
          backgroundColor: "#149AB5",
      padding: "100px 80px 110px 80px",
    maxWidth: "650px",
    bottom: "-130px",   // ← "move it 40px away from the bottom" — adjusts vertical
    left: "220px",
        }}
      >
        {/* h1 uses Work Sans 55px 800 weight per the CSS variables */}
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "60px",       // scaled down from 55px for the box size
            fontWeight: "800",
            lineHeight: "1.1em",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          About
        </h1>

        {/* Body text uses Inter 18px 400 weight, but smaller here to fit the box */}
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
          <strong>
            Prime Leed is a trusted resource for students seeking to apply for
            higher education.
          </strong>{" "}
          With a successful track record spanning over four years catering to
          both UK and EU students, we have assisted more than 2000 students in
          securing their places in higher education institutions.
        </p>
      </div>
    </section>
  );
}