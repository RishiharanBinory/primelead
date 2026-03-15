import ImageTextBlock from "./ImageTextBlock";

export default function AdmissionContent() {
  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: "64px", paddingBottom: "64px" }}
    >
      <div className="max-w-7xl mx-auto px-7 flex flex-col gap-0">

        {/* Block 1 */}
        <ImageTextBlock
          imageSrc="/funding-student.jpg"
          imageAlt="Graduation caps"
          paragraph="If you are ready to take the next step in your academic journey, we invite you to apply for a partnered institution. By registering with us, you will gain access to a wide range of UK higher educational opportunities and support. Once you have registered, our team of knowledgeable counselors will reach out to you promptly, guiding you through the application process and assisting you in finding the best UK higher educational pathway to achieve your goals."
          linkLabel="Process Overview"
          linkHref="/admission/overview"
        />



        {/* Block 2 */}
        <ImageTextBlock
          imageSrc="/funding-student.jpg"
          imageAlt="Student on campus"
          paragraph="Get ready to take the next step towards your future with confidence, as we guide you towards securing the necessary funds for your academic pursuits. We understand the importance of financial support, and we are committed to assisting you in finding the right funding options to support your higher educational journey."
          linkLabel="Apply For Student Funding"
          linkHref="/admission/financial-aid"
        />

      </div>
    </section>
  );
}