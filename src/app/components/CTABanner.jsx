"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const RED = "#FF2F31";

export default function CTABanner() {
  return (
    <section
      className="relative flex w-full items-center overflow-hidden bg-black py-20 md:h-[580px] md:py-0"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Background Image */}
      <img
        src="/ctabg.png"
        alt="Gym promotion background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Left-to-Right Dark Gradient for Text Readability (Added) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20 md:via-black/70 md:to-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full px-6 md:px-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="font-nav text-xs sm:text-sm font-bold tracking-[0.2em]"
            style={{ color: RED }}
          >
            LIMITED-TIME OFFER
          </div>

          {/* Main Heading */}
          <h2 className="font-display mt-3 leading-[0.85]">
            <span className="block text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              TRANSFORM TODAY
            </span>

            <span
              className="block text-5xl sm:text-7xl md:text-[8rem] lg:text-[8rem]"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #fff",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.02em",
              }}
            >
              SAVE BIG!
            </span>
          </h2>

          {/* Subtext / Discount Box */}
          <div className="mt-6 inline-flex items-center border border-white/35 px-4 py-2 sm:px-5">
            {/* Left */}
            <div className="pr-4 sm:pr-5">
              <p className="font-nav text-[0.6rem] sm:text-[0.7rem] font-bold uppercase leading-none text-white">
                UP TO
              </p>

              <div className="mt-1 flex items-end leading-none">
                <span className="font-display text-4xl sm:text-[4.4rem] text-white leading-[0.8]">
                  20%
                </span>

                <span className="font-display ml-1 mb-[6px] sm:mb-[8px] text-base sm:text-[1.2rem] text-white">
                  OFF
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="mx-4 sm:mx-5 h-[60px] sm:h-[80px] w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,.35) 18%, rgba(255,255,255,.35) 82%, transparent 100%)",
              }}
            />
            
            {/* Right */}
            <div className="leading-none">
              <p className="font-nav text-xl sm:text-[2rem] font-light uppercase tracking-[-0.03em] text-white">
                ON ANNUAL
              </p>

              <p className="mt-1 font-nav text-xl sm:text-[2rem] font-light uppercase tracking-[-0.03em] text-white">
                MEMBERSHIP
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="font-display mt-8 sm:mt-10 flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2 sm:py-3 text-lg sm:text-2xl tracking-tight text-[#270811] transition-transform hover:scale-105"
            style={{ backgroundColor: "#ffffff" }}
          >
            START YOUR TRANSFORMATION <ArrowRight size={20} className="sm:hidden" /> <ArrowRight size={24} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </section>
  );
}