"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import {
  GALLERY_CATEGORIES,
  INSTAGRAM_POSTS,
  INSTAGRAM_PROFILE,
} from "../../data/instagramPosts";
import InstagramPostModal from "./InstagramPostModal";

const RED = "#FF2F31";
const FALLBACK_THUMB = "/transformation.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

function PostTile({ post, onOpen }) {
  return (
    <motion.button
      variants={fadeUpVariants}
      onClick={onOpen}
      className="group relative block aspect-square w-full overflow-hidden bg-neutral-900 text-left"
      aria-label={`Open Instagram post: ${post.caption}`}
    >
      <img
        src={post.thumbnail}
        alt={post.caption}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = FALLBACK_THUMB;
        }}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Reel badge */}
      {post.type === "reel" && (
        <span className="absolute right-3 top-3 rounded-full bg-black/60 p-1.5 text-white backdrop-blur">
          <Play size={14} fill="currentColor" />
        </span>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <InstagramIcon size={20} className="mb-2 text-white" />
        <p className="font-nav line-clamp-2 text-xs font-semibold leading-snug text-white sm:text-sm">
          {post.caption}
        </p>
        <span
          className="font-nav mt-2 text-[10px] font-bold tracking-[0.2em]"
          style={{ color: RED }}
        >
          {post.category.toUpperCase()}
        </span>
      </div>
    </motion.button>
  );
}

export default function InstagramGallery({ posts = INSTAGRAM_POSTS }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const visiblePosts = useMemo(
    () =>
      activeCategory === "All"
        ? posts
        : posts.filter((p) => p.category === activeCategory),
    [posts, activeCategory]
  );

  const activePost =
    activeIndex === null ? null : visiblePosts[activeIndex] ?? null;

  const step = (delta) =>
    setActiveIndex((i) =>
      i === null ? i : (i + delta + visiblePosts.length) % visiblePosts.length
    );

  return (
    <section
      className="relative w-full bg-black py-20 md:py-24"
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
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUpVariants}
          className="font-nav flex items-center gap-4 text-xs font-bold tracking-[0.2em] sm:text-sm"
          style={{ color: RED }}
        >
          OUR INSTAGRAM
          <span
            className="h-[1.5px] w-16"
            style={{
              background: `linear-gradient(to right, ${RED} 0%, ${RED} 20%, transparent 100%)`,
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUpVariants}
          className="font-display mt-4 leading-[0.95]"
        >
          <span className="block text-4xl text-white sm:text-5xl md:text-6xl">
            EVERY REP, CAPTURED.
          </span>
        </motion.h2>

        {/* Filters */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8 flex flex-wrap gap-3"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(null);
                }}
                className="font-nav border px-4 py-2 text-[11px] font-bold tracking-[0.15em] transition-colors sm:text-xs"
                style={{
                  color: active ? "#fff" : "rgba(255,255,255,0.7)",
                  backgroundColor: active ? RED : "transparent",
                  borderColor: active ? RED : "rgba(255,255,255,0.2)",
                }}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        {visiblePosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
          >
            {visiblePosts.map((post, i) => (
              <PostTile
                key={post.id}
                post={post}
                onOpen={() => setActiveIndex(i)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.p
            variants={fadeUpVariants}
            className="mt-10 text-sm text-neutral-400"
          >
            Nothing here yet — check back soon.
          </motion.p>
        )}

        {/* Follow CTA */}
        <motion.div variants={fadeUpVariants} className="mt-12 flex justify-center">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display flex items-center gap-3 px-6 py-3 text-lg tracking-tight text-white transition-transform hover:scale-105 sm:text-xl"
            style={{ backgroundColor: RED }}
          >
            SEE MORE ON INSTAGRAM <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.div>

      <InstagramPostModal
        post={activePost}
        onClose={() => setActiveIndex(null)}
        onPrev={visiblePosts.length > 1 ? () => step(-1) : undefined}
        onNext={visiblePosts.length > 1 ? () => step(1) : undefined}
      />
    </section>
  );
}
