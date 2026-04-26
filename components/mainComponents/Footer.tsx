"use client";
import React from "react";
import {
  ArrowUp,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Facebook as FacebookIcon,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#105E74] text-white relative overflow-hidden"
      style={{ fontFamily: "'Google Sans Flex', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100..900&display=swap"
        rel="stylesheet"
      />

      {/* Wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none border-0 outline-none">
        <svg
          className="relative block w-full h-5 md:h-10 border-0 outline-none"
          style={{ display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-20 pb-8 relative z-10">
        {/* ── TOP SECTION: Brand (left) + columns (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-16 gap-y-10 mb-12 items-start">
          {/* Col 1 — Brand block */}
          <div className="flex flex-col lg:col-span-3">
            <a
              href="#"
              className="text-3xl font-serif font-bold text-white tracking-tight mb-5 block"
            >
              Primeleed<span className="text-prime-blue">.</span>
            </a>

            <p
              className="text-white leading-relaxed mb-6"
              style={{ fontSize: "14px" }}
            >
              Expert guidance for students looking to study in London. From
              university applications to securing Student Finance, we support
              you end-to-end.
            </p>

            <div className="flex items-center gap-3 mb-6">
              {[
                {
                  Icon: InstagramIcon,
                  label: "Instagram",
                  href: "https://www.instagram.com/primeleededu/",
                },
                {
                  Icon: FacebookIcon,
                  label: "Facebook",
                  href: "https://web.facebook.com/primeleed",
                },
                {
                  Icon: LinkedinIcon,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/primeleed/",
                },
                {
                  Icon: SiTiktok,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@primeleed?_r=1&_t=ZN-95o8QzV4kqM",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-prime-blue transition-colors flex items-center justify-center text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <form
              className="flex items-center max-w-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2.5 text-white outline-none focus:border-prime-blue transition-colors placeholder-slate-500"
                style={{ fontSize: "14px" }}
                required
              />
              <button
                type="submit"
                className="bg-prime-blue hover:bg-sky-400 transition-colors rounded-r-lg px-4 py-2.5 font-bold text-white whitespace-nowrap"
                style={{ fontSize: "14px" }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col">
            <h4
              className="text-white font-bold uppercase tracking-wider mb-5"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col" style={{ gap: "14px" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "support/faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white hover:text-prime-blue transition-colors flex items-center gap-2"
                    style={{ fontSize: "14px" }}
                  >
                    <span className="w-1 h-1 bg-prime-blue rounded-full shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Academics */}
          <div className="flex flex-col">
            <h4
              className="text-white font-bold uppercase tracking-wider mb-5"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Academics
            </h4>
            <ul className="flex flex-col" style={{ gap: "14px" }}>
              {[
                { href: "/academics", label: "Overview" },
                { href: "/academics/consultancy", label: "Consultancy" },
                { href: "/academics/undergraduate", label: "Undergraduate" },
                { href: "/academics/postgraduate", label: "Postgraduate" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white hover:text-prime-blue transition-colors flex items-center gap-2"
                    style={{ fontSize: "14px" }}
                  >
                    <span className="w-1 h-1 bg-prime-blue rounded-full shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Admissions */}
          <div className="flex flex-col">
            <h4
              className="text-white font-bold uppercase tracking-wider mb-5"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Admissions
            </h4>
            <ul className="flex flex-col" style={{ gap: "14px" }}>
              {[
                { href: "/admissions", label: "Overview" },
                { href: "/admissions/how-to-apply", label: "How to Apply" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white hover:text-prime-blue transition-colors flex items-center gap-2"
                    style={{ fontSize: "14px" }}
                  >
                    <span className="w-1 h-1 bg-prime-blue rounded-full shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Contact Us */}
          <div className="flex flex-col lg:col-span-2">
            <h4
              className="text-white font-bold uppercase tracking-wider mb-5"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col" style={{ gap: "14px" }}>
              <li className="flex items-start gap-3 text-white">
                <MapPin
                  size={15}
                  className="shrink-0 text-prime-blue"
                  style={{ marginTop: "2px" }}
                />
                <span className="leading-relaxed" style={{ fontSize: "14px" }}>
                  1 Woodlands Grove, Stapleford Abbotts,
                  <br />
                  Romford, RM4 1FB
                </span>
              </li>
              <li>
                <a
                  href="tel:02080043779"
                  className="flex items-center gap-3 text-white hover:text-prime-blue transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  <Phone size={15} className="shrink-0 text-prime-blue" />
                  020 8004 3779
                </a>
              </li>
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/447520604047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-prime-blue transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  <SiWhatsapp size={15} className="shrink-0 text-prime-blue" />
                  +44 7520 604047
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@primeleed.com"
                  className="flex items-center gap-3 text-white hover:text-prime-blue transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  <Mail size={15} className="shrink-0 text-prime-blue" />
                  info@primeleed.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 6 — Legal */}
          <div className="flex flex-col lg:col-span-2">
            <h4
              className="text-white font-bold uppercase tracking-wider mb-5"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Legal
            </h4>
            <ul className="flex flex-col" style={{ gap: "14px" }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-prime-blue transition-colors whitespace-nowrap"
                      style={{ fontSize: "14px" }}
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white font-medium"
          style={{ fontSize: "12px" }}
        >
          <p>&copy; {currentYear} Primeleed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}