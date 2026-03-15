// components/about/CoreValueCard.tsx

import { LucideIcon } from "lucide-react";

interface CoreValueCardProps {
  // LucideIcon is the TypeScript type for any Lucide icon component
  icon: LucideIcon;
  title: string;
  description: string;
  showLeftBorder?: boolean;
  showRightBorder?: boolean;
}

export default function CoreValueCard({
  // Renaming 'icon' to 'Icon' with a capital I is CRITICAL here.
  // React only treats <SomeName /> as a component if the name starts uppercase.
  // If you left it as 'icon' and wrote <icon />, React would look for an HTML
  // element called "icon" and fail — just like it failed with <📋 />.
  icon: Icon,
  title,
  description,
  showLeftBorder = false,
  showRightBorder = false,
}: CoreValueCardProps) {
  return (
    <div
      style={{
        padding: "0 40px",
        borderLeft: showLeftBorder ? "1px solid #e0e0e0" : "none",
        borderRight: showRightBorder ? "1px solid #e0e0e0" : "none",
      }}
    >
      {/* Icon + Title row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "20px",
        }}
      >
        {/* 
          This works because 'Icon' starts with uppercase.
          React now knows to call it as a component, not look for an HTML tag.
        */}
        <Icon size={36} strokeWidth={1.5} color="#333333" />

        <h3
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "20px",
            fontWeight: "700",
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "1.7em",
          color: "#545454",
          margin: 0,
          textAlign: "justify",
        }}
      >
        {description}
      </p>
    </div>
  );
}