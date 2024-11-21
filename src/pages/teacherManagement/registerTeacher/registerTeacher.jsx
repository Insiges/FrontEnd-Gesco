import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTeacher } from "../../../services/api/teachers";
import { FormLayout } from "../components/RegisterForm/FormLayout";
import DisciplinesStep from "../components/RegisterSteps/DisciplinesStep";
import EducationStep from "../components/RegisterSteps/EducationStep";
import LoginStep from "../components/RegisterSteps/LoginStep";
import PersonalInformationStep from "../components/RegisterSteps/PersonalInformationStep";
import { useCreateTeacher } from "../hooks/useCreateTeacher";
import { useEditTeacher } from "../hooks/useEditTeacher";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export function RegisterTeacher() {
	const navigate = useNavigate();

	const { id } = useParams();
	const isEditMode = Boolean(id);

	const { mutateAsync: editTeacher } = useEditTeacher();
	const { mutateAsync: createTeacher } = useCreateTeacher();

	const [etapasCadastrais, setEtapasCadastrais] = useState(1);

	const [teacher, setTeacher] = useState({
		nome: "",
		foto: "",
		sexo: "",
		telefone: "",
		logradouro: "",
		complemento: "",
		nascimento: "",
		bairro: "",
		cep: "",
		numero: "",
		cpf: "",
		disciplinas: [],
		diplomas: [],
		id_telefone: 0,
		id_email: 0,
		id_cidade: 0,
		cidade: "",
		sigla_estado: "",
		id_estado: 0,
		nome_estado: "",

		// Propriedades para Login
		email: "",
		password: "",
	});
	useEffect(() => {
		if (window.location.pathname !== "/docents/register") {
			const fetchTeacher = async () => {
				try {
					const response = await getOneTeacher(id);
					setTeacher({
						nome: response.dados.nome,
						foto: response.dados.foto,
						sexo: response.dados.sexo,
						telefone: response.dados.telefone,
						id_endereco: response.dados.id_endereco,
						logradouro: response.dados.logradouro,
						complemento: response.dados.complemento,
						cidade: response.dados.cidade,
						nascimento: response.dados.data_nascimento,
						bairro: response.dados.bairro,
						cep: response.dados.cep,
						numero: response.dados.numero,
						cpf: response.dados.cpf,
						email: response.dados.email,
						disciplinas: response.disciplinas,
						diplomas: response.diplomas,
						id_telefone: response.dados.id_telefone,
						id_email: response.dados.id_email,
						id_cidade: response.dados.id_cidade,
						sigla_estado: response.dados.sigla_estado,
						id_estado: response.dados.id_estado,
						nome_estado: response.dados.nome_estado,
					});
				} catch (error) {
					console.error(error);
				}
			};

			fetchTeacher();
		}
	}, [id]);

	const handleChangeOnNext = (vals) => {
		setTeacher((dadosPrevios) => ({
			...dadosPrevios,
			...vals,
		}));
	};

	const handleSubmit = async (e, finalData) => {
		e.preventDefault();
		if (isEditMode) {
			await editTeacher(
				{ ...finalData, id: id },
				{
					onSuccess: () => {
						navigate("/docents");
					},
					onError: () => {
						alert("Erro ao editar professor");
					},
				},
			);
		} else {
			toast.loading("Salvando...");
			await createTeacher(finalData, {
				onSuccess: () => {
					navigate("/docents");
				},
				onError: () => {
					alert("Erro ao criar professor");
				},
			});
		}
	};

	return (
		<section className="p-4">
			<FormLayout isEdit={isEditMode} steps={etapasCadastrais}>
				{etapasCadastrais === 1 && (
					<PersonalInformationStep
						etapas={etapasCadastrais}
						dadosPessoais={teacher}
						onNext={(vals) => {
							handleChangeOnNext(vals);
							setEtapasCadastrais(2);
						}}
					/>
				)}

				{etapasCadastrais === 2 && (
					<EducationStep
						formacaoDados={teacher}
						etapas={etapasCadastrais}
						onNext={(vals) => {
							handleChangeOnNext(vals);
							setEtapasCadastrais(3);
						}}
						onPrevious={() => setEtapasCadastrais(1)}
					/>
				)}

				{etapasCadastrais === 3 && (
					<DisciplinesStep
						disciplinas={teacher.disciplinas}
						etapas={etapasCadastrais}
						onNext={(vals) => {
							handleChangeOnNext(vals);
							setEtapasCadastrais(4);
						}}
						onPrevious={() => setEtapasCadastrais(2)}
					/>
				)}

				{etapasCadastrais === 4 && (
					<LoginStep
						dadosCadastrais={teacher}
						etapas={etapasCadastrais}
						onSubmit={(e, vals) => handleSubmit(e, vals)}
						onPrevious={() => setEtapasCadastrais(3)}
					/>
				)}
			</FormLayout>
		</section>
	);
}
