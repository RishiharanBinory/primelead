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
    description:
      "If English is not your first language, you will need IELTS Academic 5.0 overall with a minimum of 5.5 in each band and 6.0 in speaking.",
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
    description:
      "All applicants are interviewed as part of the admissions process. Primeleed prepares you fully for this at no extra cost.",
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
    description:
      "If you do not meet the standard entry criteria, your application may still be considered based on work experience, life skills and previous achievements.",
  },
];

export default function EntryRequirements() {
  return (
    /* Outer wrapper gives left/right margin so section is centered on page */
    <div className="w-full px-8 md:px-16 lg:px-24 py-12">
      <section
        className="w-full rounded-3xl flex flex-col md:flex-row overflow-hidden"
        style={{ backgroundColor: "#B0EAF5" }}
      >
        {/* ── Left Content ── */}
        <div className="flex-none w-full md:w-[42%] px-10 py-16 flex flex-col justify-center">
          <h2
            className="font-extrabold text-4xl lg:text-[48px] leading-tight mb-6 tracking-tight"
            style={{ color: "#0d2b3e" }}
          >
            Entry<br />Requirements
          </h2>

          <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed mb-1">
            Before you apply, here is what you need to know.
          </p>
          <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed mb-1">
            Our advisors will assess your individual background
          </p>
          <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed mb-10">
            and confirm your eligibility before anything else.
          </p>

          <div className="w-20 border-t border-slate-400/50 mb-8" />

          <a
            href="#"
            className="text-slate-800 text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity w-fit"
          >
            Learn more about
          </a>
        </div>

        {/* ── Right: DCE7EE rectangle wrapping the 2×2 card grid ── */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <div
            className="w-full rounded-2xl p-5"
            style={{ backgroundColor: "#DCE7EE" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirementCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    /* x=0, y=19, blur≈100px (100%), spread=-41 as requested */
                    boxShadow: "0px 19px 100px -41px #149BB6",
                  }}
                >
                  {/* Per-card icon background colour, black stroke icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 text-sm leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
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