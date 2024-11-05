import { makeRequest } from "./requestProvider";

export async function saveFrequency(body) {
	const url = "frequencias";
	const request = await makeRequest("POST", url, body);

	console.log(request);

	return request;
}
