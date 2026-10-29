import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../common/Logo';
import { handlePhoneClick } from '../../lib/phone';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#101B35]/85 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#142341] border-l border-[#CBD4E5]/10 z-50 flex flex-col p-6 md:hidden shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#CBD4E5]/10">
              <Logo size="sm" />
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#1B2E52] text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 py-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#FF7438] text-[#101B35] font-bold'
                        : 'text-[#AAB8D0] hover:bg-[#1B2E52] hover:text-[#FFF3E6]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}
            </nav>

            {/* Contact Info Card */}
            <div className="mt-auto pt-6 border-t border-[#CBD4E5]/10 flex flex-col gap-4">
              <a
                href="tel:+923296000046"
                onClick={handlePhoneClick}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1B2E52] text-[#FFF3E6] hover:bg-[#FF7438]/20 transition-colors border border-[#CBD4E5]/10 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF7438]/20 flex items-center justify-center text-[#FF7438]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB8D0]">Call to Order</div>
                  <div className="text-sm font-semibold">0329 6000046</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1B2E52] text-[#FFF3E6] border border-[#CBD4E5]/10">
                <div className="w-8 h-8 rounded-full bg-[#FF8A4C]/20 flex items-center justify-center text-[#FF8A4C] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB8D0]">Location</div>
                  <div className="text-xs font-medium text-[#FFF3E6]">
                    Imamia Colony Road, Shahdara, Lahore
                  </div>
                </div>
              </div>

              <Link
                to="/menu"
                className="w-full text-center py-3.5 rounded-xl bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold shadow-lg transition-all"
              >
                Explore Full Menu
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
