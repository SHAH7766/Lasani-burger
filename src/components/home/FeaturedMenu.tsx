import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Category, MenuItem } from '../../types/menu';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItemCard } from '../menu/MenuItemCard';
import { ProductModal } from '../menu/ProductModal';

export const FeaturedMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: { label: string; value: Category }[] = [
    { label: 'All Items', value: 'all' },
    { label: 'Burgers', value: 'burgers' },
    { label: 'BBQ', value: 'bbq' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Shawarma', value: 'shawarma' },
    { label: 'Sides', value: 'sides' },
    { label: 'Drinks', value: 'drinks' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS.slice(0, 8)
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-[#101B35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Taste the Perfection
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider mb-4">
            THE MENU THAT HITS DIFFERENT
          </h2>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Find your next favourite, from loaded burgers to smoky BBQ classics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#FF7438] text-[#101B35] font-bold shadow-lg shadow-[#FF7438]/25 scale-105'
                  : 'bg-[#1B2E52] text-[#AAB8D0] hover:bg-[#142341] hover:text-[#FFF3E6] border border-[#CBD4E5]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onQuickView={(i) => setSelectedItem(i)}
            />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-[#1B2E52] hover:bg-[#FF7438] text-[#FFF3E6] hover:text-[#101B35] font-bold px-8 py-4 rounded-full text-sm transition-all border border-[#CBD4E5]/15 group shadow-lg"
          >
            <span>View Full Menu & Prices</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
