

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVisionSection from "../components/about/MissionVisionSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMrX from "../components/about/AboutMrX";
import NutritionDietSection from "../components/about/NutritionDietSection";
import CTABanner from "../components/CTABanner";
import AboutTrainer from "../components/about/AboutTrainer";
export default function AboutPage() {
  return (
    <>
<Navbar/>
    <AboutHero/>
    <OurStory/>
<AboutMrX/>
<AboutTrainer/>
<NutritionDietSection/>
<CTABanner/>
<Footer/>
    </>
  );
}