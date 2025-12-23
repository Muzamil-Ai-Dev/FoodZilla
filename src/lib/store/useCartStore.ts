import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
  image: string;
  options?: Record<string, string | string[]>;
}

interface CartState {
  items: CartItem[];
  activeRestaurantId: string | null;
  activeRestaurantName: string | null;
  
  // Actions
  addItem: (item: CartItem) => { success: boolean; error?: string };
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  
  // Computed (Getters)
  getSubtotal: () => number;
  getTotalItems: () => number;
  getFreeDeliveryProgress: () => { remaining: number; percentage: number };
}

const MIN_FREE_DELIVERY = 30;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      activeRestaurantId: null,
      activeRestaurantName: null,

      addItem: (newItem) => {
        const { items, activeRestaurantId } = get();

        // Multi-restaurant guard
        if (activeRestaurantId && activeRestaurantId !== newItem.restaurantId) {
          return { 
            success: false, 
            error: "You can only order from one restaurant at a time. Clear your cart to switch." 
          };
        }

        const existingItemIndex = items.findIndex(
          (item) => item.id === newItem.id && JSON.stringify(item.options) === JSON.stringify(newItem.options)
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += newItem.quantity;
          set({ items: updatedItems });
        } else {
          set({ 
            items: [...items, newItem],
            activeRestaurantId: newItem.restaurantId,
            activeRestaurantName: newItem.restaurantName
          });
        }

        return { success: true };
      },

      removeItem: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id);
        set({ 
          items: updatedItems,
          activeRestaurantId: updatedItems.length === 0 ? null : get().activeRestaurantId,
          activeRestaurantName: updatedItems.length === 0 ? null : get().activeRestaurantName
        });
      },

      updateQuantity: (id, delta) => {
        const updatedItems = get().items.map((item) => {
          if (item.id === id) {
            const newQty = Math.max(1, item.quantity + delta);
            return { ...item, quantity: newQty };
          }
          return item;
        });
        set({ items: updatedItems });
      },

      clearCart: () => set({ items: [], activeRestaurantId: null, activeRestaurantName: null }),

      getSubtotal: () => {
        return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },

      getTotalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },

      getFreeDeliveryProgress: () => {
        const subtotal = get().getSubtotal();
        const remaining = Math.max(0, MIN_FREE_DELIVERY - subtotal);
        const percentage = Math.min(100, (subtotal / MIN_FREE_DELIVERY) * 100);
        return { remaining, percentage };
      }
    }),
    {
      name: 'foodzilla-cart',
    }
  )
);
