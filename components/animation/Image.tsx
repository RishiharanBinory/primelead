"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string; // ← new prop, defaults to "center"
};

export function AnimatedNextImage({
  src,
  alt,
  priority = false,
  objectPosition = "center", // ← all existing usages untouched
}: Props) {
  const { ref, animated } = useScrollAnimation(0.1);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        style={{
          objectPosition,           // ← replaces hardcoded "object-center"
          transform: animated ? "scale(1)" : "scale(1.15)",
          transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </div>
  );
}