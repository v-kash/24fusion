import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import DietHero from "../components/diet/DietHero";
import DietPlansSection from "../components/diet/DietPlansSection";
import DietProcessSection from "../components/diet/DietProcessSection";
import SampleMealPlan from "../components/diet/SampleMealPlan";
import DietFAQ from "../components/diet/DietFAQ";

export const metadata = {
  title: "Diet & Nutrition | Fusion 24 Fitness Studio",
  description:
    "Coach-built diet plans for fat loss, muscle gain and maintenance — designed around Indian food, your schedule and your goal.",
};

export default function DietPage() {
  return (
    <main>
      <Navbar />
      <DietHero />
      <DietPlansSection />
      <DietProcessSection />
      <SampleMealPlan />
      <DietFAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
