"use client";
import Image from "next/image";
import Buttontwo from "../mainComponents/Buttontwo";

export default function CtaComponent() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        .cta-section * { font-family: 'Poppins', sans-serif; }
        .cta-section {
          position: relative;
          z-index: 0;
          padding-bottom: 100px;
          margin-top: -40px;
          background: transparent;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          /* tight circle in the center only, fully transparent at edges */
          background: radial-gradient(circle 400px at 50% 50%, rgba(20,154,181,0.13) 0%, transparent 100%);
        }
        .cta-section > *:not(.cta-bg) {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section className="cta-section w-full flex flex-col items-center justify-center text-center pt-10">

        {/* Tight center glow only */}
        <div className="cta-bg" />

        {/* Badge */}
        <div className="flex items-center gap-1 py-1.5 rounded-full border border-yellow-400/60 bg-white/60 backdrop-blur text-sm w-fit">
          <div className="flex items-center">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="User 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white -ml-2">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="User 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white -ml-2">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="User 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="font-medium ml-1 text-blackB">
            Your future shouldn&apos;t feel confusing.
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl md:leading-[1.2] font-semibold max-w-xl text-black mt-5">
          Let&apos;s plan it together.
        </h1>

        {/* Button */}
        <div className="mt-8">
          <Buttontwo
            text="Apply Now"
            href="/admission/form"
            bgColor="#149ab5"
            textColor="#ffffff"
            fontSize={20}
          />
        </div>

      </section>
    </>
  );
}