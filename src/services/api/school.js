import { makeRequest } from "./requestProvider";

export async function getDocents() {
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXNjbyIsInN1YiI6InRlc3RlQGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfRVNDT0xBIl0sImV4cCI6MTcyODQwMTA1N30.nUPXAW0VWqHAW2U3dnzx95i4WC8TG2U5NFs0UqVMzmU";
	const url = "escola/professor/1";
	const request = await makeRequest(
		"GET",
		url,
		{},
		{},
		`Authorization: ${token}`,
	);

	return request.body;
}
export async function getCounters() {
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXNjbyIsInN1YiI6InRlc3RlQGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfRVNDT0xBIl0sImV4cCI6MTcyODQwMTA1N30.nUPXAW0VWqHAW2U3dnzx95i4WC8TG2U5NFs0UqVMzmU";
	const url = "escola/contador/1";
	const request = await makeRequest(
		"GET",
		url,
		{},
		{},
		`Authorization: ${token}`,
	);

	return request.body;
}

export async function saveEvent(formData) {
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXNjbyIsInN1YiI6InRlc3RlQGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfRVNDT0xBIl0sImV4cCI6MTcyODQwMTA1N30.nUPXAW0VWqHAW2U3dnzx95i4WC8TG2U5NFs0UqVMzmU";
	const url = "eventos/novoEvento";

	const body = {
		nome: formData.name,
		descricao: formData.description,
		dia: formData.selectedDay,
		horario: formData.time,
		escola: { id: 1 },
	};

	console.log(body);

	const request = await makeRequest(
		"POST",
		url,
		body,
		{},
		`Authorization: ${token}`,
	);

	return request.body;
}

export async function getEvents() {
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXNjbyIsInN1YiI6InRlc3RlQGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfRVNDT0xBIl0sImV4cCI6MTcyODQwMTA1N30.nUPXAW0VWqHAW2U3dnzx95i4WC8TG2U5NFs0UqVMzmU";
	const url = "escola/eventos/1";
	const request = await makeRequest(
		"GET",
		url,
		{},
		{},
		`Authorization: ${token}`,
	);

	return request.body;
}
