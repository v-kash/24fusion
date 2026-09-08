"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const RED = "#FF2F31";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const PLANS = [
  {
    name: "FAT LOSS",
    icon: "/about/diet.svg",
    image: "/facilities/cardio-card.png",
    tagline: "Drop fat without losing strength.",
    points: [
      "Calorie deficit set from your real maintenance",
      "High-protein, high-volume meals so you stay full",
      "Weekly weigh-in and photo review",
      "Eating-out and cheat-meal strategy",
    ],
    highlight: false,
  },
  {
    name: "MUSCLE GAIN",
    icon: "/about/dumbell.svg",
    image: "/facilities/strength-card.png",
    tagline: "Build size on a clean surplus.",
    points: [
      "Protein target of 1.6-2.2g per kg bodyweight",
      "Carb timing built around your training days",
      "Budget-friendly Indian bulking staples",
      "Supplement guidance — only what actually helps",
    ],
    highlight: true,
  },
  {
    name: "LEAN & MAINTAIN",
    icon: "/about/heartbeat.svg",
    image: "/facilities/yoga-card.png",
    tagline: "Hold your shape for life.",
    points: [
      "Flexible macros you can run without tracking",
      "Habit-based coaching, not crash dieting",
      "Travel, festival and wedding-season plans",
      "Monthly recomposition check",
    ],
    highlight: false,
  },
];

function PlanCard({ plan }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="group relative flex flex-col overflow-hidden border transition-colors"
      style={{
        borderColor: plan.highlight ? RED : "rgba(255,255,255,0.15)",
        backgroundColor: "#0b0b0b",
      }}
    >
      {plan.highlight && (
        <span
          className="font-nav absolute right-0 top-0 z-10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white"
          style={{ backgroundColor: RED }}
        >
          MOST PICKED
        </span>
      )}

      {/* Photo */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={plan.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/40 to-transparent" />
        <img
          src={plan.icon}
          alt=""
          className="absolute bottom-4 left-6 h-10 w-10"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl leading-none text-white">
          {plan.name}
        </h3>
        <p className="font-nav mt-2 text-sm" style={{ color: RED }}>
          {plan.tagline}
        </p>

        <ul className="mt-6 flex flex-1 flex-col gap-3">
          {plan.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Check
                size={16}
                className="mt-0.5 shrink-0"
                style={{ color: RED }}
              />
              <span className="font-nav text-sm leading-relaxed text-neutral-300">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="font-display mt-8 flex w-fit items-center gap-2 px-5 py-2.5 text-lg tracking-tight text-white transition-transform hover:scale-105"
          style={{
            backgroundColor: plan.highlight ? RED : "transparent",
            border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.3)",
          }}
        >
          START THIS PLAN <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}

export default function DietPlansSection() {
  return (
    <section
      className="w-full bg-black py-20 md:py-24"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      <motion.div
        className="mx-auto max-w-7xl px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={fadeUpVariants}
          className="font-nav flex items-center gap-4 text-xs font-bold tracking-[0.2em] sm:text-sm"
          style={{ color: RED }}
        >
          CHOOSE YOUR TRACK
          <span
            className="h-[1.5px] w-16"
            style={{
              background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
            }}
          />
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          className="font-display mt-4 leading-[0.95]"
        >
          <span className="block text-4xl text-white sm:text-5xl md:text-6xl">
            ONE GOAL. ONE PLAN.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base"
        >
          Every plan is written by a certified coach after a body-composition
          check and a full lifestyle audit — then adjusted every two weeks based
          on how you actually respond.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
