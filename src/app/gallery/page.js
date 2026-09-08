import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import GalleryHero from "../components/gallery/GalleryHero";
import InstagramGallery from "../components/gallery/InstagramGallery";

export const metadata = {
  title: "Gallery | Fusion 24 Fitness Studio",
  description:
    "Inside Fusion 24 — training sessions, member transformations, facilities and events, straight from our Instagram feed.",
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <GalleryHero />
      <InstagramGallery />
      <CTABanner />
      <Footer />
    </main>
  );
}
