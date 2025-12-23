import { create } from 'zustand';

interface UIState {
  isCartOpen: boolean;
  isLocationModalOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setLocationModalOpen: (open: boolean) => void;
  toggleCart: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isLocationModalOpen: false,
  setCartOpen: (open) => set({ isCartOpen: open }),
  setLocationModalOpen: (open) => set({ isLocationModalOpen: open }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
