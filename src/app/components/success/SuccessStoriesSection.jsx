"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FlipCard from "./FlipCard";

const RED = "#CF1213";

// Shared stat icons + a reference set of stats (edit per-story once you
// have real numbers for the other transformations).
const DEFAULT_STATS = [
  { icon: "/success/W.svg", value: "-18 KG", label: "Weight Lost" },
  { icon: "/success/M.svg", value: "+7 KG", label: "Muscle Gained" },
  { icon: "/success/B.svg", value: "-5%", label: "Body Fat" },
];

const STORIES = [
  {
    id: "weight-gain",
    frontImage: "/success/weight-gain-front.jpg",
    frontTitle: "Powerlifting",
    frontSubtitle: "Building Strength, Mass, \nAnd Confidence.",
    backImage: "/success/weight-gain-back.png",
    backTitle: "Weight Gain",
    backSubtitle:
      "Gained 8.5 Kg In 12 Weeks With A Structured Training And Nutrition Plan.",
    stats: DEFAULT_STATS,
    defaultFlipped: false, // shows the stats face at rest, like the reference
  },
  {
    id: "powerlifting",
    frontImage: "/success/weight-gain-front.jpg",
    frontTitle: "Powerlifting",
    frontSubtitle: "Building Strength, Mass, \nAnd Confidence.",
    backImage: "/success/weight-gain-back.png",
    backTitle: "Powerlifting",
    backSubtitle: "Building Strength, Mass, And Confidence.",
    stats: DEFAULT_STATS,
  },
  {
    id: "shredded-body",
    frontImage: "/success/weight-gain-front.jpg",
    frontTitle: "Shredded Body",
    frontSubtitle: "Building Strength, Mass, \nAnd Confidence.",
    backImage: "/success/weight-gain-back.png",
    backTitle: "Shredded Body",
    backSubtitle: "Building Strength, Mass, And Confidence.",
    stats: DEFAULT_STATS,
  },
  {
    id: "weight-loss",
    frontImage: "/success/weight-gain-front.jpg",
    frontTitle: "Weight Loss",
    frontSubtitle: "Building Strength, Mass, \nAnd Confidence.",
    backImage: "/success/weight-gain-back.png",
    backTitle: "Weight Loss",
    backSubtitle: "Building Strength, Mass, And Confidence.",
    stats: DEFAULT_STATS,
  },
  {
    id: "dance-aerobics",
    frontImage: "/success/weight-gain-front.jpg",
    frontTitle: "Dance & Aerobics",
    frontSubtitle: "Building Strength, Mass, \nAnd Confidence.",
    backImage: "/success/weight-gain-back.png",
    backTitle: "Dance & Aerobics",
    backSubtitle: "Building Strength, Mass, And Confidence.",
    stats: DEFAULT_STATS,
  },
  {
    id: "athletic-training",
    frontImage: "/success/weight-gain-front.jpg",
    frontTitle: "Athletic Training",
    frontSubtitle: "Building Strength, Mass, \nAnd Confidence.",
    backImage: "/success/weight-gain-back.png",
    backTitle: "Athletic Training",
    backSubtitle: "Building Strength, Mass, And Confidence.",
    stats: DEFAULT_STATS,
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function SuccessStoriesSection({ stories = STORIES }) {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-8 md:px-12"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
       <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Header */}
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="font-nav flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em]"
          style={{ color: RED }}
        >
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
          REAL STORIES. REAL RESULTS.
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
        </div>
        <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          <span style={{ color: RED }}>SUCCESS</span> STORIES
        </h2>
        <p className="mt-4 text-base text-neutral-500 md:text-lg">
          Explore Incredible Transformations From Our Members Across
          Different Goals And Lifestyles. Your Transformation Is Our
          Greatest Achievement.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
        {stories.map((story, i) => (
          <motion.div
            key={story.id}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <FlipCard {...story} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-12 flex justify-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <button
          className="group flex items-center gap-3 border-2 border-neutral-900 bg-white py-1.5 pl-5 pr-1.5 transition-colors hover:bg-neutral-900"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="text-base tracking-tight text-neutral-900 transition-colors group-hover:text-white">
            READY TO TRAIN WITH THE BEST?
          </span>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-1"
            style={{ backgroundColor: RED }}
          >
            <ArrowRight size={16} color="#ffffff" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
