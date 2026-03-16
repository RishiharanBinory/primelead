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
      { label: "Overview",      href: "/academics/overview" },
      { label: "Undergraduate", href: "/academics/undergraduate" },
      { label: "Postgraduate",  href: "/academics/postgraduate" },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      { label: "Overview",       href: "/admission/overview" },
      { label: "How to Apply",   href: "/admission/how-to-apply" },
      { label: "Admission Form", href: "/admission/form" },
      { label: "Financial Aid",  href: "/admission/financial-aid" },
    ],
  },
  {
    label: "Support & Guidance",
    href: "/support",
    children: [
      { label: "Request Information", href: "/support/request-info" },
      { label: "FAQ",                 href: "/support/faq" },
      { label: "Resources",           href: "/support/resources" },
      { label: "Support & Guidance",  href: "/support/guidance" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"
      className="ml-1 shrink-0 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M1 1L5 5L9 1" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
  return (
    <ul
      role="menu"
      aria-hidden={!open}
      className={`absolute top-full left-0 min-w-50 bg-white
                  border border-[#e6eaed] border-t-[3px] border-t-[#F5C400]
                  shadow-lg list-none m-0 py-1 z-50 transition-all duration-150
                  ${open
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"}`}
    >
      {items.map((item) => (
        <li key={item.href} role="none">
          <Link
            href={item.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className="block px-5 py-3 text-[14px] font-semibold text-[#2c3e50]
                       border-b border-[#f3f5f7] last:border-0
                       hover:bg-[#FFFBEC] hover:pl-6 transition-all duration-100"
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
  const [openItem,        setOpenItem]        = useState<string | null>(null);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [visible,         setVisible]         = useState(true);

  const leaveTimer  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const navRef      = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      const diff = curr - lastScrollY.current;
      if (curr < 80)      setVisible(true);
      else if (diff > 8)  { setVisible(false); setOpenItem(null); }
      else if (diff < -8) setVisible(true);
      lastScrollY.current = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenItem(null);
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenItem(null); setMobileOpen(false); }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown",   onKey);
    window.addEventListener("resize",      onResize);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown",   onKey);
      window.removeEventListener("resize",      onResize);
    };
  }, []);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

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
      className="fixed top-0 left-0 right-0 z-50 bg-white
                 border-b border-[#e6eaed]
                 shadow-[0_2px_12px_rgba(0,0,0,0.08)]
                 transition-transform duration-300 font-sans"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Desktop */}
      <div
        className="hidden lg:flex items-center w-full px-10"
        style={{ height: "100px" }}
      >
        <Link
          href="/"
          aria-label="Primeleed home"
          className="shrink-0 flex items-center bg-white"
          style={{ height: "68px", padding: "0" }}
        >
          <Image
            src="/logo.png"
            alt="Primeleed"
            width={170}
            height={52}
            priority
            className="object-contain w-full h-full"
          />
        </Link>

        <div style={{ minWidth: "800px" }} />

        <nav aria-label="Main navigation">
          <ul
            role="menubar"
            className="flex items-center list-none m-0 p-0 gap-0"
            style={{ height: "52px" }}
          >
            {NAV_ITEMS.map((item) => {
              const active   = isActive(item);
              const expanded = openItem === item.label;
              return (
                <li
                  key={item.label}
                  className="relative flex items-stretch h-full"
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
                        setOpenItem((v) => v === item.label ? null : item.label);
                      }
                    }}
                    className={`inline-flex items-center px-5 h-full
                                text-[15px] font-bold text-[#1a2e3b]
                                no-underline whitespace-nowrap cursor-pointer
                                transition-colors duration-150
                                ${active || expanded ? "bg-[#F5C400]" : "hover:bg-[#F5C400]"}`}
                  >
                    {item.label}
                    {item.children && <ChevronIcon open={expanded} />}
                  </Link>
                  {item.children && <Dropdown items={item.children} open={expanded} />}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 ml-4">
          <button
            className="flex items-center justify-center w-10 h-10
                       bg-transparent border-none rounded cursor-pointer
                       text-[#1a2e3b] hover:bg-[#f0f3f5] transition-colors"
            aria-label="Menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              <rect y="0"  width="22" height="2.2" rx="1.1" fill="currentColor" />
              <rect y="7"  width="15" height="2.2" rx="1.1" fill="currentColor" />
              <rect y="14" width="22" height="2.2" rx="1.1" fill="currentColor" />
            </svg>
          </button>
          <button
            className="flex items-center justify-center w-10 h-10
                       bg-transparent border-none rounded cursor-pointer
                       text-[#1a2e3b] hover:bg-[#f0f3f5] transition-colors"
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="2" />
              <path d="M13 13L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile bar */}
      <div
        className="flex lg:hidden items-center justify-between px-5"
        style={{ height: "68px" }}
      >
        <Link href="/" aria-label="Primeleed home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Primeleed"
            width={130}
            height={36}
            priority
            className="object-contain h-8 w-auto"
          />
        </Link>

        <div className="flex items-center gap-1 text-[#1a2e3b]">
          <button
            className="flex items-center justify-center w-9 h-9
                       bg-transparent border-none rounded cursor-pointer
                       hover:bg-[#f0f3f5] transition-colors"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="2" />
              <path d="M13 13L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="flex items-center justify-center w-9 h-9
                       bg-transparent border-none rounded cursor-pointer
                       hover:bg-[#f0f3f5] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2L16 16M16 2L2 16"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <rect y="0"  width="22" height="2.2" rx="1.1" fill="currentColor" />
                <rect y="7"  width="15" height="2.2" rx="1.1" fill="currentColor" />
                <rect y="14" width="22" height="2.2" rx="1.1" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="pl-mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className="lg:hidden bg-white border-t border-[#e6eaed]
                   grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: mobileOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          {NAV_ITEMS.map((item) => {
            const active  = isActive(item);
            const subOpen = mobileAccordion === item.label;
            return (
              <div key={item.label} className="border-b border-[#f0f3f5]">
                {item.children ? (
                  <>
                    <button
                      aria-expanded={subOpen}
                      onClick={() =>
                        setMobileAccordion((v) => v === item.label ? null : item.label)
                      }
                      className={`flex items-center justify-between w-full
                                  px-6 py-4 text-[15px] font-bold text-[#1a2e3b]
                                  bg-transparent border-none cursor-pointer text-left
                                  hover:bg-[#FFFBEC] transition-colors
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
                            className="block px-9 py-4 text-[14px] font-semibold
                                       text-[#3d5166] border-t border-[#eff1f4]
                                       hover:bg-[#FFF5C2] hover:text-[#1a2e3b]
                                       transition-colors"
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
                    className={`flex px-6 py-4 text-[15px] font-bold
                                text-[#1a2e3b] no-underline
                                hover:bg-[#FFFBEC] transition-colors
                                ${active ? "border-l-4 border-l-[#F5C400] bg-[#FFFBEC] pl-5" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
          <div style={{ height: "12px" }} />
        </div>
      </nav>
    </header>
  );
}