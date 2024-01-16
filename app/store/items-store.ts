import { create } from "zustand";
import { User } from "../types/user-types";

interface ItemsStore {
  users: User[];
  addUser: (user: User) => void;
}

export const useItemsStore = create<ItemsStore>((set) => ({
    users: [
    {
      firstName: "Pedro",
      lastName: "Perez",
    },
  ],
  addUser: (user) => {
    set((state) => ({ users: [...state.users, user] }));
  },
}));
