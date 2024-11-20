import { makeRequest } from "./requestProvider";

export async function getStudents() {
	return await makeRequest("GET", "escola/aluno");
}

export async function getStudent(id) {
	return await makeRequest("GET", `aluno/${id}`);
}

export async function addStudent(data) {
	const body = {
		nome: data.nome,
		foto: data.foto,
		datanascimento: data.datanascimento,
		cpf: data.cpf,
		sexo: data.sexo,
		matricula: data.matricula,
		emails: [data.email],
		telefones: [data.telefone],
		endereco: {
			logradouro: data.logradouro,
			numero: data.numero,
			bairro: data.bairro,
			cidade: data.cidade,
			cep: data.cep,
			complemento: data.complemento,
			estado: data.sigla_estado,
		},
		responsaveis: data.responsaveis,
		login: {
			email: data.email,
			senha: data.senha,
		},
	};

	console.log(body);

	const response = await makeRequest("POST", "aluno", body);
	return response.body;
}

export async function editStudent(data) {
	console.log(data);

	const body = {
		nome: data.nome,
		foto: data.foto,
		data_nascimento: data.datanascimento,
		cpf: data.cpf,
		sexo: data.sexo,
		matricula: data.matricula,
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
				numero: data.numero,
				bairro: data.bairro,
				cep: data.cep,
				complemento: data.complemento,
				cidade: {
					id: data.id_cidade,
					nome: data.cidade,
					estado: {
						id: data.id_estado,
						nome: data.nome_estado,
						sigla: data.sigla_estado,
					},
				},
			},
		],
		responsaveis: data.responsaveis.map((responsavel) => {
			return {
				nome: responsavel.nome,
				foto: responsavel.foto,
				cpf: responsavel.cpf,
				data_nascimento: responsavel.data_nascimento,
				email: responsavel.email,
				telefone: responsavel.telefone,
				sexo: responsavel.sexo.nome ? responsavel.sexo.nome : responsavel.sexo,
			};
		}),
	};
	return await makeRequest("PUT", `aluno/${data.id}`, body);
}

export async function deleteStudent(id) {
	return await makeRequest("DELETE", `aluno/${id}`);
}
