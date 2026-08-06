// 'use client'
// import React from "react";
// import { Check, X, Zap, ArrowRight } from "lucide-react";

// const RED = "#CF1213";
// const DARK = "#1A1A1A";

// const PLANS = [
//   {
//     name: "BASIC",
//     price: "₹1,499",
//     desc: "Perfect For Beginners Ready To Build Healthy Habits And Start Their Fitness Journey With Confidence.",
//     cta: "CHOOSE BASIC",
//     highlighted: false,
//     features: [
//       { text: "Full Gym Access", included: true },
//       { text: "Premium Equipment Usage", included: true },
//       { text: "Locker Room Access", included: true },
//       { text: "One Complimentary Fitness Assessment", included: true },
//       { text: "Personal Training Not Included", included: true },
//       { text: "Beginner Workout Plan", included: true },
//       { text: "Free Wi-Fi & Drinking Water", included: true },
//       { text: "Personal Training Not Included", included: false },
//     ],
//   },
//   {
//     name: "PREMIUM",
//     price: "₹2,499",
//     desc: "Achieve Faster Results With Personalized Coaching, Expert Guidance, And Premium Member Benefits.",
//     cta: "CHOOSE PREMIUM",
//     highlighted: true,
//     badge: "Most Recommended",
//     features: [
//       { text: "Everything in Basic", included: true },
//       { text: "Personalized Workout Program", included: true },
//       { text: "Customized Nutrition Guidance", included: true },
//       { text: "Unlimited Group Fitness Classes", included: true },
//       { text: "Two Personal Training Sessions Every Month", included: true },
//       { text: "Monthly Body Composition Analysis", included: true },
//       { text: "Priority Member Support", included: true },
//     ],
//   },
//   {
//     name: "ELITE",
//     price: "₹3,999",
//     desc: "Experience The Ultimate Fitness Journey With Unlimited Coaching, Premium Recovery, And VIP Benefits.",
//     cta: "CHOOSE ELITE",
//     highlighted: false,
//     features: [
//       { text: "Everything in Premium", included: true },
//       { text: "Unlimited Personal Training Sessions", included: true },
//       { text: "Advanced Body Composition Analysis", included: true },
//       { text: "Fully Customized Nutrition Plan", included: true },
//       { text: "Recovery Zone & Stretching Area Access", included: true },
//       { text: "Two Guest Passes Every Month", included: true },
//       { text: "Priority Booking for Classes & Exclusive Member Events", included: true },
//     ],
//   },
// ];

// function PlanCard({ plan }) {
//   const { name, price, desc, cta, features, highlighted, badge } = plan;

//   const card = (
//     <div className={`flex h-full flex-col p-8  ${highlighted ? "" : "rounded-xl]"}`}>
//       <h3 className="font-display text-3xl tracking-wide" style={{ color: DARK }}>
//         {name}
//       </h3>

//       <div className="mt-4 flex items-baseline gap-1">
//         <span className="font-display text-4xl md:text-5xl" style={{ color: DARK }}>
//           {price}
//         </span>
//         <span className="font-body text-sm text-neutral-500">/ month</span>
//       </div>

//       <p className="font-body mt-4 text-sm leading-relaxed text-neutral-500">
//         {desc}
//       </p>

//       <button
//         className={`font-display mt-6 flex items-center justify-center gap-2  border py-3 text-xl tracking-wide transition-transform hover:scale-[1.02] ${
//           highlighted
//             ? "border-transparent text-white"
//             : "border-neutral-800 bg-white text-neutral-900"
//         }`}
//         style={highlighted ? { backgroundColor: RED } : undefined}
//       >
//         {cta} <ArrowRight size={16} />
//       </button>

