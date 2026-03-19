// components/mainComponents/Button.tsx
"use client";

import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  type?: "link";
}

interface SubmitButtonProps {
  type: "submit";
  label: string;
  loading?: boolean;
}

type ButtonProps = LinkButtonProps | SubmitButtonProps;

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "240px",
  backgroundColor: "#292929",
  color: "#ffffff",
  padding: "14px 32px",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  letterSpacing: "0.02em",
  transition: "background-color 0.2s ease",
  border: "none",
  cursor: "pointer",
};

export default function Button(props: ButtonProps) {
  if (props.type === "submit") {
    return (
      <button
        type="submit"
        disabled={props.loading}
        style={{
          ...buttonStyle,
          backgroundColor: props.loading ? "#9ca3af" : "#292929",
          cursor: props.loading ? "not-allowed" : "pointer",
          width: "240px",
        }}
        onMouseEnter={(e) => {
          if (!props.loading)
            (e.currentTarget as HTMLElement).style.backgroundColor = "#2ab4c0";
        }}
        onMouseLeave={(e) => {
          if (!props.loading)
            (e.currentTarget as HTMLElement).style.backgroundColor = "#292929";
        }}
      >
        {props.loading ? "Submitting..." : props.label}
        <span>→</span>
      </button>
    );
  }

  return (
    <Link
      href={props.href}
      style={buttonStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#2ab4c0";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#292929";
      }}
    >
      {props.label} <span>→</span>
    </Link>
  );
}