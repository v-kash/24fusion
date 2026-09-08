// ---------------------------------------------------------------------------
// INSTAGRAM GALLERY DATA
// ---------------------------------------------------------------------------
// To add a post:
//   1. Open the post on Instagram, copy its link (…/p/XXXX/ or …/reel/XXXX/).
//   2. Save a thumbnail image into /public/gallery/ and point `thumbnail` at it.
//   3. Add an entry below. `category` drives the filter chips on the page.
//
// Instagram does not allow hot-linking its own images, so every post needs a
// locally hosted thumbnail. Keep them ~1080x1080 (square) for a clean grid.
// ---------------------------------------------------------------------------

export const GALLERY_CATEGORIES = [
  "All",
  "Transformations",
  "Training",
  "Facility",
  "Events",
];

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    url: "https://www.instagram.com/p/DAbCdEfGhIj/",
    thumbnail: "/transformation.png",
    caption: "12 weeks. One decision. Rohan's fat-loss transformation.",
    category: "Transformations",
    type: "post", // "post" | "reel"
  },
  {
    id: "post-2",
    url: "https://www.instagram.com/reel/DAbCdEfGhIk/",
    thumbnail: "/facilities/strength-card.png",
    caption: "Heavy pull day on the strength floor.",
    category: "Training",
    type: "reel",
  },
  {
    id: "post-3",
    url: "https://www.instagram.com/p/DAbCdEfGhIl/",
    thumbnail: "/facilities/crossfit-card.png",
    caption: "Functional circuit — 45 minutes, zero excuses.",
    category: "Training",
    type: "post",
  },
  {
    id: "post-4",
    url: "https://www.instagram.com/p/DAbCdEfGhIm/",
    thumbnail: "/facilities/swimming-card.png",
    caption: "Recovery laps in the pool.",
    category: "Facility",
    type: "post",
  },
  {
    id: "post-5",
    url: "https://www.instagram.com/p/DAbCdEfGhIn/",
    thumbnail: "/success/weight-gain-front.jpg",
    caption: "From skinny to strong — a clean bulk done right.",
    category: "Transformations",
    type: "post",
  },
  {
    id: "post-6",
    url: "https://www.instagram.com/reel/DAbCdEfGhIo/",
    thumbnail: "/facilities/yoga-card.png",
    caption: "Sunday mobility flow with Coach Anjali.",
    category: "Training",
    type: "reel",
  },
  {
    id: "post-7",
    url: "https://www.instagram.com/p/DAbCdEfGhIp/",
    thumbnail: "/facilities/sauna-card.png",
    caption: "Sauna sessions — the recovery you keep skipping.",
    category: "Facility",
    type: "post",
  },
  {
    id: "post-8",
    url: "https://www.instagram.com/p/DAbCdEfGhIq/",
    thumbnail: "/facilities/cafe-card.png",
    caption: "Post-workout fuel at the Fusion Cafe.",
    category: "Facility",
    type: "post",
  },
  {
    id: "post-9",
    url: "https://www.instagram.com/p/DAbCdEfGhIr/",
    thumbnail: "/wcu3.png",
    caption: "Annual members meet — the whole squad under one roof.",
    category: "Events",
    type: "post",
  },
  {
    id: "post-10",
    url: "https://www.instagram.com/p/DAbCdEfGhIs/",
    thumbnail: "/people/pa2.png",
    caption: "Deadlift PR day. 180kg and still climbing.",
    category: "Events",
    type: "post",
  },
  {
    id: "post-11",
    url: "https://www.instagram.com/p/DAbCdEfGhIt/",
    thumbnail: "/facilities/cardio-card.png",
    caption: "Zone 2 cardio — boring, but it works.",
    category: "Training",
    type: "post",
  },
  {
    id: "post-12",
    url: "https://www.instagram.com/p/DAbCdEfGhIu/",
    thumbnail: "/people/pb4.png",
    caption: "Six months of consistency. That is the whole secret.",
    category: "Transformations",
    type: "post",
  },
];

export const INSTAGRAM_PROFILE = "https://www.instagram.com/digital_sahaay";
export const INSTAGRAM_HANDLE = "@fusion24fitness";

/**
 * Turns an Instagram permalink into its official embed URL so a post can be
 * shown inside an iframe. Returns null for links we do not recognise.
 */
export function toEmbedUrl(url) {
  try {
    const { pathname } = new URL(url);
    const [kind, code] = pathname.split("/").filter(Boolean);
    if (!code) return null;
    const type = kind === "reels" ? "reel" : kind;
    if (!["p", "reel", "tv"].includes(type)) return null;
    return `https://www.instagram.com/${type}/${code}/embed`;
  } catch {
    return null;
  }
}
