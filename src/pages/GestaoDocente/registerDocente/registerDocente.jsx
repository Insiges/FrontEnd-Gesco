import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	editTeacher,
	getOneTeacher,
	saveTeacher,
} from "../../../services/api/teachers";
import { FormLayout } from "../components/RegisterForm/FormLayout";
import DisciplinesStep from "../components/RegisterSteps/DisciplinesStep";
import EducationStep from "../components/RegisterSteps/EducationStep";
import LoginStep from "../components/RegisterSteps/LoginStep";
import PersonalInformationStep from "../components/RegisterSteps/PersonalInformationStep";
import { useCreateDocent } from "../hooks/useCreateDocent";
import { useEditDocent } from "../hooks/useEditDocent";

export function RegisterDocente({ onAdicionar, docentes = [] }) {
	const navigate = useNavigate();

	const { id } = useParams();
	const isEditMode = Boolean(id);

	const { mutateAsync: editDocent } = useEditDocent();
	const { mutateAsync: createDocent } = useCreateDocent();

	const [docenteId, setDocenteId] = useState(null);
	const [etapasCadastrais, setEtapasCadastrais] = useState(1);

	const [data, setData] = useState({
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
			const path = window.location.pathname;
			const pathParts = path.split("/");
			const id = pathParts[pathParts.length - 1];
			setDocenteId(id);

			const fetchTeacher = async () => {
				try {
					const response = await getOneTeacher(id);
					setData({
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
	}, []);

	useEffect(() => {
		if (id) {
			const docente = docentes.find(
				(docente) => docente.id === Number.parseInt(id),
			);
			if (docente) {
				setData(docente);
			}
		}
	}, [id, docentes]);

	const handleChangeOnNext = (vals) => {
		setData((dadosPrevios) => ({
			...dadosPrevios,
			...vals,
		}));
	};

	const handleSubmit = async (e, finalData) => {
		e.preventDefault();
		if (isEditMode) {
			await editDocent(
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
			await createDocent(finalData, {
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
						dadosPessoais={data}
						onNext={(vals) => {
							handleChangeOnNext(vals);
							setEtapasCadastrais(2);
						}}
					/>
				)}

				{etapasCadastrais === 2 && (
					<EducationStep
						formacaoDados={data}
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
						disciplinas={data.disciplinas}
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
						dadosCadastrais={data}
						etapas={etapasCadastrais}
						onSubmit={(e, vals) => handleSubmit(e, vals)}
						onPrevious={() => setEtapasCadastrais(3)}
					/>
				)}
			</FormLayout>
		</section>
	);
}
