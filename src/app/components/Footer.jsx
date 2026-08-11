import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F7F7FF] pt-12 pb-8 px-6 md:px-8 font-sans overflow-hidden">
      {/* Decorative Background Shapes */}
      {/* Top Right Pink Asterisk */}
      <div className="md:hidden absolute top-32 right-10 translate-x-1/4 -translate-y-1/4 pointer-events-none z-0">
        <svg
          width="159"
          height="334"
          viewBox="0 0 159 334"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M218.613 104.69L298.628 62.709L327.389 117.531L247.374 159.511L333.637 186.406L315.211 245.508L228.948 218.613L270.927 298.627L216.106 327.389L174.127 247.374L147.232 333.637L88.1297 315.211L115.025 228.947L35.0089 270.927L6.24851 216.106L86.263 174.127L-4.30278e-05 147.232L18.4267 88.1296L104.69 115.025L62.7095 35.0084L117.531 6.24837L159.511 86.2629L186.406 -0.000185655L245.508 18.4266L218.613 104.69Z"
            fill="#FF6B35"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Bottom Right Purple Sparkles */}
      <div className="md:hidden absolute bottom-22 -right-10 translate-x-1/4 translate-y-1/4 pointer-events-none z-0 flex flex-col gap-2">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="#EBE7FF"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-10 right-10"
        >
          <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
        </svg>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="#EBE7FF"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-2 right-2"
        >
          <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-4 lg:gap-16 mb-12">
          {/* Column 1: Brand, Description, Socials */}
          <div className="col-span-2 lg:col-span-5 flex flex-col pr-0 lg:pr-8">
            {/* Logo Area */}
            <div className="flex items-center cursor-pointer mb-1">
              <div className="flex flex-col leading-[1.1] ">
                <div className="flex flex-col leading-none">
                  <img
                    src="/logo1.png"
                    className="h-18 md:h-14 lg:h-18 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#6A6A6A] text-[16px] md:text-[16px] leading-tight tracking-tighter font-medium mb-6 max-w-[90%] md:max-w-sm">
              Empowering you to build a stronger body <br />
              ,a sharper mind, and a healthier lifestyle. <br />
              Together, we achieve more.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/digitalsahaay"
                className="w-11 h-11 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center text-[#000000] hover:text-[#CF1213] hover:border-[#CF1213] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/digital_sahaay"
                className="w-11 h-11 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center text-[#000000] hover:text-[#CF1213] hover:border-[#CF1213] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/digital-sahaay/"
                className="w-11 h-11 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center text-[#000000] hover:text-[#CF1213] hover:border-[#CF1213] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1 8h4v13H1V8zm7 0h3.6v1.8h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H8V8z" />
                </svg>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@DigitalSahaay"
                className="w-11 h-11 rounded-full border-[1.5px] border-[#000000] flex items-center justify-center text-[#000000] hover:text-[#CF1213] hover:border-[#CF1213] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services (Now takes 1 column on mobile, side-by-side with Company) */}
          {/* <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left leading-tight tracking-tighterer">
            <h4 className="text-[16px] md:text-[18px] font-semibold text-[#222222] mb-3">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#web"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#seo"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#smm"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="#performance"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Performance Marketing
                </a>
              </li>
              <li>
                <a
                  href="#branding"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Branding & Design
                </a>
              </li>
            </ul>
          </div> */}

          <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left leading-tight tracking-tighterer">
            <h4 className="text-[16px] md:text-[18px] font-semibold text-[#222222] mb-3">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Personal Training
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Group Classes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Strength Training
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Cardio & Fitness
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Nutrition Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (Now takes 1 column on mobile, side-by-side with Services) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left leading-tight tracking-tighter">
            <h4 className="text-[16px] md:text-[18px] font-semibold text-[#222222] mb-3">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
Our Trainers                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
Membership Plans                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-2 lg:col-span-3 flex flex-col items-start text-left leading-tight tracking-tighter mt-2 lg:mt-0">
            <h4 className="text-[16px] md:text-[18px] font-semibold text-[#222222] mb-3">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 w-full">
              {/* Location */}
              <li className="flex items-start justify-start gap-2.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF1213"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-[2px] flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-[#6A6A6A] font-medium text-[14px] leading-snug">
                  2nd Floor, President Plaza, Sg Highway
                  <br />
                  Thaltej, Ahmedabad - 380054
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center justify-start gap-2.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF1213"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a
                  href="mailto:info@digitalsahaay.com"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  info@digitalsahaay.com{" "}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center justify-start gap-2.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF1213"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a
                  href="tel:+919898346774"
                  className="text-[#6A6A6A] hover:text-[#CF1213] font-medium text-[14px] transition-colors"
                >
                  +91 98983 46774
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="border-t border-[#D9D9D9] pt-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-1 mt-6 relative z-10">
          <p className="text-[#6A6A6A] text-[12px] md:text-[14px] lg:text-[14px] font-medium">
Powered by the Fusion 24 Fitness Studio          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-[#6A6A6A] text-[12px] md:text-[14px] lg:text-[14px] font-medium tracking-tight leading-tight">
            </p>
          </div>
          {/* <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#terms"
              className="text-[#6A6A6A] hover:text-[#CF1213] text-[12px] md:text-[14px] lg:text-[14px] font-medium transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-[#6A6A6A] hover:text-[#CF1213] text-[12px] md:text-[14px] lg:text-[14px] font-medium transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#cookies"
              className="text-[#6A6A6A] hover:text-[#CF1213] text-[12px] md:text-[14px] lg:text-[14px] font-medium transition-colors"
            >
              Cookies Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
