// components/AboutSection.tsx  ← SERVER component ✅
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-7">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 justify-center">
          <AnimateOnScroll
            delay="0s"
            className="shrink-0 w-48 md:w-80 flex items-center justify-center"
          >
            <Image
              src="/logo2.png"
              alt="Primeleed"
              width={320}
              height={280}
              className="object-contain w-full h-auto"
            />
          </AnimateOnScroll>

          <div className="flex-1 max-w-2xl w-full">
            <AnimateOnScroll delay="0.2s">
              <h2 className="text-2xl md:text-4xl font-black text-[#1a2e3b] mb-4 md:mb-6 leading-tight text-center md:text-left">
                Secure a UK University Placement
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.35s">
              <p className="text-[18px] md:text-base text-[#374151] leading-relaxed text-justify mb-3 md:mb-4">
                <strong>
                  Prime Leed is a trusted resource for students seeking to apply
                  for higher education.
                </strong>{" "}
                With a successful track record spanning over four years catering
                to both UK and EU students, we have assisted more than 2000
                students in securing their places in higher education
                institutions.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.5s">
              <p className="text-[18px] md:text-base text-[#374151] leading-relaxed text-justify">
                Our platform offers comprehensive support, including guidance on
                the application process, access to valuable resources, and
                personalised assistance from experienced advisors. We are
                committed to empowering students and ensuring their journey
                towards higher education is smooth and successful, regardless of
                their nationality or background.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
