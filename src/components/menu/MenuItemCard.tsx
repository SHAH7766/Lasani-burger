import React from 'react';
import { Plus, Flame, Clock } from 'lucide-react';
import type { MenuItem } from '../../types/menu';
import { formatCurrency } from '../../lib/formatCurrency';
import { useCart } from '../../store/useCart';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
  onQuickView?: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onQuickView }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item, 1);
    toast.success(`Added ${item.name} to cart!`);
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(item)}
      className="bg-[#1B2E52] rounded-[20px] overflow-hidden border border-[#CBD4E5]/10 hover:border-[#FF7438]/50 transition-all duration-300 group flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#FF7438]/10"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-[#142341]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2E52] via-transparent to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.featured && (
            <span className="bg-[#FF7438] text-[#101B35] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Flame className="w-3 h-3 text-[#101B35]" /> Featured
            </span>
          )}
          {item.popular && !item.featured && (
            <span className="bg-[#FF8A4C] text-[#101B35] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Popular
            </span>
          )}
        </div>

        {/* Prep Time */}
        {item.prepTime && (
          <div className="absolute bottom-3 right-3 bg-[#101B35]/80 backdrop-blur-md text-[#FFF3E6] text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#CBD4E5]/10">
            <Clock className="w-3 h-3 text-[#FF8A4C]" />
            <span>{item.prepTime}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="text-[11px] font-semibold text-[#FF8A4C] uppercase tracking-widest mb-1">
            {item.category}
          </div>
          <h3 className="font-display text-xl text-[#FFF3E6] group-hover:text-[#FF7438] transition-colors leading-tight mb-2">
            {item.name}
          </h3>
          <p className="text-xs text-[#AAB8D0] line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#CBD4E5]/10">
          <span className="font-display text-lg font-bold text-[#FFF3E6]">
            {formatCurrency(item.price)}
          </span>

          <button
            onClick={handleAddToCart}
            className="btn-primary w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
