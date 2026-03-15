import Image from "next/image";
import Link from "next/link";

export default function StudentLife() {
  return (
    <section className="w-full overflow-hidden" style={{ minHeight: "520px" }}>
      <div className="flex flex-col md:flex-row" style={{ minHeight: "520px" }}>
        {/* ── Col 1: Teal bg + heading + student image ── */}
        <div
          className="relative md:w-[32%] shrink-0 overflow-hidden"
          style={{ backgroundColor: "#1bbcc8", minHeight: "520px" }}
        >
          {/* Decorative circle */}
          <div
            className="absolute"
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.12)",
              top: "50%",
              left: "-80px",
              transform: "translateY(-50%)",
            }}
          />

          {/* Student Life heading — top left */}
          <div className="relative z-10 px-8 pt-10">
            <h2
              className="text-white font-black leading-tight"
              style={{ fontSize: "clamp(40px, 4vw, 60px)" }}
            >
              Student
              <br />
              Life
            </h2>
          </div>

          {/* Student image — bottom aligned, contained within col */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: "78%" }}
          >
            <Image
              src="/funding-student.jpg"
              alt="Student"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* ── Col 2: Black top + Yellow bottom ── */}
        <div
          className="flex flex-col md:w-[30%] shrink-0"
          style={{ minHeight: "520px" }}
        >
          {/* Black section — nav links */}
          <div
            className="flex flex-col justify-center px-10 gap-8"
            style={{ backgroundColor: "#0d0d0d", flex: "0 0 60%" }}
          >
            {[
              { label: "FAQ", href: "/support/faq" },
              { label: "Support & Guidance", href: "/support/guidance" },
              { label: "Request Info", href: "/support/request-info" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-white font-semibold hover:opacity-70 transition-opacity group"
                style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
              >
                {link.label}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="group-hover:translate-x-1.5 transition-transform duration-200 shrink-0"
                >
                  <path
                    d="M3 9h12M10 4l5 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* Yellow section — quote + decorative strokes */}
          <div
            className="relative flex items-center px-10 py-8 overflow-hidden"
            style={{ backgroundColor: "#F5C400", flex: "0 0 40%" }}
          >
            {/* Decorative diagonal strokes */}
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-70"
              width="60"
              height="80"
              viewBox="0 0 60 80"
              fill="none"
            >
              <line
                x1="40"
                y1="10"
                x2="10"
                y2="60"
                stroke="#1a2e3b"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.5"
              />
              <line
                x1="55"
                y1="20"
                x2="25"
                y2="70"
                stroke="#1a2e3b"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.3"
              />
              <line
                x1="28"
                y1="5"
                x2="5"
                y2="45"
                stroke="#1a2e3b"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.25"
              />
            </svg>

            <p
              className="font-bold leading-snug relative z-10"
              style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#0d1b2a" }}
            >
              Empower your life through higher education by applying to our
              partnered institutions.
            </p>
          </div>
        </div>

        {/* ── Col 3: Full image ── */}
        <div className="relative flex-1" style={{ minHeight: "520px" }}>
          <Image
            src="/funding-student.jpg"
            alt="Students collaborating"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
