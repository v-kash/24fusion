// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const RED = "#FF2F31";
// const AUTOPLAY_MS = 6000;
// const ENTER_MS = 800;
// const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
// const TOTAL_MS = AUTOPLAY_MS + ENTER_MS;
// const ENTER_PCT = ((ENTER_MS / TOTAL_MS) * 100).toFixed(2);

// const SLOT = 13; // rem
// const GAP = 2; // rem
// const STEP = SLOT + GAP;

// const FACILITIES = [
//   {
//     key: "swimming",
//     title: "SWIMMING",
//     tagline: "REFRESH. RECHARGE. REPEAT.",
//     desc: "Dive Into Our Premium Swimming Pool, Designed For Both Performance And Relaxation. Perfect For Lap Swimming, Low-Impact Workouts, Or Simply Enjoying A Refreshing Escape.",
//     thumbDesc:
//       "Premium Indoor Pool Designed For Performance Training, Recovery, And Relaxation.",
//     bgImg: "/facilities/swimming-wide.png",
//     cardImg: "/facilities/swimming-card.png",
//   },
//   {
//     key: "sauna",
//     title: "SAUNA",
//     tagline: "RELAX. RECOVER. REJUVENATE.",
//     desc: "Escape The Everyday And Unwind In Our Premium Sauna. Ease Muscle Tension, Promote Recovery, Reduce Stress, And Leave Feeling Refreshed, Restored, And Ready For Your Next Workout.",
//     thumbDesc: "Relax, Detox, And Rejuvenate Your Body And Mind.",
//     bgImg: "/facilities/sauna-wide.png",
//     cardImg: "/facilities/sauna-card.png",
//   },
//   {
//     key: "locker",
//     title: "LOCKER",
//     tagline: "SECURE. CLEAN. COMFORTABLE.",
//     desc: "Spacious Lockers For Your Belongings With Maximum Security And Convenience While You Focus On Your Fitness Goals.",
//     thumbDesc: "Secure, Clean, And Spacious Lockers For Your Comfort.",
//     bgImg: "/facilities/locker-wide.png",
//     cardImg: "/facilities/locker-card.png",
//   },
//   {
//     key: "yoga",
//     title: "YOGA",
//     tagline: "BALANCE. STRENGTH. INNER PEACE.",
//     desc: "Rejuvenate Your Body And Mind With Our Expert-Led Yoga Sessions. Improve Flexibility, Reduce Stress, And Find Your Inner Balance In A Peaceful Environment.",
//     thumbDesc: "Find Balance, Improve Flexibility, And Calm Your Mind.",
//     bgImg: "/facilities/yoga-wide.png",
//     cardImg: "/facilities/yoga-card.png",
//   },
//   {
//     key: "cardio",
//     title: "CARDIO ZONE",
//     tagline: "ELEVATE YOUR ENDURANCE.",
//     desc: "State-Of-The-Art Cardio Equipment Designed To Boost Endurance, Burn Calories, And Keep You Moving Toward Your Fitness Goals.",
//     thumbDesc: "Top Cardio Equipment To Boost Endurance And Stamina.",
//     bgImg: "/facilities/cardio-wide.png",
//     cardImg: "/facilities/cardio-card.png",
//   },
//   {
//     key: "crossfit",
//     title: "CROSSFIT",
//     tagline: "STRENGTH. ENDURANCE. GRIT.",
//     desc: "High-Intensity Functional Training Designed To Push Your Limits. Build Strength, Endurance, And Mental Toughness Through Dynamic, Ever-Changing Workouts.",
//     thumbDesc: "High-Intensity Workouts To Challenge Your Limits Every Day.",
//     bgImg: "/facilities/crossfit-wide.png",
//     cardImg: "/facilities/crossfit-card.png",
//   },
//   {
//     key: "strength-training",
//     title: "STRENGTH TRAINING",
//     tagline: "STRONGER THAN YESTERDAY.",
//     desc: "Push Past Your Limits In Our Fully-Equipped Strength Zone. Premium Racks, Free Weights, And Machines Built For Serious, Sustainable Progress.",
//     thumbDesc: "Premium Equipment Built For Progressive Strength Gains.",
//     bgImg: "/facilities/strength-wide.png",
//     cardImg: "/facilities/strength-card.png",
//   },
//   {
//     key: "nutrition-bar",
//     title: "NUTRITION BAR",
//     tagline: "FUEL. REFUEL. THRIVE.",
//     desc: "Refuel After Your Workout With Fresh, Nutrient-Packed Meals And Smoothies Crafted To Support Your Fitness Goals.",
//     thumbDesc: "Fresh, Healthy Fuel To Support Your Fitness Journey.",
//     bgImg: "/facilities/cafe-wide.png",
//     cardImg: "/facilities/cafe-card.png",
//   },
// ];

