import { makeRequest } from "./requestProvider";

export async function getAllActivitiesByProfessor(id) {
	const url = `atividade/professor/${id}`;
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function createActivity(data) {
	const url = "atividade";
	const body = {
		nome: data.name,
		descricao: data.description,
		valor: data.weight,
		data_atividade: data.dueDate,
		id_professor: 1,
		id_turma: 1,
		id_tipo_atividade: 10,
	};
	const request = await makeRequest("POST", url, body);

	return request;
}

export async function deleteActivity(id) {
	const url = `atividade/${id}`;
	const request = await makeRequest("DELETE", url);
	return request;
}
