"use client";
import React from "react";
import {
  Eye,
  Target,
  Users,
  TrendingUp,
  HeartPulse,
  Dumbbell,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const RED = "#CF1213";
const RED_SOFT = "#FBE6E6";

// Framer Motion Variants (matches TrainersSection)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const VISION_ITEMS = [
  { icon: "/about/team.svg", label: "Inspire", sub: "Every Day" },
  { icon: "/about/grow.svg", label: "Empower", sub: "Potential" },
  { icon: "/about/heartbeat.svg", label: "Build", sub: "Healthier Lives" },
];

const MISSION_ITEMS = [
  { icon: "/about/dumbell.svg", label: "Expert", sub: "Training" },
  { icon: "/about/security.svg", label: "Supportive", sub: "Environment" },
  { icon: "/about/trophy2.svg", label: "Real", sub: "Results" },
];

function PurposeCard({ icon, highlight, description, items, delay = 0 }) {  return (
    <motion.div
      className="relative z-10 flex w-full max-w-xs flex-col items-center bg-white px-3 py-7 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: RED_SOFT }}
      >
<img
  src={icon}
  alt=""
  className="h-8 w-8 object-contain"
/>      </div>

      <h3 className="font-display mt-4 text-2xl tracking-tight text-neutral-900 sm:text-3xl">
        OUR <span style={{ color: RED }}>{highlight}</span>
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-neutral-500 sm:text-sm">
        {description}
      </p>

      <div className="mt-5 flex w-full items-stretch justify-center divide-x divide-neutral-200">
        {items.map(({ icon, label, sub }) => (
  <div
    key={label}
    className="flex flex-1 flex-col items-center gap-1 px-2"
  >
    <img
      src={icon}
      alt=""
      className="h-[20px] w-[20px] object-contain"
    />

    <span className="font-nav text-xs font-semibold leading-tight text-neutral-900">
      {label}
    </span>

    <span className="text-[10px] leading-tight text-neutral-500">
      {sub}
    </span>
  </div>
))}
      </div>
    </motion.div>
  );
}

export default function OurPurposeSection() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 pt-16 pb-10 md:px-12"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Background image with fade-to-white so the cards stay legible */}
      <div className="absolute inset-0 -z-10">
        {/* Replace with your gym background image */}
        <img
          src="/about/Aboutstory.png"
          alt=""
          className="h-full w-full object-contain scale-[1.1]"
        />
      </div>

      {/* Header */}
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="font-nav flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em]"
          style={{ color: RED }}
        >
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
          OUR PURPOSE
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
        </div>

        <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          <span>STRONGER </span>
          <span style={{ color: RED }}>BODIES.</span>
          <span>STRONGER </span>
          <span style={{ color: RED }}>LIVES.</span>
        </h2>

        <p className="mt-4 text-base text-neutral-500 md:text-lg">
          We Believe Fitness Is More Than A Workout—It&apos;s A Lifestyle.
          <br className="hidden sm:block" />
          Our Vision And Mission Drive Everything We Do.
        </p>
      </motion.div>

      {/* Vision / Trainer photo / Mission */}
      <div className="relative mx-auto mt-14 flex max-w-8xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-32">
        <div className="lg:mr-[-2.5rem]">
          <PurposeCard
            icon="/about/vision.svg"
            highlight="VISION"
            description="To Be The Most Trusted Fitness Community That Inspires People To Unlock Their True Potential And Live Healthier, Stronger, And Happier Lives."
            items={VISION_ITEMS}
            delay={0.1}
          />
        </div>

        <motion.div
          className="relative z-20 -my-6 lg:-my-10"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          {/* Replace with your trainer cutout image */}
          <img
            src="/about/Object.png"
            alt="Coach ready to train"
            className="h-[420px] w-auto object-contain drop-shadow-2xl sm:h-[480px] lg:h-[430px]"
          />
        </motion.div>

        <div className="lg:ml-[-2.5rem]">
          <PurposeCard
            icon="/about/bullseye.svg"
            highlight="MISSION"
            description="To Deliver Results-Driven Training, Expert Guidance, And A Supportive Environment That Helps Every Member Achieve Their Fitness Goals."
            items={MISSION_ITEMS}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}