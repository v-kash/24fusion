"use client";

import React from "react";
import { ArrowRight, Users, Star, ShieldCheck, ThumbsUp, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { icon: Users, value: "8,000+", label: "Happy Members" },
  { icon: Star, value: "4.9/5", label: "Google Rating" },
  { icon: ShieldCheck, value: "50+", label: "Expert Trainers" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
];

const RED = "#FF2F31";

// Framer Motion Variants (matches CTABanner / AboutMrX / NutritionDietSection)
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
    transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const bgVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function AboutHero() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display {
          font-family: 'Bebas Neue', sans-serif;
        }

        .font-nav {
          font-family: 'Raleway', sans-serif;
        }

        .text-outline {
          -webkit-text-stroke: 1.5px ${RED};
          color: transparent;
        }

        @media (min-width: 768px) {
          .text-outline {
            -webkit-text-stroke-width: 2.5px;
          }
        }
      `}</style>

      {/* Background (slow zoom-out on load) */}
      <motion.div
        className="absolute inset-0"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/about/abouthero.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col justify-center gap-10 px-6 py-10 md:px-16 xl:flex-row xl:items-center xl:justify-between">
          {/* Left: headline */}
          <motion.div
            className="max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUpVariants} className="mb-10 flex items-center gap-3">
              <span
                className="font-display text-sm tracking-wide md:text-2xl"
                style={{ color: RED }}
              >
                20 YEARS OF FITNESS EXCELLENCE
              </span>

              <span
                className="h-[1.5px] w-24"
                style={{
                  background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
                }}
              />
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="font-display text-[15vw] leading-[0.95] tracking-tight text-white sm:text-6xl md:text-[90px]"
            >
              FROM EVERYDAY PEOPLE
              <br />
              <span style={{ color: RED }}>TO CHAMPIONS & CELEBRITIES.</span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-2xl text-sm text-white/70 md:text-[16px]"
            >
              For over 20 years, Mr. X has helped people transform their bodies,
              build <br/> confidence, and achieve lasting fitness—from everyday
              individuals to <br/>athletes and celebrities.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="font-display flex items-center justify-center gap-2 px-5 py-3 text-3xl tracking-tight text-white"
                style={{ backgroundColor: RED }}
              >
                MEET MR.X <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="font-display flex items-center justify-center gap-2 bg-white/10 px-5 py-3 text-3xl tracking-tight text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <PlayCircle size={20} /> START YOUR TRANSFORMATION
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}