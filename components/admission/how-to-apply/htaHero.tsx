import MainHero from "@/components/mainComponents/Mainhero";

export default function HowToApplyHero() {
  return (
    <MainHero
      imageSrc="/howtoapply_bg.jpg"
      imageAlt="Graduation ceremony"
      title="How to Apply"
      paragraph={
        <>
          The admission team can offer guidance and support throughout the
          application process. They can help students navigate the application
          requirements, submit necessary documents, and meet deadlines.{" "}
        </>
      }
    />
  );
}
