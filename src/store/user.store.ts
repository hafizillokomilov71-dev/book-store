import { create } from "zustand";
import type { IUser, IUserResponse, IUserStore } from "../types/user.type";

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: IUserResponse) => set((state) => ({ ...state, user: user })),
  logOut: () => set((state) => ({ ...state, user: null })),
}));
