import MainHero from "@/components/mainComponents/Mainhero";
import StatHero from "@/components/mainComponents/StatHero";
import CallToAction from "@/components/home/CallToAction";
import CoreValues from "@/components/about/CoreValues";
import CourseSection from "@/components/mainComponents/CourseSection";

export default function Postgraduate() {
  return (
    <main>
      <MainHero
        imageSrc="/postgraduate_bg.jpg"
        imageAlt="Graduation ceremony"
        title="Postgraduate"
        paragraph={
          <>
            A graduate degree in the UK is the advance level of higher education
            after secondary school. It typically takes three years and is known
            as a Bachelor&#39;s degree. It provides a strong foundation in a
            specific field of study and is valuable for future education or
            employment
          </>
        }
      />
      <StatHero
        stat="20+"
        title={<>Partnership Graduate Programs</>}
        paragraph="Take advantage of a special opportunity to explore a wide range of subjects through our esteemed partner universities. This enables you to tailor your academic journey according to your own passions and interests. Discover our extensive selection of over 34 graduate programs, explore the diverse array of graduate courses available at our partner universities, and find inspiration in the examples below. For more options and information, feel free to reach out to us."
      />
      <CourseSection
        title="Business & Administration"
        courses={[
          {
            name: "Master Of Business Administration (MBA)",
            field: "Health And Social Care",
            href: "/courses/mba-health",
          },

          {
            name: "Master Of Business Administration (MBA)",
            field: "Hospitality Management",
            href: "/courses/mba-hospitality",
          },
          {
            name: "Master Of Business Administration (MBA)",
            field: "International",
            href: "/courses/mba-international",
          },
          {
            name: "MSc International Business Management",
            href: "/courses/msc-international-business",
          },
          {
            name: "MSc International Marketing",
            href: "/courses/msc-international-marketing",
          },

          {
            name: "MSc International Project Management",
            href: "/courses/msc-project-management",
          },
        ]}
      />
      <CoreValues />
      <CallToAction />
    </main>
  );
}
