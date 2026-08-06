'use client'
import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  "Home",
  "About Us",
  "Programs",
  "Success Stories",
  "Membership",
  "Contact Us",
];

const RED = "#FF2F31";

export default function Navbar({
  links = NAV_LINKS,
  defaultActive = "Home",
  logoSrc = "/logo1.png", // full logo (mark + "Fusion 24 Fitness Studio" name) as one image
}) {
  const [active, setActive] = useState(defaultActive);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-20" style={{ fontFamily: "'Raleway', sans-serif" }}>
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      <header className="flex items-center justify-between gap-4 px-6 py-6 md:px-18">
        {/* Logo (single image containing mark + name) */}
        <div className="flex shrink-0 items-center">
          <img
            src={logoSrc}
            alt="Fusion 24 Fitness Studio"
            className="h-12 w-auto object-contain md:h-12 scale-[2.2] "
          />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className="font-nav text-lg font-semibold    text-white/90 transition-colors hover:text-white"
            >
              <span
                className="pb-1"
                style={{
                  color: active === link ? RED : undefined,
                  borderBottom:
                    active === link ? `2px solid ${RED}` : "2px solid transparent",
                }}
              >
                {link.toUpperCase()}
              </span>
            </button>
          ))}
        </nav>

        {/* Join now (desktop) */}
        <button
          className="font-display hidden items-center gap-2 px-3 py-1 text-2xl  text-white transition-transform hover:scale-105 lg:flex"
          style={{ backgroundColor: RED }}
        >
          JOIN NOW <ArrowRight size={16} />
        </button>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile nav panel */}
      {menuOpen && (
        <div className="mx-6 mb-4 rounded-lg bg-black/80 p-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
                className="font-nav text-left text-sm font-semibold "
                style={{ color: active === link ? RED : "white" }}
              >
                {link.toUpperCase()}
              </button>
            ))}
            <button
              className="font-display mt-2 flex w-fit items-center gap-2 rounded px-5 py-2.5 text-lg tracking-wider text-white"
              style={{ backgroundColor: RED }}
            >
              JOIN NOW <ArrowRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}