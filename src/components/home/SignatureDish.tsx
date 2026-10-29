import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const SignatureDish: React.FC = () => {
  return (
    <section className="py-20 bg-[#142341] border-y border-[#CBD4E5]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-[#CBD4E5]/15 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80"
                alt="Lasani Mixed BBQ Platter"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-[#FF8A4C] text-[#101B35] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block shadow-md">
                  Chef's Special Recommendation
                </span>
                <h3 className="font-display text-3xl text-[#FFF3E6]">Lasani Mixed BBQ Platter</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B2E52] border border-[#FF8A4C]/30 shadow-md">
              <Flame className="w-4 h-4 text-[#FF8A4C]" />
              <span className="text-xs font-semibold tracking-wider text-[#FF8A4C] uppercase">
                Made For The Moment
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider">
              BOLD FLAIR, SMOKY TASTE, FOOD WORTH SHARING.
            </h2>

            <p className="text-sm sm:text-base text-[#AAB8D0] leading-relaxed">
              Experience our legendary charcoal-grilled BBQ platter, prepared with traditional Lahori spices, tender chicken tikka, malai boti, and sizzling seekh kebabs. Perfect for family gatherings and weekend feasts.
            </p>

            <ul className="space-y-3 text-sm text-[#AAB8D0]">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF7438]/20 flex items-center justify-center text-[#FF7438]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>100% Halal fresh meat grilled over hot glowing coals</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF7438]/20 flex items-center justify-center text-[#FF7438]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Served with fresh tandoori naan, mint raita, and salad</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-6">
              <Link
                to="/menu"
                className="btn-primary px-8 py-4 rounded-full text-sm flex items-center gap-2 group"
              >
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="font-display text-2xl text-[#FFF3E6] font-bold">
                PKR 1,800
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
