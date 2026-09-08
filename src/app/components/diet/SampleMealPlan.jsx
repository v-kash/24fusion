"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const RED = "#FF2F31";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const PLANS = {
  "FAT LOSS": {
    summary: "1,600 kcal · 140g protein · 130g carbs · 50g fat",
    meals: [
      { time: "7:00 AM", name: "Pre-Workout", food: "Black coffee + 1 banana", kcal: "110 kcal" },
      { time: "9:30 AM", name: "Breakfast", food: "4 egg whites + 2 whole eggs, 2 multigrain rotis", kcal: "420 kcal" },
      { time: "1:00 PM", name: "Lunch", food: "150g grilled chicken / paneer, 1 katori rice, salad, dal", kcal: "520 kcal" },
      { time: "5:00 PM", name: "Snack", food: "Greek yogurt + roasted chana", kcal: "220 kcal" },
      { time: "8:30 PM", name: "Dinner", food: "Grilled fish / soya chunks with stir-fried vegetables", kcal: "330 kcal" },
    ],
  },
  "MUSCLE GAIN": {
    summary: "2,900 kcal · 180g protein · 350g carbs · 80g fat",
    meals: [
      { time: "7:00 AM", name: "Breakfast", food: "5 eggs, 4 slices brown bread, peanut butter", kcal: "680 kcal" },
      { time: "11:00 AM", name: "Mid-Morning", food: "Mass shake — oats, milk, whey, dates", kcal: "550 kcal" },
      { time: "2:00 PM", name: "Lunch", food: "200g chicken / rajma, 2 katori rice, dal, curd", kcal: "780 kcal" },
      { time: "6:00 PM", name: "Post-Workout", food: "Whey + 1 banana + honey", kcal: "340 kcal" },
      { time: "9:00 PM", name: "Dinner", food: "3 rotis, paneer bhurji, mixed vegetables", kcal: "550 kcal" },
    ],
  },
  "LEAN & MAINTAIN": {
    summary: "2,200 kcal · 150g protein · 230g carbs · 70g fat",
    meals: [
      { time: "8:00 AM", name: "Breakfast", food: "Poha with sprouts + 3 boiled eggs", kcal: "480 kcal" },
      { time: "11:30 AM", name: "Snack", food: "Fruit bowl + handful of almonds", kcal: "260 kcal" },
      { time: "2:00 PM", name: "Lunch", food: "2 rotis, 150g chicken / tofu, dal, salad", kcal: "620 kcal" },
      { time: "5:30 PM", name: "Snack", food: "Whey shake or buttermilk + makhana", kcal: "240 kcal" },
      { time: "9:00 PM", name: "Dinner", food: "Khichdi with curd and a vegetable side", kcal: "600 kcal" },
    ],
  },
};

const TABS = Object.keys(PLANS);

export default function SampleMealPlan() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const plan = PLANS[activeTab];

  return (
    <section
      className="w-full bg-black py-20 md:py-24"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      <motion.div
        className="mx-auto max-w-7xl px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={fadeUpVariants}
          className="font-nav flex items-center gap-4 text-xs font-bold tracking-[0.2em] sm:text-sm"
          style={{ color: RED }}
        >
          SAMPLE DAY
          <span
            className="h-[1.5px] w-16"
            style={{
              background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
            }}
          />
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          className="font-display mt-4 leading-[0.95]"
        >
          <span className="block text-4xl text-white sm:text-5xl md:text-6xl">
            WHAT A DAY LOOKS LIKE.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base"
        >
          A real example, not a template. Your actual plan is built around your
          numbers, your working hours and the food you like eating.
        </motion.p>

        {/* Tabs */}
        <motion.div variants={fadeUpVariants} className="mt-8 flex flex-wrap gap-3">
          {TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-nav border px-4 py-2 text-[11px] font-bold tracking-[0.15em] transition-colors sm:text-xs"
                style={{
                  color: active ? "#fff" : "rgba(255,255,255,0.7)",
                  backgroundColor: active ? RED : "transparent",
                  borderColor: active ? RED : "rgba(255,255,255,0.2)",
                }}
              >
                {tab}
              </button>
            );
          })}
        </motion.div>

        {/* Meal table */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8 border border-white/10"
          style={{ backgroundColor: "#0b0b0b" }}
        >
          <div
            className="font-nav border-b border-white/10 px-6 py-4 text-xs font-bold tracking-[0.15em] sm:text-sm"
            style={{ color: RED }}
          >
            {plan.summary}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {plan.meals.map((meal) => (
                <div
                  key={meal.time}
                  className="flex flex-col gap-2 border-b border-white/10 px-6 py-5 transition-colors last:border-b-0 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6"
                >
                  <span
                    className="font-display w-24 shrink-0 text-xl leading-none"
                    style={{ color: RED }}
                  >
                    {meal.time}
                  </span>
                  <div className="flex-1">
                    <p className="font-nav text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                      {meal.name}
                    </p>
                    <p className="font-nav mt-1 text-sm text-neutral-200 sm:text-base">
                      {meal.food}
                    </p>
                  </div>
                  <span className="font-nav shrink-0 text-xs font-semibold text-neutral-400 sm:text-sm">
                    {meal.kcal}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-8 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="font-display flex items-center gap-2 px-6 py-3 text-lg tracking-tight text-white transition-transform hover:scale-105 sm:text-xl"
            style={{ backgroundColor: RED }}
          >
            BOOK A DIET CONSULT <ArrowRight size={20} />
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Download size={16} /> Get the sample plan
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
