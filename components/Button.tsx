import Link from "next/link";

type Props = {
  href?: string;
  label?: string;
};

export default function Button({
  href = "/admission",
  label = "Admission",
}: Props) {
  return (
    <Link
      href={href}
      className="flex items-center w-75 px-8 py-6 text-white font-semibold text-base tracking-wide transition-colors duration-200 bg-[#1a2e3b] hover:bg-[#2ab4c0]"
    >
      {/* Spacer to push label to center */}
      <span className="w-5 shrink-0" />
      {/* Label centered */}
      <span className="flex-1 text-left">{label}</span>
      {/* Arrow fixed to right */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M4 10h12M11 5l5 5-5 5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
