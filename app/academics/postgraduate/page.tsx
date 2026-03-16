import MainHero from "@/components/mainComponents/Mainhero";
import StatHero from "@/components/mainComponents/StatHero";
import LogoCarousel from "@/components/mainComponents/LogoCarousel";
import GraduateAreas from "@/components/mainComponents/GraduateAreas";
import CallToAction from "@/components/home/CallToAction";
import ScatteredImages from "@/components/academics/ScatteredImages";
import CoreValues from "@/components/about/CoreValues";

export default function Postgraduate() {
  return (
    <main>
      <MainHero
        imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
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
        stat="45+"
        title={<>undergraduate courses</>}
        paragraph="You have the unique opportunity to pursue a diverse range of subjects by enrolling in courses offered by any of our esteemed partners. This allows you to create a personalised academic path that aligns with your passions and interests. Explore our extensive selection of 45+ undergraduate majors and programs, discover the wide array of undergraduate courses provided by our partner universities, and find inspiration in the examples showcased below. For additional options and information, please don’t hesitate to contact us"
      />
      <CoreValues />
      <CallToAction />
    </main>
  );
}
