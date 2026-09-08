"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const RED = "#FF2F31";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const FAQS = [
  {
    q: "Do I have to give up rice and roti?",
    a: "No. Carbs are not the enemy — the total is. We keep the food you grew up on and adjust portions and timing so the numbers work.",
  },
  {
    q: "Is the plan vegetarian friendly?",
    a: "Fully. Paneer, curd, dal, soya, tofu, sprouts and whey cover the protein target comfortably. Vegan and Jain versions are available too.",
  },
  {
    q: "How often is the plan updated?",
    a: "Every two weeks, based on your check-in — weight, measurements, strength in the gym and how you are feeling day to day.",
  },
  {
    q: "Do I need supplements?",
    a: "Only if food alone cannot close the gap. Most members do fine with whey and vitamin D. We will never sell you a shelf of tubs.",
  },
  {
    q: "What if I eat out or travel a lot?",
    a: "Your coach builds a restaurant and travel playbook — what to order, what to skip, and how to balance the rest of the day around it.",
  },
  {
    q: "Is the diet plan included with membership?",
    a: "Basic nutrition guidance comes with every membership. A fully personalised, coach-monitored plan is part of our transformation packages.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div variants={fadeUpVariants} className="border-b border-white/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-nav text-sm font-semibold text-white sm:text-base">
          {faq.q}
        </span>
        <span
          className="shrink-0 rounded-full border p-1.5 transition-colors"
          style={{
            borderColor: isOpen ? RED : "rgba(255,255,255,0.25)",
            color: isOpen ? RED : "#fff",
          }}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="overflow-hidden"
          >
            <p className="font-nav pb-5 pr-10 text-sm leading-relaxed text-neutral-400">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DietFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="w-full py-20 md:py-24"
      style={{ backgroundColor: "#0b0b0b", fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div>
          <motion.div
            variants={fadeUpVariants}
            className="font-nav flex items-center gap-4 text-xs font-bold tracking-[0.2em] sm:text-sm"
            style={{ color: RED }}
          >
            FAQ
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
            <span className="block text-4xl text-white sm:text-5xl">
              THE QUESTIONS
            </span>
            <span
              className="block text-4xl sm:text-5xl"
              style={{ color: RED }}
            >
              EVERYONE ASKS.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400"
          >
            Still unsure about something? Talk to a coach — the first
            consultation is free.
          </motion.p>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
