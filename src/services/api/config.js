import axios from "axios";
import { ACCESS_TOKEN } from "../../consts/storageKeys";
import { getStorage } from "../storage/storage";
const BASE_URL = "http://localhost:8080/";

export const API = axios.create({
	baseURL: BASE_URL,
});
API.interceptors.request.use(
	(config) => {
		if (config.url.includes("/escola/auth/login")) {
			// Remove o cabeçalho Authorization
			// biome-ignore lint/complexity/useLiteralKeys: <explanation>
			// biome-ignore lint/performance/noDelete: <explanation>
			delete config.headers["Authorization"];
		}
		const token = getStorage(ACCESS_TOKEN);
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// curl --location 'http://localhost:8080/escola/auth/login' \
// --header 'Content-Type: application/json' \
// --header 'User-Agent: insomnia/10.0.0' \
// --data-raw ' {
//   "email": "bb@gmail.com",
//   "senha": "123"
//  }'
