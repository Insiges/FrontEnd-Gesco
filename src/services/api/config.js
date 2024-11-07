import axios from "axios";
import { ACCESS_TOKEN } from "../../consts/storageKeys";
import { getStorage } from "../storage/storage";
const BASE_URL = "http://localhost:8080/";

export const API = axios.create({
	baseURL: BASE_URL,
});
API.interceptors.request.use(
	(config) => {
		const token = getStorage(ACCESS_TOKEN);

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		// if (config.url.includes("/escola/auth/login")) {
		// 	console.log("entrou");

		// 	// Remove o cabeçalho Authorization
		// 	// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		// 	// biome-ignore lint/performance/noDelete: <explanation>
		// 	delete config.headers["Authorization"];
		// }
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
