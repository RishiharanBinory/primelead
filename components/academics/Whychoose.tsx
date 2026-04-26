// components/WhyPrimeLeed.tsx

import React from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "No fees. No hidden charges. Ever.",
    description:
      "Our service is completely free for every student. We are paid by our partner universities, which means you receive expert guidance without spending a penny.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M8 4V2M16 4V2M3 9H21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 14H16M8 17H13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "We handle your Student Finance application",
    description:
      "Student Finance England is one of the biggest barriers students face. Our advisors complete the full process with you, from eligibility checks to evidence uploads, so nothing gets missed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "One advisor. Your entire journey.",
    description:
      "From your first enquiry to the day you enrol, one dedicated advisor works with you personally. No call centres. No being passed around. Just consistent, one-to-one support throughout.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Built for real life, not just school leavers",
    description:
      "Whether you are 18 or 50, working full time or raising a family, our courses are flexible and our advisors understand your situation. Returning to education has never been more achievable.",
  },
];

export default function WhyPrimeLeed() {
  return (
    <section
      className="w-full bg-primel-lightbg py-20 px-4 sm:px-6 lg:px-16 my-16"
      style={{ fontFamily: "'Google Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header — centered */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Why study with Primeleed
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Most students spend months confused about where to start. At Prime
            Leed, we remove every barrier between you and your degree, so you
            can focus entirely on your future.
          </p>
        </div>

        {/* 4 Feature Cards — single row */}
        {/* 4 Feature Cards — single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#149ab5" }}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide Banner Card */}
        <div className="bg-white rounded-2xl px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed italic max-w-2xl">
            &ldquo;Over 3,000 students across the UK have started their degree
            through Primeleed, many of them working adults who thought
            university was no longer an option for them.&rdquo;
          </p>
          <div className="flex-shrink-0 text-center sm:text-right">
            <p
              className="text-5xl font-bold leading-none"
              style={{ color: "#149ab5" }}
            >
              3,000+
            </p>
            <p className="text-xs text-gray-400 mt-2 font-medium tracking-wide uppercase">
              students supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
