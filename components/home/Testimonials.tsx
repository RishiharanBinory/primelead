import React from "react";
import { StarIcon, QuoteIcon } from "lucide-react";
const testimonials = [
  {
    name: "Sarah Jenkins",
    profession: "First-year Undergrad",
    description:
      "PrimeLeed made my university application process seamless. Their advisors were always there to help me refine my personal statement until it was perfect.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Chen",
    profession: "University Applicant",
    description:
      "I was completely lost with Student Finance, but the team explained everything clearly. Highly recommend their services to anyone feeling overwhelmed!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Rodriguez",
    profession: "BSc Computer Science",
    description:
      "The guidance I received for choosing the right course was invaluable. I'm now studying exactly what I love at my top-choice university.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Wilson",
    profession: "Law Student",
    description:
      "They helped me secure offers from all my top choices. The mock interviews were especially helpful and gave me the confidence I needed.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Aisha Patel",
    profession: "Medical Student",
    description:
      "A fantastic service that took the stress out of applying to university. Always responsive, deeply knowledgeable, and incredibly supportive.",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Thomas Wright",
    profession: "BA History",
    description:
      "From UCAS applications to accommodation advice, PrimeLeed was there every step of the way. I couldn't have done it without them.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Lucy Thompson",
    profession: "University Applicant",
    description:
      "I couldn't have navigated the clearing process without their prompt and reassuring support. They turned a stressful day into a success.",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    name: "Michael Chang",
    profession: "Engineering Student",
    description:
      "Their essay review service transformed my personal statement. I felt so much more confident submitting my application knowing it was strong.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];
function SlidingTestimonial() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-6">
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-10">
            Students consistently choose PrimeLeed for clear guidance,
            supportive advisors, and simplified university applications.
          </p>

          {/* Highlight Quotes — compact on mobile */}
        </div>

        {/* Sliding Testimonials */}
        <div
          className="relative flex overflow-hidden group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 min-w-full shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={`a-${idx}`} testimonial={testimonial} />
            ))}
          </div>
          <div
            className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 min-w-full shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={`b-${idx}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm w-65 sm:w-85 md:w-95 p-4 sm:p-6 shrink-0 transition-all duration-300 hover:shadow-md hover:border-blue-200">
      {/* Stars */}
      <div className="flex gap-0.5 text-amber-400 mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-slate-700 mb-4 sm:mb-6 grow text-sm sm:text-base leading-relaxed">
        &quot;{testimonial.description}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-3 sm:pt-4 border-t border-slate-100">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name}`}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-slate-100"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold text-slate-900 text-xs sm:text-sm">
            {testimonial.name}
          </h5>
          <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5">
            {testimonial.profession}
          </p>
        </div>
      </div>
    </div>
  );
}
export { SlidingTestimonial };
