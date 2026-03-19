import React from "react";
import MainHero from "@/components/mainComponents/Mainhero";
import FAQSection from "@/components/support/FAQSection";

const faq = () => {
  return (
    <main>
      <MainHero
        imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
        imageAlt="Graduation ceremony"
        title="FAQ"
        paragraph={<>Frequently Asked Questions</>}
      />
      <FAQSection />
    </main>
  );
};

export default faq;
