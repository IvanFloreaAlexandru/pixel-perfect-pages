import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Importuri Pagini
import Index from "./pages/Index";
import Servicii from "./pages/Servicii";
import Contact from "./pages/Contact";
import Termeni from "./pages/Termeni";
import Confidentialitate from "./pages/Confidentialitate";
import NotFound from "./pages/NotFound";

// Importuri Componente Widget
import WhatsAppButton from "./components/WhatsAppButton";
import PhoneWidget from "./components/PhoneWidget";
import MobileContactBar from "./components/MobileContactBar";
import ScrollToTop from "./components/ScrollToTop"; // Componenta nou adăugată

const queryClient = new QueryClient();

/**
 * AppContent gestionează logica de afișare a widget-urilor
 * în funcție de prezența footer-ului pe fiecare pagină.
 */
const AppContent = () => {
  const [showWidgets, setShowWidgets] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Resetăm widget-urile la vizibil când schimbăm pagina
    setShowWidgets(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dacă footer-ul intră în vizor (isIntersecting), ascundem widget-urile
        setShowWidgets(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // Declanșează când 10% din footer este vizibil
      }
    );

    // Folosim un mic delay pentru a permite paginii să se randeze înainte de a căuta footer-ul
    const timer = setTimeout(() => {
      const footer = document.querySelector("footer");
      if (footer) {
        observer.observe(footer);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-execută la fiecare schimbare de rută

  return (
    <>
      {/* 1. BARA MOBILĂ PORTOCALIE: Apare doar pe ecrane mici (< 768px) */}
      <MobileContactBar isVisible={showWidgets} />

      {/* 2. WHATSAPP: Vizibil peste tot, repoziționat automat deasupra barei pe mobil */}
      <WhatsAppButton isVisible={showWidgets} />

      {/* 3. PHONE WIDGET (CERC): Vizibil doar pe desktop, ascuns pe mobil pentru a lăsa loc barei */}
      <div className="hidden md:block">
        <PhoneWidget isVisible={showWidgets} />
      </div>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termeni" element={<Termeni />} />
        <Route path="/confidentialitate" element={<Confidentialitate />} />
        {/* Ruta de tip catch-all pentru pagini inexistente */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

/**
 * Componenta principală App care configurează providerii și router-ul.
 */
const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* ScrollToTop forțează browserul să urce la începutul paginii la navigare */}
            <ScrollToTop />
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
