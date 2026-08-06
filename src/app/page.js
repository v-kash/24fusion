

import Navbar from "./components/Navbar";
import Fusion24Hero from "./components/Fusion24Hero";
import TransformationsSection from "./components/TransformationsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingSection from "./components/PricingSection";
import FacilitiesShowcase from "./components/FacilitiesShowcase";
import TrainersSection from "./components/TrainersSection";
import TransformationProcess from "./components/TransformationProcess";
import CTABanner from "./components/CTABanner";
export default function Page() {
  return (
    <>
    <Fusion24Hero/>
<TransformationsSection/>
<WhyChooseUs/>
<PricingSection/>
<FacilitiesShowcase/>
<TrainersSection/>
<TransformationProcess/>
      <CTABanner/>
    </>
  );
}