//       <ul className="font-body mt-7 flex flex-col gap-3">
//         {features.map((f, i) => (
//           <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
//             <span
//               className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
//               style={{ backgroundColor: f.included ? RED : "#4B4B4B" }}
//             >
//               {f.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
//             </span>
//             <span>{f.text}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   if (highlighted) {
//     return (
//       <div className="relative overflow-hidden rounded-[4px] border-2 bg-white shadow-xl lg:-mt-6" style={{ borderColor: RED }}>
//         <div
//           className="font-display flex items-center justify-center gap-2 py-4 text-lg tracking-wide text-white"
//           style={{ backgroundColor: RED }}
//         >
//           <Zap size={16} fill="white" /> {badge}
//         </div>
//         {card}
//       </div>
//     );
//   }

//   return (
//     <div className="rounded-[4px] border border-neutral-200 bg-white shadow-sm">
//       {card}
//     </div>
//   );
// }

// export default function PricingSection() {
//   return (
//     <section
//       className="w-full bg-white px-6 py-16 md:px-12"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
//         .font-display { font-family: 'Anton', sans-serif; }
//         .font-nav { font-family: 'Oswald', sans-serif; }
//         .font-body { font-family: 'Poppins', sans-serif; }
//       `}</style>

//       {/* Header */}
//       <div className="mx-auto max-w-7xl text-center">
//         <div
//           className="font-nav flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em]"
//           style={{ color: RED }}
//         >
//           <span className="h-px w-10" style={{ backgroundColor: RED }} />
//           MEMBERSHIP PLANS
//           <span className="h-px w-10" style={{ backgroundColor: RED }} />
//         </div>

//        <h2 className="font-display mt-5 text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
//   <span style={{ color: DARK }}>CHOOSE YOUR PLAN. </span>
//   <span style={{ color: RED }}>START TODAY.</span>
// </h2>
//         <p className="font-body mt-4 text-base text-neutral-500 md:text-lg">
//           Flexible Memberships. Premium Facilities. Real Results.
//         </p>
//       </div>

//       {/* Plans */}
//       <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-3">
//         {PLANS.map((plan) => (
//           <PlanCard key={plan.name} plan={plan} />
//         ))}
//       </div>
//     </section>
//   );
// }


'use client'
import React, { useState } from "react";
import { Check, X, Zap, ArrowRight } from "lucide-react";

const RED = "#CF1213";
const DARK = "#1A1A1A";

const PLANS = [
  {
    name: "BASIC",
    price: "₹1,499",
    desc: "Perfect For Beginners Ready To Build Healthy Habits And Start Their Fitness Journey With Confidence.",
    cta: "CHOOSE BASIC",
    highlighted: false,
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Premium Equipment Usage", included: true },
      { text: "Locker Room Access", included: true },
      { text: "One Complimentary Fitness Assessment", included: true },
      { text: "Beginner Workout Plan", included: true },
      { text: "Free Wi-Fi & Drinking Water", included: true },
      { text: "Personal Training Not Included", included: false },
    ],
  },
  {
    name: "PREMIUM",
    price: "₹2,499",
    desc: "Achieve Faster Results With Personalized Coaching, Expert Guidance, And Premium Member Benefits.",
    cta: "CHOOSE PREMIUM",
    highlighted: true,
    badge: "Most Recommended",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Personalized Workout Program", included: true },
      { text: "Customized Nutrition Guidance", included: true },
      { text: "Unlimited Group Fitness Classes", included: true },
      { text: "Two Personal Training Sessions Every Month", included: true },
      { text: "Monthly Body Composition Analysis", included: true },
      { text: "Priority Member Support", included: true },
    ],
  },
  {
    name: "ELITE",
    price: "₹3,999",
    desc: "Experience The Ultimate Fitness Journey With Unlimited Coaching, Premium Recovery, And VIP Benefits.",
    cta: "CHOOSE ELITE",
    highlighted: false,
    features: [
      { text: "Everything in Premium", included: true },
      { text: "Unlimited Personal Training Sessions", included: true },
      { text: "Advanced Body Composition Analysis", included: true },
      { text: "Fully Customized Nutrition Plan", included: true },
      { text: "Recovery Zone & Stretching Area Access", included: true },
      { text: "Two Guest Passes Every Month", included: true },
      { text: "Priority Booking for Classes & Exclusive Member Events", included: true },
    ],
  },
];

