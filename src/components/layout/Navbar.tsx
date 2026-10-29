import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, Phone } from 'lucide-react';
import { useCart } from '../../store/useCart';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../common/Logo';
import { handlePhoneClick } from '../../lib/phone';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101B35]/95 backdrop-blur-md border-b border-[#CBD4E5]/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-[#101B35]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? 'text-[#FF7438]' : 'text-[#AAB8D0] hover:text-[#FFF3E6]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7438] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Phone quick link */}
            <a
              href="tel:+923296000046"
              onClick={handlePhoneClick}
              className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#AAB8D0] hover:text-[#FF7438] transition-colors bg-[#1B2E52] px-3.5 py-2 rounded-full border border-[#CBD4E5]/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF7438]" />
              <span>0329 6000046</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => toggleCart(true)}
              className="relative p-2.5 rounded-full bg-[#1B2E52] text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors border border-[#CBD4E5]/10 flex items-center justify-center cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF7438] text-[#101B35] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#101B35] animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Order Now CTA */}
            <Link
              to="/menu"
              className="hidden sm:inline-flex items-center justify-center btn-primary px-5 py-2.5 rounded-full text-sm"
            >
              Order Now
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-[#1B2E52] text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
