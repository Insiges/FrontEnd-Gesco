import { makeRequest } from "./requestProvider";

export async function getAllActivitiesByProfessor(id) {
	const url = `atividade/professor/${id}`;
	const request = await makeRequest("GET", url);

	return request.body;
}
