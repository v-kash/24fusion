"use client";
import React, { useRef } from "react";
import Link from "next/link"; // Added Next.js Link
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Added Framer Motion
import TransformationCard from "./TransformationCard";

const RED = "#CF1213";

const TESTIMONIALS = [
  {
    beforeImg: "/people/pb1.png",
    afterImg: "/people/pa1.png",
    weeks: "16 WEEKS",
    stats: [
      { type: "weight", value: "-18 KG", label: "Weight Lost" },
      { type: "muscle", value: "+7 KG", label: "Muscle Gained" },
      { type: "burn", value: "-5%", label: "Body Fat" },
    ],
    quote:
      "I Didn't Just Lose Weight—I Discovered A Stronger Version Of Myself.",
    name: "Rahul Verma",
    rating: 5,
  },
  {
    beforeImg: "/people/pb3.png",
    afterImg: "/people/pa3.png",
    weeks: "12 WEEKS",
    stats: [
      { type: "weight", value: "-12 KG", label: "Weight Lost" },
      { type: "muscle", value: "+5 KG", label: "Strength Gained" },
      { type: "burn", value: "-8%", label: "Body Fat" },
    ],
    quote: "I Became Stronger Every Day, Both Inside And Outside The Gym.",
    name: "Priya Sharma",
    rating: 5,
  },
  {
    beforeImg: "/people/pb2.png",
    afterImg: "/people/pa2.png",
    weeks: "20 WEEKS",
    stats: [
      { type: "weight", value: "-20 KG", label: "Weight Lost" },
      { type: "muscle", value: "+9 KG", label: "Muscle Gained" },
      { type: "burn", value: "-7%", label: "Body Fat" },
    ],
    quote: "Discipline Today. Freedom Tomorrow. Build the Life You Deserve.",
    name: "Vikas Malhotra",
    rating: 5,
  },
  {
    beforeImg: "/people/pb4.png",
    afterImg: "/people/pa4.png",
    weeks: "14 WEEKS",
    stats: [
      { type: "weight", value: "-10 KG", label: "Weight Lost" },
      { type: "muscle", value: "+4 KG", label: "Muscle Gained" },
      { type: "burn", value: "-6%", label: "Body Fat" },
    ],
    quote:
      "I Didn't Just Lose Weight—I Discovered A Stronger Version Of Myself.",
    name: "Priya Verma",
    rating: 5,
  },
];

// Framer Motion Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function TransformationsSection({ testimonials = TESTIMONIALS }) {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full bg-white px-18 py-12 sm:px-6 md:px-12 md:py-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Header (Animated on Scroll) */}
      <motion.div 
        className="mx-auto max-w-3xl text-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="font-nav text-xs font-bold tracking-[0.12em] sm:text-sm sm:tracking-[0.15em]"
          style={{ color: RED }}
        >
          REAL PEOPLE. REAL RESULTS.
        </div>
        <h2 className="font-display mt-3 text-3xl leading-none tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          TRANSFORMATIONS <span style={{ color: RED }}>THAT INSPIRE</span>
        </h2>
        <p className="mt-4 text-sm text-neutral-500 sm:text-base md:text-lg">
          Thousands Have Started. These Champions Never{" "}
          <span className="relative inline-block">
            <span className="relative z-10 pl-1 font-semibold text-[#CF1213]">
              Gave Up.
            </span>
            <img
              src="/Vector.png"
              alt=""
              className="absolute left-1/2 top-1/2 -z-0 w-[110px] pl-1 scale-[1.2] -translate-x-1/2 -translate-y-1/2 pointer-events-none sm:w-[150px]"
            />
          </span>
        </p>
      </motion.div>

      {/* Carousel (Animated on Scroll) */}
      <motion.div 
        className="relative mx-auto mt-10 max-w-7xl px-0 sm:px-6 md:mt-12 md:px-10"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white transition-transform hover:scale-105 md:flex"
          style={{ borderColor: RED }}
        >
          <ChevronLeft size={20} color={RED} />
        </button>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-4 py-2 sm:gap-6 sm:px-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t) => (
            <div key={t.name} style={{ scrollSnapAlign: "start" }}>
              <TransformationCard {...t} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 bg-white transition-transform hover:scale-105 md:flex"
          style={{ borderColor: RED }}
        >
          <ChevronRight size={20} color={RED} />
        </button>

        {/* Mobile-only arrow pair, below the cards */}
        <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white transition-transform active:scale-95"
            style={{ borderColor: RED }}
          >
            <ChevronLeft size={16} color={RED} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white transition-transform active:scale-95"
            style={{ borderColor: RED }}
          >
            <ChevronRight size={16} color={RED} />
          </button>
        </div>
      </motion.div>

      {/* CTA (Animated on Scroll + Link added) */}
      <motion.div 
        className="mt-8 flex justify-center md:mt-10"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/membership" // Changed to Link for navigation
          className="font-nav flex items-center gap-2 px-4 py-2.5 text-base font-semibold tracking-tight text-white transition-transform hover:scale-105 sm:px-5 sm:py-3 sm:text-lg md:text-2xl"
          style={{ backgroundColor: RED }}
        >
          START YOUR TRANSFORMATION <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}