import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isAuth: boolean;
  userId: string;
  accToken: string;
  login: (userId: string, accToken: string) => void;
  logout: () => void;
  theme: "light" | "dark";
  setTheme: (dark: boolean) => void;
  showDetail: boolean;
  setShowDetail: (detail: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      userId: "",
      accToken: "",
      theme: "light",
      showDetail: true,
      login: (userId: string, accToken: string) => {
        return set({ isAuth: true, userId, accToken });
      },
      logout: () => set({ isAuth: false, userId: "", accToken: "" }),
      setTheme: (dark) => set({ theme: dark ? "dark" : "light" }),
      setShowDetail: (detail) => set({ showDetail: detail }),
    }),
    { name: "auth-storage", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useAuthStore;
