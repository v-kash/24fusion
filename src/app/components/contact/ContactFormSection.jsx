"use client";
import React, { useState } from "react";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const RED = "#CF1213";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const GOALS = [
  "Weight Loss",
  "Muscle Building",
  "General Fitness",
  "Athletic Performance",
  "Nutrition Coaching",
];

function FormField({ label, required, placeholder, type = "text" }) {
  return (
    <div>
      <label className="flex items-center gap-1 text-sm text-neutral-800">
        {label} {required && <span style={{ color: RED }}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full border-b border-neutral-300 bg-transparent pb-2 text-sm text-neutral-700 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
      />
    </div>
  );
}

export default function ContactFormSection() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire up your submit handler / API call here
  };

  return (
    <section
      className="w-full bg-neutral-50 px-6 py-20 md:px-12"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      <motion.div
        className="mx-auto max-w-2xl text-center"
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
          SEND US A <span style={{ color: RED }}>MESSAGE</span>
        </h2>
        <p className="mt-4 text-sm text-neutral-500 sm:text-base">
          Fill Out The Form Below And Our Team Will Get Back To You Within 24
          Hours.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 max-w-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-10"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-sm text-neutral-400">
          Fields marked <span className="align-super text-xs">*</span> are
          required
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            <FormField label="Enter your name" required placeholder="Your full name" />
            <FormField label="Phone Number" required placeholder="10-digit number" type="tel" />
          </div>

          <FormField label="Enter your email" required placeholder="you@example.com" type="email" />

          <div>
            <label className="flex items-center gap-1 text-sm text-neutral-800">
              Fitness Goal <span style={{ color: RED }}>*</span>
            </label>
            <div className="relative mt-2">
              <select
                required
                defaultValue=""
                className="w-full appearance-none border-b border-neutral-300 bg-transparent pb-2 pr-8 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none"
              >
                <option value="" disabled>
                  Select your goal
                </option>
                {GOALS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-neutral-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-neutral-800">Your Message</label>
            <p className="mt-1 text-xs text-neutral-400">
              Share your fitness goals or any specific requirements.
            </p>
            <textarea
              maxLength={500}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-3 w-full resize-none border-b border-neutral-300 bg-transparent pb-2 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none"
            />
            <p className="mt-1 text-right text-xs text-neutral-400">
              {message.length}/500
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 text-base font-bold text-white transition-transform hover:scale-[1.01]"
            style={{ backgroundColor: RED }}
          >
            Send Message
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
            <ShieldCheck size={14} className="text-emerald-500" />
            We respect your privacy. Your details are safe with us.
          </div>
        </form>
      </motion.div>
    </section>
  );
}
