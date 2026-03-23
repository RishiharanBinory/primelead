import { EVENTS } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  // If no event found show 404
  if (!event) return notFound();

  return (
    <main className="w-full bg-white">
      <div
        className="max-w-7xl mx-auto px-7"
        style={{ paddingTop: "64px", paddingBottom: "80px" }}
      >
        {/* Back button */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 font-semibold mb-10 hover:opacity-70 transition-opacity"
          style={{ color: "#2ab4c0", fontSize: "15px" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M15 9H3M8 4L3 9l5 5"
              stroke="#2ab4c0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Events
        </Link>

        {/* Hero image */}
        <div
          className="relative w-full overflow-hidden mb-10"
          style={{ aspectRatio: "16/6" }}
        >
          <Image
            src={event.imageSrc}
            alt={event.imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Date + location */}
        <p
          className="font-semibold mb-3"
          style={{ color: "#2ab4c0", fontSize: "16px" }}
        >
          {event.date} / {event.location}
        </p>

        {/* Title */}
        <h1
          className="font-black text-[#0d1b2a] leading-tight mb-6"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          {event.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#eef0f2", color: "#1a2e3b" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full mb-8"
          style={{ borderTop: "1px solid #e0e3e7" }}
        />

        {/* Body content */}
        <div className="max-w-3xl flex flex-col gap-6">
          {event.body.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="leading-[1.9] text-justify"
              style={{ fontSize: "17px", color: "#2c3e50" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

// Generate static paths for all events
export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}
