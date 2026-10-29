import React from 'react';
import { Flame } from 'lucide-react';

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
    <div className="bg-[#142341] border-y border-[#CBD4E5]/10 py-4 overflow-hidden relative shadow-inner">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-12">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 text-[#AAB8D0] font-display tracking-widest text-lg sm:text-xl">
            <span className="text-[#FFF3E6]">{text}</span>
            <Flame className="w-4 h-4 text-[#FF7438]" />
          </div>
        ))}
      </div>
    </div>
  );
};
