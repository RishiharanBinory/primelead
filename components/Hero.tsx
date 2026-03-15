import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "500px",
        backgroundImage:
          "url('/university.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-7 flex flex-col justify-center"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
      >
        <h1
          className="font-black text-[#dce1e5] leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
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
          style={{ color: "#fafafa", fontSize: "16px" }}
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
              stroke="#fafafa"
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
