import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import PromotionalOffers from "@/components/PromotionalOffers";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-slate-900">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <PromotionalOffers />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}
