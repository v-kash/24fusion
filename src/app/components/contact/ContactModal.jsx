"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck, ChevronDown } from "lucide-react";

const RED = "#FF2F31";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] },
  },
  exit: { opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.2 } },
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    lines: [
      { text: "+91 98765 43210", className: "font-semibold text-white" },
      { text: "Mon - Sat, 9:30 AM - 7:00 PM", style: { color: RED } },
    ],
  },
  {
    icon: Mail,
    lines: [
      { text: "hello@digitalsahay.com", className: "font-semibold text-white" },
      { text: "We reply within a few hours", style: { color: RED } },
    ],
  },
  {
    icon: MapPin,
    lines: [
      { text: "402, Shivalik Plaza, SG Highway", className: "font-semibold text-white" },
      { text: "Ahmedabad, Gujarat 380015, India", className: "font-semibold text-white" },
    ],
  },
];

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
      <label className="flex items-center gap-1 text-base text-neutral-800">
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

// Controlled modal: pass isOpen + onClose. Omit them to render as a
// standalone always-visible section instead.
export default function ContactModal({ isOpen = true, onClose }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire up your submit handler / API call here
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => onClose?.()}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
            .font-display { font-family: 'Bebas Neue', sans-serif; }
          `}</style>

          <motion.div
            className="relative flex w-full max-w-6xl max-h-[92vh] flex-col overflow-hidden bg-white shadow-2xl lg:flex-row"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {/* Left: image panel */}
            <div className="relative h-64 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[42%]">
              <img
                src="/contact/modal.png"
                alt="Athlete training with battle ropes"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.15) 100%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
                <div>
                  <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl">
                    <span className="block text-white">START YOUR</span>
                    <span className="block" style={{ color: RED }}>
                      FITNESS JOURNEY
                    </span>
                    <span className="block text-white">TODAY</span>
                  </h2>
                  <span
                    className="mt-3 block h-[3px] w-14"
                    style={{ backgroundColor: RED }}
                  />
                  <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-300">
                    Join Hundreds Of Members Who Are Building Stronger Bodies
                    With Expert Coaching, Premium Equipment, And A Supportive
                    Community.
                  </p>
                  <span
                    className="mt-5 block h-[3px] w-14"
                    style={{ backgroundColor: RED }}
                  />
                </div>

                <div className="flex flex-col gap-5">
                  {CONTACT_ITEMS.map(({ icon: Icon, lines }) => (
                    <div key={lines[0].text} className="flex items-start gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                        style={{ borderColor: RED }}
                      >
                        <Icon size={16} color={RED} />
                      </span>
                      <div className="text-sm leading-snug">
                        {lines.map((l, idx) => (
                          <p key={idx} className={l.className} style={l.style}>
                            {l.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form panel */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <h3 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
                Let&apos;s Get You Started
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Fields marked <span className="align-super text-xs">*</span>{" "}
                are required
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  <FormField label="Enter your name" required placeholder="Your full name" />
                  <FormField
                    label="Phone Number"
                    required
                    placeholder="10-digit number"
                    type="tel"
                  />
                </div>

                <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  <FormField
                    label="Enter your email"
                    required
                    placeholder="you@example.com"
                    type="email"
                  />
                  {/* Reserved slot present in the source design — unlabeled,
                      shows only a required marker. Repurpose or remove as needed. */}
                  <div>
                    <label className="flex items-center justify-end text-base text-neutral-800">
                      <span style={{ color: RED }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full border-b border-neutral-300 bg-transparent pb-2 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1 text-base text-neutral-800">
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
                  <label className="text-base text-neutral-800">
                    Tell Us About Your Goal
                  </label>
                  <p className="mt-1 text-sm text-neutral-400">
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
                  Get Free Consultation
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  We respect your privacy. Your details are safe with us.
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
