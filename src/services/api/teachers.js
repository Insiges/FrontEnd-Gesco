import { makeRequest } from "./requestProvider";

export async function getEducationType() {
	const url = "tipo-graduacao";
	const request = await makeRequest("GET", url);

	return request.body;
}

export async function getDisciplines() {
	const url = "disciplinas";
	const request = await makeRequest("GET", url);

	return request;
}

export async function saveTeacher(data) {
	const url = "professor";
	const body = {
		nome: data.nome,
		foto: data.foto,
		cpf: data.cpf,
		datanascimento: data.nascimento,
		sexo: data.sexo,
		emails: [data.email],
		telefones: [data.telefone],
		endereco: {
			logradouro: data.logradouro,
			bairro: data.bairro,
			cep: data.cep,
			cidade: data.cidade,
			estado: data.estado,
			numero: data.numero,
			complemento: data.complemento,
		},
		diplomas: data.diplomas,
		disciplinas: data.disciplinas,
		login: {
			email: data.email,
			senha: data.password,
		},
	};
	console.log(body);

	const request = await makeRequest("POST", url, body);

	console.log(request);

	return request.body;
}

export async function deleteTeacher(id) {
	const url = `professor/${id}`;

	const request = await makeRequest("DELETE", url);

	return request;
}