// Unified data for the Tablet Comparison Table
const COMPARISON_ROWS = [
  { feature: "Full Gym Access", basic: true, premium: true, elite: true },
  { feature: "Premium Equipment", basic: true, premium: true, elite: true },
  { feature: "Locker Room Access", basic: true, premium: true, elite: true },
  { feature: "Fitness Assessment", basic: "1x Free", premium: "Monthly", elite: "Advanced" },
  { feature: "Workout Plan", basic: "Beginner", premium: "Personalized", elite: "Customized" },
  { feature: "Nutrition Guidance", basic: false, premium: "Basic", elite: "Fully Custom" },
  { feature: "Group Classes", basic: false, premium: "Unlimited", elite: "Unlimited" },
  { feature: "Personal Training", basic: false, premium: "2 / month", elite: "Unlimited" },
  { feature: "Body Composition", basic: false, premium: "Monthly", elite: "Advanced" },
  { feature: "Recovery Zone", basic: false, premium: false, elite: true },
  { feature: "Guest Passes", basic: false, premium: false, elite: "2 / month" },
  { feature: "Priority Support", basic: false, premium: true, elite: true },
];

// Helper for rendering table cells
const renderCell = (value) => {
  if (value === true) return <Check size={18} className="mx-auto" style={{ color: RED }} strokeWidth={3} />;
  if (value === false) return <X size={16} className="mx-auto text-neutral-300" strokeWidth={3} />;
  return <span className="text-xs font-medium text-neutral-600">{value}</span>;
};

