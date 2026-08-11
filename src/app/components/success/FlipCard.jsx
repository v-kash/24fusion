import React, { useState } from "react";

/**
 * FlipCard
 * -----------------------------------------------------------------------
 * Generic 3D flip card — front = image + badge icon + title + subtitle,
 * back = image + title + subtitle + a 3-stat row. Used across the
 * "Success Stories" grid, one card per story.
 *
 * - `defaultFlipped`: renders the BACK face at rest and flips to the
 *   FRONT on hover/focus (used for the featured "Weight Gain" card).
 *   Leave false for the normal front-at-rest cards.
 * - Swap image/icon props for files in your /public folder.
 * -----------------------------------------------------------------------
 */
export default function FlipCard({
  frontImage,
  frontTitle,
  frontSubtitle,
  badgeIcon = "/success/D.svg",

  backImage,
  backTitle,
  backSubtitle,
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
      className="relative mx-auto w-full max-w-[400px] aspect-[30/35] outline-none [perspective:1600px]"
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ---------------- FRONT ---------------- */}
        <div className="absolute inset-0 [backface-visibility:hidden]  overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/15">
          <div className="relative h-full w-full">
            <img
              src={frontImage}
              alt={frontTitle}
              className="absolute inset-0 h-full w-full object-cover object-top"
              onError={(e) => (e.currentTarget.style.opacity = 0)}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_50%,rgba(255,255,255,0.7)_88%,#ffffff_100%)]" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-6">
              <div className="-mt-7 mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-600 bg-white shadow-md">
                <img
                  src={badgeIcon}
                  alt=""
                  className="h-8 w-8"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              <h3 className="fc-display text-[24px] font-bold uppercase leading-none tracking-wide text-red-600">
                {frontTitle}
              </h3>

              <p className="mt-3 max-w-[85%] text-center text-[15px] leading-snug text-gray-500">
                {frontSubtitle}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- BACK ---------------- */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden bg-black shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
  <div className="relative h-full w-full">
    <img
      src={backImage}
      alt={backTitle}
      className="absolute inset-0 h-full w-full object-cover"
      onError={(e) => (e.currentTarget.style.opacity = 0)}
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_75%,rgba(0,0,0,0.8)_88%,#000000_100%)]" />

    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-6">
      <h3 className="fc-display text-[26px] font-bold uppercase leading-none tracking-normal text-white">
        {backTitle}
      </h3>

      <p className="mt-3 max-w-[90%] text-center text-[15px] leading-snug text-gray-300">
        {backSubtitle}
      </p>

      {stats?.length === 3 && (
        <>
          <div className="mt-4 w-full border-t border-white/15" />
          <div className="mt-4 grid w-full grid-cols-3 gap-2">
            {stats.map((s, i) => (
              <Stat key={i} {...s} />
            ))}
          </div>
        </>
      )}

      <div className="mt-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </div>

    {/* Fading Border Element */}
    <div className="pointer-events-none absolute inset-0 border-[1.5px] border-[#CF1213] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)]"></div>
  </div>
</div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full  bg-white/15">
          <img
            src={icon}
            alt=""
            className="h-5.5 w-5.5"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </span>
        <span className="whitespace-nowrap text-[18px] font-bold text-white">
          {value}
        </span>
      </div>
      <span className="text-center text-[12px] font-medium uppercase tracking-wide text-gray-400">
        {label}
      </span>
    </div>
  );
}
