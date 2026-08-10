"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Added Framer Motion

const RED = "#FF2F31";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

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
      {/* Added a dark gradient overlay for better text readability */}

      {/* Content Wrapper */}
      <motion.div 
        className="relative z-10 mx-auto w-full px-6 md:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            className="font-nav text-xs sm:text-sm font-bold tracking-[0.2em]"
            style={{ color: RED }}
          >
            LIMITED-TIME OFFER
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            variants={fadeUpVariants}
            className="font-display mt-3 leading-[0.85]"
          >
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
          </motion.h2>

          {/* Subtext / Discount Box */}
          <motion.div 
            variants={fadeUpVariants}
            className="mt-6 inline-flex items-center border border-white/35 px-4 py-2 sm:px-5"
          >
            {/* Left */}
            <div className="pr-4 sm:pr-5">
              <p className="font-nav text-[0.6rem] sm:text-[0.7rem] font-bold uppercase leading-none text-white">
                UP TO
              </p>

              <div className="mt-1 flex items-end leading-none">
                {/* --- Highlighted 20% with continuous pulsing color & scale --- */}
                <motion.span 
                  className="font-display text-4xl sm:text-[4.4rem] leading-[0.8]"
                  animate={{ 
                    color: ["#ffffff", RED, "#ffffff"] // Pulses from white to red
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  20%
                </motion.span>

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
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={fadeUpVariants}
            className="font-display mt-8 sm:mt-10 flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2 sm:py-3 text-lg sm:text-2xl tracking-tight text-[#270811] transition-transform hover:scale-105"
            style={{ backgroundColor: "#ffffff" }}
          >
            START YOUR TRANSFORMATION <ArrowRight size={20} className="sm:hidden" /> <ArrowRight size={24} className="hidden sm:block" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}