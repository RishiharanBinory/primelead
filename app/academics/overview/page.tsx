import MainHero from "@/components/mainComponents/Mainhero";
import StatHero from "@/components/mainComponents/StatHero";
import LogoCarousel from "@/components/mainComponents/LogoCarousel";
import GraduateAreas from "@/components/mainComponents/GraduateAreas";
import CallToAction from "@/components/home/CallToAction";
import ScatteredImages from "@/components/academics/ScatteredImages";

export default function Overview() {
  return (
    <main>
      <MainHero
        imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
        imageAlt="Graduation ceremony"
        title="Academics"
        paragraph={
          <>
            Prime Leed offers an exceptional selection of courses by partnering
            with esteemed universities accross the UK. Thorugh these
            partnerships, we ensure access to high-quality educationa and a
            diverse range of study programs.{" "}
          </>
        }
      />
      <StatHero
        stat="500+"
        title={
          <>
            Undergraduate &amp; <br /> Graduate programs
          </>
        }
        paragraph="At Prime Leed, you'll find a diverse range of academic programs that combine the extensive offerings of larger universities with the personalised learning experience of a small, liberal arts institution. With over 36 majors, minors, graduate programs, and advanced certificates available, we provide a comprehensive selection of academic pathways. Our degrees can be earned either fully online or through a blend of online and traditional classroom experiences, offering flexibility to suit your individual preferences and circumstances."
      />
      <LogoCarousel />
      <GraduateAreas />
      <ScatteredImages
        images={[
          { src: "/Sudent_lfe.jpg", alt: "Student life" },
          { src: "/funding-student.jpg", alt: "Funding student" },
          { src: "/campus.png", alt: "Campus" },
          { src: "/hands.jpg", alt: "Students" },
          { src: "/Vission.jpeg", alt: "Vision" },
        ]}
      />
      <CallToAction />
    </main>
  );
}
