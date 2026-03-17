"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const LOGOS = [
  { id: "c1", src: "/c1_logo.png", alt: "Partner 1", href: "https://www.rcl.ac.uk/" },
  { id: "c2", src: "/c2_logo.png", alt: "Partner 2", href: "https://www.qa.com" },
  { id: "c3", src: "/c3_logo.png", alt: "Partner 3", href: "https://qahighereducation.com/partner-institutions/london-metropolitan-university/" },
  { id: "c4", src: "/c4_logo.png", alt: "Partner 4", href: "https://qahighereducation.com/partner-institutions/northumbria-university/" },
  { id: "c5", src: "/c5_logo.png", alt: "Partner 5", href: "https://www.solent.ac.uk/" },
  { id: "c6", src: "/c6_logo.png", alt: "Partner 6", href: "https://qahighereducation.com/partner-institutions/swansea-university/" },
  { id: "c7", src: "/c7_logo.png", alt: "Partner 7", href: "https://qa.ulster.ac.uk/campuses/manchester/" },
  { id: "c8", src: "/c8_logo.png", alt: "Partner 8", href: "https://www.rcl.ac.uk/" },
  { id: "c9", src: "/c9_logo.png", alt: "Partner 9", href: "https://www.northampton.ac.uk/" },
  { id: "c10", src: "/c10_logo.png", alt: "Partner 10", href: "https://www.aru.ac.uk/" },
  { id: "c11", src: "/c11_logo.png", alt: "Partner 11", href: "https://www.bolton.ac.ae/" },
  { id: "c12", src: "/c12_logo.png", alt: "Partner 12", href: "https://www.leeds.ac.uk" },
];

const AUTO_INTERVAL = 3000;
const DRAG_THRESHOLD = 50;

function getItemsPerView(): number {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 480) return 1;
  if (window.innerWidth < 768) return 2;
  if (window.innerWidth < 1024) return 3;
  return 4;
}

export default function LogoCarousel() {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [current, setCurrent] = useState(0);

  const currentRef = useRef(0);
  const itemsPerViewRef = useRef(4);
  const slotPxRef = useRef(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number>(0);
  const dragged = useRef<boolean>(false);

  useEffect(() => { currentRef.current = current; }, [current]);
  useEffect(() => { itemsPerViewRef.current = itemsPerView; }, [itemsPerView]);

  const clonedLogos = [
    ...LOGOS.slice(-itemsPerView).map((l) => ({ ...l, id: `clone-start-${l.id}` })),
    ...LOGOS,
    ...LOGOS.slice(0, itemsPerView).map((l) => ({ ...l, id: `clone-end-${l.id}` })),
  ];

  const slotPx = trackWidth > 0 ? trackWidth / itemsPerView : 0;
  useEffect(() => { slotPxRef.current = slotPx; }, [slotPx]);

  const realIndex = current + itemsPerView;
  const baseOffset = -(realIndex * slotPx);
  const totalOffset = baseOffset + (isDragging ? dragOffset : 0);

  useEffect(() => {
    const update = () => {
      const next = getItemsPerView();
      setItemsPerView(next);
      itemsPerViewRef.current = next;
      setCurrent(0);
      currentRef.current = 0;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    setTrackWidth(el.offsetWidth);
    const ro = new ResizeObserver(() => setTrackWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (!innerRef.current) return;

    const c = currentRef.current;
    const ipv = itemsPerViewRef.current;
    const slot = slotPxRef.current;
    const maxReal = LOGOS.length - ipv;

    if (c < 0) {
      const jump = LOGOS.length + c;
      currentRef.current = jump;
      setCurrent(jump);
      innerRef.current.style.transition = "none";
      innerRef.current.style.transform = `translateX(${-((jump + ipv) * slot)}px)`;
    } else if (c > maxReal) {
      const jump = c - LOGOS.length;
      currentRef.current = jump;
      setCurrent(jump);
      innerRef.current.style.transition = "none";
      innerRef.current.style.transform = `translateX(${-((jump + ipv) * slot)}px)`;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c + 1;
        currentRef.current = next;
        return next;
      });
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback((index: number) => {
    currentRef.current = index;
    setCurrent(index);
    startTimer();
  }, [startTimer]);

  const prev = useCallback(() => goTo(currentRef.current - 1), [goTo]);
  const next = useCallback(() => goTo(currentRef.current + 1), [goTo]);

  const onDragStart = useCallback((clientX: number) => {
    clearInterval(timerRef.current);
    dragStart.current = clientX;
    dragged.current = false;
    setIsDragging(true);
    setDragOffset(0);
  }, []);

  const onDragMove = useCallback((clientX: number) => {
    setIsDragging((dragging) => {
      if (!dragging) return dragging;
      const delta = clientX - dragStart.current;
      if (Math.abs(delta) > 4) dragged.current = true;
      setDragOffset(delta);
      return dragging;
    });
  }, []);

  const onDragEnd = useCallback((clientX: number) => {
    setIsDragging((dragging) => {
      if (!dragging) return dragging;
      const delta = clientX - dragStart.current;
      setDragOffset(0);
      if (Math.abs(delta) >= DRAG_THRESHOLD) {
        setCurrent((c) => {
          const next = delta < 0 ? c + 1 : c - 1;
          currentRef.current = next;
          return next;
        });
      }
      startTimer();
      return false;
    });
  }, [startTimer]);

  const onMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX);
  const onMouseUp = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const onMouseLeave = () => {
    if (isDragging) { setIsDragging(false); setDragOffset(0); startTimer(); }
  };
  const onTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => onDragEnd(e.changedTouches[0].clientX);
  const onLinkClick = (e: React.MouseEvent) => {
    if (Math.abs(dragOffset) > 5) e.preventDefault();
  };

  const totalSlides = LOGOS.length - itemsPerView + 1;
  const dotIndex = ((current % LOGOS.length) + LOGOS.length) % LOGOS.length;

  return (
    <section className="w-full bg-white py-10 md:py-13">
      <div className="max-w-7xl mx-auto px-4 md:px-7">
        <div
          className="flex items-center"
          style={{ gap: "5px" }}
          onMouseLeave={onMouseLeave}
        >
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 flex items-center justify-center text-[#999] hover:text-[#1a2e3b] transition-colors duration-200"
            style={{ width: "28px", height: "28px" }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="flex-1 overflow-hidden"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={innerRef}
              className="flex"
              style={{
                transform: `translateX(${totalOffset}px)`,
                transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
                willChange: "transform",
                userSelect: "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {clonedLogos.map((logo) => (
                <div
                  key={logo.id}
                  style={{ width: `${slotPx}px`, flexShrink: 0 }}
                  className="flex items-center justify-center px-2 md:px-4"
                >
                  <Link
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onLinkClick}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-full opacity-80 hover:opacity-100 transition-opacity duration-200"
                    style={{ height: "140px", pointerEvents: "auto" }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={120}
                      draggable={false}
                      className="object-contain w-auto select-none"
                      style={{ maxHeight: "140px" }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 flex items-center justify-center text-[#999] hover:text-[#1a2e3b] transition-colors duration-200"
            style={{ width: "28px", height: "28px" }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M1 1l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 md:mt-7">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: dotIndex === i ? "#1a2e3b" : "#c5c9ce",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transform: dotIndex === i ? "scale(1.2)" : "scale(1)",
                transition: "background-color 0.2s, transform 0.2s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}