

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVisionSection from "../components/about/MissionVisionSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <>
<Navbar/>
    <AboutHero/>
    <OurStory/>
<MissionVisionSection/> 
<Footer/>
    </>
  );
}