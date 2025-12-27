import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
// Importă imaginea logo-ului
import logoImage from "@/assets/iconHeader.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Container Logo - stilizat similar cu cel din Header */}
              <div className="bg-white p-1 rounded-lg overflow-hidden border border-white/20">
                <img
                  src={logoImage}
                  alt="VXX Tractări Logo"
                  className="h-10 w-10 object-contain rounded-md"
                />
              </div>
              <div>
                <span className="font-bold text-xl block leading-none">
                  VXX TRACTĂRI
                </span>
                <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mt-1">
                  ASISTENȚĂ RUTIERĂ
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Servicii profesionale de tractări auto și asistență rutieră
              disponibile 24/7. Ne deplasăm rapid pentru a-ți oferi siguranță și
              eficiență.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary">
              Link-uri utile
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-background/70 hover:text-primary transition-colors inline-fit"
              >
                Acasă
              </Link>
              <Link
                to="/servicii"
                className="text-background/70 hover:text-primary transition-colors inline-fit"
              >
                Servicii
              </Link>
              <Link
                to="/contact"
                className="text-background/70 hover:text-primary transition-colors inline-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary">Contact</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0774579178"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">0774 579 178</span>
              </a>
              <a
                href="mailto:vxxtractari@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>vxxtractari@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>București, Sector 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-background/50">
          <p>© {currentYear} VXX Tractări Auto. Toate drepturile rezervate.</p>
          <div className="flex gap-8">
            <Link
              to="/termeni"
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Termeni și condiții
            </Link>
            <Link
              to="/confidentialitate"
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
