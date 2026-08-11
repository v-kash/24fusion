"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Added Framer Motion

const RED = "#FF2F31";

const FEATURES = [
  {
    icon: "/about/community.svg",
    title: "A Supportive\nCommunity",
  },
  {
    icon: "/about/gym.svg",
    title: "Expert\nTrainers",
  },
  {
    icon: "/about/target.svg",
    title: "Personalized\nApproach",
  },
  {
    icon: "/about/trophy.svg",
    title: "Real\nResults",
  },
];

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

export default function OurStory() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Background Image with Cinematic Slow Zoom */}
      <motion.img
        src="/success/successhero.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/5" />
      {/* Added a dark gradient at the bottom so the features are readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <motion.div 
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-[90px] pb-[60px] md:px-12 md:pt-[110px] md:pb-[80px] xl:px-[80px] xl:pt-[120px] xl:pb-[100px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Small Heading */}
        <motion.div 
          variants={fadeUpVariants}
          className="mb-[28px] flex items-center justify-center"
        >
          <span
            className="text-center text-sm font-semibold uppercase tracking-[0.25em] md:text-base"
            style={{ color: RED }}
          >
            REAL TRANSFORMATIONS.
            <br />
            REAL PEOPLE.
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="text-center">
          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-5xl leading-[0.85] tracking-tight text-white md:text-6xl xl:text-[82px]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FROM
          </motion.h2>

          <motion.h2
            variants={fadeUpVariants}
            className="font-display mt-[2px] text-6xl leading-[0.85] tracking-tight md:text-7xl xl:text-[92px]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: RED,
            }}
          >
            CELEBRITIES
          </motion.h2>

          <motion.h2
            variants={fadeUpVariants}
            className="font-display mt-[2px] text-5xl leading-[0.85] tracking-tight text-white md:text-6xl xl:text-[82px]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            TO
          </motion.h2>

          <motion.h2
            variants={fadeUpVariants}
            className="font-display mt-[2px] text-6xl leading-[0.85] tracking-tight md:text-7xl xl:text-[92px] text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            COMMON PEOPLE
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-3xl text-base leading-[1.6] text-white/80 md:text-lg xl:mt-[20px] xl:text-[15px]"
          >
            At Fusion 24, we believe fitness has no boundaries. From <br />{" "}
            inspiring celebrities to everyday heroes—we transform <br /> lives,
            one goal at a time.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeUpVariants}
            className="font-display group mt-[18px] mx-auto flex items-center justify-center gap-2 px-5 py-3 text-3xl tracking-tight text-white transition-transform hover:scale-105"
            style={{ backgroundColor: RED }}
          >
            START YOUR JOURNEY{" "}
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </motion.button>
        </div>

        {/* Features Grid (Now rendering the unused array!) */}
        {/* <motion.div 
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-4"
          variants={containerVariants}
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariants}
              className="flex flex-col items-center text-center"
            >
              <div 
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm transition-colors hover:border-[#FF2F31] hover:bg-[#FF2F31]/10"
              >
                <img src={feature.icon} alt={feature.title} className="h-7 w-7" />
              </div>
              <p 
                className="whitespace-pre-line text-sm font-semibold uppercase tracking-wider text-white/90"
              >
                {feature.title}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
}