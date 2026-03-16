import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{
        height: "calc(100vh - 70px)",
        minHeight: "500px",
        maxHeight: "750px",
        backgroundImage: "url('/Home_img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-7 flex flex-col justify-start"
        style={{ paddingTop: "50px", paddingBottom: "300px" }}
      >
        <h1
          className="text-white leading-tight mb-6 font-black"
          style={{ fontSize: "clamp(28px, 5.5vw, 50px)", fontWeight: 900 }}
        >
          Start your journey
          <br />
          in higher education &amp;
          <br />
          pursue your passion
        </h1>

        <Link
          href="/admission/form"
          className="inline-flex items-center gap-2 font-semibold hover:opacity-75 transition-opacity w-fit"
          style={{ color: "#ffffff", fontSize: "clamp(14px, 2vw, 16px)" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 9h12M10 4l5 5-5 5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Apply Now
        </Link>
      </div>
    </section>
  );
}
