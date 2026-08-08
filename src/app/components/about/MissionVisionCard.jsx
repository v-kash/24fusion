"use client";

import React from "react";

const RED = "#FF2F31";

export default function MissionVisionCard({
  image,
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-black">
      {/* Background Image */}
      <img
        src={image}
        alt={badge}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[650px] flex-col justify-end px-8 pb-10 text-center">
        {/* Badge */}
        <div className="mx-auto mb-8 inline-flex bg-white px-8 py-3">
          <span
            className="font-display text-4xl text-[#222]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-display text-5xl leading-[0.9] text-white md:text-6xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {title}
        </h2>

        <h2
          className="font-display mt-2 text-5xl leading-[0.9] md:text-6xl"
          style={{
            color: RED,
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          {highlight}
        </h2>

        {/* Divider */}
        <div
          className="mx-auto my-6 h-[2px] w-24"
          style={{ backgroundColor: RED }}
        />

        {/* Description */}
        <p className="mx-auto max-w-md text-base leading-8 text-white/75 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}