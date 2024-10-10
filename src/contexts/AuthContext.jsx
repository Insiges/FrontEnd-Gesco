import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { ACCESS_TOKEN } from "../consts/storageKeys";
import { API } from "../services/api/config";
import { getStorage, setStorage } from "../services/storage/storage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		return !!getStorage(ACCESS_TOKEN);
	});

	//Função para logar o usuário
	const login = async (credentials, onError, onSuccess) => {
		try {
			const response = await API.post("/escola/auth/login", {
				email: credentials.username,
				senha: credentials.password,
			});

			if (response.data.token) {
				setIsAuthenticated(true);
				setStorage(ACCESS_TOKEN, response.data.token);
				onSuccess();
			}
		} catch (e) {
			onError();
		}
	};

	//Função para deslogar o usuário
	const logout = () => {
		// Remove o token do localStorage
		// removeStorage(ACCESS_TOKEN);
		// removeStorage(REFRESH_TOKEN);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
};
