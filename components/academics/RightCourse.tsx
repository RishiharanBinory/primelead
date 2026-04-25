"use client";

import University from "@/components/academics/University";

const courses = [
  {
    tag: "UNDERGRADUATE",
    count: "50+",
    label: "undergraduate courses available",
    headline:
      "Start your degree and take the first step towards the career you want",
    cta: "Explore Undergraduate Courses",
    href: "#",
  },
  {
    tag: "POSTGRADUATE",
    count: "20+",
    label: "postgraduate courses available",
    headline:
      "Take your career further with a postgraduate degree built for professionals",
    cta: "Explore Postgraduate Courses",
    href: "#",
  },
];

export default function FindCourse() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;700&display=swap');
        .font-google-sans { font-family: 'Google Sans', sans-serif; }
      `}</style>

      <section className="font-google-sans bg-[#149ab5] py-12 px-60 mx-50 rounded-[9rem]">
        
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-10 tracking-tight">
            Find the right course for you
          </h2>

          {/* Two side-by-side cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-8">
            {courses.map((card) => (
              <div
                key={card.tag}
                className="bg-white rounded-xl px-6 py-7 shadow-sm flex flex-col"
              >
                <p
                  className="font-bold text-[10px] tracking-[2px] uppercase mb-2"
                  style={{ color: "#000000" }}
                >
                  {card.tag}
                </p>
                <div
                  className="w-6 h-0.5 mb-4 rounded-full"
                  style={{ backgroundColor: "#149ab5" }}
                />

                <p className="text-[#149ab5] font-bold text-5xl leading-none mb-2">
                  {card.count}
                </p>

                <p className="text-slate-500 text-sm mb-3">{card.label}</p>

                <p className="text-gray-900 font-bold text-sm leading-relaxed mb-5 flex-1">
                  {card.headline}
                </p>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-sm text-[#149ab5] hover:text-[#105E74] transition-colors duration-200 group w-fit"
                >
                  {card.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* University carousel — inside the same bg section */}
        </div>
        <University />
      </section>
    </>
  );
}
