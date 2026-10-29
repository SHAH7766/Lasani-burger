import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Category, MenuItem } from '../../types/menu';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItemCard } from '../menu/MenuItemCard';
import { ProductModal } from '../menu/ProductModal';
import { motion, AnimatePresence } from 'motion/react';

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
    <section className="py-20 bg-[#101B35] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF7438]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Taste the Perfection
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider mb-4">
            THE MENU THAT HITS DIFFERENT
          </h2>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Find your next favourite, from loaded burgers to smoky BBQ classics.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#FF7438] text-[#101B35] font-bold shadow-lg shadow-[#FF7438]/30'
                  : 'bg-[#1B2E52] text-[#AAB8D0] hover:bg-[#142341] hover:text-[#FFF3E6] border border-[#CBD4E5]/10'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <MenuItemCard
                  item={item}
                  onQuickView={(i) => setSelectedItem(i)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/menu"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm group shadow-lg"
          >
            <span>View Full Menu & Prices</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
