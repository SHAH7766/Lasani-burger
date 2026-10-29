import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';
import { Logo } from '../common/Logo';
import { handlePhoneClick } from '../../lib/phone';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142341] border-t border-[#CBD4E5]/10 pt-16 pb-12 mt-auto text-[#AAB8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#CBD4E5]/10">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Logo size="md" />
            <p className="text-sm leading-relaxed text-[#AAB8D0]">
              Serving mouthwatering burgers, sizzling smoky BBQ, handcrafted pizza, and fresh shawarma right in the heart of Shahdara, Lahore.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#FF8A4C] font-semibold">
              <span>★ 4.3 Google Rating (~54 reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-[#FFF3E6] tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FF7438] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#FF7438] transition-colors">Full Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF7438] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FF7438] transition-colors">Food Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF7438] transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="font-display text-lg text-[#FFF3E6] tracking-wide mb-4">Cuisine & Menu</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/menu?category=burgers" className="hover:text-[#FF7438] transition-colors">Juicy Burgers</Link>
              </li>
              <li>
                <Link to="/menu?category=bbq" className="hover:text-[#FF7438] transition-colors">Charcoal BBQ Platters</Link>
              </li>
              <li>
                <Link to="/menu?category=pizza" className="hover:text-[#FF7438] transition-colors">Handcrafted Pizza</Link>
              </li>
              <li>
                <Link to="/menu?category=shawarma" className="hover:text-[#FF7438] transition-colors">Shawarma Rolls</Link>
              </li>
              <li>
                <Link to="/menu?category=sides" className="hover:text-[#FF7438] transition-colors">Fries & Wings</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-display text-lg text-[#FFF3E6] tracking-wide mb-4">Visit & Order</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF7438] shrink-0 mt-1" />
                <span>Imamia Colony Road, Imamia Colony, Shahdara, Lahore, Pakistan 54950</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF7438] shrink-0" />
                <a href="tel:+923296000046" onClick={handlePhoneClick} className="hover:text-[#FFF3E6] transition-colors font-semibold cursor-pointer">
                  0329 6000046
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FF8A4C] shrink-0 mt-1" />
                <span>Open Daily: 4:30 PM onwards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Lasani Burger & BBQ. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[#AAB8D0]">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#FF7438] fill-current" /> for Lahore food lovers
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#1B2E52] text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
