import { create } from "zustand";
import { ACCESS_TOKEN } from "../consts/storageKeys";

// Configuração da store de autenticação
export const useAuthStore = create((set) => ({
	token: null,
	isAuthenticated: false,

	// Define o token ao fazer login
	setAuth: (token) => {
		// Armazena o token no localStorage manualmente
		if (token) {
			localStorage.setItem(ACCESS_TOKEN, token);
			set({ token, isAuthenticated: true });
		} else {
			localStorage.removeItem(ACCESS_TOKEN);
			set({ token: null, isAuthenticated: false });
		}
	},

	// Função para logout
	logout: () => {
		localStorage.removeItem(ACCESS_TOKEN); // Remove o token do localStorage
		set({ token: null, isAuthenticated: false });
	},
}));

// Função para carregar o token do localStorage ao iniciar o app
export const initializeAuthStore = () => {
	const token = localStorage.getItem(ACCESS_TOKEN);
	const setAuth = useAuthStore.getState().setAuth;

	if (token) {
		setAuth(token); // Define o token e autenticação no Zustand
	}
};
