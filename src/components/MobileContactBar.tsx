import React from "react";
import { Phone } from "lucide-react";

interface MobileContactBarProps {
  phoneNumber?: string;
  isVisible?: boolean;
}

const MobileContactBar = ({
  phoneNumber = "0774579178",
  isVisible = true,
}: MobileContactBarProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] md:hidden transition-all duration-500 transform
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-3 bg-[#F59E0B] py-5 shadow-[0_-4px_12px_rgba(0,0,0,0.2)] active:bg-[#D97706] transition-colors"
      >
        {/* Iconița acum este gri închis (#1F2937) */}
        <Phone
          className="w-6 h-6 animate-pulse text-[#1F2937]"
          fill="currentColor"
        />

        {/* Textul acum este gri închis (#1F2937) */}
        <span className="text-xl font-bold uppercase tracking-wider text-[#1F2937]">
          Sună acum
        </span>
      </a>
      {/* Fundalul pentru Safe Area rămâne portocaliu pentru continuitate vizuală */}
      <div className="bg-[#F59E0B] h-[env(safe-area-inset-bottom)]"></div>
    </div>
  );
};

export default MobileContactBar;
