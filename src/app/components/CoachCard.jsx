"use client";
import React from "react";
import { motion } from "framer-motion"; // Added Framer Motion

const RED = "#CF1213";

export default function CoachCard({
  img,
  name = "PRIYA SHARMA",
  role = "Nutrition Coach",
  specialty = "Specializes In Nutrition & Diet",
  experience = "5+ Years",
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }} // Card lifts up on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // Added 'group' class for hover effects and updated shadow on hover
      className="group w-[280px] shrink-0 overflow-hidden bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)]"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-nav { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Image Section */}
      <div className="relative m-2 h-[230px] overflow-hidden bg-neutral-100">
        {img && (
          <img
            src={img}
            alt={name}
            // Added zoom effect on hover
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
      </div>

      {/* Name & Role Section */}
      <div className="px-6 pt-2 pb-4 text-center">
        {/* Name */}
        <h3 className="font-display text-3xl tracking-wide text-neutral-900">
          {name}
        </h3>
        
        {/* Role */}
        <div
          className="font-nav mt-1 text-xs font-bold uppercase tracking-[0.15em]"
          style={{ color: RED }}
        >
          {role}
        </div>
      </div>

      {/* Info Rows (Icon + Text side-by-side) */}
      <div className="px-6 pb-6 space-y-4">
        
        {/* Specialty Row */}
        <div className="flex items-center gap-3">
          {/* Added icon pop & rotate on hover */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: "#FCE4E2" }}
          >
            <img src="/nutri.svg" alt="Nutrition Icon" className="h-6 w-6" />
          </div>
          <p className="text-sm font-medium text-neutral-600">
            {specialty}
          </p>
        </div>

        {/* Experience Row */}
        <div className="flex items-center gap-3">
          {/* Added icon pop & rotate on hover */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            style={{ backgroundColor: "#FCE4E2" }}
          >
            <img src="/reputation.svg" alt="Experience Icon" className="h-6 w-6" />
          </div>
          <p className="text-sm font-medium text-neutral-600">
            Experience {experience}
          </p>
        </div>

      </div>
    </motion.div>
  );
}