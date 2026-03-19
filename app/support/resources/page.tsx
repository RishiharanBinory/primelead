import React from "react";
import PageIntro from "@/components/mainComponents/PageIntro";
import MainHero from "@/components/mainComponents/Mainhero";
import CoreValues from "@/components/about/CoreValues";
import ResourcesList from "@/components/support/ResourcesList";

const Guidance = () => {
  return (
    <main>
      <MainHero
        imageSrc="/resources_bg.jpg"
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
      <ResourcesList
        title="University Guides"
        description="Here you can review useful guidance to progress your application:"
        resources={[
          {
            label: "2020-21 Economics Worksheet",
            href: "/pdfs/economics-2020-21.pdf",
          },
          {
            label: "2019-20 Economics Worksheet",
            href: "/pdfs/economics-2019-20.pdf",
          },
          { label: "Program Worksheet", href: "/pdfs/program-worksheet.pdf" },
        ]}
      />
      <CoreValues />
    </main>
  );
};

export default Guidance;
