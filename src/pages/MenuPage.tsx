import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Category, MenuItem } from '../types/menu';
import { MENU_ITEMS } from '../data/menu';
import { MenuItemCard } from '../components/menu/MenuItemCard';
import { ProductModal } from '../components/menu/ProductModal';

export const MenuPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');
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

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#101B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Explore All Offerings
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FFF3E6] tracking-wider mb-4">
            OUR COMPLETE MENU
          </h1>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Juicy burgers, smoky BBQ platters, handcrafted pizzas, and fresh shawarma made fresh for Shahdara.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#1B2E52] p-4 rounded-[24px] border border-[#CBD4E5]/10 shadow-xl">
          {/* Search input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAB8D0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, BBQ, pizza..."
              className="w-full bg-[#142341] text-[#FFF3E6] text-sm pl-11 pr-4 py-3 rounded-2xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438]"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-[#FF8A4C]" />
            <span className="text-xs text-[#AAB8D0] font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#142341] text-[#FFF3E6] text-xs py-2.5 px-4 rounded-xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438] cursor-pointer"
            >
              <option value="default">Featured / Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#FF7438] text-[#101B35] font-bold shadow-lg shadow-[#FF7438]/25 scale-105'
                  : 'bg-[#1B2E52] text-[#AAB8D0] hover:bg-[#142341] hover:text-[#FFF3E6] border border-[#CBD4E5]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#1B2E52] rounded-[24px] border border-[#CBD4E5]/10 shadow-xl">
            <h3 className="font-display text-2xl text-[#FFF3E6] mb-2">No menu items found</h3>
            <p className="text-sm text-[#AAB8D0] mb-6">Try searching for something else or reset your filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] text-xs font-bold px-6 py-2.5 rounded-full shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onQuickView={(i) => setSelectedItem(i)}
              />
            ))}
          </div>
        )}
      </div>

      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
