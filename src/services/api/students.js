import { makeRequest } from "./requestProvider";

export async function getStudents() {
	return await makeRequest("GET", "aluno");
}

export async function getStudent(id) {
	return await makeRequest("GET", `aluno/${id}`);
}

export async function addStudent(data) {
	const response = await makeRequest("POST", "aluno", data);
	return response.body;
}

export async function editStudent(data, id) {
	return await makeRequest("PUT", `aluno/${id}`, data);
}

export async function deleteStudent(id) {
	return await makeRequest("DELETE", `aluno/${id}`);
}
