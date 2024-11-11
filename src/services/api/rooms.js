import { makeRequest } from "./requestProvider";

export async function getRooms() {
	const url = "salas";
	const request = await makeRequest("GET", url);

	return request.content;
}

export async function getReservationRoom(sala) {
	const url = `reserva-sala/${sala}`;
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function saveReservationRoom(body) {
	const url = "reserva-sala";
	const request = await makeRequest("POST", url, body);

	return request;
}
