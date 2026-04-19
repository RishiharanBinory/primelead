import Image from "next/image";

const stats = [
  { value: "15+", label: "Partnered Universities" },
  { value: "2.0K", label: "Students Registered" },
  { value: "2.5K", label: "Students Enrolled" },
  { value: "500+", label: "Courses" },
];

export default function StatsSection() {
  return (
    <section
      className="w-full pt-12 md:pt-16 px-4 sm:px-8 md:px-16"
      style={{ backgroundColor: "#e8eef4" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-end">
        {/* ── Left Column ── */}
        <div className="flex flex-col">
          {/* Text block */}
          <div className="pt-4 md:pt-8 mb-6 md:mb-8">
            <p
              className="text-gray-800 font-medium mb-3 text-center lg:text-left"
              style={{ fontSize: "14px" }}
            >
              What Primeleed Has Offered
            </p>
            <h2
              className="font-extrabold text-gray-900 leading-tight mb-4 text-center lg:text-left"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
            >
              Numbers That Speak.
            </h2>
            <p
              className="text-center lg:text-left mx-auto lg:mx-0"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "480px" }}
            >
              Empowering the next generation of leaders through world-class
              education and global university partnerships.
            </p>
          </div>

          {/* Girl + circle — shown below text on mobile, at bottom on desktop */}
          <div
            className="relative w-full"
            style={{ height: "clamp(280px, 45vw, 420px)", overflow: "visible" }}
          >
            {/* White half-circle */}
            <div
              style={{
                position: "absolute",
                width: "clamp(260px, 42vw, 440px)",
                height: "clamp(130px, 21vw, 220px)",
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                backgroundColor: "white",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-55%)",
              }}
            />

            {/* Girl image */}
            <div
              style={{
                position: "absolute",
                width: "clamp(280px, 46vw, 480px)",
                height: "clamp(320px, 52vw, 540px)",
                bottom: "0px",
                left: "47%",
                transform: "translateX(-60%)",
                zIndex: 10,
              }}
            >
              <Image
                src="/statgirl.png"
                alt="Excited student"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="flex flex-col justify-center gap-4 md:gap-5 pb-8 md:pb-16">
          {/* 2×2 stat cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center text-center"
                style={{
                  padding: "clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px)",
                  minHeight: "clamp(120px, 18vw, 190px)",
                }}
              >
                <span
                  className="font-extrabold text-gray-900 leading-none mb-2 md:mb-3"
                  style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-gray-500 font-medium"
                  style={{ fontSize: "clamp(11px, 1.5vw, 14px)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Wide Facebook Reviews card */}
          <div
            className="bg-white rounded-2xl shadow-sm flex items-center justify-center gap-2 md:gap-3 flex-wrap"
            style={{
              padding: "clamp(20px, 3.5vw, 44px) clamp(16px, 3vw, 32px)",
              minHeight: "clamp(90px, 12vw, 130px)",
            }}
          >
            <span
              className="font-extrabold text-gray-900 leading-none"
              style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              5.0
            </span>
            <span style={{ fontSize: "clamp(20px, 3vw, 28px)", lineHeight: 1 }}>
              ⭐
            </span>
            <span
              className="text-gray-500 font-medium"
              style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
            >
              On
            </span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
              style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
            >
              Facebook Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
