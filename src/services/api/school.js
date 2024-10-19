import { makeRequest } from "./requestProvider";

export async function getDocents() {
	const url = "escola/professor";
	const request = await makeRequest("GET", url);

	return request.body;
}
export async function getCounters() {
	const url = "escola/contador";
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function saveEvent(data) {
	const url = "eventos/novoEvento";
	const body = {
		nome: data.name,
		descricao: data.description,
		dia: data.currentlyClickedDate,
		horario: data.time,
	};

	const request = await makeRequest("POST", url, body);
	return request.body;
}

export async function getEvents() {
	const url = "escola/eventos";
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function editEvent(formData) {
	console.log("chamou");

	const url = `eventos/atualizarEvento/${formData.id}`;

	const body = {
		nome: formData.name,
		descricao: formData.description,
		dia: formData.selectedDay,
		horario: formData.time,
	};

	const request = await makeRequest("PUT", url, body);

	return request.body;
}

export async function deleteEvent(data) {
	const url = `eventos/deletarEvento/${data.eventId}`;

	const request = await makeRequest("DELETE", url);

	return request.body;
}

export async function getEventsByDate(date) {
	const url = `eventos/params?data=${date}`;

	const request = await makeRequest("GET", url);

	return request.body;
}
