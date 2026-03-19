// components/about/AboutHero.tsx
// No longer contains any design code — just passes the About page's
// specific content to the shared PageHero component.

import MainHero from "@/components/mainComponents/Mainhero";

export default function AboutHero() {
  return (
    <MainHero
      imageSrc="/about_bg.jpg"
      imageAlt="Graduation ceremony"
      title="About"
      paragraph={
        <>
          With a successful track record spanning over four years catering to
          both UK and EU students, we have assisted more than 2000 students in
          securing their places in higher education institutions.{" "}
        </>
      }
    />
  );
}
