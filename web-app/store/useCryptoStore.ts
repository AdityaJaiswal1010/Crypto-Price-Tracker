'use client'
import { create } from 'zustand';

interface CryptoStore {
  search: string;
  setSearch: (search: string) => void;
}

const useCryptoStore = create<CryptoStore>((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));

export default useCryptoStore;
