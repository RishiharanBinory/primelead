"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const FONT = { fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif" };

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
      { label: "Consultancy", href: "/academics/education-consultancy" },
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
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  { label: "Contact", href: "/contact" },
];

const BLOG_POSTS = [
  {
    title: "How to Organise Your Studies for Success",
    date: "December 29, 2020",
    // href: "/blog/how-to-organise-your-studies-for-success",
    href: "#",
  },
  {
    title: "4th Workshop Advanced Materials",
    date: "December 29, 2020",
    // href: "/blog/4th-workshop-advanced-materials",
    href: "#",
  },
];

const DIRECTORY_LINKS = [
  // { label: "Events Directory", href: "/events" },
  // { label: "Faculty Directory", href: "/faculty" },
  // { label: "Detailed Plans", href: "/plans" },
];

const CTA_BUTTONS: { label: string; href: string }[] = [];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className="ml-1.5 shrink-0 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dropdown({
  items,
  open,
  onClose,
  pathname,
}: {
  items: DropdownItem[];
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <ul
      role="menu"
      aria-hidden={!open}
      className="absolute list-none m-0 p-0 z-[200]"
      style={{
        top: "calc(100% + 10px)",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "210px",
        background: "#ffffff",
        border: "1px solid #e8edf2",
        borderRadius: "14px",
        boxShadow: "0 8px 40px rgba(20, 60, 100, 0.10)",
        padding: "6px",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.18s ease",
        ...FONT,
      }}
    >
      {items.map((item) => {
        const isActiveChild = pathname === item.href;
        return (
          <li key={item.href} role="none">
            <Link
              href={item.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-150"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                backgroundColor: isActiveChild ? "#1a8fa8" : "transparent",
                color: isActiveChild ? "#ffffff" : "#374151",
                ...FONT,
              }}
              onMouseEnter={(e) => {
                if (!isActiveChild) {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#f0f8fb";
                  (e.currentTarget as HTMLElement).style.color = "#1a8fa8";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveChild) {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#374151";
                }
              }}
            >
              {isActiveChild && (
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              )}
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-0 right-0 z-[100] bg-white transition-all duration-300 ease-in-out"
      style={{
        maxHeight: open ? "900px" : "0px",
        opacity: open ? 1 : 0,
        overflow: "hidden",
        pointerEvents: open ? "auto" : "none",
        borderTop: "1px solid #e8edf2",
        boxShadow: "0 20px 60px rgba(20, 60, 100, 0.10)",
        ...FONT,
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.1fr] gap-0"
        style={{ minHeight: "500px" }}
      >
        <div className="pl-16 pr-10 pt-14 h-full">
          <h3 className="font-black text-[#0f1f2e] text-[24px] mb-5">Giving</h3>
          <p
            style={{
              fontSize: "15px",
              color: "#6b7280",
              lineHeight: "1.7",
              marginBottom: "24px",
            }}
          >
            All donations to the Student Emergency Fund will directly support
            our students as they adapt to changing circumstances.
          </p>
        </div>
        <div className="pl-10 pr-10 pt-14 h-full">
          <h3 className="font-black text-[#0f1f2e] text-[24px] mb-5">Blog</h3>
          <div className="flex flex-col gap-6">
            {BLOG_POSTS.map((post, i) => (
              <div key={i}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#0f1f2e", marginBottom: "4px", lineHeight: "1.4" }}>
                  {post.title}
                </p>
                <p style={{ fontSize: "13px", color: "#9ca3af" }}>
                  {post.date}
                </p>
                {i < BLOG_POSTS.length - 1 && (
                  <div className="border-b border-[#f0f3f5] mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pl-10 pr-10 pt-14 h-full">
          <h3 className="font-black text-[#0f1f2e] text-[24px] mb-5">
            Directory
          </h3>
          <div className="flex flex-col mt-2">
            <p style={{ fontSize: "14px", color: "#9ca3af" }}>Coming soon.</p>
          </div>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "#c8e8f0", minHeight: "500px" }}
        >
          <div className="p-10 pr-0 relative z-10" style={{ maxWidth: "55%" }}>
            <h3 className="font-black mb-4 text-[#0f1f2e] text-[24px]">
              Alumni
            </h3>
            <div
              className="text-[#0f1f2e] font-black mb-3"
              style={{ fontSize: "36px", lineHeight: 1 }}
            >
              ❝
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#0f1f2e",
                lineHeight: "1.5",
                marginBottom: "16px",
              }}
            >
              Everything that I learned at Primeleed really helped put me above
              the competition in the field of business management.
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0f1f2e",
                marginBottom: "2px",
              }}
            >
              Alyssa Watson
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#4b5563",
                marginBottom: "24px",
              }}
            >
              BA Business Management
            </p>
            <Link
              href="/alumni"
              onClick={onClose}
              style={{ color: "#1a8fa8", fontWeight: 600, fontSize: "15px" }}
              className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Our Alumni →
            </Link>
          </div>
          <div
            className="absolute top-0 right-0 bottom-0"
            style={{ width: "42%" }}
          >
            <Image
              src="/alumini.png"
              alt="Alumni student"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (currentY <= 0) {
        setNavVisible(true);
        lastScrollY.current = 0;
        return;
      }
      if (currentY > lastScrollY.current) {
        setNavVisible(false);
        setOpenItem(null);
        setMegaOpen(false);
        setMobileOpen(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenItem(null);
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenItem(null);
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const closeAll = useCallback(() => {
    setOpenItem(null);
    setMegaOpen(false);
    setMobileOpen(false);
  }, []);

  const enter = useCallback((label: string) => {
    clearTimeout(leaveTimer.current);
    setOpenItem(label);
  }, []);

  const leave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpenItem(null), 140);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        borderBottom: scrolled ? "1px solid #e8edf2" : "1px solid #f0f4f7",
        boxShadow: scrolled ? "0 1px 20px rgba(20, 60, 100, 0.07)" : "none",
        transform: navVisible ? "translateY(0)" : "translateY(-100%)",
        transition:
          "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
        ...FONT,
      }}
    >
      {/* ── Desktop bar ── */}
      <div
        className="hidden lg:flex items-center justify-between w-full relative"
        style={{ height: "80px", padding: "0 48px" }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Primeleed home"
          className="shrink-0 flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Primeleed"
            width={200}
            height={54}
            priority
            className="object-contain w-auto"
            style={{ height: "56px" }}
          />
        </Link>

        {/* Nav — centered */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <ul
            role="menubar"
            className="flex items-center list-none m-0 p-0 gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              const expanded = openItem === item.label;
              const hovered = hoveredItem === item.label;
              const showActive = active || expanded;
              const showHover = hovered && !active && !expanded;

              return (
                <li
                  key={item.label}
                  className={`relative flex items-center ${expanded ? "z-[200]" : "z-auto"}`}
                  onMouseEnter={() => {
                    if (item.children) enter(item.label);
                    setHoveredItem(item.label);
                  }}
                  onMouseLeave={() => {
                    if (item.children) leave();
                    setHoveredItem(null);
                  }}
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
                      } else {
                        closeAll();
                      }
                    }}
                    className="inline-flex items-center px-4 py-2.5 rounded-xl
                               no-underline whitespace-nowrap cursor-pointer
                               transition-all duration-150 relative"
                    style={{
                      fontSize: "15.5px",
                      fontWeight: showActive ? 600 : 500,
                      color: showActive
                        ? "#1a8fa8"
                        : showHover
                          ? "#1a8fa8"
                          : "#374151",
                      backgroundColor: showActive
                        ? "transparent"
                        : showHover
                          ? "#f0f8fb"
                          : "transparent",
                      letterSpacing: "-0.01em",
                      ...FONT,
                    }}
                  >
                    {item.label}
                    {item.children && <ChevronIcon open={expanded} />}
                    {showActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                        style={{ backgroundColor: "#1a8fa8" }}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <Dropdown
                      items={item.children}
                      open={expanded}
                      onClose={closeAll}
                      pathname={pathname}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 z-[200]">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-xl text-white transition-all duration-200 hover:bg-[#0f6e82]"
            style={{
              backgroundColor: "#1a8fa8",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              ...FONT,
            }}
          >
            Apply Now
          </Link>
        </div>

        <MegaMenu open={megaOpen} onClose={closeAll} />
      </div>

      {/* ── Mobile bar ── */}
      <div
        className="flex lg:hidden items-center justify-between px-5 border-b border-[#f0f4f7]"
        style={{ height: "68px" }}
      >
        <Link href="/" aria-label="Primeleed home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Primeleed"
            width={140}
            height={42}
            priority
            className="object-contain w-auto"
            style={{ height: "38px" }}
          />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-lg text-white"
            style={{
              backgroundColor: "#1a8fa8",
              fontSize: "13.5px",
              fontWeight: 600,
              ...FONT,
            }}
          >
            Apply Now
          </Link>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer border border-[#e2e8ed] transition-colors"
            style={{ backgroundColor: "transparent", color: "#374151" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 2L16 16M16 2L2 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="17" height="13" viewBox="0 0 22 16" fill="none">
                <rect y="0" width="22" height="2.2" rx="1.1" fill="currentColor" />
                <rect y="7" width="14" height="2.2" rx="1.1" fill="currentColor" />
                <rect y="14" width="22" height="2.2" rx="1.1" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile nav menu ── */}
      <nav
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className="lg:hidden bg-white grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: mobileOpen ? "1fr" : "0fr", ...FONT }}
      >
        <div className="overflow-hidden">
          <div className="py-2 px-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              const subOpen = mobileAccordion === item.label;
              return (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        aria-expanded={subOpen}
                        onClick={() =>
                          setMobileAccordion((v) =>
                            v === item.label ? null : item.label,
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3.5 mb-0.5
                                   bg-transparent border-none cursor-pointer text-left rounded-xl transition-colors"
                        style={{
                          fontSize: "15.5px",
                          fontWeight: 500,
                          color: active ? "#1a8fa8" : "#374151",
                          backgroundColor: active ? "#f0f8fb" : "transparent",
                          ...FONT,
                        }}
                      >
                        {item.label}
                        <ChevronIcon open={subOpen} />
                      </button>
                      <div
                        className="grid transition-[grid-template-rows] duration-200"
                        style={{ gridTemplateRows: subOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden pl-4">
                          {item.children.map((child) => {
                            const isActiveChild = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 px-4 py-3 mb-0.5 rounded-xl transition-colors"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: 500,
                                  backgroundColor: isActiveChild
                                    ? "#1a8fa8"
                                    : "transparent",
                                  color: isActiveChild ? "#ffffff" : "#6b7280",
                                  ...FONT,
                                }}
                              >
                                {isActiveChild && (
                                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white" />
                                )}
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="flex px-4 py-3.5 mb-0.5 no-underline rounded-xl transition-colors"
                      style={{
                        fontSize: "15.5px",
                        fontWeight: 500,
                        color: active ? "#1a8fa8" : "#374151",
                        backgroundColor: active ? "#f0f8fb" : "transparent",
                        ...FONT,
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}