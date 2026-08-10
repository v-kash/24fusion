"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  PlayCircle,
  Users,
  Star,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const STATS = [
  { icon: Users, value: "8,000+", label: "Happy Members" },
  { icon: Star, value: "4.9/5", label: "Google Rating" },
  { icon: ShieldCheck, value: "50+", label: "Expert Trainers" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
];

const RED = "#FF2F31";

// Words to cycle through
const WORDS = ["STRONGEST","HEALTHIEST", "FITTEST"];

// --- Custom Typewriter Hook ---
function useTypewriter(words, typeSpeed = 120, deleteSpeed = 60, delay = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // If we reach the end of the word, wait, then start deleting
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    // If we finish deleting, move to the next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Type or delete a character
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typeSpeed, deleteSpeed, delay]);

  return words[index].substring(0, subIndex);
}

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const slideUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const slideRightVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.6 },
  },
};

export default function Fusion24Hero() {
  // Initialize the typewriter effect
  const typedWord = useTypewriter(WORDS);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
        .text-outline {
          -webkit-text-stroke: 1.5px ${RED};
          color: transparent;
        }
        @media (min-width: 768px) {
          .text-outline { -webkit-text-stroke-width: 2.5px; }
        }
        
        /* Cinematic slow zoom for background video */
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s infinite alternate ease-in-out;
        }

       
        
      `}</style>

      {/* ---------- Background Video ---------- */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        >
          <source src="/Gym_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* ---------- Hero content ---------- */}
        <div className="flex flex-1 flex-col justify-center gap-10 px-6 py-10 md:px-16 xl:flex-row xl:items-center xl:justify-between">
          
          {/* Left: headline */}
          <motion.div 
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={slideUpVariants}
              className="font-display text-[15vw] leading-[0.95] tracking-tight text-white sm:text-6xl md:text-[110px]"
            >
              BUILD THE
              <br />
              {/* Typed word container with blinking cursor */}
              <span className="text-outline tracking-">
                {typedWord}
                <span className="cursor-blink h-[0.8em] relative top-[0.1em]"></span>
              </span>{" "}
              <span style={{ color: RED }}>VERSION</span>
              <br />
              OF YOURSELF
            </motion.h1>

            <motion.p 
              variants={slideUpVariants}
              className="mt-6 max-w-l text-sm text-white/70 md:text-[20px]"
            >
              Join a premium fitness community with expert trainers, world-class{" "}
              <br />
              equipment, personalized programs, and real results.
            </motion.p>

            <motion.div 
              variants={slideUpVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                className="font-display group flex items-center justify-center gap-2 px-5 py-3 text-3xl tracking-tight text-white transition-transform hover:scale-105"
                style={{ backgroundColor: RED }}
              >
                START YOUR JOURNEY{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </button>
              
              <button className="font-display flex items-center justify-center gap-2 bg-white/10 px-5 py-3 text-3xl tracking-tight text-white backdrop-blur transition-colors hover:bg-white/20">
                <PlayCircle size={18} /> WATCH SUCCESS STORIES
              </button>
            </motion.div>
          </motion.div>

          {/* Right: stats card */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[130px] shrink-0 self-center rounded-br-[18px] rounded-tl-[18px] bg-white/20 backdrop-blur-sm xl:self-auto"
          >
            <motion.div
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <div key={label}>
                  <div className="flex flex-col items-center gap-1 py-4 text-center">
                    <Icon size={28} color="white" strokeWidth={1.75} />
                    <div className="font-display text-3xl tracking-tight text-white">
                      {value}
                    </div>
                    <div className="font-nav text-xs font-semibold uppercase tracking-tight text-white/60">
                      {label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="h-px w-full bg-white/15" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}