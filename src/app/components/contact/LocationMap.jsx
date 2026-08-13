"use client";
import React from "react";
import { MapPin, Navigation } from "lucide-react";
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

// Update this to your actual gym address
const ADDRESS = "402, Shivalik Plaza, SG Highway, Ahmedabad, Gujarat 380015, India";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

export default function LocationMap() {
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
          FIND US
          <span className="h-px w-10" style={{ backgroundColor: RED }} />
        </div>
        <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-neutral-900 sm:text-5xl">
          VISIT OUR <span style={{ color: RED }}>GYM</span>
        </h2>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-12 max-w-6xl"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="h-[420px] w-full overflow-hidden border border-neutral-100 sm:h-[480px]">
          <iframe
            title="Gym location"
            src={MAP_SRC}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Floating info card */}
        <div className="absolute left-4 top-4 max-w-xs bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:left-8 sm:top-8">
          <div className="flex items-start gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "#FBE6E6" }}
            >
              <MapPin size={18} color={RED} />
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                402, Shivalik Plaza, SG Highway
              </p>
              <p className="text-sm text-neutral-500">
                Ahmedabad, Gujarat 380015
              </p>
            </div>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: RED }}
          >
            <Navigation size={14} /> Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
