"use client";
import React from "react";
import { motion } from "framer-motion"; // Added Framer Motion

const RED = "#FF2F31";

// Inline version of circle.svg
const CircleRing = ({ id }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
  >
    <rect
      x="0.708743"
      y="0.708743"
      width="74.4175"
      height="74.4175"
      rx="37.2087"
      stroke={`url(#${id})`}
      strokeWidth="1.41748"
    />
    <defs>
      <linearGradient
        id={id}
        x1="34.7812"
        y1="1.41748"
        x2="41.0537"
        y2="74.4175"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={RED} />
        <stop offset="1" stopColor={RED} stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

const STEPS = [
  {
    num: "01",
    title: "BOOK A FREE TRIAL",
    desc: "Take The First Step By Booking Your Free Trial Session.",
  },
  {
    num: "02",
    title: "FITNESS ASSESSMENT",
    desc: "We Assess Your Current Fitness Level, Goals, And Lifestyle.",
  },
  {
    num: "03",
    title: "CUSTOM PLAN",
    desc: "Receive A Personalized Workout And Nutrition Plan Tailored Just For You.",
  },
  {
    num: "04",
    title: "TRACK PROGRESS",
    desc: "We Monitor Your Progress And Make Adjustments To Keep You Moving Forward.",
  },
  {
    num: "05",
    title: "BECOME YOUR BEST",
    desc: "Transform Your Body, Mind, And Lifestyle. Become Unstoppable.",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Delay between each step circle popping in
      delayChildren: 0.4,   // Wait for the line to start drawing first
    },
  },
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TransformationProcess() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Background Image */}
      <img
        src="/transformation.png"
        alt="Gym background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Optional: Added a subtle overlay to make text pop better over the image */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full px-6 py-16 md:px-16 lg:pt-20">
        <div className="max-w-2xl">
          {/* Main Heading (Animated) */}
          <motion.h2 
            className="font-display text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            TRANSFORMATION
            <br />
            <span style={{ color: RED }}>PROCESS</span>
          </motion.h2>

          {/* Tagline (Animated) */}
          <motion.p 
            className="font-nav mt-4 text-sm text-white/60 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Journey. Our Guidance. Real Results.
          </motion.p>

          {/* Timeline / Steps List Container */}
          <motion.div 
            className="relative mt-10 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Animated Drawing Line */}
            <motion.div 
              className="absolute left-[27px] top-[28px] bottom-[28px] w-[2px] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeInOut" }} // Draws over 2 seconds
            >
              <img
                src="/Line.svg"
                alt=""
                className="h-full w-full object-fill"
              />
            </motion.div>

            {STEPS.map((step) => (
              <div key={step.num} className="relative flex gap-5 pb-8 last:pb-0">
                {/* Numbered circle */}
                <motion.div 
                  variants={circleVariants} 
                  className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-black"
                >
                  <CircleRing id={`circle-ring-${step.num}`} />
                  <span className="font-display absolute text-2xl text-white">{step.num}</span>
                </motion.div>

                {/* Title & Description */}
                <motion.div 
                  variants={textVariants} 
                  className="flex flex-col gap-1 pt-2"
                >
                  <h3 className="font-display text-xl tracking-wide text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 md:text-base">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}