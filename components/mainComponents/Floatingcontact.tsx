/**
 * FloatingContact — Fixed bottom-left contact widget
 *
 * Install react-icons (if not already):
 *   npm install react-icons
 *
 * Add to your layout.tsx:
 *   import FloatingContact from "@/components/FloatingContact";
 *   ...
 *   <body>
 *     {children}
 *     <FloatingContact
 *       whatsappNumber="94771234567"
 *       messengerUsername="primeleed"
 *     />
 *   </body>
 *
 * Props:
 *   whatsappNumber   — phone number with country code, no + or spaces
 *   messengerUsername — Facebook page username or ID
 */

"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";

interface FloatingContactProps {
  whatsappNumber?: string;
  messengerUsername?: string;
}

const contactItems = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: FaWhatsapp,
    bg: "#25D366",
    hoverBg: "#1ebe5d",
    getHref: (whatsappNumber: string, _: string) =>
      `https://wa.me/${whatsappNumber}`,
  },
  {
    key: "messenger",
    label: "Messenger",
    icon: FaFacebookMessenger,
    bg: "#0084FF",
    hoverBg: "#0070d8",
    getHref: (_: string, messengerUsername: string) =>
      `https://m.me/${messengerUsername}`,
  },
];

export default function FloatingContact({
  whatsappNumber = "94771234567",
  messengerUsername = "primeleed",
}: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3"
      role="region"
      aria-label="Contact options"
    >
      {/* ── Toggle / Close button ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        className="
          relative w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg shadow-black/25
          transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950
          active:scale-95
        "
        style={{ backgroundColor: "#0084FF" }}
      >
        {/* Pulsing ring — only when closed to attract attention */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: "#0084FF" }}
            aria-hidden="true"
          />
        )}

        <span
          className="transition-all duration-300"
          style={{
            transform: isOpen
              ? "rotate(90deg) scale(1.1)"
              : "rotate(0deg) scale(1)",
          }}
        >
          {isOpen ? (
            <FaTimes size={22} color="#fff" />
          ) : (
            <FaCommentDots size={22} color="#fff" />
          )}
        </span>
      </button>

      {/* ── Contact option buttons — stagger reveal ── */}
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        const href =
          item.key === "whatsapp"
            ? item.getHref(whatsappNumber, messengerUsername)
            : item.getHref(whatsappNumber, messengerUsername);

        return (
          <div
            key={item.key}
            className="relative flex items-center gap-3"
            style={{
              /*
                Stagger: messenger (index 1) reveals first (it's visually
                closest to toggle), whatsapp (index 0) reveals second.
                We reverse the visual order with flex-col-reverse on parent.
              */
              transitionProperty: "opacity, transform",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen
                ? "translateY(0) scale(1)"
                : "translateY(16px) scale(0.7)",
              pointerEvents: isOpen ? "auto" : "none",
            }}
          >
            {/* Tooltip label */}

            <span
              className="
    absolute left-full ml-3
    px-3 py-1.5 rounded-md
    text-white text-xs font-semibold whitespace-nowrap
    shadow-md
    pointer-events-none
  "
            >
              {item.label}
              {/* Tooltip arrow — flip from borderLeft to borderRight */}
              <span
                className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderRight: `6px solid ${item.bg}`, // was borderLeft
                }}
              />
            </span>

            {/* Icon button */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via ${item.label}`}
              className="
                w-14 h-14 rounded-full
                flex items-center justify-center
                shadow-lg shadow-black/20
                transition-transform duration-150
                hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2
              "
              style={{
                backgroundColor: item.bg,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore — inline CSS hover workaround via group
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  item.hoverBg)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  item.bg)
              }
            >
              <Icon size={26} color="#fff" />
            </a>
          </div>
        );
      })}
    </div>
  );
}
