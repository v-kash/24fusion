"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const RED = "#FF2F31";

// Framer Motion Variants (matches CTABanner / AboutMrX)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const FEATURES = [
  { label: "PERSONALIZED", sub: "NUTRITION" },
  { label: "GOALDRIVEN", sub: "STRATEGY" },
  { label: "PROGRESS &", sub: "ADJUSTMENTS" },
  { label: "REAL-LIFE", sub: "GUIDANCE" },
];

export default function NutritionDietSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-20 md:py-16"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Background photo */}
      <img
        src="/about/talktocoach.png"
        alt="Healthy nutrition bowl with grilled chicken, broccoli and quinoa"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />

      {/* Dark gradient so copy stays legible over the photo; flatter on mobile */}

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            className="font-nav flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.2em]"
            style={{ color: RED }}
          >
            NUTRITION &amp; DIET
            <span
  className="h-[1.5px] w-16"
  style={{
    background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
  }}
/>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-display mt-4 leading-[0.95]"
          >
            <span className="block text-4xl text-white sm:text-5xl md:text-6xl">
              TRAIN RIGHT. EAT RIGHT.
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl"
              style={{ color: RED }}
            >
              LIVE BETTER.
            </span>
          </motion.h2>

          {/* Feature icons row */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex items-start divide-x divide-white/15"
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col items-start gap-3 ${
                  i === 0 ? "pr-5 sm:pr-8" : "px-5 sm:px-5"
                }`}
              >
                <img
                  src="/about/diet.svg"
                  alt=""
                  className="h-12 w-12 sm:h-10 sm:w-10"
                />
                <span className="font-nav text-xs font-bold uppercase leading-snug text-white sm:text-xs">
                  {f.label}
                  <br />
                  {f.sub}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={fadeUpVariants}
            className="font-display mt-10 flex items-center gap-3 px-5 py-3 text-lg tracking-tight text-white transition-transform hover:scale-105 sm:text-xl"
            style={{ backgroundColor: RED }}
          >
            TALK TO A COACH <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
