import { create } from "zustand";

interface useStoreModelStore {
  isOpen: boolean;
  OnOpen: () => void;
  onClose: () => void;
}

export const useStoreModel = create<useStoreModelStore>((set) => ({
  isOpen: false,
  OnOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
