'use client'
import React, { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, ChevronDown, Dumbbell } from "lucide-react";

const RED = "#FF2F31";

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

export default function ContactFormSection() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // wire up your submit handler / API call here
  };

  return (
    <section
      id="contact"
      className="w-full bg-white py-6 sm:py-10"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@300;400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
      `}</style>

      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl lg:flex-row">
        {/* Left: info panel (CSS-drawn, no external image dependency) */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden bg-black lg:h-auto lg:w-[38%]">
          {/* textured background: diagonal hairlines + radial glow, no photo needed */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 26px)",
            }}
          />
          <div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(255,47,49,0.25)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(255,47,49,0.12)" }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between gap-5 p-5 sm:p-6">
            <div>
              <span
                className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border"
                style={{ borderColor: RED }}
              >
                <Dumbbell size={16} color={RED} />
              </span>
              <h2 className="font-display text-3xl leading-[0.95] sm:text-4xl">
                <span className="block text-white">START YOUR</span>
                <span className="block" style={{ color: RED }}>
                  FITNESS JOURNEY
                </span>
                <span className="block text-white">TODAY</span>
              </h2>
              <span className="mt-2 block h-[3px] w-14" style={{ backgroundColor: RED }} />
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-300">
                Join Hundreds Of Members Who Are Building Stronger Bodies
                With Expert Coaching, Premium Equipment, And A Supportive
                Community.
              </p>
            </div>

            <div className="flex flex-col gap-3">
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
        <div className="flex-1 p-5 sm:p-7">
          <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
            Let&apos;s Get You Started
          </h3>
          <p className="mt-1 text-xs text-neutral-400">
            Fields marked <span className="align-super">*</span> are required
          </p>

          {submitted ? (
            <div className="mt-8 flex flex-col items-start gap-2 border-l-2 py-4 pl-4" style={{ borderColor: RED }}>
              <p className="text-lg font-semibold text-neutral-900">Thanks — we&apos;ve got it.</p>
              <p className="text-sm text-neutral-500">
                A coach will call you back shortly to talk through your goals.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                <FormField label="Enter your name" required placeholder="Your full name" />
                <FormField
                  label="Phone Number"
                  required
                  placeholder="10-digit number"
                  type="tel"
                />
              </div>

              <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                <FormField
                  label="Enter your email"
                  required
                  placeholder="you@example.com"
                  type="email"
                />
                <FormField
                  label="Preferred time to call"
                  placeholder="e.g. Weekday evenings"
                />
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
                <label className="text-base text-neutral-800">Tell Us About Your Goal</label>
                <p className="mt-1 text-xs text-neutral-400">
                  Share your fitness goals or any specific requirements.
                </p>
                <textarea
                  maxLength={500}
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-3 w-full resize-none border-b border-neutral-300 bg-transparent pb-2 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none"
                />
                <p className="mt-1 text-right text-xs text-neutral-400">{message.length}/500</p>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-base font-bold text-white transition-transform hover:scale-[1.01]"
                style={{ backgroundColor: RED }}
              >
                Get Free Consultation
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                We respect your privacy. Your details are safe with us.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}