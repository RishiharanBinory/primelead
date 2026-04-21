"use client";
import React, { useState, useRef } from "react";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Stella Dike",
    date: "02/10/2023",
    description:
      "I had an amazing experience with primeleed. The customer service was outstanding. I was so pleased with the service I received from them. They went above and beyond to help me find the perfect university.",
  },
  {
    name: "Nwanya Chukwuemeka Uzoma",
    date: "02/10/2023",
    description:
      "They are very reliable and always look out for your interest to your admission problems. I will recommend them for this job.",
  },
  {
    name: "Jazmin Mera",
    date: "25/09/2023",
    description:
      "I would like to mention that Prime Leed is a very useful resource that helps students in various ways and makes their lives easier thanks to the team they have. Randy in particular is very patient and intelligent, always willing to help me.",
  },
  {
    name: "Tuğba Arslan Bayat",
    date: "17/08/2023",
    description:
      "PrimeLeed gave me a professional service by supporting me in every aspect during my higher education application process. I am lucky to have PrimeLeed with me in this journey, and happily recommend.",
  },
  {
    name: "Sultan Alenzi",
    date: "15/02/2023",
    description:
      "Highly recommended, very supportive, they've got me straight to the right path. Very friendly staff especially Shawn — he's always willing to help, even after I secured my place at uni he always calls to check how I'm doing and if I need any assistance.",
  },
  {
    name: "Marian Shaw",
    date: "13/02/2023",
    description:
      "Primeleed is the best student service for new learners at Solent University. Their professional team are so diligent, all along the way from application to admission. Sam and Randy were by my side in every step. Am extremely grateful for their dedication and patience for problem-solving. I would love to say a big thank you to Sam and Randy.",
  },
  {
    name: "Ash Zandi",
    date: "13/01/2023",
    description:
      "PrimeLeed has delivered a very good and professional service. They made applying for Uni so easy and advised on everything I needed. They liaised on my behalf with the Uni and took care of the application process. Shawn was specially good and professional. He kept his communication open and easy with me and was available for a chat when needed. Overall great service.",
  },
  {
    name: "Lirio Alim",
    date: "08/05/2022",
    description:
      "I would like to express my gratitude and thanks to Mr Randy, the person who assisted and guided me in getting into my University. A massive thanks for everything you have done. I couldn't have done it without his guidance. He gives me a lot of hope because he is confident, believes in his job, and enjoys assisting students.",
  },
  {
    name: "Olabisi Abolade Ogunbiyi",
    date: "06/05/2022",
    description:
      "Wow! PrimeLeed! Three words: Fantastic, Great, Superb! I never thought it was possible for me to go back to Uni. But right now I am bursting with pride and joy. Randy's patience is from another world — he never gave up on me even when I was giving up on myself. Now I'm at University of Bolton studying Business Management. I will recommend PrimeLeed to everyone!",
  },
];

const colors = [
  "from-blue-500 to-blue-600",
  "from-violet-500 to-violet-600",
  "from-emerald-500 to-emerald-600",
  "from-amber-500 to-amber-600",
  "from-rose-500 to-rose-600",
  "from-cyan-500 to-cyan-600",
  "from-pink-500 to-pink-600",
  "from-indigo-500 to-indigo-600",
  "from-lime-500 to-lime-600",
];

const CHAR_LIMIT = 180;

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({
  testimonial,
  colorClass,
}: {
  testimonial: (typeof testimonials)[0];
  colorClass: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.description.length > CHAR_LIMIT;

  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm w-[260px] p-5 shrink-0 transition-all duration-300 hover:shadow-md hover:border-blue-200">
      <div className="flex gap-0.5 text-amber-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>

      <p
        className={`text-slate-700 text-sm leading-relaxed mb-1 ${
          !expanded ? "line-clamp-4" : ""
        }`}
      >
        &quot;{testimonial.description}&quot;
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:text-blue-700 text-xs font-semibold text-left mb-3 transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="flex-1" />

      <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-3">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-xs shrink-0`}
        >
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-xs">
            {testimonial.name}
          </p>
          <p className="text-slate-400 text-[11px] mt-0.5">
            {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SlidingTestimonial() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const pauseMarquee = () => {
    carouselRef.current
      ?.querySelectorAll<HTMLElement>(".animate-marquee")
      .forEach((el) => (el.style.animationPlayState = "paused"));
  };

  const resumeMarquee = () => {
    carouselRef.current
      ?.querySelectorAll<HTMLElement>(".animate-marquee")
      .forEach((el) => (el.style.animationPlayState = "running"));
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading + subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold tracking-tight text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-[16px] sm:text-[18px] text-slate-600 leading-relaxed max-w-[560px] mx-auto">
            Students consistently choose PrimeLeed for clear guidance,
            supportive advisors, and simplified university applications.
          </p>
        </div>

        {/* Carousel row */}
        <div className="flex items-end gap-6">

          {/* LEFT: teal rectangle + image — hidden on mobile */}
          <div
            className="hidden sm:block shrink-0 relative overflow-visible"
            style={{
              width: "260px",
              height: "150px",
              marginLeft: "-60px",
            }}
          >
            <div
              className="absolute inset-0 rounded-t-full"
              style={{ backgroundColor: "#1a8fa8" }}
            />
            <div
              className="absolute"
              style={{
                width: "720px",
                height: "780px",
                bottom: "-65px",
                left: "90%",
                transform: "translateX(-50%)",
                zIndex: 10,
              }}
            >
              <Image
                src="/review.png"
                alt="Student advisor"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* RIGHT: scrolling carousel */}
          <div
            ref={carouselRef}
            className="flex-1 min-w-0 flex overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
            onMouseEnter={pauseMarquee}
            onMouseLeave={resumeMarquee}
            onTouchStart={pauseMarquee}
            onTouchEnd={resumeMarquee}
            onTouchCancel={resumeMarquee}
          >
            {[0, 1].map((clone) => (
              <div
                key={clone}
                aria-hidden={clone === 1}
                className="flex gap-4 pr-4 min-w-max shrink-0 animate-marquee"
              >
                {testimonials.map((t, idx) => (
                  <TestimonialCard
                    key={`${clone}-${idx}`}
                    testimonial={t}
                    colorClass={colors[idx % colors.length]}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}