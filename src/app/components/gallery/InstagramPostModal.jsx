"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { toEmbedUrl } from "../../data/instagramPosts";

const RED = "#FF2F31";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
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

export default function InstagramPostModal({ post, onClose, onPrev, onNext }) {
  // Lock body scroll and wire up keyboard controls while the modal is open.
  useEffect(() => {
    if (!post) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [post, onClose, onPrev, onNext]);

  const embedUrl = post ? toEmbedUrl(post.url) : null;

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={post.caption}
        >
          {/* Prev / next */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous post"
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition-colors hover:bg-white/10 md:block"
            >
              <ChevronLeft size={22} />
            </button>
          )}
          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next post"
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition-colors hover:bg-white/10 md:block"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <motion.div
            className="relative w-full max-w-[420px]"
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-lg bg-white">
              {embedUrl ? (
                <iframe
                  key={embedUrl}
                  src={embedUrl}
                  title={post.caption}
                  className="h-[560px] w-full border-0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                />
              ) : (
                /* Fallback for a link we cannot embed — show the thumbnail. */
                <img
                  src={post.thumbnail}
                  alt={post.caption}
                  className="h-auto w-full object-cover"
                />
              )}
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-neutral-300">{post.caption}</p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em]"
                style={{ color: RED }}
              >
                VIEW ON INSTAGRAM <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
