import axios from "axios";
import { API } from "./config";

// Uma função que usa uma lib para fazer request, dá para chamar qualquer api usando essa função
export const makeRequest = async (
	method,
	url,
	data = {},
	params = {},
	headers = {},
) => {
	try {
		const response = await axios({
			method,
			url,
			params,
			headers,
			data,
		});
		return response.data; // Retorna os dados da resposta
	} catch (error) {
		// Tratamento genérico de erro
		if (error.response) {
			console.error(
				"Erro na resposta da API:",
				error.response.status,
				error.response.data,
			);

			throw new Error(`Erro: ${error.response.status}`);
		}
		if (error.request) {
			console.error("Nenhuma resposta recebida:", error.request);
			throw new Error("Nenhuma resposta recebida da API");
		}
		console.error("Erro ao configurar a requisição:", error.message);
		throw new Error("Erro de requisição");
	}
};
