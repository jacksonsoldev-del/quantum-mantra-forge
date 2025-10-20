import FloatingParticles from "@/components/FloatingParticles";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import EbookShowcase from "@/components/EbookShowcase";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingParticles />
      <Hero />
      <Problem />
      <Benefits />
      <EbookShowcase />
      <Offer />
      <Footer />
    </div>
  );
};

export default Index;
