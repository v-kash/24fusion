"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const RED = "#CF1213";
const RED_SOFT = "#FBE6E6";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "Mon - Sat, 9:30 AM - 7:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@digitalsahay.com", "We reply within a few hours"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["402, Shivalik Plaza, SG Highway", "Ahmedabad, Gujarat 380015"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:30 AM - 7:00 PM", "Sunday: Closed"],
  },
];

export default function ContactInfoCards() {
  return (
    <section
      className="w-full bg-white px-6 py-20 md:px-12"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

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
          GET IN TOUCH
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
        </div>
        <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-neutral-900 sm:text-5xl">
          MANY WAYS TO <span style={{ color: RED }}>REACH US</span>
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            className="flex flex-col items-start gap-4 border border-neutral-100 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: RED_SOFT }}
            >
              <c.icon size={24} color={RED} strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl tracking-tight text-neutral-900">
              {c.title.toUpperCase()}
            </h3>
            <div className="text-sm leading-relaxed text-neutral-500">
              {c.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
