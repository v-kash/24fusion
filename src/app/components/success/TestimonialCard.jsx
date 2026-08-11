import React, { useState } from "react";
import { Star } from "lucide-react";

/**
 * TestimonialCard
 * -----------------------------------------------------------------------
 * 3D flip card for client testimonials.
 *  - FRONT: photo, name + location over a bottom gradient.
 *  - BACK: solid dark panel (no photo) — quote icon, name + verified
 *    badge, location, star rating, quote text, then a divided 3-stat row.
 *
 * `defaultFlipped`: renders the BACK at rest, flips to FRONT on
 * hover/focus — used for the featured first card in the carousel.
 *
 * Fixed at 275×361 to match your layout — back-face type scale and
 * spacing below are sized specifically for that footprint. If you
 * resize the card again, these will likely need another pass.
 * -----------------------------------------------------------------------
 */
export default function TestimonialCard({
  image,
  name,
  location,

  quoteIcon = "/success/DoubleQ.svg",
  verifiedIcon = "/success/Verified.svg",
  rating = 5,
  quote,
  stats, // [{ icon, value, label }, { icon, value, label }, { icon, value, label }]

  defaultFlipped = false,
}) {
  const [hovered, setHovered] = useState(false);
  const isFlipped = defaultFlipped ? !hovered : hovered;

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative mx-auto h-[361px] w-[278px] outline-none [perspective:1600px]"
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* ---------------- FRONT — photo ---------------- */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden ring-1 ring-white/10">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.opacity = 0)}
          />
  <div
            className="absolute inset-x-0 bottom-0 h-[32%] bg-black/20 backdrop-blur-xl [mask-image:linear-gradient(to_top,black_0%,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_40%,transparent_100%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className=" text-center absolute inset-x-0 bottom-0 px-5 pb-5">
            <h3 className="font-display text-[20px] font-bold uppercase leading-none tracking-normal text-white">
              {name}
            </h3>
            <p className="mt-1 text-[13px] text-gray-300">{location}</p>
          </div>
        </div>

        {/* ---------------- BACK — testimonial ---------------- */}
        <div className="absolute inset-0 flex flex-col overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#141414] p-5 shadow-[0_0_40px_rgba(207,18,19,0.18)]">
  
  {/* Fading Border Element */}
  <div className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-red-600/50 [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]"></div>

  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ">
    <img
      src={quoteIcon}
      alt=""
      className="h-9 w-9"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  </div>

  <div className="mt-3 flex items-center gap-1.5">
    <h3 className="font-display text-[17px] font-bold uppercase leading-none tracking-normal text-white pt-1">
      {name}
    </h3>
    <img
      src={verifiedIcon}
      alt="Verified"
      className="h-4 w-4 "
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  </div>
  <p className="mt-1 text-[12px] text-gray-400">{location}</p>

  <div className="mt-1.5 flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={12}
        className={
          i < rating
            ? "fill-amber-400 text-amber-400"
            : "fill-transparent text-gray-600"
        }
      />
    ))}
  </div>

  <p className="mt-3 flex-1 overflow-hidden text-[12.5px] leading-[18px] text-gray-300">
    {quote}
  </p>

  <div className="mt-3 border-t border-white/10 pt-3">
    <div className="flex divide-x divide-white/10">
      {stats?.map((s, i) => (
        <Stat key={i} {...s} />
      ))}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-1 flex-col gap-1 px-2 first:pl-0 last:pr-0 ">
      <div className="flex items-center gap-1">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white/10">
          <img
            src={icon}
            alt=""
            className="h-4 w-4"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </span>
        <span className="whitespace-nowrap text-[13px] font-bold text-white">
          {value}
        </span>
      </div>
      <span className="text-[8px] font-medium uppercase leading-tight tracking-wide text-gray-500">
        {label}
      </span>
    </div>
  );
}