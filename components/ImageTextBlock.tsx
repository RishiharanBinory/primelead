import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex flex-col sm:flex-row items-stretch py-8 sm:py-10 border-b border-gray-100 last:border-b-0">
      {/* Image */}
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
          />
        </div>
      </div>

      {/* Text */}
      <div
        className="flex-1 min-w-0 flex flex-col justify-center gap-4
                   pt-6 sm:pt-0 sm:pl-8 md:pl-12"
        style={{ maxWidth: "780px" }}
      >
        <p
          className="leading-[1.9] text-justify"
          style={{ fontSize: "clamp(14px, 1.2vw, 18px)", color: "#2c3e50" }}
        >
          {paragraph}
        </p>
        <Link
          href={linkHref}
          className="font-semibold underline underline-offset-4 transition-colors duration-200 hover:text-[#1a8fa0] w-fit"
          style={{ color: "#2ab4c0", fontSize: "clamp(13px, 1vw, 15px)" }}
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}
