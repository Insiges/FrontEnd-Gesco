import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { getStudent } from "../../../../services/api/students";
import { useCreateStudent } from "../../hooks/useCreateStudent";
import LoginRegistration from "./LoginRegistration";
import PersonalInformation from "./PersonalInformation";
import StudentAffiliation from "./StudentAffiliation";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
	id: "",
	nome: "",
	foto: "any-value-here",
	cpf: "",
	datanascimento: "",
	sexo: "",
	matricula: "",
	id_email: "",
	emails: [],
	id_telefone: "",
	telefone: "",

	id_endereco: "",
	logradouro: "",
	bairro: "",
	cep: "",
	id_cidade: "",
	cidade: "",
	id_estado: "",
	nome_estado: "",
	sigla_estado: "",
	numero: "",
	complemento: "",
	responsaveis: [],

	email: "",
	senha: "",
};

const StudentsRegistration = ({ onSubmit }) => {
	const [data, setData] = useState(initialState);
	const [formSteps, setFormSteps] = useState(1);
	const { mutateAsync: addStudent } = useCreateStudent();
	const navigate = useNavigate();

	const handleSubmit = async (data) => {
		const toastId = toast.loading("Salvando...");

		await addStudent(
			{ ...data },
			{
				onSuccess: () =>
					setTimeout(() => {
						toast.update(toastId, {
							render: "Estudante cadastrado com sucesso!",
							type: toast.success,
							isLoading: false, // Finaliza o carregamento
							autoClose: 500, // Fecha após 3 segundos
						});
					}, 3000),
			},
		);

		navigate("/students");
	};

	useEffect(() => {
		if (window.location.pathname !== "/students/register") {
			const path = window.location.pathname;
			const pathParts = path.split("/");
			const id = pathParts[pathParts.length - 1];

			const fetchStudent = async () => {
				try {
					const response = await getStudent(id);

					initialState.id = id;
					initialState.nome = response.aluno.nome;
					initialState.cpf = response.aluno.cpf;
					initialState.id = response.aluno.id;
					initialState.datanascimento = response.aluno.dataNascimento;
					initialState.foto = response.aluno.foto;
					initialState.matricula = response.aluno.matricula;
					initialState.telefone = response.aluno.telefones[0].telefone;
					initialState.id_telefone = response.aluno.telefones[0].id;
					initialState.email = response.aluno.emails[0].email;
					initialState.id_email = response.aluno.emails[0].id;
					initialState.cep = response.aluno.enderecos[0].cep;
					initialState.id_endereco = response.aluno.enderecos[0].id;
					initialState.logradouro = response.aluno.enderecos[0].logradouro;
					initialState.bairro = response.aluno.enderecos[0].bairro;
					initialState.cep = response.aluno.enderecos[0].cep;
					initialState.cidade = response.aluno.enderecos[0].cidade.nome;
					initialState.id_cidade = response.aluno.enderecos[0].cidade.id;
					initialState.id_estado = response.aluno.enderecos[0].cidade.estado.id;
					initialState.nome_estado =
						response.aluno.enderecos[0].cidade.estado.nome;
					initialState.sigla_estado =
						response.aluno.enderecos[0].cidade.estado.sigla;
					initialState.sexo = response.aluno.sexo.nome;
					initialState.responsaveis = response.responsaveis;
				} catch (error) {
					console.error(error);
				}
			};

			fetchStudent();
		}
	}, []);

	const handleChangeOnNext = (newData) => {
		setData((prevData) => ({
			...prevData,
			...newData,
		}));
	};

	return (
		<section className="p-4">
			<ToastContainer
				position="top-right"
				autoClose={3000} // O toast será fechado após 3 segundos
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
			{formSteps === 1 && (
				<PersonalInformation
					data={data}
					formSteps={formSteps}
					onNext={(vals) => {
						handleChangeOnNext(vals);
						setFormSteps(2);
					}}
				/>
			)}

			{formSteps === 2 && (
				<StudentAffiliation
					data={data}
					formSteps={formSteps}
					onNext={() => {
						handleChangeOnNext();
						setFormSteps(3);
					}}
					onChange={setData}
					onPrevious={() => setFormSteps(1)}
				/>
			)}

			{formSteps === 3 && (
				<LoginRegistration
					data={data}
					formSteps={formSteps}
					onSubmit={(dados) => {
						handleSubmit(dados);
					}}
					onPrevious={() => setFormSteps(2)}
				/>
			)}
		</section>
	);
};

export default StudentsRegistration;