// export default function FacilitiesShowcase() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   const goTo = (i) =>
//     setActive(
//       ((i % FACILITIES.length) + FACILITIES.length) % FACILITIES.length,
//     );

//   useEffect(() => {
//     if (paused) return;
//     timeoutRef.current = setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
//     return () => clearTimeout(timeoutRef.current);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [active, paused]);

//   return (
//     <section
//       className="relative h-[600px] w-full overflow-hidden bg-black md:h-[720px]"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
//         .font-display { font-family: 'Anton', sans-serif; }
//         .font-nav { font-family: 'Oswald', sans-serif; }
//         .font-body { font-family: 'Poppins', sans-serif; }

//         @keyframes fsSlideUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .fs-slide-up {
//           opacity: 0;
//           animation: fsSlideUp ${ENTER_MS}ms ${EASE} forwards;
//         }

//         @keyframes fsBgMove {
//           0%                 { transform: scale(1.02) translateX(3%); }
//           ${ENTER_PCT}%       { transform: scale(1)    translateX(0%); }
//           100%                { transform: scale(1.1)  translateX(0%); }
//         }
//         .fs-bg-move {
//           animation: fsBgMove ${TOTAL_MS}ms ${EASE} forwards;
//         }
//       `}</style>

//       {/* Big, full-bleed crossfading background */}
//       {FACILITIES.map((f, i) => (
//         <div
//           key={f.key}
//           className="absolute inset-0"
//           style={{
//             opacity: active === i ? 1 : 0,
//             transition: `opacity ${ENTER_MS}ms ${EASE}`,
//           }}
//         >
//           <img
//             key={active === i ? `bg-${active}` : "idle"}
//             src={f.bgImg}
//             alt={f.title}
//             className={`h-full w-full object-cover ${active === i ? "fs-bg-move" : ""}`}
//           />
//         </div>
//       ))}

//       {/* Readability overlay */}
// <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 via-black/90 to-transparent" />
//       {/* Foreground content */}
//       <div className="relative z-10 flex h-full flex-col justify-end gap-8 px-6 pb-10 md:flex-row md:items-end md:justify-between md:px-14 md:pb-14">
//         {/* Text block */}
//         <div key={active} className="max-w-xl">   
//           <div className="fs-slide-up flex items-center gap-3">
//             <span
//               className="font-nav text-sm font-bold tracking-[0.2em]"
//               style={{ color: RED }}
//             >
//               EXPERIENCE
//             </span>
//             <span className="h-px w-24 bg-white/30" />
//           </div>

//           <h2
//             className="fs-slide-up font-display mt-2 text-6xl uppercase leading-none text-white md:text-8xl"
//             style={{ animationDelay: "80ms" }}
//           >
//             {FACILITIES[active].title}
//           </h2>

//           <div
//             className="fs-slide-up font-nav mt-4 text-lg font-bold uppercase tracking-wide md:text-xl"
//             style={{ color: RED, animationDelay: "160ms" }}
//           >
//             {FACILITIES[active].tagline}
//           </div>

//           <p
//             className="fs-slide-up font-body mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base"
//             style={{ animationDelay: "240ms" }}
//           >
//             {FACILITIES[active].desc}
//           </p>
//         </div>

//         {/* Desktop: sliding filmstrip */}
//         <div
//           className="relative hidden shrink-0 md:block"
//           style={{
//             width: `${SLOT * 3 + GAP * 2}rem`,
//             overflowX: "hidden",
//             overflowY: "visible",
//           }}
//         >
//           <div
//             className="flex items-end"
//             style={{
//               gap: `${GAP}rem`,
//               transform: `translateX(-${active * STEP}rem)`,
//               transition: `transform ${ENTER_MS}ms ${EASE}`,
//             }}
//           >
//             {FACILITIES.map((f, i) => {
//               const isActive = i === active;
//               return (
//                 <button
//                   key={f.key}
//                   onClick={() => goTo(i)}
//                   className="group relative shrink-0 overflow-hidden rounded-lg text-left backdrop-blur-sm"
//                   style={{
//                     width: `${SLOT}rem`,
//                     height: isActive ? `${SLOT * 1.5}rem` : `${SLOT * 1.36}rem`,
//                     transform: isActive ? "scale(1.1)" : "scale(1)",
//                     transformOrigin: "left bottom",
//                     opacity: isActive ? 1 : 0.55,
//                     zIndex: isActive ? 30 : 10,
//                     boxShadow: isActive
//                       ? "0 25px 50px -12px rgba(0,0,0,0.8)"
//                       : "none",
//                     transition: `transform ${ENTER_MS}ms ${EASE}, opacity ${ENTER_MS}ms ${EASE}, box-shadow ${ENTER_MS}ms ${EASE}, height ${ENTER_MS}ms ${EASE}`,
//                   }}
//                 >
//                   <img
//                     src={f.cardImg}
//                     alt={f.title}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

