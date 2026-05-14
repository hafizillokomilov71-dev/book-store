import { create } from "zustand";

interface IUser {
  id:  string;
  fullName:  string;
  username:  string;
  email: string;
  bio: string;
  phone: string;
  country: string;
  avatar: null;
  role: "admin" | "user"
  createdAt: string;
  updatedAt: string;  
}

interface IUserStore {
  user: any;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: IUser) => set((state) => ({ ...state, user: user })),
}));
