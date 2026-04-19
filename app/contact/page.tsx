import React from "react";
import MainHero from "@/components/mainComponents/Mainhero";
import ReviewsCarousel from "@/components/home/Reviewscarousel";
import ContactForm from "@/components/form/contact";

import AdmissionFormBanner from "@/components/about/AdmissionFormbanner";

const page = () => {
  return (
    <main>
      <MainHero
        imageSrc="/academics_bg.jpg"
        imageAlt="Graduation ceremony"
        title="Contact"
        paragraph={<>We can help you with further questions. </>}
      />

      <ReviewsCarousel />
      <ContactForm />
      {/* <FormOverlap />
      <CallToAction /> */}
      <AdmissionFormBanner/>
    </main>
  );
};

export default page;
