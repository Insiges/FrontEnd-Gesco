import { makeRequest } from "./requestProvider";

export async function signIn(data) {
	const url = `/${data.role}/auth/login`;
	const body = {
		email: data.username,
		senha: data.password,
	};
	const response = await makeRequest("POST", url, body);
	return response;
}
