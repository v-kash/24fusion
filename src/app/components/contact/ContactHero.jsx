"use client";
import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const RED = "#FF2F31";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-24 md:py-32"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Background photo */}
      <img
        src="/about/MRX.png"
        alt="Gym interior"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />
      

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-2xl">
          <motion.div
            variants={fadeUpVariants}
            className="font-nav flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.2em]"
            style={{ color: RED }}
          >
            CONTACT US
            <span
              className="h-[1.5px] w-24"
              style={{
                background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
              }}
            />
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="font-display mt-4 leading-[0.95]"
          >
            <span className="block text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
              LET&apos;S START A
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: RED }}
            >
              CONVERSATION.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base"
          >
            Have A Question About Membership, Coaching, Or Just Want To Drop
            By? Our Team Is Here To Help You Get Started On Your Fitness
            Journey.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mt-8 flex flex-wrap gap-4">
            <button
              className="font-display flex items-center gap-2 px-6 py-3 text-xl tracking-tight text-white transition-transform hover:scale-105"
              style={{ backgroundColor: RED }}
            >
              TALK TO A COACH <ArrowRight size={18} />
            </button>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone size={16} /> +91 98765 43210
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
