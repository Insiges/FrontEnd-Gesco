import { create } from "zustand";
import { ACCESS_TOKEN, TYPE_OF_SIGNIN } from "../consts/storageKeys";
import { getStorage, removeStorage } from "../services/storage/storage";

export const useAuthStore = create((set) => ({
	token: null,
	isAuthenticated: false,
	isInitialized: false,
	setToken: (token) => set({ token, isAuthenticated: !!token }),
	initializeAuth: () => {
		const token = getStorage(ACCESS_TOKEN);
		if (token) {
			set({ token, isAuthenticated: true, isInitialized: true });
		} else {
			removeStorage(ACCESS_TOKEN);
			set({ token: null, isAuthenticated: false, isInitialized: true });
		}
	},
	logout: () => {
		removeStorage(ACCESS_TOKEN);
		// removeStorage(TYPE_OF_SIGNIN);
		set({ token: null, isAuthenticated: false });
	},
}));
