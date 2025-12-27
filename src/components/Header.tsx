import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import logoImage from "@/assets/iconHeader.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/servicii", label: "Servicii" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* 1. Bara de sus - Gri Închis (#1F2937) */}
      <div className="bg-[#1F2937] text-white py-2">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="tel:0774579178"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">0774 579 178</span>
            </a>
            <a
              href="mailto:vxxtractari@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline">vxxtractari@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4 text-primary" />
            <span>București, Sector 1</span>
          </div>
        </div>
      </div>

      {/* 2. Navigația Principală - Fundal Portocaliu */}
      <nav className="bg-primary border-b border-orange-500 py-4 shadow-md">
        <div className="container-custom flex items-center justify-between">
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-[#1F2937] p-1 rounded-lg transition-transform group-hover:scale-105 overflow-hidden shadow-sm border border-[#1F2937]/20">
              <img
                src={logoImage}
                alt="VXX Tractări Logo"
                className="h-12 w-12 object-contain rounded-md"
              />
            </div>
            <div>
              <span className="font-bold text-xl block leading-none text-[#1F2937]">
                VXX TRACTĂRI
              </span>
              <p className="text-[10px] font-semibold text-[#1F2937]/80 uppercase tracking-[0.2em] mt-1">
                ASISTENȚĂ RUTIERĂ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - CORECTATĂ PENTRU GRI */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-bold transition-colors text-[#1F2937] hover:opacity-70 ${
                  isActive(link.href)
                    ? "underline underline-offset-4 decoration-2"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buton Meniu Mobil */}
          <button
            className="md:hidden p-2 text-[#1F2937]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Meniu Mobil - CORECTAT PENTRU GRI */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-orange-500 animate-slide-up">
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-bold py-3 text-xl border-b border-orange-400 last:border-0 text-[#1F2937] ${
                    isActive(link.href) ? "underline underline-offset-8" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
