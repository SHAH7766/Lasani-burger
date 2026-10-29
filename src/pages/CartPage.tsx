import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/useCart';
import { handlePhoneClick } from '../lib/phone';
import { toast } from 'sonner';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal } = useCart();
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const subtotal = getSubtotal();
  const deliveryFee = orderType === 'delivery' ? 150 : 0;
  const total = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    if (!customerInfo.name || !customerInfo.phone || (orderType === 'delivery' && !customerInfo.address)) {
      toast.error('Please fill in your name, phone, and address');
      return;
    }

    let message = `*🔥 NEW ORDER - LASANI BURGER & BBQ 🔥*%0A%0A`;
    message += `*Order Type:* ${orderType === 'delivery' ? 'Home Delivery (Shahdara)' : 'Takeaway / Pickup'}%0A`;
    message += `*Customer Name:* ${encodeURIComponent(customerInfo.name)}%0A`;
    message += `*Phone:* ${encodeURIComponent(customerInfo.phone)}%0A`;
    if (orderType === 'delivery') {
      message += `*Address:* ${encodeURIComponent(customerInfo.address)}%0A`;
    }
    if (customerInfo.notes) {
      message += `*Notes:* ${encodeURIComponent(customerInfo.notes)}%0A`;
    }
    message += `%0A*--- ORDER ITEMS ---*%0A`;

    items.forEach((cartItem, index) => {
      message += `${index + 1}. *${encodeURIComponent(cartItem.item.name)}* x ${cartItem.quantity} — Rs. ${(cartItem.item.price !== null ? cartItem.item.price * cartItem.quantity : 0).toLocaleString()}%0A`;
    });

    message += `%0A*Subtotal:* Rs. ${subtotal.toLocaleString()}%0A`;
    if (orderType === 'delivery') {
      message += `*Delivery Fee:* Rs. ${deliveryFee.toLocaleString()}%0A`;
    }
    message += `*Total Amount:* Rs. ${total.toLocaleString()}%0A%0A_Please confirm this order._`;

    window.open(`https://wa.me/923296000046?text=${message}`, '_blank');
    toast.success('Order sent to WhatsApp successfully!');
  };

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-[#101B35] flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-3xl bg-[#1B2E52] flex items-center justify-center text-[#FF8A4C] mx-auto mb-6 border border-[#CBD4E5]/10 shadow-xl">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-display text-3xl text-[#FFF3E6] mb-2">YOUR CART IS EMPTY</h2>
          <p className="text-sm text-[#AAB8D0] mb-8">
            Looks like you haven't added any delicious burgers or BBQ platters to your cart yet.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#FF7438]/25"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#101B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Review & Checkout
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FFF3E6] tracking-wider mb-2">
            YOUR SHOPPING CART
          </h1>
          <p className="text-sm text-[#AAB8D0]">
            Review your items and complete your order via WhatsApp or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-[#CBD4E5]/10">
              <span className="text-sm font-semibold text-[#FFF3E6]">Items ({items.length})</span>
              <button
                onClick={clearCart}
                className="text-xs text-[#FF7438] hover:text-[#FF8A4C] font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Cart</span>
              </button>
            </div>

            <div className="space-y-4">
              {items.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="bg-[#1B2E52] p-4 sm:p-6 rounded-[24px] border border-[#CBD4E5]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-[#CBD4E5]/10 shrink-0"
                    />
                    <div>
                      <h3 className="font-display text-lg sm:text-xl text-[#FFF3E6] mb-1">{cartItem.item.name}</h3>
                      <span className="text-sm font-bold text-[#FFF3E6]">
                        {cartItem.item.price !== null ? `Rs. ${cartItem.item.price.toLocaleString()}` : 'Price on request'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-0 border-[#CBD4E5]/10">
                    <div className="flex items-center gap-2 bg-[#142341] p-1.5 rounded-xl border border-[#CBD4E5]/15">
                      <button
                        onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-[#1B2E52] text-[#FFF3E6] flex items-center justify-center hover:bg-[#FF7438] hover:text-[#101B35] transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-[#FFF3E6]">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-[#1B2E52] text-[#FFF3E6] flex items-center justify-center hover:bg-[#FF7438] hover:text-[#101B35] transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(cartItem.item.id)}
                      className="text-[#AAB8D0] hover:text-[#FF7438] p-2 transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Form & Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1B2E52] p-8 rounded-[28px] border border-[#CBD4E5]/15 shadow-xl space-y-6">
              <h3 className="font-display text-2xl text-[#FFF3E6] tracking-wider">ORDER DETAILS</h3>

              {/* Order Type Toggle */}
              <div className="grid grid-cols-2 gap-3 bg-[#142341] p-1.5 rounded-2xl border border-[#CBD4E5]/15">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-[#FF7438] text-[#101B35] shadow-md'
                      : 'text-[#AAB8D0] hover:text-[#FFF3E6]'
                  }`}
                >
                  Home Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    orderType === 'pickup'
                      ? 'bg-[#FF7438] text-[#101B35] shadow-md'
                      : 'text-[#AAB8D0] hover:text-[#FFF3E6]'
                  }`}
                >
                  Takeaway
                </button>
              </div>

              {/* Customer Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="e.g. Usman Ali"
                    className="w-full bg-[#142341] text-[#FFF3E6] text-xs px-4 py-3 rounded-xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="e.g. 0329 6000046"
                    className="w-full bg-[#142341] text-[#FFF3E6] text-xs px-4 py-3 rounded-xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438]"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-1.5">
                      Shahdara Delivery Address
                    </label>
                    <textarea
                      rows={2}
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      placeholder="Street address, nearest landmark in Shahdara..."
                      className="w-full bg-[#142341] text-[#FFF3E6] text-xs px-4 py-3 rounded-xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438] resize-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#AAB8D0] uppercase tracking-wider mb-1.5">
                    Special Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    placeholder="e.g. Extra spicy, no onions..."
                    className="w-full bg-[#142341] text-[#FFF3E6] text-xs px-4 py-3 rounded-xl border border-[#CBD4E5]/15 focus:outline-none focus:border-[#FF7438]"
                  />
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-4 border-t border-[#CBD4E5]/10 space-y-2 text-sm">
                <div className="flex justify-between text-[#AAB8D0]">
                  <span>Subtotal</span>
                  <span className="text-[#FFF3E6]">Rs. {subtotal.toLocaleString()}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-[#AAB8D0]">
                    <span>Delivery Fee</span>
                    <span className="text-[#FFF3E6]">Rs. {deliveryFee.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#FFF3E6] pt-3 border-t border-[#CBD4E5]/10">
                  <span>Total Amount</span>
                  <span className="text-[#FF8A4C]">Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Order via WhatsApp</span>
                </button>

                <a
                  href="tel:+923296000046"
                  onClick={handlePhoneClick}
                  className="w-full bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold py-4 rounded-2xl text-sm transition-all shadow-lg shadow-[#FF7438]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order (0329 6000046)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
