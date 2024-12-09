import { StateCreator } from "zustand";

export type UserDataSlice = {
  userData: UserData | null;
  isLoading: boolean;
  error: string | null;
  email: string | null;
  setUserData: (data: UserData) => void;
  setEmail: (email: string) => void;
  clearUserData: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
};

export const createUserDataSlice: StateCreator<UserDataSlice> = (set) => ({
  userData: {
    id: "69",
    name: "RUZAKI",
    email: "ruzaki@gmail.com",
    role: "admin",
  },
  isLoading: false,
  error: null,
  email: null,
  setUserData: (data) => set({ userData: data }),
  setEmail: (email) => set({ email }),
  clearUserData: () => set({ userData: null }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ isLoading: loading }),
});

export type UserData = {
  id: string;
  name: string;
  email: string;
  role: string;
};
