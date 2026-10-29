import React from 'react';
import { Flame } from 'lucide-react';
import { motion } from 'motion/react';

export const PromoMarquee: React.FC = () => {
  const items = [
    'JUICY BURGERS',
    'SIZZLING BBQ',
    'FRESHLY PREPARED',
    'PIZZA & SHAWARMA',
    'BIG FLAVOUR',
    'IMAMIA COLONY SHAHDARA',
  ];

  return (
    <div className="bg-[#142341] border-y border-[#CBD4E5]/10 py-5 overflow-hidden relative shadow-inner">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-12 cursor-pointer">
        {[...items, ...items, ...items].map((text, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.08, color: '#FF7438' }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="flex items-center gap-4 text-[#AAB8D0] font-display tracking-widest text-lg sm:text-xl"
          >
            <span className="text-[#FFF3E6] hover:text-[#FF7438] transition-colors">{text}</span>
            <Flame className="w-4 h-4 text-[#FF7438]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
