const stats = [
  {
    value: "100+",
    label: "Degrees in London",
    iconBg: "#ECDCEE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    value: "20+",
    label: "Partner University",
    iconBg: "#E6F8D0",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
  },
  {
    value: "3.0K+",
    label: "Students Supported",
    iconBg: "#F7F1C2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Free Services",
    iconBg: "#EAC4BF",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-4 sm:p-5 rounded-xl min-h-[90px] sm:min-h-[100px] lg:min-h-[110px] overflow-hidden"
              style={{
                backgroundColor: "rgba(220, 231, 238, 0.35)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              {/* Subtle inner shine at top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full mb-3 sm:mb-4"
                style={{
                  backgroundColor: stat.iconBg,
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <span className="text-gray-600">{stat.icon}</span>
              </div>

              {/* Value + Label */}
              <div className="flex flex-col gap-0.5">
                <span className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}