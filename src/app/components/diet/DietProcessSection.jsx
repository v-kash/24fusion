"use client";
import React from "react";
import { motion } from "framer-motion";

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

const STEPS = [
  {
    no: "01",
    icon: "/about/target.svg",
    title: "BODY & GOAL AUDIT",
    text: "Weight, body fat, measurements, medical history, work hours and food preferences — all on record before a single meal is planned.",
  },
  {
    no: "02",
    icon: "/about/diet.svg",
    title: "YOUR PLAN, WRITTEN",
    text: "Calories and macros set to your maintenance, then split into meals around your training time and your family's kitchen.",
  },
  {
    no: "03",
    icon: "/about/grow.svg",
    title: "TRACK & ADJUST",
    text: "Fortnightly check-ins on weight, strength and energy. Plateau? The plan changes — you never eat the same numbers forever.",
  },
  {
    no: "04",
    icon: "/about/trophy.svg",
    title: "MAKE IT PERMANENT",
    text: "We reverse-diet you back to maintenance and hand over the habits, so the result outlives the plan.",
  },
];

export default function DietProcessSection() {
  return (
    <section
      className="w-full py-20 md:py-24"
      style={{ backgroundColor: "#0b0b0b", fontFamily: "'Raleway', sans-serif" }}
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
          HOW IT WORKS
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
            FOUR STEPS.
          </span>
          <span
            className="block text-4xl sm:text-5xl md:text-6xl"
            style={{ color: RED }}
          >
            ZERO GUESSWORK.
          </span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <motion.div
              key={step.no}
              variants={fadeUpVariants}
              className="group flex flex-col gap-4 p-6 transition-colors hover:bg-white/[0.03]"
              style={{ backgroundColor: "#0b0b0b" }}
            >
              <div className="flex items-center justify-between">
                <img src={step.icon} alt="" className="h-10 w-10" />
                <span
                  className="font-display text-4xl leading-none text-white/15 transition-colors group-hover:text-white/30"
                >
                  {step.no}
                </span>
              </div>
              <h3 className="font-display text-2xl leading-none text-white">
                {step.title}
              </h3>
              <span
                className="h-[2px] w-10"
                style={{ backgroundColor: RED }}
              />
              <p className="font-nav text-sm leading-relaxed text-neutral-400">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
