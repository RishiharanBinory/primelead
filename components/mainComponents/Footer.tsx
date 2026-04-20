'use client'
import React from 'react'
import {
  ArrowUp,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  Facebook as FacebookIcon,
} from 'lucide-react'
export function Footer() {
  const currentYear = new Date().getFullYear()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className="bg-[#105E74] text-white relative overflow-hidden">
      {/* SVG Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F8FAFC"
          ></path>
        </svg>
      </div>

      {/* Subtle Dot Grid Background */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-30 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-10">
          <div className="md:col-span-2">
            <a
              href="#"
              className="text-3xl font-serif font-bold text-white tracking-tight block mb-6"
            >
              Primeleed<span className="text-prime-blue">.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Expert guidance for students looking to study in London. From
              university applications to securing Student Finance, we support
              you end-to-end.
            </p>

            {/* Social Links & Newsletter */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-prime-blue transition-colors flex items-center justify-center text-white"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-prime-blue transition-colors flex items-center justify-center text-white"
                >
                  <TwitterIcon size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-prime-blue transition-colors flex items-center justify-center text-white"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-prime-blue transition-colors flex items-center justify-center text-white"
                >
                  <FacebookIcon size={16} />
                </a>
              </div>
              <form
                className="flex items-center max-w-xs"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2.5 text-sm text-white outline-none focus:border-prime-blue transition-colors placeholder-slate-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-prime-blue hover:bg-sky-400 transition-colors rounded-r-lg px-4 py-2.5 text-sm font-bold text-white whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-prime-blue transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-prime-blue rounded-full"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-prime-blue transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-prime-blue rounded-full"></span>
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#finance"
                  className="hover:text-prime-blue transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-prime-blue rounded-full"></span>
                  Student Finance
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-prime-blue transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-prime-blue rounded-full"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-prime-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-prime-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-prime-blue transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-slate-500">
          <p>&copy; {currentYear} Primeleed. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              Designed for students studying in London
              <span className="w-2 h-2 rounded-full bg-prime-blue inline-block"></span>
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-prime-blue transition-colors text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
