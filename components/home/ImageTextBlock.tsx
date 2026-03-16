"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
  paragraph: string;
  linkLabel: string;
  linkHref: string;
};

export default function ImageTextBlock({
  imageSrc,
  imageAlt,
  paragraph,
  linkLabel,
  linkHref,
}: Props) {
  const [animated, setAnimated] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className="flex flex-col sm:flex-row items-stretch py-8 sm:py-10 border-b border-gray-100 last:border-b-0"
    >
      {/* Image — zoom effect */}
      <div className="w-full sm:w-[35%] md:w-[28%] shrink-0">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            style={{
              transform: animated ? "scale(1)" : "scale(1.15)",
              transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        </div>
      </div>

      {/* Text — slides up from bottom */}
      <div
        className="flex-1 min-w-0 flex flex-col justify-center gap-4
                   pt-6 sm:pt-0 sm:pl-8 md:pl-12"
        style={{ maxWidth: "780px" }}
      >
        <p
          className="leading-[1.9] text-justify"
          style={{
            fontSize: "clamp(14px, 1.2vw, 18px)",
            color: "#2c3e50",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {paragraph}
        </p>
        <Link
          href={linkHref}
          className="font-semibold underline underline-offset-4 transition-colors duration-200 hover:text-[#1a8fa0] w-fit"
          style={{
            color: "#2ab4c0",
            fontSize: "clamp(13px, 1vw, 15px)",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}