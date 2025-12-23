import { create } from 'zustand';

interface SearchState {
  query: string;
  isFiltering: boolean;
  setQuery: (query: string) => void;
  setFiltering: (isFiltering: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  isFiltering: false,
  setQuery: (query) => set({ query }),
  setFiltering: (isFiltering) => set({ isFiltering }),
}));
