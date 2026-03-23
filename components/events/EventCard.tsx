import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  location: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
};

export default function EventCard({
  slug,
  imageSrc,
  imageAlt,
  date,
  location,
  title,
  description,
}: Props) {
  return (
    <Link
      href={`/events/${slug}`}
      className="flex flex-col sm:flex-row gap-8 group hover:opacity-95 transition-opacity"
    >
      {/* Left: image */}
      <div className="shrink-0 w-full sm:w-90">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Right: content */}
      <div className="flex flex-col justify-center gap-3">
        {/* Date + location */}
        <p className="font-semibold" style={{ color: "#2ab4c0", fontSize: "20px" }}>
          {date} / {location}
        </p>

        {/* Title */}
        <h2
          className="font-black leading-snug text-[#0d1b2a]"
          style={{ fontSize: "clamp(23px, 2vw, 29px)" }}
        >
          {title}
        </h2>

        {/* Description */}
        <p className="leading-relaxed" style={{ fontSize: "18px", color: "#4a5568" }}>
          {description}
        </p>
      </div>
    </Link>
  );
}