import MainHero from "@/components/mainComponents/Mainhero";

export default function formHero() {
  return (
    <MainHero
      imageSrc="/howtoapply_bg.jpg"
      imageAlt="Graduation ceremony"
      title="Admission Form"
      paragraph={
        <>
          Apply using the form below. Please make sure it is accurate as
          possible to provide you the best guidance.{" "}
        </>
      }
    />
  );
}
