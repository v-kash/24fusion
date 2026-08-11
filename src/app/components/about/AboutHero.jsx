"use client";

import React from "react";
import {
  ArrowRight,
  Users,
  Star,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

const STATS = [
  { icon: Users, value: "8,000+", label: "Happy Members" },
  { icon: Star, value: "4.9/5", label: "Google Rating" },
  { icon: ShieldCheck, value: "50+", label: "Expert Trainers" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
];

const RED = "#FF2F31";

export default function AboutHero() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display {
          font-family: 'Bebas Neue', sans-serif;
        }

        .font-nav {
          font-family: 'Raleway', sans-serif;
        }

        .text-outline {
          -webkit-text-stroke: 1.5px ${RED};
          color: transparent;
        }

        @media (min-width: 768px) {
          .text-outline {
            -webkit-text-stroke-width: 2.5px;
          }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/about/abouthero.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col justify-center gap-10 px-6 py-10 md:px-16 xl:flex-row xl:items-center xl:justify-between">
          {/* Left: headline */}
          <div className="max-w-4xl">
            <h1 className="font-display text-[15vw] leading-[0.95] tracking-tight text-white sm:text-6xl md:text-[110px]">
              More Than a Gym
              <br />

              <span style={{ color: RED }}>
                A Place to Become Your{" "}
              </span>

              <span className="text-outline">
                Strongest Self
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm text-white/70 md:text-[20px]">
              At Fusion 24 Fitness Studio, we believe fitness is more than
              lifting weights — it's about building confidence, discipline,
              and a healthier lifestyle. Every workout brings you closer to
              your best self.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                className="font-display flex items-center justify-center gap-2 px-8 py-3 text-3xl tracking-tight text-white transition-transform hover:scale-105"
                style={{ backgroundColor: RED }}
              >
                Join Today <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}