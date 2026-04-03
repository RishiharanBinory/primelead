import React from "react";
import FAQSection from "@/components/support/FAQSection";
import PageIntro from "@/components/mainComponents/PageIntro";
import MainHero from "@/components/mainComponents/Mainhero";
import Link from "next/link";

const Guidance = () => {
  return (
    <main>
      <MainHero
        imageSrc="/support_bg.jpg"
        imageAlt="Graduation ceremony"
        title="Support & Guidance"
        paragraph={<>Where to turn when you need a helping hand</>}
      />
      <PageIntro
        title="How We Can Help"
        paragraph={
          <>
            We offer assistance on various topics. Discover the guidance and
            support available to you when studying with us, whether it&apos;s
            related to academic life or general life matters. If you require
            immediate support with university applications or student finance,
            we are here to help. See our guides on{" "}
            <Link
              href="/admission/how-to-apply"
              style={{ color: "#2ab4c0", textDecoration: "underline" }}
            >
              how to apply
            </Link>
          </>
        }
      />
      <FAQSection
        title={false}
        defaultOpen={0}
        items={[
          {
            question: "Health and wellbeing support",
            answer: (
              <p
                style={{
                  color: "#374151",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  lineHeight: "1.7em",
                }}
              >
                We understand this new challenge could affect your mental
                health, physical health and wellbeing, so you&apos;ll find lots
                of support when you get here. See our guides on how to apply and
                fees and finance or our information for international students.
                Everyone needs a little help with their studies from time to
                time, whether you&apos;re a fresher taking your first steps into
                uni life or a seasoned student who knows your way around
                university. Going to university is exciting, but it can be
                daunting too. And if you&apos;ve spent time in care, you might
                find it more difficult to enter higher education.
              </p>
            ),
          },
          {
            question: "International Student Support Team",
            answer: (
              <div className="flex flex-col gap-4">
                <p
                  style={{
                    color: "#374151",
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    lineHeight: "1.7em",
                  }}
                >
                  We understand this new challenge could affect your mental
                  health, physical health and wellbeing, so you&apos;ll find
                  lots of support when you get here. See our guides on how to
                  apply and fees and finance or our information for
                  international students. Everyone needs a little help with
                  their studies from time to time, whether you&apos;re a fresher
                  taking your first steps into uni life or a seasoned student
                  who knows your way around university. Going to university is
                  exciting, but it can be daunting too. And if you&apos;ve spent
                  time in care, you might find it more difficult to enter higher
                  education.
                </p>
                <p
                  style={{
                    color: "#374151",
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    lineHeight: "1.7em",
                  }}
                >
                  We understand this new challenge could affect your mental
                  health, physical health and wellbeing, so you&apos;ll find
                  lots of support when you get here. See our guides on how to
                  apply and fees and finance or our information for
                  international students. Everyone needs a little help with
                  their studies from time to time, whether you&apos;re a fresher
                  taking your first steps into uni life or a seasoned student
                  who knows your way around university. Going to university is
                  exciting, but it can be daunting too. And if you&apos;ve spent
                  time in care, you might find it more difficult to enter higher
                  education.
                </p>
              </div>
            ),
          },
          {
            question: "Financial Support Team",
            answer: (
              <p
                style={{
                  color: "#374151",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  lineHeight: "1.7em",
                }}
              >
                Our experienced finance advisors will walk you through the whole
                process of getting funding for your education, applying for
                scholarships, or finding a part-time job in the university
                administration, or even sort out your housing fees.
              </p>
            ),
          },
          {
            question: "Contact Us",
            answer: (
              <p
                style={{
                  color: "#374151",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  lineHeight: "1.7em",
                }}
              >
                Don&apos;t be shy. Reach out and we&apos;ll answer any questions
                you might have.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
};

export default Guidance;
