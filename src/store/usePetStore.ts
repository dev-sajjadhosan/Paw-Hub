import { create } from "zustand";

interface StoreProps {
  user: [];
  isUser: boolean;

  setIsUser: (v: boolean) => void;
}

export const usePetStore = create<StoreProps>()((set) => ({
  user: [],
  isUser: true,

  setIsUser: (v: boolean) => set({ isUser: v }),
}));
