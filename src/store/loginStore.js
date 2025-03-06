import { create } from "zustand";

export const useLoginModalStore = create((set) => ({
  openLogin: false,
  setLogin: (openLogin) => set(() => ({ openLogin })),
}));

export const useRegisterModalStore = create((set) => ({
  openRegister: false,
  setRegister: (openRegister) => set(() => ({ openRegister })),
}));
