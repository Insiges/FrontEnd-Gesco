import axios from "axios";
import { makeRequest } from "./requestProvider";

export async function getCep(cep) {
	console.log("entrou");

	const url = `https://viacep.com.br/ws/${cep}/json/`;
	const request = await axios.get(url);

	return request.data;
}
