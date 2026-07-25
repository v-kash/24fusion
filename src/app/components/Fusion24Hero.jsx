'use client'
import React from "react";
import {
  ArrowRight,
  PlayCircle,
  Users,
  Star,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import Navbar from "./Navbar";

const STATS = [
  { icon: Users, value: "8,000+", label: "Happy Members" },
  { icon: Star, value: "4.9/5", label: "Google Rating" },
  { icon: ShieldCheck, value: "50+", label: "Expert Trainers" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
];

const RED = "#FF2F31";

export default function Fusion24Hero() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Fonts + one-off effects that Tailwind's core utilities can't express */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
        .text-outline {
          -webkit-text-stroke: 1.5px ${RED};
          color: transparent;
        }
        @media (min-width: 768px) {
          .text-outline { -webkit-text-stroke-width: 2.5px; }
        }
      `}</style>

      {/* ---------- Background ---------- */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* ---------- Hero content ---------- */}
        <div className="flex flex-1 flex-col justify-center gap-10 px-6 py-10 md:px-12 xl:flex-row xl:items-center xl:justify-between">
          {/* Left: headline */}
          <div className="max-w-4xl">
            <h1 className="font-nav text-[15vw] leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-8xl">
              BUILD THE
              <br />
              <span className="text-outline tracking-">STRONGEST</span>{" "}
              <span style={{ color: RED }}>VERSION</span>
              <br />
              OF YOURSELF
            </h1>

            <p className="mt-6 max-w-md text-sm text-white/70 md:text-base">
              Join a premium fitness community with expert trainers, world-class
              equipment, personalized programs, and real results.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                className="font-nav flex items-center justify-center gap-2  px-5 py-3 text-2xl font-semibold tracking-tighter text-white transition-transform hover:scale-105"
                style={{ backgroundColor: RED }}
              >
                START YOUR JOURNEY <ArrowRight size={16} />
              </button>
              <button className="font-nav flex items-center justify-center gap-2  bg-white/10 px-5 py-3 text-2xl font-semibold tracking-tighter text-white backdrop-blur transition-colors hover:bg-white/20">
                <PlayCircle size={18} /> WATCH SUCCESS STORIES
              </button>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="w-full max-w-[130px] shrink-0 self-center rounded-br-[18px] rounded-tl-[18px] bg-white/20  backdrop-blur-sm xl:self-auto ">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div key={label}>
                <div className="flex flex-col items-center gap-1 py-4 text-center ">
                  <Icon size={28} color="white" strokeWidth={1.75} />
                  <div className="font-display text-3xl text-white">{value}</div>
                  <div className="font-nav text-xs text-white/60">{label}</div>
                </div>
                {i < STATS.length - 1 && (
                  <div className="h-px w-full bg-white/15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
