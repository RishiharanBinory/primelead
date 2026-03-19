import React from "react";
import PageIntro from "@/components/mainComponents/PageIntro";
import MainHero from "@/components/mainComponents/Mainhero";
import CoreValues from "@/components/about/CoreValues";

const Guidance = () => {
  return (
    <main>
      <MainHero
        imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
        imageAlt="Graduation ceremony"
        title="Resources"
        paragraph={<></>}
      />
      <PageIntro
        paragraph={
          <>
            Below you can find tools & resources that will enhance your current
            documents or tools to develop further into higher education
          </>
        }
      />
      <CoreValues />
    </main>
  );
};

export default Guidance;
