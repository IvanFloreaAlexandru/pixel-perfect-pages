import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceImage1 from "@/assets/service-1.jpg";
import driverImage from "@/assets/driver-portrait.jpg";

const services = [
  "Tractări autoturisme, SUV-uri și autoutilitare",
  "Asistență rutieră rapidă",
  "Transport auto pe platformă",
  "Recuperare vehicule avariate",
  "Pornire baterie / pană de combustibil",
];

const ServicesPreview = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="heading-secondary mb-6">Serviciile noastre</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Oferim o gamă completă de servicii de tractări și asistență
              rutieră pentru a te ajuta în orice situație critică. Siguranța
              mașinii tale este prioritatea noastră principală.
            </p>

            <ul className="grid gap-4 mb-10">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="bg-primary rounded-full p-1.5 shadow-sm group-hover:scale-110 transition-transform">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{service}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/servicii"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
            >
              Vezi toate serviciile
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Images Grid */}
          <div
            className="grid grid-cols-2 gap-4 animate-fade-in relative"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Element decorativ fundal */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
              <img
                src={serviceImage1}
                alt="Tractări autoturisme pe platformă"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 mt-8 lg:mt-12">
              <img
                src={driverImage}
                alt="Echipă profesionistă VXX Tractări"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
