import { makeRequest } from "./requestProvider";

export async function saveFrequency(body) {
	const url = "frequencias";
	const request = await makeRequest("POST", url, body);
	return request;
}

export async function getFrequencyClass(data, turma, disciplina, professor) {
	const url = `frequencias/params?dia=${data}&turma=${turma}&disciplina=${disciplina}&professor=${professor}`;
	const request = await makeRequest("GET", url);
	return request.body;
}
