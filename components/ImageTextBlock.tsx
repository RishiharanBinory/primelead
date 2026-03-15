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
    <div className="flex flex-col sm:flex-row gap-8 items-stretch">
      {/* Left: image */}
      <div className="w-full sm:w-[38%] shrink-0">
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

      {/* Right: text + link — vertically centered */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <p
          className="leading-[1.8]"
          style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#2c3e50" }}
        >
          {paragraph}
        </p>
        <Link
          href={linkHref}
          className="font-semibold underline underline-offset-4 transition-colors duration-200 hover:text-[#1a8fa0] w-fit"
          style={{ color: "#2ab4c0", fontSize: "15px" }}
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}