//                   <div className="relative z-10 flex h-full flex-col justify-end p-3">
//                     <div className="font-display text-lg uppercase tracking-wide text-white">
//                       {f.title}
//                     </div>
//                     <p
//                       className={`font-body mt-1 text-[10px] leading-snug transition-colors duration-300 ${isActive ? "text-white/80" : "text-white/40"}`}
//                     >
//                       {f.thumbDesc}
//                     </p>
//                   </div>

//                   {/* Redline removed from here */}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile: single active card */}
//         <button
//           key={`mobile-${active}`}
//           onClick={() => goTo(active + 1)}
//           className="fs-slide-up relative block h-64 w-full shrink-0 overflow-hidden rounded-lg text-left md:hidden"
//           style={{ animationDelay: "120ms" }}
//         >
//           <img
//             src={FACILITIES[active].cardImg}
//             alt={FACILITIES[active].title}
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//           <div className="relative z-10 flex h-full flex-col justify-end p-4">
//             <div className="font-display text-xl uppercase text-white">
//               {FACILITIES[active].title}
//             </div>
//             <p className="font-body mt-1 text-xs leading-snug text-white/80">
//               {FACILITIES[active].thumbDesc}
//             </p>
//           </div>

//           {/* Redline removed from here */}
//         </button>
//       </div>
//     </section>
//   );
// }



'use client'
import React, { useEffect, useRef, useState } from "react";

const RED = "#FF2F31";
const AUTOPLAY_MS = 6000;
const ENTER_MS = 800;
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const TOTAL_MS = AUTOPLAY_MS + ENTER_MS;
const ENTER_PCT = ((ENTER_MS / TOTAL_MS) * 100).toFixed(2);

const SLOT = 13; // rem
const GAP = 2; // rem
const STEP = SLOT + GAP;

