import { makeRequest } from "./requestProvider";

export async function getUserInfos(userType) {
	const url = `/${userType}/user`;
	const request = await makeRequest("GET", url);

	return request;
}
