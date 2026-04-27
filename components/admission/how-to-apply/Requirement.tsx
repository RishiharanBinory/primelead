import Link from "next/link";

const requirementCards = [
  {
    iconBg: "#ECDCEE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Minimum age",
    description: "Students must be 18 years or above at the start of their course.",
  },
  {
    iconBg: "#E6F8D0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 16c-1.5 0-3-2-3-4s1.5-4 3-4 3 2 3 4-1.5 4-3 4z" />
      </svg>
    ),
    title: "English Language",
    description: "If English is not your first language, you will need IELTS Academic 5.0 overall with a minimum of 5.5 in each band and 6.0 in speaking.",
  },
  {
    iconBg: "#F7F1C2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Interview",
    description: "All applicants are interviewed as part of the admissions process. Primeleed prepares you fully for this at no extra cost.",
  },
  {
    iconBg: "#EAC4BF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "No formal qualifications? No problem",
    description: "If you do not meet the standard entry criteria, your application may still be considered based on work experience, life skills and previous achievements.",
  },
];

export default function EntryRequirements() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-16">
      <section
        className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row overflow-hidden"
        style={{ backgroundColor: "#B0EAF5" }}
      >
        {/* ── Left Content ── */}
        <div className="flex-none w-full md:w-[38%] px-6 sm:px-8 md:px-12 py-8 md:py-16 flex flex-col justify-center">
          <h2
            className="font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] mb-4 md:mb-6 tracking-tight"
            style={{ color: "#0d2b3e" }}
          >
            Entry<br />Requirements
          </h2>

          <div className="flex flex-col gap-0.5 mb-6 md:mb-10">
            <p className="text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
              Before you apply, here is what you need to know.
              Our advisors will assess your individual background
              and confirm your eligibility before anything else.
            </p>
          </div>

          <div className="w-full border-t border-slate-600/25 mb-6 md:mb-8" />

          <Link
            href="#"
            className="text-slate-800 text-[14px] font-semibold hover:opacity-60 transition-opacity w-fit"
          >
            Learn more about
          </Link>
        </div>

        {/* ── Right: card grid panel ── */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 md:py-10">
          <div
            className="w-full p-3 sm:p-5"
            style={{ backgroundColor: "#DCE7EE" }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {requirementCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-transform duration-200 hover:-translate-y-1"
                  style={{ boxShadow: "0px 16px 80px -28px #149BB6" }}
                >
                  {/* Icon */}
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 text-[13px] sm:text-[15px] leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[11px] sm:text-[13px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}