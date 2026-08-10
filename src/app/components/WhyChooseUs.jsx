"use client";
import React from "react";
import { motion } from "framer-motion";

const RED = "#FF2F31";

const FEATURES = [
  {
    big: true,
    inline: true,
    title: ["EXPERT", "TRAINERS"],
    desc: [
      "Certified Professionals With",
      "Years Of Experience, Dedicated",
      "To Helping You Achieve Your",
      "Fitness Goals.",
    ],
    img: "/wcu1.png",
  },
  {
    title: ["PERSONALIZED", "PROGRAMS"],
    desc: [
      "Customized Workout And",
      "Nutrition Plans Tailored To",
      "Your Goals, Body, And",
      "Lifestyle.",
    ],
    img: "/wcu2.png",
  },
  {
    title: ["PREMIUM", "EQUIPMENT"],
    desc: [
      "State-Of-The-Art Equipment",
      "Designed To Provide A Safe,",
      "Effective, And World-Class",
      "Workout Experience.",
    ],
    img: "/wcu3.png",
  },
  {
    title: ["HOLISTIC", "APPROACH"],
    desc: [
      "We Combine Fitness,",
      "Nutrition, Recovery, And",
      "Mindset Coaching To Deliver",
      "Complete Body Transformation.",
    ],
    img: "/wcu4.png",
  },
  {
    title: ["SUPPORTIVE", "COMMUNITY"],
    desc: [
      "Customized Workout And",
      "Nutrition Plans Tailored To",
      "Your Goals, Body, And",
      "Lifestyle.",
    ],
    img: "/wcu5.png",
  },
  {
    title: ["PROVEN", "RESULTS"],
    desc: [
      "Thousands Of Successful",
      "Transformations.",
      "Real Stories. Real",
      "Results. Real People.",
    ],
    img: "/wcu6.png",
  },
  {
    title: ["SAFE &", "HYGIENIC"],
    desc: [
      "Train In A Clean,",
      "Sanitized Environment With",
      "Strict Hygiene Standards For",
      "Your Health And Safety.",
    ],
    img: "/wcu7.png",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

function FeatureCard({ big, inline, title, desc, img }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`group relative h-[260px] overflow-hidden  border-2  border-white/10 transition-all duration-700 ease-out hover:shadow-[0_0_30px_-5px_rgba(255,47,49,0.4)] lg:h-full ${
        big ? "lg:row-span-2" : ""
      }`}
    >
      {img && (
        <img
          src={img}
          alt={title.join(" ")}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black/0 transition-opacity duration-500" />

      {/* Traveling beam — one lap on hover, then clears */}
      <div className="beam-border pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        {inline ? (
          <h3 className={`font-display leading-none tracking-wide ${big ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            <span style={{ color: RED }}>{title[0]} </span>
            <span className="text-white">{title[1]}</span>
          </h3>
        ) : (
          <h3 className={`font-display leading-[1.05] tracking-wide ${big ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            <span className="block" style={{ color: RED }}>
              {title[0]}
            </span>
            <span className="block text-white">{title[1]}</span>
          </h3>
        )}
        <p
          className="font-body mt-2 max-w-[220px] text-xs text-white/65 md:text-sm line-clamp-4"
          style={{ minHeight: "6.5em" }}
        >
          {desc.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className="w-full bg-black px-6 py-16 md:px-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
        .font-body { font-family: 'Poppins', sans-serif; }

        /* ---------- Traveling border beam: one lap, then settle ---------- */

        @property --beam-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        /* Beam travels a full circle, then fades out at the very end
           so it never parks visibly at its starting corner. */
        @keyframes beam-run {
          0%   { --beam-angle: 0deg;   opacity: 0; }
          8%   { opacity: 1; }
          82%  { opacity: 1; }
          100% { --beam-angle: 360deg; opacity: 0; }
        }

        .beam-border {
          opacity: 0;
          padding: 1.5px;
          ; /* matches rounded-xl */
          background: conic-gradient(
            from var(--beam-angle),
            transparent 0deg 250deg,
            rgba(255, 47, 49, 0.12) 300deg,
            rgba(255, 47, 49, 0.55) 335deg,
            ${RED} 360deg
          );
          filter: drop-shadow(0 0 6px rgba(255, 47, 49, 0.75));
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
        }

        /* Declaring the animation only on :hover means it fully resets on
           mouse-out, so the next hover replays the lap from 0deg. */
        .group:hover .beam-border {
          animation: beam-run 1.4s linear forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .beam-border { display: none; }
        }
      `}</style>

      {/* Header */}
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="font-nav flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em]" style={{ color: RED }}>
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
          WHY CHOOSE US
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
        </div>

        <h2 className="font-display mt-5 text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-white">BUILT DIFFERENT. </span>
          <span style={{ color: RED }}>DELIVERING RESULTS.</span>
        </h2>

        <p className="font-body mt-4 text-base text-white/60 md:text-lg">
          We're More Than A Gym. We're A Community Committed To Your Transformation&mdash;Inside And Out.
        </p>
      </motion.div>

      {/* Feature grid */}
      <motion.div
        className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {FEATURES.map((f) => (
          <FeatureCard key={f.title.join(" ")} {...f} />
        ))}
      </motion.div>
    </section>
  );
}