import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Servicii from "./pages/Servicii";
import Contact from "./pages/Contact";
import Termeni from "./pages/Termeni";
import Confidentialitate from "./pages/Confidentialitate";
import NotFound from "./pages/NotFound";

import WhatsAppButton from "./components/WhatsAppButton";
import PhoneWidget from "./components/PhoneWidget";
import MobileContactBar from "./components/MobileContactBar";

const queryClient = new QueryClient();

const App = () => {
  const [showWidgets, setShowWidgets] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ascundem toate elementele de contact când footer-ul intră în vizor
        setShowWidgets(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* 1. BARA MOBILĂ PORTOCALIE: Apare doar pe mobil (< 768px) */}
            <MobileContactBar isVisible={showWidgets} />

            {/* 2. WHATSAPP: Vizibil pe toate dispozitivele. 
                Logica de repoziționare (mai sus pe mobil) este în interiorul componentei */}
            <WhatsAppButton isVisible={showWidgets} />

            {/* 3. PHONE WIDGET (CERC): Vizibil DOAR pe Desktop.
                Pe mobil folosim bara lată de jos în loc de acest cerc. */}
            <div className="hidden md:block">
              <PhoneWidget isVisible={showWidgets} />
            </div>

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicii" element={<Servicii />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/termeni" element={<Termeni />} />
              <Route
                path="/confidentialitate"
                element={<Confidentialitate />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
