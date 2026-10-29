import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Lasani Burger & BBQ, I would like to place an order or inquire about your menu.");
    window.open(`https://wa.me/923296000046?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group cursor-pointer"
      aria-label="Order via WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="absolute right-full mr-3 bg-[#211E1A] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
        Order via WhatsApp
      </span>
    </button>
  );
};
