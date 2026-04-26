"use client";

import { useState } from "react";
import {
  FileText,
  CheckCircle,
  Search,
  MessageSquare,
  CreditCard,
  GraduationCap,
  ChevronDown,
  File,
  Award,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Complete your application form",
    text: "Tell us a little about yourself and we will take care of the rest. Our online application takes around 10 minutes to complete. You will need to have the following documents ready.",
    docs: [
      { label: "Passport or resident permit", icon: File },
      { label: "Qualification certificates or transcripts", icon: Award },
      { label: "CV", icon: Briefcase },
    ],
    icon: FileText,
  },
  {
    num: "02",
    title: "Confirmation of your application",
    text: "Once you submit your application, our team will acknowledge receipt within two working days by phone or email. We will then review your academic background and recommend the most suitable university and course for your goals.",
    docs: [],
    icon: CheckCircle,
  },
  {
    num: "03",
    title: "Application review",
    text: "Our team reviews your application in detail. Where needed, we will help you put together a strong CV and personal statement, and guide you through any additional application forms. You may be invited to meet with us online or in person as part of this stage.",
    docs: [],
    icon: Search,
  },
  {
    num: "04",
    title: "Interview preparation",
    text: "If your chosen university requires an interview, we prepare you for it thoroughly. We offer free interview preparation workshops to help you feel confident and ready. Our advisors will guide you on what to expect and how to present yourself at your best.",
    docs: [],
    icon: MessageSquare,
  },
  {
    num: "05",
    title: "Tuition fee arrangements",
    text: "Once your application is approved, the university will issue an invoice for your first-year tuition fees. If you are applying for Student Finance, we will ensure your funding is in place before your course begins. Our advisors are available to guide you through any funding queries at this stage.",
    docs: [],
    icon: CreditCard,
  },
  {
    num: "06",
    title: "Attend university",
    text: "Once your enrolment is complete, you are ready to begin your studies. Primeleed remains available to support you throughout your time at university, from accessing your student portal to annual Student Finance renewals.",
    docs: [],
    icon: GraduationCap,
  },
];

export default function ApplicationProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-3 tracking-tight"
            style={{ fontFamily: "'Google Sans', sans-serif" }}
          >
            How the application process works
          </h2>
          <p
            className="text-gray-500 text-base md:text-lg"
            style={{ fontFamily: "'Google Sans Text', sans-serif" }}
          >
            Six straightforward steps. Primeleed is with you at every one of them.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-shadow duration-200 hover:shadow-md"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Trigger row */}
                <div className="flex items-center gap-4 px-6 py-8 cursor-pointer select-none">
                  <span
                    className="text-xs font-bold tracking-widest shrink-0"
                    style={{ color: "#149ab5", fontFamily: "'Google Sans', sans-serif" }}
                  >
                    {step.num}
                  </span>

                  <span
                    className="flex-1 text-base md:text-lg font-medium"
                    style={{ color: "#149ab5", fontFamily: "'Google Sans', sans-serif" }}
                  >
                    {step.title}
                  </span>

                  <Icon
                    size={18}
                    className="hidden md:block shrink-0 opacity-60"
                    style={{ color: "#149ab5" }}
                  />

                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: "#149ab5",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>

                {/* Expandable body */}
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="border-t px-5 pb-6 pt-5 flex flex-col md:flex-row gap-6"
                      style={{ borderColor: "rgba(20,154,181,0.12)" }}
                    >
                      {/* Text content */}
                      <div className="flex-1">
                        <p
                          className="text-sm leading-relaxed text-black"
                          style={{ fontFamily: "'Google Sans Text', sans-serif" }}
                        >
                          {step.text}
                        </p>

                        {step.docs.length > 0 && (
                          <ul className="mt-4 flex flex-col gap-2">
                            {step.docs.map((doc, j) => {
                              const DocIcon = doc.icon;
                              return (
                                <li
                                  key={j}
                                  className="flex items-center gap-2 text-sm text-black"
                                  style={{ fontFamily: "'Google Sans Text', sans-serif" }}
                                >
                                  <DocIcon
                                    size={14}
                                    className="shrink-0"
                                    style={{ color: "#149ab5", opacity: 0.7 }}
                                  />
                                  {doc.label}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>

                      {/* Illustration — desktop only */}
                      <div className="hidden md:flex items-start shrink-0 w-36">
                        <div
                          className="w-full h-28 rounded-xl flex items-center justify-center"
                          style={{ background: "rgba(20,154,181,0.07)" }}
                        >
                          <Icon
                            size={48}
                            style={{ color: "#149ab5", opacity: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}