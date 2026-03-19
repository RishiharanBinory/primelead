import MainHero from "@/components/mainComponents/Mainhero";

export default function AdmissionHero() {
  return (
    <MainHero
      imageSrc="/AdmissionView_bg.jpg"
      imageAlt="Graduation ceremony"
      title="Admission & Aid"
      paragraph={
        <>
          An admission team helps students find the right university by
          providing information, guiding them through the application process,
          assessing eligibility, offering personalised advice, and facilitating
          communication.{" "}
        </>
      }
    />
  );
}
