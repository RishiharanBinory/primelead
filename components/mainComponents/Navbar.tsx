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

const BLOG_POSTS = [
  {
    title: "How to Organise Your Studies for Success",
    date: "December 29, 2020",
    href: "/blog/organise-studies",
  },
  {
    title: "4th Workshop Advanced Materials",
    date: "December 29, 2020",
    href: "/blog/workshop-advanced-materials",
  },
];

const DIRECTORY_LINKS = [
  { label: "Events Directory", href: "/events" },
  { label: "Faculty Directory", href: "/faculty" },
  { label: "Detailed Plans", href: "/plans" },
];

const CTA_BUTTONS = [
  { label: "Request Info", href: "/support/request-info" },
  { label: "Visit", href: "/contact" },
  { label: "Apply", href: "/admission/form" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── KEY CHANGE: Dropdown now receives pathname and highlights the active child ──
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
      className={`absolute top-full left-0 min-w-50 bg-white
                  border border-[#e6eaed] border-t-[3px] border-t-[#F5C400]
                  shadow-lg list-none m-0 py-1 z-200
                  transition-all duration-150
                  ${
                    open
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
    >
      {items.map((item) => {
        // Exact match for child pages — prevents /academics matching /academics/overview
        const isActiveChild = pathname === item.href;

        return (
          <li key={item.href} role="none">
            <Link
              href={item.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onClick={onClose}
              className="block px-5 py-3 text-[14px] font-semibold
                         border-b border-[#f3f5f7] last:border-0
                         transition-all duration-100"
              style={{
                // Active child → #149AB5 bg + white text
                // Inactive → normal styling with hover
                backgroundColor: isActiveChild ? "#149AB5" : "transparent",
                color: isActiveChild ? "#ffffff" : "#2c3e50",
                paddingLeft: isActiveChild ? "20px" : undefined,
              }}
              onMouseEnter={(e) => {
                if (!isActiveChild) {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#FFFBEC";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "24px";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActiveChild) {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "";
                }
              }}
            >
              {/* Active child gets a small indicator dot */}
              <span className="flex items-center gap-2">{item.label}</span>
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
      className="absolute top-full left-0 right-0 z-100 bg-white shadow-xl transition-all duration-300 ease-in-out"
      style={{
        maxHeight: open ? "900px" : "0px",
        opacity: open ? 1 : 0,
        overflow: "hidden",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.1fr] gap-0"
        style={{ minHeight: "500px" }}
      >
        <div className="pl-25 pr-25 pt-14 h-full">
          <h3 className="font-black text-[#1a2e3b] text-[26px] mb-13">
            Giving
          </h3>
          <p className="text-[18px] text-[#4b5563] leading-relaxed mb-6">
            All donations to the Student Emergency Fund will directly support
            our students as they adapt to changing circumstances.
          </p>
          <Link
            href="/giving"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[#2ab4c0] font-semibold text-[16px] hover:text-[#F5C400] transition-opacity"
          >
            Visit Page →
          </Link>
        </div>

        <div className="pl-25 pr-25 pt-14 h-full">
          <h3 className="font-black text-[#1a2e3b] text-[26px] mb-13">Blog</h3>
          <div className="flex flex-col gap-6">
            {BLOG_POSTS.map((post, i) => (
              <div key={i}>
                <Link
                  href={post.href}
                  onClick={onClose}
                  className="block text-[18px] font-semibold text-[#1a2e3b] hover:text-[#2ab4c0] transition-colors mb-1 leading-snug"
                >
                  {post.title}
                </Link>
                <p className="text-[14px] text-[#9ca3af]">{post.date}</p>
                {i < BLOG_POSTS.length - 1 && (
                  <div className="border-b border-[#f0f3f5] mt-10" />
                )}
              </div>
            ))}
          </div>
          <Link
            href="/blog"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[#2ab4c0] font-semibold text-[16px] hover:text-[#F5C400] transition-opacity mt-8"
          >
            View Blog →
          </Link>
        </div>

        <div className="pl-25 pr-25 pt-14 h-full">
          <h3 className="font-black mb-6 text-[#1a2e3b] text-[26px]">
            Directory
          </h3>
          <div className="flex flex-col mt-2">
            {DIRECTORY_LINKS.map((link, i) => (
              <div key={i}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-6 text-[16px] font-semibold text-[#1a2e3b] hover:text-[#2ab4c0] transition-colors"
                >
                  {link.label}
                </Link>
                {i < DIRECTORY_LINKS.length - 1 && (
                  <div className="border-b border-[#f0f3f5]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "rgb(170, 212, 236)", minHeight: "500px" }}
        >
          <div className="p-10 pr-0 relative z-10" style={{ maxWidth: "50%" }}>
            <h3 className="font-black mb-4 text-[#1a2e3b] text-[26px]">
              Alumni
            </h3>
            <div
              className="text-[#1a2e3b] font-black mb-3"
              style={{ fontSize: "40px", lineHeight: 1 }}
            >
              ❝
            </div>
            <p className="text-[16px] font-bold text-[#1a2e3b] leading-snug mb-4">
              Everything that I learned at Prime Leed really helped put me above
              the competition in the field of business management.
            </p>
            <p className="text-[17px] font-semibold text-[#1a2e3b] mb-0.5">
              Alyssa Watson
            </p>
            <p className="text-[16px] text-[#4b5563] mb-6">
              BA Business Management
            </p>
            <Link
              href="/alumni"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-[#2ab4c0] font-semibold text-[18px] hover:opacity-70 transition-opacity"
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

      <div className="bg-[#fefefe] border-t border-[#dde0e4] py-12 px-0">
        <div
          className="grid grid-cols-3 gap-0 mx-auto pl-10px pr-10px"
          style={{ maxWidth: "1100px" }}
        >
          {CTA_BUTTONS.map((btn) => (
            <Link
              key={btn.href}
              href={btn.href}
              onClick={onClose}
              className="flex items-center justify-center bg-[#1a2e3b] text-white text-[19px] font-bold hover:bg-[#2ab4c0] transition-colors duration-200 mx-2"
              style={{ height: "60px", width: "300px" }}
            >
              {btn.label}
            </Link>
          ))}
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
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
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

  const isActive = (item: NavItem) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e6eaed] font-sans"
      style={{
        transform: navVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* ── Desktop bar ── */}
      <div
        className="hidden lg:flex items-center justify-between w-full px-10 relative"
        style={{ height: "100px" }}
      >
        <Link
          href="/"
          aria-label="Primeleed home"
          className="shrink-0 flex items-center"
          style={{ height: "68px" }}
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

        <nav aria-label="Main navigation" className="flex-1 flex justify-end">
          <ul
            role="menubar"
            className="flex items-center list-none m-0 p-0 gap-0"
            style={{ height: "52px" }}
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              const expanded = openItem === item.label;
              return (
                <li
                  key={item.label}
                  className={`relative flex items-stretch h-full ${expanded ? "z-200" : "z-auto"}`}
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
                      } else {
                        closeAll();
                      }
                    }}
                    className={`inline-flex items-center px-4 xl:px-5 h-full
                                text-[14px] xl:text-[15px] font-bold text-[#1a2e3b]
                                no-underline whitespace-nowrap cursor-pointer
                                transition-colors duration-150
                                ${active || expanded ? "bg-[#F5C400]" : "hover:bg-[#F5C400]"}`}
                  >
                    {item.label}
                    {item.children && <ChevronIcon open={expanded} />}
                  </Link>

                  {/* ── Pass pathname so Dropdown can highlight active child ── */}
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

        <div className="flex items-center gap-1 ml-3 z-200">
          <button
            onClick={() => setMegaOpen((v) => !v)}
            className="flex items-center justify-center w-10 h-10 bg-transparent border-none rounded cursor-pointer text-[#1a2e3b] hover:bg-[#f0f3f5] transition-colors"
            aria-label="Open mega menu"
            aria-expanded={megaOpen}
          >
            {megaOpen ? (
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
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  y="0"
                  width="22"
                  height="2.2"
                  rx="1.1"
                  fill="currentColor"
                />
                <rect
                  y="7"
                  width="15"
                  height="2.2"
                  rx="1.1"
                  fill="currentColor"
                />
                <rect
                  y="14"
                  width="22"
                  height="2.2"
                  rx="1.1"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 bg-transparent border-none rounded cursor-pointer text-[#1a2e3b] hover:bg-[#f0f3f5] transition-colors"
            aria-label="Search"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="5.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M13 13L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <MegaMenu open={megaOpen} onClose={closeAll} />
      </div>

      {/* ── Mobile bar ── */}
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
            className="flex items-center justify-center w-9 h-9 bg-transparent border-none rounded cursor-pointer hover:bg-[#f0f3f5] transition-colors"
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="5.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M13 13L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            className="flex items-center justify-center w-9 h-9 bg-transparent border-none rounded cursor-pointer hover:bg-[#f0f3f5] transition-colors"
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
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  y="0"
                  width="22"
                  height="2.2"
                  rx="1.1"
                  fill="currentColor"
                />
                <rect
                  y="7"
                  width="15"
                  height="2.2"
                  rx="1.1"
                  fill="currentColor"
                />
                <rect
                  y="14"
                  width="22"
                  height="2.2"
                  rx="1.1"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile nav menu ── */}
      <nav
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
                      className={`flex items-center justify-between w-full px-6 py-4
                                  text-[15px] font-bold text-[#1a2e3b] bg-transparent
                                  border-none cursor-pointer text-left hover:bg-[#FFFBEC] transition-colors
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
                        {item.children.map((child) => {
                          // ── Active child in mobile too ──
                          const isActiveChild = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 px-9 py-4 text-[14px] font-semibold
                                         border-t border-[#eff1f4] transition-colors"
                              style={{
                                backgroundColor: isActiveChild
                                  ? "#149AB5"
                                  : "transparent",
                                color: isActiveChild ? "#ffffff" : "#3d5166",
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
                    className={`flex px-6 py-4 text-[15px] font-bold text-[#1a2e3b]
                                no-underline hover:bg-[#FFFBEC] transition-colors
                                ${active ? "border-l-4 border-l-[#F5C400] bg-[#FFFBEC] pl-5" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="hidden sm:flex flex-col gap-3 px-6 py-6 bg-[#f0f2f4] border-t border-[#dde0e4]">
            {CTA_BUTTONS.map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-[#1a2e3b] text-white text-[15px] font-bold py-4 hover:bg-[#2ab4c0] transition-colors duration-200"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
