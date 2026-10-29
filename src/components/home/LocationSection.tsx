import React from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handlePhoneClick } from '../../lib/phone';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#142341] border-t border-[#CBD4E5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B2E52] rounded-[28px] border border-[#CBD4E5]/15 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Info Side */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between text-left space-y-6">
            <div>
              <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
                Find Us in Shahdara
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#FFF3E6] tracking-wider mb-6">
                LASANI BURGER & BBQ
              </h2>

              <ul className="space-y-4 text-sm text-[#AAB8D0]">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF7438] shrink-0 border border-[#CBD4E5]/10 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#FFF3E6] block mb-0.5 text-base">Address</strong>
                    <span>Imamia Colony Road, Imamia Colony, Shahdara, Lahore, Pakistan 54950</span>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF8A4C] shrink-0 border border-[#CBD4E5]/10 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#FFF3E6] block mb-0.5 text-base">Phone / WhatsApp</strong>
                    <a href="tel:+923296000046" onClick={handlePhoneClick} className="hover:text-[#FFF3E6] transition-colors font-semibold cursor-pointer">
                      0329 6000046
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF8A4C] shrink-0 border border-[#CBD4E5]/10 shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#FFF3E6] block mb-0.5 text-base">Opening Hours</strong>
                    <span>Daily: 4:30 PM onwards</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#CBD4E5]/10 flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=Imamia+Colony+Road+Shahdara+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#FF7438]/25 flex items-center gap-2"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="bg-[#142341] hover:bg-white/10 text-[#FFF3E6] font-semibold px-6 py-3.5 rounded-full text-sm transition-all border border-[#CBD4E5]/15"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Map / Visual Side */}
          <div className="lg:col-span-6 relative min-h-[400px] bg-[#101B35] flex items-center justify-center overflow-hidden">
            <iframe
              title="Lasani Burger & BBQ Location Map"
              src="https://maps.google.com/maps?q=Imamia+Colony+Road,+Shahdara,+Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-125 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
