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
			estado: data.sigla_estado,
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
	const request = await makeRequest("POST", url, body);

	return request.body;
}

export async function editTeacher(data, id) {
	const url = `professor/${id}`;
	const body = {
		nome: data.nome,
		foto: data.foto,
		cpf: data.cpf,
		data_nascimento: data.nascimento,
		sexo: data.sexo,
		emails: [
			{
				id: data.id_email,
				email: data.email,
			},
		],
		telefones: [
			{
				id: data.id_telefone,
				telefone: data.telefone,
			},
		],
		enderecos: [
			{
				id: data.id_endereco,
				logradouro: data.logradouro,
				bairro: data.bairro,
				cep: data.cep,
				cidade: {
					id: data.id_cidade,
					nome: data.cidade,
					estado: {
						id: data.id_estado,
						nome: data.nome_estado,
						sigla: data.sigla_estado,
					},
				},
				numero: data.numero,
				complemento: data.complemento,
			},
		],
		diplomas: data.diplomas,
		disciplinas: data.disciplinas,
	};

	const request = await makeRequest("PUT", url, body);

	return request;
}

export async function deleteTeacher(id) {
	const url = `professor/${id}`;

	const request = await makeRequest("DELETE", url);

	return request;
}

export async function getOneTeacher(id) {
	const url = `professor/${id}`;
	const request = await makeRequest("GET", url);

	return request;
}

export async function getClassByProfessor() {
	const url = "professor/turmas";
	const request = await makeRequest("GET", url);
	return request.body;
}
