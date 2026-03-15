import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admission", href: "/admission" },
];

const INFO_LINKS = [
  { label: "How To Apply", href: "/admission/how-to-apply" },
  { label: "Request Info", href: "/support/request-info" },
  { label: "Support & Guidance", href: "/support/guidance" },
];

const QUICK_LINKS = [
  { label: "Apply Now", href: "/admission/form" },
  { label: "Financial Aid", href: "/admission/financial-aid" },
  { label: "Blog", href: "/blog" },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com/primeleed",
    icon: <FaFacebook size={34} color="white" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedinIn size={34} color="white" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: <FaYoutube size={34} color="white" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram size={34} color="white" />,
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Yellow top bar */}
      <div className="w-full h-2" style={{ backgroundColor: "#F5C400" }} />

      {/* Main footer */}
      <div style={{ backgroundColor: "#eef0f2" }}>
        <div className="max-w-7xl mx-auto px-7 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo + address + contact */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Primeleed home">
              <Image
                src="/Prime-Leed-Logo-Footer.png"
                alt="Primeleed"
                width={140}
                height={80}
                className="object-contain"
              />
            </Link>
            <address
              className="not-italic leading-relaxed"
              style={{ fontSize: "14px", color: "#3d4f5e" }}
            >
              1 Woodlands Grove,
              <br />
              Stapleford Abbotts, Romford,
              <br />
              RM4 1FB
            </address>
            <a
              href="tel:02080043779"
              className="flex items-center gap-2 font-semibold hover:opacity-75 transition-opacity"
              style={{ fontSize: "14px", color: "#1a2e3b" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              020 8004 3779
            </a>
            <a
              href="mailto:info@primeleed.com"
              className="flex items-center gap-2 hover:opacity-75 transition-opacity"
              style={{ fontSize: "14px", color: "#1a2e3b" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@primeleed.com
            </a>
          </div>

          {/* Col 2: Menu */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold uppercase tracking-widest"
              style={{ fontSize: "12px", color: "#1a2e3b" }}
            >
              Menu
            </h4>
            <nav className="flex flex-col gap-4">
              {MENU_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ fontSize: "15px", color: "#3d4f5e" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold uppercase tracking-widest"
              style={{ fontSize: "12px", color: "#1a2e3b" }}
            >
              Info
            </h4>
            <nav className="flex flex-col gap-4">
              {INFO_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ fontSize: "15px", color: "#3d4f5e" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold uppercase tracking-widest"
              style={{ fontSize: "12px", color: "#1a2e3b" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ fontSize: "15px", color: "#3d4f5e" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Social bar — taller with circular hover */}
      <div
        className="w-full h-50 flex items-center justify-center gap-11 py-14"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#2ab4c0]"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Copyright bar — white */}
      <div className="w-full h-24 py-10" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: "13px", color: "#7a8a96" }}>
            Copyright © 2026 Prime Leed. All rights reserved. 
          </p>
          <div className="flex items-center gap-8 ml-auto">
            {[
              { label: "Cookies", href: "/cookies" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-75 transition-opacity"
                style={{ fontSize: "13px", color: "#7a8a96" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
