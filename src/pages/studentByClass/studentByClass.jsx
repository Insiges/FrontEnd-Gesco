import { StudentData } from "./components/index";
export const StudentByClass = () => {
	const student = {
		id: "12345",
		nome: "John Doe",
		foto: "Imagem uploaded",
		cpf: "123.456.789-00",
		datanascimento: "01/01/2000",
		sexo: "Masculino",
		matricula: "20210001",
		id_email: "1",
		emails: "john.doe@example.com",
		id_telefone: "1",
		telefone: "(11) 91234-5678",
		id_endereco: "1",
		logradouro: "Rua Exemplo",
		bairro: "Bairro Exemplo",
		cep: "12345-678",
		id_cidade: "1",
		cidade: "Cidade Exemplo",
		id_estado: "1",
		nome_estado: "Estado Exemplo",
		sigla_estado: "EX",
		numero: "123",
		complemento: "Apto 456",
		responsaveis: "Jane Doe",
		email: "jane.doe@example.com",
		senha: "password123",
	};

	return (
		<div>
			<StudentData studentData={student} />
		</div>
	);
};
