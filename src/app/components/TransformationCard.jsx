"use client";
import React from "react";
import { ChevronsRight, Star } from "lucide-react";

const RED = "#CF1213";

// Maps a stat "type" to the local icon file you provided.
const ICON_MAP = {
  weight: "/weighing-scale-1.svg",
  muscle: "/muscles-1.svg",
  burn: "/burning-1.svg",
};

export default function TransformationCard({
  beforeImg,
  afterImg,
  weeks = "12 WEEKS",
  stats = [
    { type: "weight", value: "-12 KG", label: "Weight Lost" },
    { type: "muscle", value: "+5 KG", label: "Strength Gained" },
    { type: "burn", value: "-8%", label: "Body Fat" },
  ],
  quote = "I Became Stronger Every Day, Both Inside And Outside The Gym.",
  name = "Priya Sharma",
  rating = 5,
}) {
  return (
    <div
      className="w-[78vw] max-w-[280px] shrink-0 overflow-hidden bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.08)] sm:w-[260px] md:w-[280px]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
      `}</style>

      {/* Before / after image */}
      <div className="relative m-2 h-[180px] overflow-hidden sm:h-[200px] md:h-[210px]">
        <div className="flex h-full w-full">
          <div className="relative h-full w-1/2 overflow-hidden bg-neutral-100">
            {beforeImg && (
              <img
                src={beforeImg}
                alt={`${name} before`}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="relative h-full w-1/2 overflow-hidden bg-neutral-300">
            {afterImg && (
              <img
                src={afterImg}
                alt={`${name} after`}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Weeks badge */}
        <div
          className="font-nav absolute left-1/2 top-3 -translate-x-[50%] px-2.5 py-1 text-[10px] font-bold tracking-wide text-white sm:px-3 sm:text-xs"
          style={{ backgroundColor: RED }}
        >
          {weeks}
        </div>

        {/* Center divider arrow */}
        <div className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md sm:h-8 sm:w-8">
          <ChevronsRight size={20} color={RED} strokeWidth={2} className="sm:hidden" />
          <ChevronsRight size={24} color={RED} strokeWidth={2} className="hidden sm:block" />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between px-3 py-3 sm:px-4">
        {stats.map((stat, i) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-1 flex-col items-center gap-1 text-center">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full sm:h-8 sm:w-8"
                  style={{ backgroundColor: "#FCE4E2" }}
                >
                  <img src={ICON_MAP[stat.type]} alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>

                <div className="font-display text-sm text-neutral-900 sm:text-base">
                  {stat.value}
                </div>
              </div>

              <div className="font-nav text-[9px] uppercase tracking-wide text-neutral-500 sm:text-[10px]">
                {stat.label}
              </div>
            </div>

            {i < stats.length - 1 && (
              <div className="h-9 w-px shrink-0 bg-neutral-200" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Quote */}
      <div className="px-5 py-3 text-center sm:px-6">
        <p className="text-xs leading-relaxed text-neutral-600 italic sm:text-sm">
          {"“"}{quote}{"”"}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 pb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} color={RED} fill={RED} />
        ))}
      </div>

      {/* Name */}
      <div className="font-nav pb-5 text-center text-xs font-bold text-neutral-900 sm:text-sm">
        {name.toUpperCase()}
      </div>
    </div>
  );
}