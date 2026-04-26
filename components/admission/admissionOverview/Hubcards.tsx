import { FileText, ArrowRight, CircleDollarSign } from "lucide-react";

export default function HubCards() {
  const cards = [
    {
      icon: <FileText size={19} strokeWidth={2} className="text-[#149ab5]" />,
      category: "Admissions",
      title: "How to Apply",
      desc: "Find out exactly what happens when you apply through Primeleed. We walk you through every step, from choosing your course to submitting your application.",
      link: "View How to Apply",
      href: "#",
    },
    {
      icon: <CircleDollarSign size={19} strokeWidth={2} className="text-[#149ab5]" />,
      category: "Funding",
      title: "Student Finance in London",
      desc: "Worried about the cost? Most of our students pay nothing upfront. Find out how government funding works and how Primeleed helps you secure it.",
      link: "View Student Finance",
      href: "#",
    },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>
      <section className="bg-[#f0f4f8] rounded-3xl mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-10 sm:py-12">

        {/* Heading */}
        <h2
          className="text-center text-[1.5rem] sm:text-[1.85rem] font-bold text-slate-900 leading-snug mb-3"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          Everything you need in one place
        </h2>

        {/* Subheading */}
        <p
          className="text-center text-slate-500 text-sm leading-relaxed max-w-md mx-auto mb-8"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          Whether you are ready to apply or still exploring your options, we have
          everything you need to take the next step with confidence.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl px-6 sm:px-10 py-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 bg-[#e0f5f9] rounded-xl mb-3">
                {card.icon}
              </div>

              {/* Category */}
              <p
                className="text-[9.5px] font-bold tracking-widest uppercase text-[#149ab5] mb-2"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.category}
              </p>

              {/* Divider */}
              <div className="w-5 h-0.5 bg-[#149ab5] mx-auto mb-3 rounded-full" />

              {/* Title */}
              <h3
                className="text-[1.05rem] font-bold text-slate-900 mb-2 leading-snug"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-slate-500 text-[0.845rem] leading-relaxed mb-5"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.desc}
              </p>

              {/* Link */}
              <a
                href={card.href}
                className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#149ab5] hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "'Google Sans', sans-serif" }}
              >
                {card.link}
                <ArrowRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}