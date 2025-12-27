import React from "react";
import { Phone } from "lucide-react";

interface PhoneWidgetProps {
  phoneNumber?: string;
  isVisible?: boolean; // Prop pentru controlul vizibilității
}

const PhoneWidget = ({
  phoneNumber = "0774579178",
  isVisible = true,
}: PhoneWidgetProps) => {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      // Am adăugat tranziție pentru opacity și pointer-events pentru a nu putea fi apăsat când e invizibil
      className={`fixed bottom-10 left-6 z-[55] w-20 h-20 bg-[#F59E0B] rounded-full shadow-lg flex items-center justify-center group transition-all duration-500
        ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }
      `}
      aria-label="Sună acum"
    >
      <div className="flex flex-col items-center justify-center text-white">
        <Phone className="w-8 h-8 mb-0.5" fill="currentColor" />
        <span className="text-[10px] font-bold uppercase leading-none">
          Sună
        </span>
      </div>

      {/* Tooltip */}
      <span className="absolute left-full ml-4 px-3 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border pointer-events-none">
        Sună acum: {phoneNumber}
      </span>
    </button>
  );
};

export default PhoneWidget;
