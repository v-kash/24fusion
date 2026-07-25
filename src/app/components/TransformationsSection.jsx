'use client'
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
      className="relative w-full bg-white px-6 py-16 md:px-12"
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
          className="font-nav text-sm font-bold tracking-[0.15em]"
          style={{ color: RED }}
        >
          REAL PEOPLE. REAL RESULTS.
        </div>
        <h2 className="font-display mt-3 text-4xl leading-none tracking-wide text-neutral-900 sm:text-5xl md:text-6xl">
          TRANSFORMATIONS <span style={{ color: RED }}>THAT INSPIRE</span>
        </h2>
        <p className="mt-4 text-base text-neutral-500 md:text-lg">
  Thousands Have Started. These Champions Never{" "}
  <span className="relative inline-block">
    <span className="relative z-10 pl-1 font-semibold text-[#CF1213]">
      Gave Up.
    </span>

    <img
      src="/Vector.png"
      alt=""
      className="absolute left-1/2 top-1/2 -z-0 w-[150px] pl-1  scale-[1.2] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    />
  </span>
</p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-12 max-w-7xl   px-10">
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
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-1 py-2"
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
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button
          className="font-nav flex items-center gap-2  px-5 py-3 text-2xl font-semibold tracking-tighter text-white transition-transform hover:scale-105"
          style={{ backgroundColor: RED }}
        >
          START YOUR TRANSFORMATION <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
