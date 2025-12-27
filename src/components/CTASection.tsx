import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-custom text-center">
        {/* Titlu cu bare gri decorative stânga-dreapta */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden sm:block w-8 h-0.5 bg-[#1F2937]"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937]">
            Ai nevoie de ajutor acum?
          </h2>
          <div className="hidden sm:block w-8 h-0.5 bg-[#1F2937]"></div>
        </div>

        {/* Paragraf în gri închis cu opacitate pentru lizibilitate */}
        <p className="text-[#1F2937]/90 text-lg mb-8 max-w-xl mx-auto font-medium">
          Suntem la doar un telefon distanță. Echipa noastră este gata să plece
          spre tine.
        </p>

        {/* Buton solid gri închis cu text alb pentru contrast maxim */}
        <Button
          variant="cta"
          size="xl"
          asChild
          className="bg-[#1F2937] text-white hover:bg-[#1F2937]/90 border-none shadow-lg transition-all duration-300"
        >
          <a href="tel:0774579178" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-bold">0774 579 178</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
