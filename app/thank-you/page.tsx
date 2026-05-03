import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Primeleed',
  description: 'Thank you for contacting Primeleed. We will get back to you shortly.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-20"
      style={{ fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif" }}
    >
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(26,143,168,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(26,143,168,0.04) 0%, transparent 50%),
            #ffffff
          `,
        }}
      />

      <div className="w-full max-w-2xl mx-auto text-center">

        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="inline-block">
            <img
              src="/logo.png"
              alt="Primeleed"
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>
        </div>

        {/* Card */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e8edf2',
            borderRadius: '24px',
            boxShadow: '0 8px 60px rgba(20, 60, 100, 0.08)',
            padding: '60px 48px',
          }}
        >
          {/* Success Icon */}
          <div
            className="mx-auto mb-8 flex items-center justify-center"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1a8fa8 0%, #0f6e82 100%)',
              boxShadow: '0 8px 32px rgba(26, 143, 168, 0.30)',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18L15 25L28 11"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#0f1f2e',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Thank You for Reaching Out!
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: '17px',
              color: '#6b7280',
              lineHeight: 1.7,
              marginBottom: '8px',
              maxWidth: '440px',
              margin: '0 auto 8px',
            }}
          >
            We&apos;ve received your enquiry and one of our advisors
            will be in touch with you within{' '}
            <span style={{ color: '#1a8fa8', fontWeight: 600 }}>24 hours</span>.
          </p>

          <p
            style={{
              fontSize: '15px',
              color: '#9ca3af',
              marginBottom: '40px',
              marginTop: '12px',
            }}
          >
            In the meantime, feel free to explore more about our programmes.
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: '#f0f4f7',
              margin: '0 0 40px',
            }}
          />

          {/* What happens next */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40px text-left"
            style={{ marginBottom: '40px' }}
          >
            {[
              {
                step: '01',
                title: 'Review',
                desc: 'Our team reviews your enquiry carefully.',
              },
              {
                step: '02',
                title: 'Contact',
                desc: 'An advisor reaches out within 24 hours.',
              },
              {
                step: '03',
                title: 'Guidance',
                desc: 'We guide you through your next steps.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: '#f8fafc',
                  borderRadius: '14px',
                  padding: '20px',
                  border: '1px solid #f0f4f7',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#1a8fa8',
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                  }}
                >
                  STEP {item.step}
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#0f1f2e',
                    marginBottom: '4px',
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#1a8fa8',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/academics/overview"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl transition-all duration-200"
              style={{
                backgroundColor: '#f0f8fb',
                color: '#1a8fa8',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                border: '1px solid #d0edf3',
              }}
            >
              Explore Courses →
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <p
          style={{
            fontSize: '13px',
            color: '#9ca3af',
            marginTop: '28px',
          }}
        >
          Questions? Email us at{' '}
          <a
            href="mailto:info@primeleed.com"
            style={{ color: '#1a8fa8', fontWeight: 500 }}
          >
            info@primeleed.com
          </a>
        </p>
      </div>
    </main>
  )
}