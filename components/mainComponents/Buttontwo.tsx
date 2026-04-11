"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  bgColor?: string;       // hex e.g. "#2869A3"
  textColor?: string;     // hex e.g. "#ffffff"
  fontSize?: number;      // px number e.g. 24
  className?: string;
  onClick?: () => void;
}

export default function Buttontwo({
  text,
  href,
  bgColor = "#2869A3",
  textColor = "#ffffff",
  fontSize = 24,
  className = "",
  onClick,
}: ButtonProps) {
  const style: React.CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: `${fontSize}px`,
    borderRadius: "8px",
    padding: "12px 28px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    whiteSpace: "nowrap",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget as HTMLElement).style.opacity = "0.88";
    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget as HTMLElement).style.opacity = "1";
    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
  };

  return (
    <Link
      href={href}
      style={style}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <span style={{ fontSize: `${fontSize * 0.9}px` }}>→</span>
    </Link>
  );
}