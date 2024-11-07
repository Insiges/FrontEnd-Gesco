import { makeRequest } from "./requestProvider";

export async function getClasses() {
	const url = "turmas/listarTurmas";
	const request = await makeRequest("GET", url);

	return request;
}

export async function getOneClass(id) {
	const url = `turmas/${id}`;
	const request = await makeRequest("GET", url);

	return request;
}

export async function saveClass(data) {
	const url = "turmas/novaTurma";
	const body = {
		nome: data.nome,
		serie: data.serie,
		ano: data.ano,
	};
	const request = await makeRequest("POST", url, body);

	return request.body;
}

export async function editClass(data) {
	const url = `turmas/atualizarTurma/${data.id}`;
	const body = {
		nome: data.nome,
		ano: data.ano,
		serie: data.serie,
	};

	const request = await makeRequest("PUT", url, body);
	console.log(request);

	return request;
}

export async function deleteClass(id) {
	const url = `turmas/deletarTurma/${id}`;

	const request = await makeRequest("DELETE", url);

	return request;
}

export async function getStudentsByClass(id) {
	const url = `turmas/alunos/${id}`;
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function getStudentsNoClass() {
	const url = "aluno/turmas";
	const request = await makeRequest("GET", url);
	return request.body;
}

export async function saveStudentInOneClass(data) {
	const { id_turma, id_aluno } = data;
	const url = "aluno-turma/lista";

	const body = {
		turma: id_turma,
		alunos: id_aluno,
	};

	const request = await makeRequest("POST", url, body);

	return request;
}

export async function deleteStudentClass(data) {
	const url = `/aluno-turma/aluno/${data.aluno}/turma/${data.turma}`;
	const request = await makeRequest("DELETE", url);

	return request;
}
