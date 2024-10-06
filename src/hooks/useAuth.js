import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ACCESS_TOKEN } from "../consts/storageKeys";

import {
	getStorage,
	removeStorage,
	setStorage,
} from "../service/storage/storage";

//Hook para verificar se o usuário está autenticado além de fazer o login e logout
export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const navigate = useNavigate(); // Hook para navegação.

	// useEffect para verificar os tokens ao carregar a página
	useEffect(() => {
		const checkTokens = async () => {
			const accessToken = getStorage(ACCESS_TOKEN); // Pega o access token do localStorage

			if (!accessToken) {
				return navigate("/login"); // Se não houver tokens, redireciona para a página de login
			}
		};

		checkTokens();

		if (isAuthenticated) {
			navigate("/home");
		}
	}, [isAuthenticated, navigate]);

	//Função para logar o usuário
	const login = async (credentials, onError) => {
		// Função de login da lib, onde é feita uma chamada para api para validar as credenciais fornecidas

		const user = users.find(
			(user) =>
				user.username === credentials.username &&
				user.password === credentials.password,
		); // Verifica o usuário e senha
		if (!user) {
			return onError("Credenciais inválidas"); // Retorna erro se o login falhar
		}

		// Gera o access token e o refresh token para o usuário autenticado
		const accessToken = await generateAccessToken(user.userId);
		const refreshToken = await generateRefreshToken(user.userId);
		// Seta o estado de autenticação como true
		setIsAuthenticated(true);

		// Armazena os tokens no localStorage
		setStorage(ACCESS_TOKEN, accessToken);
		setStorage(REFRESH_TOKEN, refreshToken);

		navigate("/home");
	};

	//Função para deslogar o usuário
	const logout = () => {
		// Remove o token do localStorage
		removeStorage(ACCESS_TOKEN);
		removeStorage(REFRESH_TOKEN);
		setIsAuthenticated(false);
		navigate("/");
	};

	//Retorna o estado de autenticação, a função de login e a função de logout
	return { isAuthenticated, login, logout };
};
