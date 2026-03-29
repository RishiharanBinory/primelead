import React from "react";
import Link from "next/link";
import { privacySections, PrivacySection } from "@/lib/privacyData";

// ─── Single section block ─────────────────────────────────────────────────────
function PolicySection({ section }: { section: PrivacySection }) {
  const { id, title, paragraphs, bulletItems } = section;

  return (
    <div className="mt-8 first:mt-0">
      {/* Section heading – 26px bold, matching screenshot */}
      {title && (
        <h2 className="text-[26px] font-extrabold text-[#2c2c2c] leading-snug mb-3">
          {title}
        </h2>
      )}

      {/* Paragraphs */}
      {paragraphs?.map((para, i) => {
        // "Contact Us" section — replace plain text with a link
        if (id === "contact") {
          return (
            <p
              key={i}
              className="text-[18px] leading-[1.75] text-[#2c2c2c] mb-4.5 last:mb-0"
            >
              If you have any questions about this Privacy Policy, please{" "}
              <Link
                href="/contact"
                className="font-semibold underline underline-offset-2 transition-colors duration-200 hover:text-[#F5C400]"
              >
                contact us
              </Link>
              .
            </p>
          );
        }

        return (
          <p
            key={i}
            className="text-[18px] leading-[1.75] text-[#2c2c2c] mb-4.5 last:mb-0"
          >
            {para}
          </p>
        );
      })}

      {/* Bullet list – matches the dot style in the screenshot */}
      {bulletItems && bulletItems.length > 0 && (
        <ul className="mt-2 mb-4.5 space-y-1 list-disc list-inside">
          {bulletItems.map((item, i) => (
            <li
              key={i}
              className="text-[18px] leading-[1.75] text-[#2c2c2c] pl-1"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 pt-14 pb-20 mt-30">
      {/* Page title */}
      <h1 className="text-[26px] font-extrabold text-[#2c2c2c] leading-snug mb-3">
        Privacy Policy
      </h1>

      {/* Last updated line */}
      <p className="text-[18px] leading-[1.75] text-[#2c2c2c] mb-6">
        Last updated: [wpautoterms last_updated_date]
      </p>

      {/* Prose column – 860px cap matches screenshot layout */}
      <div className="max-w-215">
        {privacySections.map((section) => (
          <PolicySection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Page;
