import { useMutation } from "@tanstack/react-query";
import { API } from "../../../services/api/config";

export const useSignIn = () => {
	return useMutation(
		async ({ credentials, role }) => {
			const response = await API.post(`/${role}/auth/login`, {
				email: credentials.username,
				senha: credentials.password,
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				if (data.token) {
					setStorage(ACCESS_TOKEN, data.token);
				}
			},
			onError: () => {
				console.error("Erro ao fazer login");
			},
		},
	);
};
