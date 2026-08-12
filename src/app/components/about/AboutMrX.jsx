"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const RED = "#FF2F31";

// Framer Motion Variants (matches CTABanner)
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

const STATS = [
  { value: "20+", label: "Years Of", sub: "Experience" },
  { value: "1,000+", label: "Successful", sub: "Transformations" },
  { value: "15+", label: "Training", sub: "Disciplines" },
  { value: "8+", label: "Fitness", sub: "Specializations" },
];

// New component to handle the count-up animation for each stat
const AnimatedStat = ({ value, label, sub, isFirst }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract numeric value and suffix (e.g., "1,000+" -> 1000 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");

  const count = useMotionValue(0);
  // Custom formatting to add commas back for large numbers
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-1 ${
        isFirst ? "pr-6 sm:pr-8" : "px-6 sm:px-8"
      }`}
    >
      <span className="font-display text-4xl leading-none text-white sm:text-5xl">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
      <span className="font-nav text-sm leading-snug text-neutral-300 sm:text-base">
        {label}
        <br />
        {sub}
      </span>
    </div>
  );
};

export default function AboutMrX() {
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
        src="/about/MRX.png"
        alt="Mr. X training in the gym"
        className="absolute inset-0 h-full w-full object-cover object-[75%_15%]"
      />

      {/* Dark gradient so copy stays legible over the photo */}

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            className="font-nav flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.2em]"
            style={{ color: RED }}
          >
            ABOUT MR. X
            <span
              className="h-[1.5px] w-24"
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
            <span className="block text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
              THE MAN BEHIND
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: RED }}
            >
              THOUSANDS OF TRANSFORMATIONS.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base"
          >
            With Over 20 Years Of Experience In Fitness Training, Mr. X Has
            Worked With Individuals Across A Wide Range Of Fitness Goals—From
            Weight Loss And Muscle Building To Athletic Conditioning,
            Celebrity Fitness, And Performance Training.
          </motion.p>

          {/* Experience & Expertise label */}
          <motion.div
            variants={fadeUpVariants}
            className="font-nav mt-10 flex items-center gap-4 text-sm font-bold tracking-[0.15em] sm:text-base"
            style={{ color: RED }}
          >
            EXPERIENCE &amp; EXPERTISE
            <span
              className="h-[1.5px] w-14"
              style={{
                background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
              }}
            />
          </motion.div>

          {/* Stats Container */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-6 flex flex-wrap items-stretch divide-x divide-white/20"
          >
            {STATS.map((s, i) => (
              <AnimatedStat
                key={s.value}
                value={s.value}
                label={s.label}
                sub={s.sub}
                isFirst={i === 0}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}