const FACILITIES = [
  {
    key: "swimming",
    title: "SWIMMING",
    tagline: "REFRESH. RECHARGE. REPEAT.",
    desc: "Dive Into Our Premium Swimming Pool, Designed For Both Performance And Relaxation. Perfect For Lap Swimming, Low-Impact Workouts, Or Simply Enjoying A Refreshing Escape.",
    thumbDesc: "Premium Indoor Pool Designed For Performance Training, Recovery, And Relaxation.",
    bgImg: "/facilities/swimming-wide.png",
    cardImg: "/facilities/swimming-card.png",
  },
  {
    key: "sauna",
    title: "SAUNA",
    tagline: "RELAX. RECOVER. REJUVENATE.",
    desc: "Escape The Everyday And Unwind In Our Premium Sauna. Ease Muscle Tension, Promote Recovery, Reduce Stress, And Leave Feeling Refreshed, Restored, And Ready For Your Next Workout.",
    thumbDesc: "Relax, Detox, And Rejuvenate Your Body And Mind.",
    bgImg: "/facilities/sauna-wide.png",
    cardImg: "/facilities/sauna-card.png",
  },
  {
    key: "locker",
    title: "LOCKER",
    tagline: "SECURE. CLEAN. COMFORTABLE.",
    desc: "Spacious Lockers For Your Belongings With Maximum Security And Convenience While You Focus On Your Fitness Goals.",
    thumbDesc: "Secure, Clean, And Spacious Lockers For Your Comfort.",
    bgImg: "/facilities/locker-wide.png",
    cardImg: "/facilities/locker-card.png",
  },
  {
    key: "yoga",
    title: "YOGA",
    tagline: "BALANCE. STRENGTH. INNER PEACE.",
    desc: "Rejuvenate Your Body And Mind With Our Expert-Led Yoga Sessions. Improve Flexibility, Reduce Stress, And Find Your Inner Balance In A Peaceful Environment.",
    thumbDesc: "Find Balance, Improve Flexibility, And Calm Your Mind.",
    bgImg: "/facilities/yoga-wide.png",
    cardImg: "/facilities/yoga-card.png",
  },
  {
    key: "cardio",
    title: "CARDIO ZONE",
    tagline: "ELEVATE YOUR ENDURANCE.",
    desc: "State-Of-The-Art Cardio Equipment Designed To Boost Endurance, Burn Calories, And Keep You Moving Toward Your Fitness Goals.",
    thumbDesc: "Top Cardio Equipment To Boost Endurance And Stamina.",
    bgImg: "/facilities/cardio-wide.png",
    cardImg: "/facilities/cardio-card.png",
  },
  {
    key: "crossfit",
    title: "CROSSFIT",
    tagline: "STRENGTH. ENDURANCE. GRIT.",
    desc: "High-Intensity Functional Training Designed To Push Your Limits. Build Strength, Endurance, And Mental Toughness Through Dynamic, Ever-Changing Workouts.",
    thumbDesc: "High-Intensity Workouts To Challenge Your Limits Every Day.",
    bgImg: "/facilities/crossfit-wide.png",
    cardImg: "/facilities/crossfit-card.png",
  },
  {
    key: "strength-training",
    title: "STRENGTH TRAINING",
    tagline: "STRONGER THAN YESTERDAY.",
    desc: "Push Past Your Limits In Our Fully-Equipped Strength Zone. Premium Racks, Free Weights, And Machines Built For Serious, Sustainable Progress.",
    thumbDesc: "Premium Equipment Built For Progressive Strength Gains.",
    bgImg: "/facilities/strength-wide.png",
    cardImg: "/facilities/strength-card.png",
  },
  {
    key: "nutrition-bar",
    title: "NUTRITION BAR",
    tagline: "FUEL. REFUEL. THRIVE.",
    desc: "Refuel After Your Workout With Fresh, Nutrient-Packed Meals And Smoothies Crafted To Support Your Fitness Goals.",
    thumbDesc: "Fresh, Healthy Fuel To Support Your Fitness Journey.",
    bgImg: "/facilities/cafe-wide.png",
    cardImg: "/facilities/cafe-card.png",
  },
];

// Duplicate array to create the illusion of an infinite track
const TRACK_ITEMS = [...FACILITIES, ...FACILITIES];

