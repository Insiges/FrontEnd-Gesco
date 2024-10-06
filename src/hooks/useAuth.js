import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ACCESS_TOKEN } from "../consts/storageKeys";

import { API } from "../services/api/config";
import { makeRequest } from "../services/api/requestProvider";

//Hook para verificar se o usuário está autenticado além de fazer o login e logout
export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const navigate = useNavigate(); // Hook para navegação.

	// useEffect para verificar os tokens ao carregar a página
	// useEffect(() => {
	// 	const checkTokens = async () => {
	// 		const accessToken = getStorage(ACCESS_TOKEN); // Pega o access token do localStorage

	// 		if (!accessToken) {
	// 			return navigate("/login"); // Se não houver tokens, redireciona para a página de login
	// 		}
	// 	};

	// 	checkTokens();

	// 	if (isAuthenticated) {
	// 		navigate("/home");
	// 	}
	// }, [isAuthenticated, navigate]);

	//Função para logar o usuário
	const login = async (credentials, onError) => {
		// Função de login da lib, onde é feita uma chamada para api para validar as credenciais fornecidas
		console.log(credentials);

		const response = await API.post("/escola/auth/login", {
			email: credentials.username,
			senha: credentials.password,
		});
		console.log({ response });
		// Seta o estado de autenticação como true
		// setIsAuthenticated(true);

		// Armazena os tokens no localStorage
		// setStorage(ACCESS_TOKEN, accessToken);
		// setStorage(REFRESH_TOKEN, refreshToken);
	};

	//Função para deslogar o usuário
	const logout = () => {
		// Remove o token do localStorage
		// removeStorage(ACCESS_TOKEN);
		// removeStorage(REFRESH_TOKEN);
		setIsAuthenticated(false);
		navigate("/");
	};

	//Retorna o estado de autenticação, a função de login e a função de logout
	return { isAuthenticated, login, logout };
};
