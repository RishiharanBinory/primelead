import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "MENU",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Academics", href: "/academics/overview" },
      { name: "Admission", href: "/admission/overview" },
    ],
  },
  {
    title: "INFO",
    links: [
      { name: "How to apply", href: "/admission/how-to-apply" },
      { name: "Request info", href: "/support/request-info" },
      { name: "Support guidance", href: "/support/guidance" },
    ],
  },
  {
    title: "QUICKLINKS",
    links: [
      { name: "Apply now", href: "/admission/form" },
      { name: "Financial aid", href: "/admission/financial-aid" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer7 = ({
  logo = {
    url: "https://www.primeleed.com",
    src: "/logo2.png",
    alt: "logo",
    title: "primeleed.com",
  },
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Primeleed. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="relative pt-24 pb-1 bg-[#eeeff3]">

      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-10">

        {/* Main grid: logo+desc+social | links */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">

          {/* Left: Logo, contact info, socials */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:max-w-xs">
            <a href={logo.url}>
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-16 md:h-20"
              />
            </a>

            {/* Contact info */}
            <div className="flex flex-col gap-2 text-sm leading-relaxed">
              <p>1 Woodlands Grove, Stapleford Abbotts,</p>
              <p>Romford, RM4 1FB</p>
              <a
                href="tel:02080043779"
                className="hover:opacity-70 transition-opacity font-medium"
              >
                020 8004 3779
              </a>
              <a
                href="mailto:info@primeleed.com"
                className="hover:opacity-70 transition-opacity font-medium"
              >
                info@primeleed.com
              </a>
            </div>

            {/* Social icons */}
            <ul className="flex items-center gap-5">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Link sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 lg:flex-1 w-full lg:pl-16 lg:pt-8">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold tracking-widest uppercase">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 pb-6 text-xs md:flex-row md:justify-between">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 md:order-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};