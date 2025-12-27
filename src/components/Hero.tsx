import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tow-truck.jpg";

const Hero = () => {
  return (
    <section className="bg-background section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coloana Text */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Despre noi
              </span>
            </div>

            <h1 className="heading-primary mb-6 text-[#1F2937]">
              Tractări auto rapide și profesionale – Disponibili 24/7
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Suntem partenerul tău de încredere în situații neprevăzute. Cu o
              experiență vastă în domeniul tractărilor auto și asistenței
              rutiere, echipa noastră este pregătită să intervină prompt,
              indiferent de oră sau locație. Prioritatea noastră este siguranța
              ta și a autovehiculului tău.
            </p>

            <div className="relative">
              <div className="flex flex-wrap gap-4 mb-6">
                {/* Buton Primar - Contactează-ne */}
                <Button
                  variant="hero"
                  size="xl"
                  asChild
                  className="bg-[#1F2937] text-white hover:bg-[#1F2937]/90 shadow-button transition-all duration-300"
                >
                  <a href="tel:0774579178">
                    <Phone className="h-5 w-5 mr-2" />
                    Contactează-ne
                  </a>
                </Button>

                {/* Buton Secundar - Acum identic cu primul */}
                <Button
                  variant="hero"
                  size="xl"
                  asChild
                  className="bg-[#1F2937] text-white hover:bg-[#1F2937]/90 shadow-button transition-all duration-300"
                >
                  <Link to="/servicii">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Vezi serviciile
                  </Link>
                </Button>
              </div>

              {/* Liniile decorative de sub butoane */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-primary"></div>
                <div className="w-4 h-0.5 bg-primary/40"></div>
              </div>
            </div>
          </div>

          {/* Coloana Imagine */}
          <div
            className="relative animate-fade-in flex justify-center lg:justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-white p-2 border border-border/50">
              <img
                src={heroImage}
                alt="Asistenta Rutiera VXX Tractări Auto"
                className="max-w-full h-auto object-contain rounded-xl"
              />

              {/* Badge Experiență */}
              <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-primary text-primary-foreground px-2 py-1.5 md:px-4 md:py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-1.5 md:gap-3">
                  <div className="bg-primary-foreground/20 p-1 md:p-2 rounded-full">
                    <svg
                      className="h-3.5 w-3.5 md:h-5 md:w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-wider opacity-90 leading-none mb-0.5 md:mb-1">
                      Experiență
                    </p>
                    <p className="font-bold text-sm md:text-lg leading-none">
                      10+ Ani
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
