import Button from "./Button";

export default function ApplyToday() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F5C400" }}>
      <div
        className="max-w-7xl mx-auto px-7 py-14 md:py-16
                   flex flex-col md:flex-row items-center gap-10 md:gap-12"
      >
        {/* Left: heading */}
        <div className="shrink-0 md:w-[22%]">
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 2.8vw, 38px)", color: "#0d1b2a" }}
          >
            Apply Today
          </h2>
        </div>

        {/* Center: body text */}
        <div className="flex-1">
          <p
            className="leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#1a2e3b" }}
          >
            Whether you need guidance with your application, advice on choosing
            the right educational path, or support in securing funding, we are
            here to provide the assistance you need.
          </p>
        </div>

        {/* Right: CTA button */}
        <div className="shrink-0 md:w-[26%] w-full">
          <Button href="/admission" label="Admission" />
        </div>
      </div>
    </section>
  );
}
