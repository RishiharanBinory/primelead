import React from "react";
import MainHero from "@/components/mainComponents/Mainhero";
import FAQSection from "@/components/support/FAQSection";

const faq = () => {
  return (
    <main>
      <MainHero
        imageSrc="/howtoapply_bg.jpg"
        imageAlt="Graduation ceremony"
        title="FAQ"
        paragraph={<>Frequently Asked Questions</>}
      />
      <FAQSection />
    </main>
  );
};

export default faq;
