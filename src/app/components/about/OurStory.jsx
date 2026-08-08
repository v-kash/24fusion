"use client";

import React from "react";

const RED = "#FF2F31";

const FEATURES = [
  {
    icon: "/about/community.svg",
    title: "A Supportive\nCommunity",
  },
  {
    icon: "/about/gym.svg",
    title: "Expert\nTrainers",
  },
  {
    icon: "/about/target.svg",
    title: "Personalized\nApproach",
  },
  {
    icon: "/about/trophy.svg",
    title: "Real\nResults",
  },
];

export default function OurStory() {
  return (
    <section
      className="relative h-screen py-20 lg:py-16"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Background Image */}
      <img
        src="/about/ourstory.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Small Heading */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16" style={{ backgroundColor: RED }} />
          <span
            className="font-semibold uppercase tracking-widest text-md"
            style={{ color: RED }}
          >
            Our Story
          </span>
          <div className="h-[2px] w-16" style={{ backgroundColor: RED }} />
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h2
            className="font-display text-6xl leading-none text-[#2D2D2D] md:text-6xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            BUILT ON
          </h2>

          <h2
            className="font-display text-7xl leading-none md:text-8xl"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: RED,
            }}
          >
            PASSION.
          </h2>

          <h2
            className="font-display text-6xl leading-none text-[#2D2D2D] md:text-6xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            DRIVEN BY
          </h2>

          <h2
            className="font-display text-7xl leading-none md:text-8xl"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: RED,
            }}
          >
            PURPOSE.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#555] md:text-lg">
            Fusion 24 was created to inspire people to show up, <br /> work
            hard, and achieve their best.
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {FEATURES.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col items-center px-6 text-center ${
                  index !== FEATURES.length - 1
                    ? "md:border-r md:border-gray-300"
                    : ""
                }`}
              >
                <img src={item.icon} alt="" className="mb-5 h-10 w-10" />

                <h3 className="text-sm font-semibold leading-snug text-[#444]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
