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
    <div className="pt-28 pb-20 min-h-screen theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold theme-accent uppercase tracking-widest block mb-2">
            Explore All Offerings
          </span>
          <h1 className="font-display text-4xl sm:text-6xl theme-text-main tracking-wider mb-4">
            OUR COMPLETE MENU
          </h1>
          <p className="text-sm sm:text-base theme-text-muted">
            Juicy burgers, smoky BBQ platters, handcrafted pizzas, and fresh shawarma made fresh for Shahdara.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 theme-bg-elevated p-4 rounded-[24px] border theme-border shadow-xl">
          {/* Search input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 theme-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, BBQ, pizza..."
              className="w-full theme-bg-secondary theme-text-main text-sm pl-11 pr-4 py-3 rounded-2xl border theme-border focus:outline-none focus:border-[var(--theme-accent)]"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 theme-accent" />
            <span className="text-xs theme-text-muted font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="theme-bg-secondary theme-text-main text-xs py-2.5 px-4 rounded-xl border theme-border focus:outline-none focus:border-[var(--theme-accent)] cursor-pointer"
            >
              <option value="default" className="bg-[#101B35]">Featured / Default</option>
              <option value="price-low" className="bg-[#101B35]">Price: Low to High</option>
              <option value="price-high" className="bg-[#101B35]">Price: High to Low</option>
              <option value="name" className="bg-[#101B35]">Name: A to Z</option>
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
                  ? 'btn-primary shadow-lg scale-105'
                  : 'theme-bg-elevated theme-text-muted hover:theme-bg-secondary hover:theme-text-main border theme-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 theme-bg-elevated rounded-[24px] border theme-border shadow-xl">
            <h3 className="font-display text-2xl theme-text-main mb-2">No menu items found</h3>
            <p className="text-sm theme-text-muted mb-6">Try searching for something else or reset your filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-primary text-xs font-bold px-6 py-2.5 rounded-full shadow-md cursor-pointer"
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
