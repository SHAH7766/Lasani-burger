import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../store/useCart';
import { formatCurrency } from '../../lib/formatCurrency';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { handlePhoneClick } from '../../lib/phone';
import { toast } from 'sonner';

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, toggleCart, removeItem, updateQuantity, clearCart, getSubtotal } = useCart();
  const subtotal = getSubtotal();
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const orderSummaryText = items
      .map((i) => `• ${i.item.name} x ${i.quantity} = ${formatCurrency(i.item.price ? i.item.price * i.quantity : null)}`)
      .join('\n');

    const message = encodeURIComponent(
      `*New Order Request - Lasani Burger & BBQ*\n\n` +
      `*Customer Name:* ${customerName || 'Valued Customer'}\n` +
      `*Order Type:* ${orderType.toUpperCase()}\n\n` +
      `*Items:*\n${orderSummaryText}\n\n` +
      `*Subtotal:* ${formatCurrency(subtotal)}\n\n` +
      `Please confirm order availability and time. Thank you!`
    );

    window.open(`https://wa.me/923296000046?text=${message}`, '_blank');
    toast.success('WhatsApp order summary opened!');
    setShowCheckoutModal(false);
    toggleCart(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 bg-[#101B35]/85 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#142341] border-l border-[#CBD4E5]/10 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#CBD4E5]/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#FF7438]" />
                <h2 className="font-display text-xl text-[#FFF3E6] tracking-wide">Your Order Cart</h2>
              </div>
              <button
                onClick={() => toggleCart(false)}
                className="p-2 rounded-full bg-[#1B2E52] text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#1B2E52] flex items-center justify-center text-[#AAB8D0] mb-4 border border-[#CBD4E5]/10">
                    <ShoppingBag className="w-8 h-8 opacity-40 text-[#FF7438]" />
                  </div>
                  <h3 className="font-display text-lg text-[#FFF3E6] mb-2">Your cart is empty</h3>
                  <p className="text-sm text-[#AAB8D0] max-w-xs mb-6">
                    Explore our delicious menu and add your favorite burgers, BBQ, and pizza to get started!
                  </p>
                  <button
                    onClick={() => toggleCart(false)}
                    className="bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-md"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#1B2E52] border border-[#CBD4E5]/10 shadow-md"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 object-cover rounded-xl shrink-0 border border-[#CBD4E5]/10"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#FFF3E6] text-sm truncate">{cartItem.item.name}</h4>
                      <p className="text-xs text-[#FF8A4C] font-semibold mt-0.5">
                        {formatCurrency(cartItem.item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                          className="w-6 h-6 rounded bg-[#101B35] text-[#FFF3E6] flex items-center justify-center hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-[#FFF3E6] w-5 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                          className="w-6 h-6 rounded bg-[#101B35] text-[#FFF3E6] flex items-center justify-center hover:bg-[#FF7438] hover:text-[#101B35] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        removeItem(cartItem.item.id);
                        toast.info('Item removed from cart');
                      }}
                      className="p-2 text-[#AAB8D0] hover:text-[#FF7438] transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Subtotal / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#CBD4E5]/10 bg-[#142341] space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#AAB8D0]">Subtotal</span>
                  <span className="font-display text-lg text-[#FFF3E6] font-bold">{formatCurrency(subtotal)}</span>
                </div>

                {!showCheckoutModal ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setShowCheckoutModal(true)}
                      className="w-full bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold py-3 rounded-xl shadow-lg shadow-[#FF7438]/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Proceed to Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-[#1B2E52] hover:bg-white/10 text-[#AAB8D0] text-xs py-2 rounded-xl transition-colors border border-[#CBD4E5]/10"
                    >
                      Clear Cart
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3 pt-2 bg-[#1B2E52] p-4 rounded-2xl border border-[#CBD4E5]/10">
                    <h4 className="text-sm font-semibold text-[#FFF3E6]">Complete Order Details</h4>
                    <div>
                      <label className="block text-[11px] text-[#AAB8D0] mb-1">Your Name</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-[#101B35] border border-[#CBD4E5]/15 rounded-xl px-3 py-2 text-xs text-[#FFF3E6] focus:outline-none focus:border-[#FF7438]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#AAB8D0] mb-1">Order Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType('pickup')}
                          className={`py-1.5 text-xs rounded-xl font-medium transition-colors ${
                            orderType === 'pickup' ? 'bg-[#FF7438] text-[#101B35] font-bold' : 'bg-[#101B35] text-[#AAB8D0]'
                          }`}
                        >
                          Pickup / Dine-in
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('delivery')}
                          className={`py-1.5 text-xs rounded-xl font-medium transition-colors ${
                            orderType === 'delivery' ? 'bg-[#FF7438] text-[#101B35] font-bold' : 'bg-[#101B35] text-[#AAB8D0]'
                          }`}
                        >
                          Home Delivery
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={handleWhatsAppOrder}
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send WhatsApp</span>
                      </button>
                      <a
                        href="tel:+923296000046"
                        onClick={handlePhoneClick}
                        className="bg-[#FF8A4C] hover:bg-[#FF7438] text-[#101B35] text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call to Order</span>
                      </a>
                    </div>
                    <button
                      onClick={() => setShowCheckoutModal(false)}
                      className="w-full text-center text-xs text-[#AAB8D0] hover:text-[#FFF3E6] pt-1"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
