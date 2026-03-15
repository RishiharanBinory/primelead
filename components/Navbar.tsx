"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; children?: DropdownItem[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Overview", href: "/academics/overview" },
      { label: "Undergraduate", href: "/academics/undergraduate" },
      { label: "Postgraduate", href: "/academics/postgraduate" },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      { label: "Overview", href: "/admission/overview" },
      { label: "How to Apply", href: "/admission/how-to-apply" },
      { label: "Admission Form", href: "/admission/form" },
      { label: "Financial Aid", href: "/admission/financial-aid" },
    ],
  },
  {
    label: "Support & Guidance",
    href: "/support",
    children: [
      { label: "Request Information", href: "/support/request-info" },
      { label: "FAQ", href: "/support/faq" },
      { label: "Resources", href: "/support/resources" },
      { label: "Support & Guidance", href: "/support/guidance" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    className="ml-1 shrink-0 transition-transform duration-200"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Dropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
  return (
    <ul
      role="menu"
      aria-hidden={!open}
      className={`absolute top-full left-0 min-w-50 bg-white border border-[#e6eaed] border-t-[3px] border-t-[#F5C400] rounded-b-lg shadow-xl list-none m-0 py-1 z-50 transition-all duration-150
        ${open ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-2 pointer-events-none"}`}
    >
      {items.map((item) => (
        <li key={item.href} role="none">
          <Link
            href={item.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className="block px-5 py-3 text-sm text-[#2c3e50] border-b border-[#f3f5f7] last:border-0 hover:bg-[#FFFBEC] hover:pl-6 transition-all duration-100"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const scrollTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handler = () => {
      const current = window.scrollY;
      const diff = current - lastScrollY.current;
      if (current < 80) {
        setVisible(true);
      } else if (diff > 8) {
        setVisible(false);
        setOpenItem(null);
      } else if (diff < -8) {
        setVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenItem(null);
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenItem(null);
        setMobileOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 960) setMobileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(
    () => () => {
      clearTimeout(leaveTimer.current);
      clearTimeout(scrollTimer.current);
    },
    [],
  );

  const enter = useCallback((label: string) => {
    clearTimeout(leaveTimer.current);
    setOpenItem(label);
  }, []);

  const leave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpenItem(null), 140);
  }, []);

  const isActive = (item: NavItem) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e6eaed] shadow-[0_1px_10px_rgba(0,0,0,0.07)] font-sans transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-7 h-17.5 flex items-center">
        <Link
          href="/"
          aria-label="Primeleed home"
          className="flex items-center shrink-0 mr-auto"
        >
          <Image
            src="/logo.png"
            alt="Primeleed"
            width={150}
            height={38}
            priority
            className="object-contain"
          />
        </Link>

        <ul
          role="menubar"
          aria-label="Main navigation"
          className="hidden lg:flex items-stretch h-17.5 list-none m-0 p-0 ml-auto"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            const expanded = openItem === item.label;
            return (
              <li
                key={item.label}
                className="relative flex items-stretch"
                onMouseEnter={() => item.children && enter(item.label)}
                onMouseLeave={() => item.children && leave()}
              >
                <Link
                  href={item.children ? "#" : item.href}
                  role="menuitem"
                  aria-haspopup={item.children ? "menu" : undefined}
                  aria-expanded={item.children ? expanded : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      setOpenItem((v) =>
                        v === item.label ? null : item.label,
                      );
                    }
                  }}
                  className={`inline-flex items-center gap-0.5 px-4 self-stretch h-full text-[14.5px] font-medium text-[#1a2e3b] no-underline whitespace-nowrap cursor-pointer border-none transition-colors duration-150
                    ${active || expanded ? "bg-[#F5C400]" : "hover:bg-[#F5C400]"}`}
                >
                  {item.label}
                  {item.children && <ChevronIcon open={expanded} />}
                </Link>
                {item.children && (
                  <Dropdown items={item.children} open={expanded} />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1 lg:ml-2 text-[#1a2e3b]">
          <button
            className="hidden lg:flex items-center justify-center w-9 h-9 border-none bg-transparent rounded-md cursor-pointer hover:bg-[#f0f3f5] transition-colors"
            aria-label="Menu"
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              aria-hidden="true"
            >
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="6.5" width="14" height="2" rx="1" fill="currentColor" />
              <rect y="13" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>

          <button
            className="flex items-center justify-center w-9 h-9 border-none bg-transparent rounded-md cursor-pointer hover:bg-[#f0f3f5] transition-colors"
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="5"
                stroke="currentColor"
                strokeWidth="1.9"
              />
              <path
                d="M11.5 11.5L16.5 16.5"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 border-none bg-transparent rounded-md cursor-pointer hover:bg-[#f0f3f5] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 2L16 16M16 2L2 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                aria-hidden="true"
              >
                <rect width="20" height="2" rx="1" fill="currentColor" />
                <rect
                  y="6.5"
                  width="14"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect y="13" width="20" height="2" rx="1" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        id="pl-mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className="lg:hidden bg-white border-t border-[#e6eaed] grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: mobileOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            const subOpen = mobileAccordion === item.label;
            return (
              <div key={item.label} className="border-b border-[#f0f3f5]">
                {item.children ? (
                  <>
                    <button
                      aria-expanded={subOpen}
                      onClick={() =>
                        setMobileAccordion((v) =>
                          v === item.label ? null : item.label,
                        )
                      }
                      className={`flex items-center justify-between w-full px-6 py-4 text-[15px] font-medium text-[#1a2e3b] bg-transparent border-none cursor-pointer hover:bg-[#FFFBEC] transition-colors text-left
                        ${active ? "border-l-4 border-l-[#F5C400] bg-[#FFFBEC] pl-5" : ""}`}
                    >
                      {item.label}
                      <ChevronIcon open={subOpen} />
                    </button>
                    <div
                      className="bg-[#fafbfc] grid transition-[grid-template-rows] duration-200"
                      style={{ gridTemplateRows: subOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-9 py-3.5 text-sm text-[#3d5166] border-t border-[#eff1f4] hover:bg-[#FFF5C2] hover:text-[#1a2e3b] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex px-6 py-4 text-[15px] font-medium text-[#1a2e3b] no-underline hover:bg-[#FFFBEC] transition-colors
                      ${active ? "border-l-4 border-l-[#F5C400] bg-[#FFFBEC] pl-5" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
