import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactFormSection from "../components/contact/ContactFormSection";
import LocationMap from "../components/contact/LocationMap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Your Gym Name",
  description:
    "Get in touch with our team — call, email, visit, or send us a message to start your fitness journey.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar/>
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <LocationMap />
      <Footer/>
    </main>
  );
}