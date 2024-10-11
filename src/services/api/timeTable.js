import { makeRequest } from "./requestProvider";

export async function getWeek() {
	const url = "semana";
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function getHours() {
	const url = "horario";
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function saveGrid(data) {
	const url = "grade-horario";
	const body = {
		id_turma: 1,
		id_disciplina: data.disciplina,
		id_professor: data.professor,
		id_semana: data.dia,
		id_horario: data.horario,
	};

	const request = await makeRequest("POST", url, body);

	return request.body;
}

export async function getGridByClass(id) {
	const url = `grade-horario/turma/${id}`;
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function getOneGrid(id) {
	const url = `grade-horario/${id}`;
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function editGrid(id, data) {
	const url = `grade-horario/${id}`;
	const body = {
		id_turma: 1,
		id_disciplina: data.disciplina,
		id_professor: data.professor,
		id_semana: data.dia,
		id_horario: data.horario,
	};

	const request = await makeRequest("PUT", url, body);

	return request.body;
}
