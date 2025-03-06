import { create } from "zustand";

export const useCartCountStore = create((set) => ({
  count: 0,
  setCount: (count) => set(() => ({ count })),
}));
