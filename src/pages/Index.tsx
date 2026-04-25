import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BentoGrid from "@/components/BentoGrid";
import LeadershipSection from "@/components/LeadershipSection";
import StrategicVision from "@/components/StrategicVision";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <div className="noise-overlay" />
    <Navbar />
    <main>
      <HeroSection />
      <WhyChooseUs />
      <BentoGrid />
      <LeadershipSection />
      <StrategicVision />
      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Index;
