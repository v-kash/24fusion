

import OurStory from "../components/success/SuccessHero";
import Navbar from "../components/Navbar";
import SuccessStoriesSection from "../components/success/SuccessStoriesSection";
import TestimonialsSection from "../components/success/TestimonialsSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <OurStory/>
    <SuccessStoriesSection/>
<TestimonialsSection/>
<CTABanner/>
<Footer/>
    </>
  );
}