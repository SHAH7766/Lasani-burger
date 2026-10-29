import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { motion } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Lasani Burger & BBQ, I would like to place an order or inquire about your menu.");
    window.open(`https://wa.me/923296000046?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none" />

      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.12, rotate: 5 }}
        whileTap={{ scale: 0.92 }}
        className="relative bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border-2 border-white/20"
        aria-label="Order via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-[#1B2E52] text-[#FFF3E6] text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#CBD4E5]/15 pointer-events-none hidden sm:inline-block">
          Order via WhatsApp
        </span>
      </motion.button>
    </motion.div>
  );
};
