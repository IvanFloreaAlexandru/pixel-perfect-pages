import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const Index = () => {
  return (
    <>
      <SEO
        title="Tractări Auto București 24/7 | VXX Tractări - Asistență Rutieră Non-Stop"
        description="Tractări Auto București și Ilfov 24/7 | VXX Tractări 
Tractări începând de la 150 lei, asistență rutieră NON-STOP în București și Ilfov. Sună: 0774 579 178"
        canonical="/"
      />
      <LocalBusinessSchema />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Stats />
          <Features />
          <ServicesPreview />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
