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

// IMPORTĂ BUTONUL AICI (ajustează calea dacă e necesar)
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Butonul plasat aici va apărea pe TOATE paginile, 
              deoarece este în interiorul BrowserRouter-ului 
          */}
          <WhatsAppButton
            phoneNumber="40712345678"
            message="Bună ziua! Sunt interesat de o ofertă pentru panouri solare."
          />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicii" element={<Servicii />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termeni" element={<Termeni />} />
            <Route path="/confidentialitate" element={<Confidentialitate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
