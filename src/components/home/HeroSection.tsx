import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { handlePhoneClick } from '../../lib/phone';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-[#101B35] via-[#142341] to-[#101B35]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF7438]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF8A4C]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B2E52] border border-[#FF7438]/30 shadow-md">
              <Flame className="w-4 h-4 text-[#FF7438]" />
              <span className="text-xs font-semibold tracking-wider text-[#FF8A4C] uppercase">
                Shahdara's Food Cravings Destination
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wider text-[#FFF3E6] leading-[0.95]">
              BIG FLAVOUR.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7438] to-[#FF8A4C]">
                BOLD CRAVINGS.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#AAB8D0] max-w-xl leading-relaxed">
              From juicy stacked burgers to sizzling charcoal BBQ, discover the flavours at <strong className="text-[#FFF3E6]">Lasani Burger & BBQ</strong> in Imamia Colony, Shahdara that make every bite unforgettable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="btn-primary px-8 py-4 rounded-full text-base flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+923296000046"
                onClick={handlePhoneClick}
                className="btn-secondary px-8 py-4 rounded-full text-base flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Phone className="w-4 h-4 text-[#FF7438]" />
                <span>Call to Order</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-6 flex items-center gap-6 border-t border-[#CBD4E5]/10">
              <div className="flex items-center gap-1.5 bg-[#1B2E52] px-3.5 py-2 rounded-full border border-[#CBD4E5]/10">
                <Star className="w-4 h-4 text-[#FF8A4C] fill-current" />
                <span className="text-sm font-bold text-[#FFF3E6]">4.3</span>
                <span className="text-xs text-[#AAB8D0]">(~54 Google Reviews)</span>
              </div>
              <div className="text-xs text-[#AAB8D0] font-medium">
                Burgers • Pizza • BBQ • Shawarma
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7438]/25 to-[#FF8A4C]/25 rounded-full blur-2xl animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80"
                alt="Lasani Special Zinger Burger"
                className="relative z-10 w-full h-full object-cover rounded-[28px] shadow-2xl border border-[#CBD4E5]/15 animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
