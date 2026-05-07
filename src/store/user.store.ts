import { create } from "zustand";
import type { IUser } from "../types/user.type";

interface IUserStore {
  user: any;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: IUser) => set((state) => ({ ...state, user: user })),
}));
