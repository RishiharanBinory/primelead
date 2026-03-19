import React from "react";
import AdmissionFormPage from "@/components/form/AdmissionForm";
import RequestBanner from "@/components/support/RequestBanner";

const page = () => {
  return (
    <main>
      <RequestBanner text="REQUEST" />
      <AdmissionFormPage />
    </main>
  );
};

export default page;
