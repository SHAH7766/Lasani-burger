import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Clock, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuItem } from '../../types/menu';
import { formatCurrency } from '../../lib/formatCurrency';
import { useCart } from '../../store/useCart';
import { toast } from 'sonner';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!item) return null;

  const handleAdd = () => {
    addItem(item, quantity);
    toast.success(`Added ${quantity}x ${item.name} to cart!`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#101B35]/85 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#1B2E52] border border-[#CBD4E5]/15 rounded-[24px] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#101B35]/80 backdrop-blur-md text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Side */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#142341]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2E52] md:bg-gradient-to-r md:from-transparent md:to-[#1B2E52] opacity-60" />
          </div>

          {/* Details Side */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-wider">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="bg-[#FF7438] text-[#101B35] text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#101B35]" /> Featured
                  </span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl text-[#FFF3E6] mb-3">
                {item.name}
              </h2>

              <p className="text-sm text-[#AAB8D0] leading-relaxed mb-6">
                {item.description}
              </p>

              {item.prepTime && (
                <div className="flex items-center gap-2 text-xs text-[#AAB8D0] mb-6 bg-[#142341] p-3 rounded-xl border border-[#CBD4E5]/10">
                  <Clock className="w-4 h-4 text-[#FF8A4C]" />
                  <span>Estimated Preparation Time: <strong className="text-[#FFF3E6]">{item.prepTime}</strong></span>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-[#CBD4E5]/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#AAB8D0]">Price</span>
                <span className="font-display text-2xl text-[#FFF3E6] font-bold">
                  {formatCurrency(item.price)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center bg-[#142341] rounded-xl p-1 border border-[#CBD4E5]/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold text-[#FFF3E6] text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-lg text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAdd}
                  className="btn-primary flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
