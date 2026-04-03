import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CarGrid from "@/components/CarGrid";
import PricingTable from "@/components/PricingTable";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CarGrid />
      <PricingTable />
      <ContactSection />
      <Footer />
    </div>
  );
}
