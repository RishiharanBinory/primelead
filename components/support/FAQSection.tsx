// components/mainComponents/FAQSection.tsx  ← pure server ✅
import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";
import { ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

type Props = {
  title?: string | false;
  items?: FAQItem[];
  defaultOpen?: number;
};

// Default FAQ data — override via props for different pages
const DEFAULT_FAQ: FAQItem[] = [
  {
    question: "How to apply?",
    answer: (
      <div className="flex flex-col gap-4">
        <p
          style={{
            color: "#374151",
            fontSize: "clamp(14px, 1.2vw, 16px)",
            lineHeight: "1.7em",
          }}
        >
          Our application process is designed to be simple and straightforward:
        </p>
        <ol className="list-decimal pl-5 flex flex-col gap-4">
          <li
            style={{
              color: "#374151",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: "1.7em",
            }}
          >
            <strong>Apply</strong>
            <br />
            Share some basic information about yourself, and we will guide you
            through the remaining steps. Our user-friendly online application
            tool can be completed in just 10 minutes.
          </li>
          <li
            style={{
              color: "#374151",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: "1.7em",
            }}
          >
            <strong>Connect</strong>
            <br />
            Once you have submitted your application, one of our admissions
            representatives will reach out to you. They will assist you in
            completing the necessary steps for the application process.
          </li>
          <li
            style={{
              color: "#374151",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: "1.7em",
            }}
          >
            <strong>Prepare</strong>
            <br />
            With your application submitted and support from our admissions
            representative, you can now focus on creating your schedule and
            preparing for your academic journey.
          </li>
        </ol>
        <p
          style={{
            color: "#374151",
            fontSize: "clamp(14px, 1.2vw, 16px)",
            lineHeight: "1.7em",
          }}
        >
          Access our application form by visiting this{" "}
          <Link href="/admission/form" style={{ color: "#2ab4c0" }}>
            link
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: "Can I apply to more than one program?",
    answer: (
      <p
        style={{
          color: "#374151",
          fontSize: "clamp(14px, 1.2vw, 16px)",
          lineHeight: "1.7em",
        }}
      >
        Certainly! To apply for multiple programs with Prime Leed, you must
        submit separate applications for each program along with the required
        materials and application fee. Additionally, if a portfolio or audition
        is necessary, you will need to provide a separate one for each
        application. In the event that you are accepted into multiple programs,
        you will be required to select one program as your major.
      </p>
    ),
  },
  {
    question: "Are International students eligible for financial aid?",
    answer: (
      <div className="flex flex-col gap-4">
        <p
          style={{
            color: "#374151",
            fontSize: "clamp(14px, 1.2vw, 16px)",
            lineHeight: "1.7em",
          }}
        >
          Yes, international students are eligible for financial aid at UK
          universities. However, it&apos;s important to note that the
          availability and types of financial aid may vary depending on the
          university and the specific program of study. International students
          may be eligible for scholarships, grants, bursaries, or loans offered
          by the university or external organizations.
        </p>
        <p
          style={{
            color: "#374151",
            fontSize: "clamp(14px, 1.2vw, 16px)",
            lineHeight: "1.7em",
          }}
        >
          It is advisable for international students to research and explore the
          financial aid opportunities offered by the specific universities they
          are interested in and to check the eligibility requirements and
          application processes for each type of financial assistance.
        </p>
      </div>
    ),
  },
  {
    question: "When will I be informed of my admissions decision?",
    answer: (
      <p
        style={{
          color: "#374151",
          fontSize: "clamp(14px, 1.2vw, 16px)",
          lineHeight: "1.7em",
        }}
      >
        For applicants who applied by the regular deadline, the notification
        period for admission decisions will generally span from around March 1
        to early April. However, it is important to note that there may be
        instances where decisions are made earlier or take longer. The timing of
        decision letters varies based on the review schedule of each program and
        the receipt of required materials for individual student files.
      </p>
    ),
  },
];

export default function FAQSection({
  title = "FAQ",
  items = DEFAULT_FAQ,
  defaultOpen = 0,
}: Props) {
  return (
    <section className="w-full bg-white pt-4 pb-20 md:pt-15 md:pb-16">
      <div className="max-w-365 mx-auto px-5 md:px-8">
        {/* Title — server rendered ✅ */}
        {title && (
          <h1
            className="font-black pt-4 pb-20 md:pt-30 md:pb-10"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "#0d1b2a",
            }}
          >
            {title}
          </h1>
        )}

        {/* Accordion — only interactive part is client ✅ */}
        <FAQAccordion items={items} defaultOpen={defaultOpen} />
      </div>
    </section>
  );
}