export default function FacilitiesShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const timeoutRef = useRef(null);

  const currentFacilityIndex = active % FACILITIES.length;

  const goTo = (i) => {
    setNoTransition(false); // Ensure animation plays when clicking
    setActive(i);
  };

  // Autoplay logic
  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => setActive((prev) => prev + 1), AUTOPLAY_MS);
    return () => clearTimeout(timeoutRef.current);
  }, [active, paused]);

  // Infinite Loop Snap Logic
  useEffect(() => {
    // If we've scrolled into the duplicated set, wait for the slide to finish, then snap back instantly
    if (active >= FACILITIES.length) {
      const snapTimer = setTimeout(() => {
        setNoTransition(true);
        setActive(active % FACILITIES.length);
      }, ENTER_MS); // Wait for the 800ms transition to finish
      return () => clearTimeout(snapTimer);
    }
  }, [active, ENTER_MS]);

  // Reset the instant-snap flag so the next animation plays normally
  useEffect(() => {
    if (noTransition) {
      const resetTimer = setTimeout(() => setNoTransition(false), 50);
      return () => clearTimeout(resetTimer);
    }
  }, [noTransition]);

  return (
    <section
      className="relative h-[600px] w-full overflow-hidden bg-black md:h-[720px]"
      style={{ fontFamily: "'Raleway', sans-serif" }}
      // NOTE: pause/resume listeners were removed from here.
      // They used to cover the whole section, so autoplay froze
      // the instant the cursor entered ANY part of the banner.
      // They're now scoped to just the filmstrip/mobile card below.
    >
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
        .font-body { font-family: 'Raleway', sans-serif; }

        @keyframes fsSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fs-slide-up {
          opacity: 0;
          animation: fsSlideUp ${ENTER_MS}ms ${EASE} forwards;
        }

        @keyframes fsBgMove {
          0%                 { transform: scale(1.02) translateX(3%); }
          ${ENTER_PCT}%       { transform: scale(1)    translateX(0%); }
          100%                { transform: scale(1.1)  translateX(0%); }
        }
        .fs-bg-move {
          animation: fsBgMove ${TOTAL_MS}ms ${EASE} forwards;
        }
      `}</style>

      {/* Big, full-bleed crossfading background */}
      {FACILITIES.map((f, i) => (
        <div
          key={f.key}
          className="absolute inset-0"
          style={{
            opacity: currentFacilityIndex === i ? 1 : 0,
            transition: `opacity ${ENTER_MS}ms ${EASE}`,
          }}
        >
          <img
            key={currentFacilityIndex === i ? `bg-${currentFacilityIndex}` : "idle"}
            src={f.bgImg}
            alt={f.title}
            className={`h-full w-full object-cover ${currentFacilityIndex === i ? "fs-bg-move" : ""}`}
          />
        </div>
      ))}

      {/* Readability overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 via-black/90 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full flex-col justify-end gap-8 px-6 pb-10 md:flex-row md:items-end md:justify-between md:px-16 md:pb-14">
        {/* Text block */}
        <div key={currentFacilityIndex} className="max-w-xl">
          <div className="fs-slide-up flex items-center gap-3">
            <span
              className="font-nav text-sm font-bold tracking-[0.2em]"
              style={{ color: RED }}
            >
              EXPERIENCE
            </span>
            <span className="h-px w-24 bg-white/30" />
          </div>

          <h2
            className="fs-slide-up font-display mt-2 text-6xl uppercase leading-none text-white md:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            {FACILITIES[currentFacilityIndex].title}
          </h2>

          <div
            className="fs-slide-up font-nav mt-4 text-lg font-bold uppercase tracking-wide md:text-xl"
            style={{ color: RED, animationDelay: "160ms" }}
          >
            {FACILITIES[currentFacilityIndex].tagline}
          </div>

          <p
            className="fs-slide-up font-body mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base"
            style={{ animationDelay: "240ms" }}
          >
            {FACILITIES[currentFacilityIndex].desc}
          </p>
        </div>

        {/* Desktop: sliding filmstrip */}
        <div
          className="relative hidden shrink-0 md:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            width: `${SLOT * 3 + GAP * 2}rem`,
            overflowX: "hidden",
            overflowY: "visible",
          }}
        >
          <div
            className="flex items-end"
            style={{
              gap: `${GAP}rem`,
              transform: `translateX(-${active * STEP}rem)`,
              transition: noTransition ? "none" : `transform ${ENTER_MS}ms ${EASE}`,
            }}
          >
            {/* Map over duplicated TRACK_ITEMS for infinite effect */}
            {TRACK_ITEMS.map((f, i) => {
              const isActive = i === active;
              return (
                <button
                  key={`${f.key}-${i}`} // Unique keys for duplicated items
                  onClick={() => goTo(i)}
                  className="group relative shrink-0 overflow-hidden rounded-lg text-left backdrop-blur-sm"
                  style={{
                    width: `${SLOT}rem`,
                    height: isActive ? `${SLOT * 1.5}rem` : `${SLOT * 1.36}rem`,
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transformOrigin: "left bottom",
                    opacity: isActive ? 1 : 0.55,
                    zIndex: isActive ? 30 : 10,
                    boxShadow: isActive ? "0 25px 50px -12px rgba(0,0,0,0.8)" : "none",
                    transition: `transform ${ENTER_MS}ms ${EASE}, opacity ${ENTER_MS}ms ${EASE}, box-shadow ${ENTER_MS}ms ${EASE}, height ${ENTER_MS}ms ${EASE}`,
                  }}
                >
                  <img
                    src={f.cardImg}
                    alt={f.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="relative z-10 flex h-full flex-col justify-end p-3">
                    <div className="font-display text-lg uppercase tracking-wide text-white">
                      {f.title}
                    </div>
                    <p
                      className={`font-body mt-1 text-[10px] leading-snug transition-colors duration-300 ${
                        isActive ? "text-white/80" : "text-white/40"
                      }`}
                    >
                      {f.thumbDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: single active card */}
        <button
          key={`mobile-${currentFacilityIndex}`}
          onClick={() => goTo(active + 1)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="fs-slide-up relative block h-64 w-full shrink-0 overflow-hidden rounded-lg text-left md:hidden"
          style={{ animationDelay: "120ms" }}
        >
          <img
            src={FACILITIES[currentFacilityIndex].cardImg}
            alt={FACILITIES[currentFacilityIndex].title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-4">
            <div className="font-display text-xl uppercase text-white">
              {FACILITIES[currentFacilityIndex].title}
            </div>
            <p className="font-body mt-1 text-xs leading-snug text-white/80">
              {FACILITIES[currentFacilityIndex].thumbDesc}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}