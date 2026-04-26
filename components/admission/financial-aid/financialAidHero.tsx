import MainHero from "@/components/mainComponents/Mainhero";

export default function financialAidHero() {
  return (
    <MainHero
      imageSrc="/financialaid_bg.jpg"
      imageAlt="Graduation ceremony"
      title="Financial Aid"
      paragraph={
        <>
          Discover various opportunities for scholarships, grants, and financial
          aid to support your pursuit of a high-quality education with the help
          from Primeleed.{" "}
        </>
      }
    />
  );
}
