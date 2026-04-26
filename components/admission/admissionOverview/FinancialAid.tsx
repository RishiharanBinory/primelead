// components/admission/FinancialAid.tsx

'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function FinancialAid() {
  const imgWrapRef = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imgWrap = imgWrapRef.current
    const text    = textRef.current
    if (!imgWrap || !text) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fa-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(imgWrap)
    observer.observe(text)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`

        /* ── Image wrap — same structure as ApplySection ── */
        .fa-img-wrap {
          position: relative;
          /* padding on LEFT and BOTTOM makes room for yellow accent */
          padding-bottom: 30px;
          padding-left: 30px;
          overflow: visible;
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          align-self: center;
        }
        .fa-img-wrap.fa-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Image — exactly matches ApplySection dimensions */
        .fa-img {
          width: 1000px;
          max-width: 100%;
          height: 560px;
          object-fit: cover;
          object-position: center;
          display: block;
          position: relative;
          z-index: 1;
          transform: scale(1.06);
          transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .fa-img-wrap.fa-visible .fa-img {
          transform: scale(1);
        }

        /* Yellow box — bottom LEFT corner (mirrored from ApplySection) */
        .fa-yellow {
          position: absolute;
          bottom: 10px;
          left: 10px;           /* left side since image is on left */
          width: 250px;
          height: 200px;
          background-color: #FFC501;
          z-index: 0;
          opacity: 0;
          transform: translate(-10px, 10px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .fa-img-wrap.fa-visible .fa-yellow {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* Text slides in from right */
        .fa-text-anim {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fa-text-anim.fa-visible {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .fa-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .fa-img {
            width: 100%;
            height: 280px;
          }
          .fa-yellow {
            width: 100px;
            height: 80px;
          }
        }
      `}</style>

      <section style={{ padding: '80px 60px', backgroundColor: '#ffffff' }}>
        <div
          className="fa-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',  /* image column wider — mirrors ApplySection */
            gap: '80px',
            alignItems: 'center',
          }}
        >

          {/* Left — image + yellow accent on bottom-left */}
          <div className="fa-img-wrap" ref={imgWrapRef}>
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80"
              alt="University campus"
              className="fa-img"
            />
            <div className="fa-yellow" />
          </div>

          {/* Right — text slides in from right */}
          <div
            className="fa-text-anim"
            ref={textRef}
            style={{ padding: '60px 10px 60px 10px' }}
          >
            <h2
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '45px',
                fontWeight: '900',
                lineHeight: '1.7em',
                color: '#292929',
                marginBottom: '16px',
              }}
            >
              Financial Aid
            </h2>

            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '700',
                lineHeight: '1.4em',
                color: '#292929',
                marginBottom: '20px',
              }}
            >
              Secure Your Student Funding Up To £60,000 For Your Desired Course
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(14px, 1.8vw, 17px)',
                fontWeight: '600',
                lineHeight: '1.7em',
                color: '#545454',
                marginBottom: '32px',
              }}
            >
              Primeleed supports students in their pursuit of higher education
              by partnering with universities across the UK to provide funding
              assistance. Through these collaborations, we bridge the financial
              gap, making education more accessible and empowering students to
              achieve their academic aspirations.
            </p>

            <Link
              href="/financial-aid"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '18px',
                fontWeight: '600',
                color: '#149AB5',
                textDecoration: 'none',
                borderBottom: '2px solid #149AB5',
                paddingBottom: '2px',
              }}
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}