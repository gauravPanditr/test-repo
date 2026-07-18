import { create } from "zustand";

const useAuthStore = create((set) => ({
  userType: null,
  loggedInEmployee: null,

  setUserType: (type) =>
    set({ userType: type }),

  setLoggedInEmployee: (employee) =>
    set({ loggedInEmployee: employee }),

  logout: () =>
    set({
      userType: null,
      loggedInEmployee: null,
    }),
}));

export default useAuthStore;