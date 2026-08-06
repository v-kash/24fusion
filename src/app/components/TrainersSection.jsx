"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import CoachCard from "./CoachCard"; // Import the CoachCard we just built

const RED = "#CF1213";

const TRAINERS = [
  {
    img: "/trainers/rahul.png", // Replace with your actual image paths
    name: "RAHUL VERMA",
    role: "Strength Coach",
    specialty: "Specializes In Strength Training",
    experience: "8+ Years",
  },
  {
    img: "/trainers/anjali.png",
    name: "ANJALI MEHTA",
    role: "Yoga & Wellness Coach",
    specialty: "Specializes In Yoga & Flexibility",
    experience: "6+ Years",
  },
  {
    img: "/trainers/karan.png",
    name: "KARAN SINGH",
    role: "Cardio Specialist",
    specialty: "Specializes In Cardio Endurance",
    experience: "7+ Years",
  },
  {
    img: "/trainers/priya.png",
    name: "PRIYA SHARMA",
    role: "Nutrition Coach",
    specialty: "Specializes In Nutrition & Diet",
    experience: "5+ Years",
  },
];

export default function TrainersSection({ trainers = TRAINERS }) {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full bg-white px-8 py-16 md:px-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="font-nav flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em]"
          style={{ color: RED }}
        >
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
          OUR TRAINERS
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
        </div>
        <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          GUIDING YOU. EVERY REP.{" "}
          <span style={{ color: RED }}>EVERY STEP.</span>
        </h2>
        <p className="mt-4 text-base text-neutral-500 md:text-lg">
          Certified Experts Committed To Pushing Your Limits And Perfecting Your
          Form.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-10 max-w-7xl px-10 sm:px-6 md:mt-12 md:px-10">
        {" "}
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
          {trainers.map((t) => (
            <div key={t.name} style={{ scrollSnapAlign: "start" }}>
              <CoachCard {...t} />
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
      </div>

      {/* CTA */}
      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button
          className="group flex items-center gap-4  border-2 border-neutral-900 bg-white py-2 pl-6 pr-2 transition-colors hover:bg-neutral-900"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="text-xl tracking-tight text-neutral-900 transition-colors group-hover:text-white">
            READY TO TRAIN WITH THE BEST?
          </span>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:translate-x-1"
            style={{ backgroundColor: RED }}
          >
            <ArrowRight size={20} color="#ffffff" />
          </div>
        </button>
      </div>
    </section>
  );
}
