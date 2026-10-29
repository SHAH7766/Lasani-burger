import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, MenuItem } from '../types/menu';

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      addItem: (item: MenuItem, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex((i) => i.item.id === item.id);
          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += quantity;
            return { items: updated, isCartOpen: true };
          }
          return { items: [...state.items, { item, quantity }], isCartOpen: true };
        });
      },
      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((i) => i.item.id !== itemId),
        }));
      },
      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.item.id === itemId ? { ...i, quantity } : i
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      toggleCart: (open) => set((state) => ({ isCartOpen: open !== undefined ? open : !state.isCartOpen })),
      getTotalItems: () => {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },
      getSubtotal: () => {
        return get().items.reduce((sum, i) => {
          if (i.item.price === null) return sum;
          return sum + i.item.price * i.quantity;
        }, 0);
      },
    }),
    {
      name: 'lasani-cart-storage',
    }
  )
);
