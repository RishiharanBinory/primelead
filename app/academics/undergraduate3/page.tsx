import MainHero from "@/components/mainComponents/Mainhero";
import StatHero from "@/components/mainComponents/StatHero";
import CallToAction from "@/components/home/CallToAction";
import CoreValues from "@/components/about/CoreValues";
import CourseSection from "@/components/mainComponents/CourseSection";
import AdmissionFormBanner from "@/components/about/AdmissionFormbanner";

export default function Undergraduate() {
  return (
    <main>
      <MainHero
        imageSrc="/undergraduate_bg.jpg"
        imageAlt="Graduation ceremony"
        title="Undergraduate"
        paragraph={
          <>
            An undergraduate degree in the UK is the first level of higher
            education after secondary school. It typically takes three years and
            is known as a Bachelor&#39;s degree. It provides a strong foundation
            in a specific field of study and is valuable for future education or
            employment
          </>
        }
      />
      <StatHero
        stat="45+"
        title={<>undergraduate courses</>}
        paragraph="You have the unique opportunity to pursue a diverse range of subjects by enrolling in courses offered by any of our esteemed partners. This allows you to create a personalised academic path that aligns with your passions and interests. Explore our extensive selection of 45+ undergraduate majors and programs, discover the wide array of undergraduate courses provided by our partner universities, and find inspiration in the examples showcased below. For additional options and information, please don’t hesitate to contact us"
      />
      <CourseSection
        title="Current Undergraduate Courses"
        courses={[
          { name: "BA (Hons) Business" },
          { name: "BA (Hons) Business & Healthcare" },
          { name: "BA (Hons) Business & Human Resource Management" },
          { name: "BA (Hons) Business & Law" },
          { name: "BA (Hons) Business Management (Top Up)" },
          { name: "BA (Hons) Business & Marketing" },
          { name: "BA (Hons) Business Management with Foundation" },
          { name: "BA (Hons) Health with Social Care" },
          { name: "BENG (Hons) Software Engineering With Foundation" },
          { name: "BSc (Hons) Business and Events Management" },
          { name: "BSc (Hons) Business and Healthcare Management" },
          { name: "BSc (Hons) Business and Hospitality Management" },
          { name: "BSc (Hons) Business and Human Resource Management" },
          { name: "BSc (Hons) Business and Law" },
          { name: "BSc (Hons) Business and Marketing" },
          { name: "BSc (Hons) Business and Tourism Management" },
          { name: "BSc (Hons) Business Management with Foundation Year" },
          { name: "BSc (Hons) Finance and Accounting" },
          { name: "BSc (Hons) Health & Social Care with Foundation Year" },
          { name: "BSc (Hons) Health & Social Science with Foundation Year" },
          { name: "BSc (Hons) Health and Social Care" },
          { name: "BSc (Hons) International Business Management" },
          { name: "FDSC Business Management Foundation Degree" },
        ]}
      />
      <CoreValues
        introText="How to Apply"
        linkLabel="View All Requirements"
        linkHref="admission/how-to-apply"
      />
      {/* <CallToAction /> */}
      <AdmissionFormBanner />
    </main>
  );
}
