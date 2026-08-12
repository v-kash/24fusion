"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Success Stories", href: "/success" },
  { label: "Membership", href: "/membership" },
  { label: "Contact Us", href: "/contact" },
];

const RED = "#FF2F31";

export default function Navbar({
  links = NAV_LINKS,
  logoSrc = "/logo1.png",
}) {
  const pathname = usePathname(); // Get current route path
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper function to check if a link is active based on the URL
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href); // Allows sub-routes to keep parent active
  };

  return (
    <div className="absolute top-0 left-0 w-full z-20" style={{ fontFamily: "'Raleway', sans-serif" }}>
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      <header className="flex items-center justify-between gap-4 px-6 py-6 md:px-18">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src={logoSrc}
            alt="Fusion 24 Fitness Studio"
            className="h-12 w-auto object-contain md:h-12 scale-[2.2]"
          />
        </Link>

        {/* Desktop nav links */}
              {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-nav text-sm font-semibold text-white/90 transition-colors hover:text-white"
            >
              <span 
                className="relative inline-block pb-2"
                style={{
                  color: isActive(link.href) ? RED : undefined,
                }}
              >
                {link.label.toUpperCase()}
                
                {/* Fading Underline */}
                <span
                  className="absolute bottom-0 left-0 h-px w-full transition-opacity duration-300"
                  style={{
                    // Fades from transparent -> Red -> transparent
                    background: `linear-gradient(to right, transparent, ${RED}, transparent)`,
                    // Show only if active, otherwise hide it
                    opacity: isActive(link.href) ? 1 : 0, 
                  }}
                ></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Join now (desktop) */}
        <Link
          href="/membership"
          className="font-display hidden items-center gap-2 px-3 py-1 text-2xl text-white transition-transform hover:scale-105 lg:flex"
          style={{ backgroundColor: RED }}
        >
          JOIN NOW <ArrowRight size={16} />
        </Link>

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
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="font-nav text-left text-sm font-semibold"
                style={{ color: isActive(link.href) ? RED : "white" }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            
            {/* Mobile Join Now Button */}
            <Link
              href="/membership"
              onClick={() => setMenuOpen(false)}
              className="font-display mt-2 flex w-fit items-center gap-2 rounded px-5 py-2.5 text-lg tracking-wider text-white"
              style={{ backgroundColor: RED }}
            >
              JOIN NOW <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}