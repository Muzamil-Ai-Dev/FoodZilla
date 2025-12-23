import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Location } from '../types';

interface LocationState {
  currentLocation: Location | null;
  setLocation: (location: Location) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      currentLocation: null,
      setLocation: (location) => set({ currentLocation: location }),
      clearLocation: () => set({ currentLocation: null }),
    }),
    {
      name: 'foodzilla-location',
    }
  )
);