function PlanCard({ plan }) {
  const { name, price, desc, cta, features, highlighted, badge } = plan;

  const card = (
    // Removed the syntax error "rounded-xl]" and adjusted padding for mobile
    <div className={`flex h-full flex-col p-6 lg:p-8`}>
      <h3 className="font-display text-3xl tracking-wide" style={{ color: DARK }}>
        {name}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl md:text-5xl" style={{ color: DARK }}>
          {price}
        </span>
        <span className="font-body text-sm text-neutral-500">/ month</span>
      </div>

      <p className="font-body mt-4 text-sm leading-relaxed text-neutral-500">
        {desc}
      </p>

      <button
        className={`font-display mt-6 flex items-center justify-center gap-2 border py-3 text-lg lg:text-xl tracking-wide transition-transform hover:scale-[1.02] ${
          highlighted
            ? "border-transparent text-white"
            : "border-neutral-800 bg-white text-neutral-900"
        }`}
        style={highlighted ? { backgroundColor: RED } : undefined}
      >
        {cta} <ArrowRight size={16} />
      </button>

      <ul className="font-body mt-7 flex flex-col gap-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: f.included ? RED : "#4B4B4B" }}
            >
              {f.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
            </span>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (highlighted) {
    return (
      <div className="relative overflow-hidden rounded-[4px] border-2 bg-white shadow-xl lg:-mt-6" style={{ borderColor: RED }}>
        <div
          className="font-display flex items-center justify-center gap-2 py-3 lg:py-4 text-base lg:text-lg tracking-wide text-white"
          style={{ backgroundColor: RED }}
        >
          <Zap size={16} fill="white" /> {badge}
        </div>
        {card}
      </div>
    );
  }

  return (
    <div className="rounded-[4px] border border-neutral-200 bg-white shadow-sm h-full">
      {card}
    </div>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0); // 0: Basic, 1: Premium, 2: Elite

  return (
    <section
      className="w-full bg-white px-4 py-10 md:px-8 lg:px-12 lg:py-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Anton', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Header */}
      <div className="mx-auto max-w-7xl text-center">
        <div
          className="font-nav flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.2em]"
          style={{ color: RED }}
        >
          <span className="h-px w-8 sm:w-10" style={{ backgroundColor: RED }} />
          MEMBERSHIP PLANS
          <span className="h-px w-8 sm:w-10" style={{ backgroundColor: RED }} />
        </div>

        <h2 className="font-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight">
          <span style={{ color: DARK }}>CHOOSE YOUR PLAN. </span>
          <span style={{ color: RED }}>START TODAY.</span>
        </h2>
        <p className="font-body mt-4 text-sm md:text-base text-neutral-500 lg:text-lg">
          Flexible Memberships. Premium Facilities. Real Results.
        </p>
      </div>

      {/* =========================================
          1. MOBILE VIEW: TABS INTERFACE
          ========================================= */}
      <div className="mx-auto mt-12 max-w-md md:hidden">
        {/* Tabs */}
        <div className="mb-8 flex justify-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-1.5">
          {PLANS.map((plan, index) => (
            <button
              key={plan.name}
              onClick={() => setActiveTab(index)}
              className={`flex-1 rounded-md py-2 text-xs font-bold tracking-wider transition-all ${
                activeTab === index ? "bg-white shadow-sm" : "text-neutral-500"
              }`}
              style={activeTab === index ? { color: RED } : undefined}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Active Card */}
        <PlanCard plan={PLANS[activeTab]} />
      </div>

      {/* =========================================
          2. TABLET VIEW: COMPARISON TABLE
          ========================================= */}
      <div className="mx-auto mt-12 hidden max-w-4xl md:block lg:hidden">
        <div className="overflow-hidden rounded-[4px] border border-neutral-200 shadow-sm">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr>
                <th className="w-2/5 p-4 text-left"></th>
                <th className="p-4 text-center font-display text-lg tracking-wide" style={{ color: DARK }}>BASIC</th>
                <th className="p-4 text-center font-display text-lg tracking-wide text-white" style={{ backgroundColor: RED }}>PREMIUM</th>
                <th className="p-4 text-center font-display text-lg tracking-wide" style={{ color: DARK }}>ELITE</th>
              </tr>
            </thead>
            <tbody>
              {/* Price Row */}
              <tr className="border-b border-neutral-200">
                <td className="p-4 font-bold text-neutral-800">Price</td>
                <td className="p-4 text-center font-display text-xl" style={{ color: DARK }}>₹1,499</td>
                <td className="p-4 text-center font-display text-xl text-white" style={{ backgroundColor: RED, opacity: 0.9 }}>₹2,499</td>
                <td className="p-4 text-center font-display text-xl" style={{ color: DARK }}>₹3,999</td>
              </tr>

              {/* Feature Rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="p-4 text-xs font-medium text-neutral-700">{row.feature}</td>
                  <td className="p-4 text-center">{renderCell(row.basic)}</td>
                  {/* Slight tint for premium column */}
                  <td className="p-4 text-center bg-red-50">{renderCell(row.premium)}</td>
                  <td className="p-4 text-center">{renderCell(row.elite)}</td>
                </tr>
              ))}

              {/* CTA Row */}
              <tr>
                <td className="p-4"></td>
                <td className="p-4 text-center">
                  <button className="border border-neutral-800 px-4 py-2 text-xs font-bold tracking-wide text-neutral-900 transition-transform hover:scale-105">
                    CHOOSE
                  </button>
                </td>
                <td className="p-4 text-center bg-red-50">
                  <button className="border border-transparent px-4 py-2 text-xs font-bold tracking-wide text-white transition-transform hover:scale-105" style={{ backgroundColor: RED }}>
                    CHOOSE
                  </button>
                </td>
                <td className="p-4 text-center">
                  <button className="border border-neutral-800 px-4 py-2 text-xs font-bold tracking-wide text-neutral-900 transition-transform hover:scale-105">
                    CHOOSE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================
          3. DESKTOP VIEW: 3-COLUMN CARDS
          ========================================= */}
      <div className="mx-auto mt-16 hidden max-w-6xl lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}