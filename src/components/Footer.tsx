import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
// Importă imaginea logo-ului
import logoImage from "@/assets/iconHeader.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Media Links - Modifică URL-urile cu link-urile tale reale
  const socialLinks = {
    facebook: "https://www.facebook.com/share/1ZthmhiiAY/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/vxx_tractari?igsh=MXhjbmRudTR3dnd3Mg%3D%3D&utm_source=qr",
    tiktok: "https://www.tiktok.com/@vxx_tractari?_r=1&_t=ZN-92ZonXIjXFO",
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
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
            <p className="text-background/70 text-sm leading-relaxed max-w-xs mb-6">
              Servicii profesionale de tractări auto și asistență rutieră
              disponibile 24/7. Ne deplasăm rapid pentru a-ți oferi siguranță și
              eficiență.
            </p>

            {/* SOCIAL MEDIA SECTION */}
            <div className="flex gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="TikTok"
              >
                {/* SVG personalizat pentru TikTok (nu există în Lucide de bază) */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.46-.1-.07-.19-.15-.29-.22-.01 3.29-.01 6.59-.02 9.88-.08 1.95-.94 3.82-2.51 4.98-1.74 1.34-4.12 1.72-6.19 1.12-2.22-.65-4.05-2.49-4.71-4.7-.72-2.39-.19-5.11 1.48-7 1.25-1.45 3.12-2.32 5.01-2.45v4.18c-1.12.11-2.23.63-2.9 1.54-.75 1.02-.85 2.41-.33 3.5.47 1.05 1.55 1.79 2.7 1.9 1.24.16 2.58-.33 3.28-1.37.5-.73.61-1.63.6-2.5.01-4.13.01-8.25.02-12.38z" />
                </svg>
              </a>
            </div>
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
