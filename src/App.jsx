import Companies from "./components/Companies/Companies";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import MotherCard from "./components/Pricing/MotherCard";
import ServiceOne from "./components/ServiceOne/ServiceOne";
import ServiceTwo from "./components/ServiceTwo/ServiceTwo";

import Testimonial from "./components/Testimonial/Testimonial";
import Trial from "./components/Trial/Trial";

export default function App() {
  console.log("App is rendering...");
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
      <MotherCard />
      <Faq />
      <Trial />
      <Footer />
      
    </div>
  );
}
