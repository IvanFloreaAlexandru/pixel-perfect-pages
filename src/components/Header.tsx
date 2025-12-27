import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="tel:0774579178"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0774 579 178</span>
            </a>
            <a
              href="mailto:vxxtractari@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">vxxtractari@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>București, Sector 1</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border py-4">
        <div className="container-custom flex items-center justify-between">
          {/* Logo actualizat cu imaginea ta */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary/10 p-1 rounded-lg transition-transform group-hover:scale-105 overflow-hidden border border-primary/20">
              <img
                src={logoImage}
                alt="VXX Tractări Logo"
                className="h-12 w-12 object-contain rounded-md"
              />
            </div>
            <div>
              <span className="font-bold text-xl text-foreground block leading-none">
                VXX TRACTĂRI
              </span>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mt-1">
                ASISTENȚĂ RUTIERĂ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold py-2 text-lg transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-foreground"
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
