"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const RED = "#CF1213";

const STAT_ICONS = {
  weightLost: "/success/W.svg",
  muscleGained: "/success/M.svg",
  bodyFat: "/success/B.svg",
};

const DEFAULT_STATS = [
  { icon: STAT_ICONS.weightLost, value: "-18 KG", label: "Weight Lost" },
  { icon: STAT_ICONS.muscleGained, value: "+7 KG", label: "Muscle Gained" },
  { icon: STAT_ICONS.bodyFat, value: "-5%", label: "Body Fat" },
];

// Replace with real clients — reusing one entry as placeholder since
// that's the only data provided.
const TESTIMONIALS = Array.from({ length: 6 }).map((_, i) => ({
  id: `rohan-${i}`,
  image: "/success/rohan-maheta.png",
  name: "Rohan Mehta",
  location: "Ahmedabad, India",
  rating: 5,
  quote:
    "The Trainers Here Are Amazing! In 4 Months, I've Gained Strength, Lost Fat, And Gained The Confidence I Never Thought Possible. This Place Changed My Life.",
  stats: DEFAULT_STATS,
}));

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function TestimonialsSection({ testimonials = TESTIMONIALS }) {
  const scrollerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 320;
    const index = Math.round(el.scrollLeft / (cardWidth + 24));
    setActiveDot(Math.min(index, testimonials.length - 1));
  };

  const goToDot = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 320;
    el.scrollTo({ left: i * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      className="relative flex w-full items-center overflow-hidden bg-black py-20 "
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="w-full px-4 sm:px-8 md:px-12">
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
            REAL PEOPLE. REAL RESULTS.
            <span className="h-px w-10" style={{ backgroundColor: RED }} />
          </div>
          <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
            CLIENT <span style={{ color: RED }}>TESTIMONIALS</span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 md:text-lg">
            Hear From Our Members Who Transformed Their Bodies, Built
            Confidence, And Changed Their Lives.
          </p>

          {/* Google rating row */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <img
              src="/success/google.png"
              alt="Google"
              className="h-7 w-7"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="text-2xl font-bold text-white">4.9</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="h-5 w-px bg-white/20" />
            <span className="text-neutral-400">230+ Reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative mx-auto mt-12 max-w-7xl px-10 sm:px-6 md:px-10"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800 text-white transition-transform hover:scale-105 md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-4 py-2 sm:px-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-[280px] shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-neutral-800 text-white transition-transform hover:scale-105 md:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* Mobile-only arrow pair */}
          <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition-transform active:scale-95"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition-transform active:scale-95"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => goToDot(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeDot === i ? "bg-white" : "bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}