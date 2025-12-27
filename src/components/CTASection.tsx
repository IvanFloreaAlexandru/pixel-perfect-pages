import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Ai nevoie de ajutor acum?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Suntem la doar un telefon distanță. Echipa noastră este gata să plece
          spre tine.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href="tel:0774579178">
            <Phone className="h-5 w-5" />
            0774 579 178
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
