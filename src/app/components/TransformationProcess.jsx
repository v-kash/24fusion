"use client";
import React from "react";

const RED = "#FF2F31";

// Inline version of circle.svg — a stroke-only ring with a diagonal
// gradient (solid red top-left fading to 20% opacity bottom-right).
// Takes an `id` prop because SVG gradient ids must be unique per
// instance when the same markup is repeated in a list.
const CircleRing = ({ id }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
  >
    <rect
      x="0.708743"
      y="0.708743"
      width="74.4175"
      height="74.4175"
      rx="37.2087"
      stroke={`url(#${id})`}
      strokeWidth="1.41748"
    />
    <defs>
      <linearGradient
        id={id}
        x1="34.7812"
        y1="1.41748"
        x2="41.0537"
        y2="74.4175"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={RED} />
        <stop offset="1" stopColor={RED} stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

const STEPS = [
  {
    num: "01",
    title: "BOOK A FREE TRIAL",
    desc: "Take The First Step By Booking Your Free Trial Session.",
  },
  {
    num: "02",
    title: "FITNESS ASSESSMENT",
    desc: "We Assess Your Current Fitness Level, Goals, And Lifestyle.",
  },
  {
    num: "03",
    title: "CUSTOM PLAN",
    desc: "Receive A Personalized Workout And Nutrition Plan Tailored Just For You.",
  },
  {
    num: "04",
    title: "TRACK PROGRESS",
    desc: "We Monitor Your Progress And Make Adjustments To Keep You Moving Forward.",
  },
  {
    num: "05",
    title: "BECOME YOUR BEST",
    desc: "Transform Your Body, Mind, And Lifestyle. Become Unstoppable.",
  },
];

export default function TransformationProcess() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Background Image */}
      <img
        src="/transformation.png"
        alt="Gym background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for text readability over the background image */}

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full px-6 py-16 md:px-16 lg:pt-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h2 className="font-display text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-7xl">
            TRANSFORMATION
            <br />
            <span style={{ color: RED }}>PROCESS</span>
          </h2>

          {/* Tagline */}
          <p className="font-nav mt-4 text-sm text-white/60 md:text-base">
            Your Journey. Our Guidance. Real Results.
          </p>

          {/* Timeline / Steps List */}
          <div className="relative mt-10 flex flex-col">
             <img
    src="/Line.svg"
    alt=""
    className="absolute left-[27px] top-[28px] bottom-[28px] w-[2px] h-full object-fill"
  />
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative flex gap-5 pb-5 last:pb-0">
                {/* Connecting line down to the next circle.
                    Recreates Line.svg's gradient in CSS (faint -> solid at
                    midpoint -> faint) so it stretches to fit any row height,
                    instead of relying on the fixed 456px SVG asset. */}
                

                {/* Numbered circle — uses the circle.svg ring */}
                <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-black">
                  <CircleRing id={`circle-ring-${step.num}`} />
                  <span className="font-display absolute text-2xl text-white">{step.num}</span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-1 pt-2">
                  <h3 className="font-display text-xl tracking-wide text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}