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
        description="Servicii profesionale de tractări auto și asistență rutieră disponibile 24/7 în București și împrejurimi. Intervenție rapidă în 30 minute. Sună acum: 0774 579 178"
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
