import { FileText, ArrowRight, CircleDollarSign } from "lucide-react";
import Link from "next/link";

export default function HubCards() {
  const cards = [
    {
      icon: <FileText size={20} strokeWidth={2} className="text-[#149ab5]" />,
      category: "Admissions",
      title: "How to Apply",
      desc: "Find out exactly what happens when you apply through Primeleed. We walk you through every step, from choosing your course to submitting your application.",
      link: "View How to Apply",
      href: "/admission/how-to-apply",
    },
    {
      icon: (
        <CircleDollarSign
          size={20}
          strokeWidth={2}
          className="text-[#149ab5]"
        />
      ),
      category: "Funding",
      title: "Student Finance in London",
      desc: "Worried about the cost? Most of our students pay nothing upfront. Find out how government funding works and how Primeleed helps you secure it.",
      link: "View Student Finance",
      href: "#",
    },
  ];

  return (
    <div
      className="bg-white py-10 px-4 sm:px-6"
      style={{ fontFamily: "'Google Sans', sans-serif" }}
    >
      <section className="bg-[#f0f4f8] rounded-3xl mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
        <h2
          className="text-center text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-3"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          Everything you need in one place
        </h2>

        <p
          className="text-center text-slate-500 text-base leading-relaxed max-w-md mx-auto mb-8"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          Whether you are ready to apply or still exploring your options, we
          have everything you need to take the next step with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl px-6 sm:px-10 py-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 bg-[#e0f5f9] rounded-xl mb-3">
                {card.icon}
              </div>

              <p
                className="text-xs font-bold tracking-widest uppercase text-[#149ab5] mb-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.category}
              </p>

              <div className="w-5 h-0.5 bg-[#149ab5] mx-auto mb-3 rounded-full" />

              <h3
                className="text-xl font-bold text-slate-900 mb-2 leading-snug"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.title}
              </h3>

              <p
                className="text-slate-500 text-base leading-relaxed mb-5"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.desc}
              </p>

              <Link
                href={card.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#149ab5] hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.link}
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}