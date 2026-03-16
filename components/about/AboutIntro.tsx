// components/about/AboutIntro.tsx
// Max width: 1000px matching --vamtam-site-max-width
// Body text color: #545454 matching --e-global-color-vamtam_accent_8

import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="bg-white" style={{ padding: "80px 20px" }}>
      <div
        className="mx-auto grid items-center"
        style={{
          maxWidth: "1000px", // exact site max width
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          marginTop: "70px",
        }}
      >
        {/* Left — PrimeLeed logo, left aligned */}
        <div className="flex items-center justify-center" style={{
          marginTop: "90px",
        }}>
          <Image
            src="/Prime-Leed-SiteLogo-1536x512.png"
            alt="PrimeLeed Logo"
            width={400}
            height={680}
            className="object-contain"
          />
        </div>

        {/* Right — description paragraph */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "1.6em",
            color: "#545454", // pushes the block to the right by consuming leftover space
            width: "130%",
            alignSelf: "flex-end",
            marginLeft: "80px",
            textAlign: "justify", // pushes the whole paragraph to the right
            marginBottom: "80px"
          }}
        >
          Our platform offers comprehensive support, including guidance on the
          application process, access to valuable resources, and personalised
          assistance from experienced advisors. We are committed to empowering
          students and ensuring their journey towards higher education is smooth
          and successful, regardless of their nationality or background.
        </p>
      </div>
    </section>
  );
}
