import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
	editTeacher,
	getOneTeacher,
	saveTeacher,
} from "../../../../services/api/teachers";
import LoginRegistration from "./LoginRegistration";
import TeacherDisciplines from "./MemberDisciplines";
import MemberEducation from "./MemberEducation";
import PersonalInformation from "./PersonalInformation";

const Registration = ({ onAdicionar, docentes = [] }) => {
	const navigate = useNavigate();

	const { id } = useParams();

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
		if (window.location.pathname !== "/docents/register") {
			await editTeacher(finalData, docenteId);
			navigate("/docents");
		} else {
			try {
				await saveTeacher(finalData);
				navigate("/docents");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<section className="p-4">
			{etapasCadastrais === 1 && (
				<PersonalInformation
					etapas={etapasCadastrais}
					dadosPessoais={data}
					onNext={(vals) => {
						handleChangeOnNext(vals);
						setEtapasCadastrais(2);
					}}
				/>
			)}

			{etapasCadastrais === 2 && (
				<MemberEducation
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
				<TeacherDisciplines
					disciplinas={data.disciplinas}
					etapas={etapasCadastrais}
					onNext={(vals) => {
						handleChangeOnNext(vals); // Atualiza disciplinas
						setEtapasCadastrais(4);
					}}
					onPrevious={() => setEtapasCadastrais(2)}
				/>
			)}

			{etapasCadastrais === 4 && (
				<LoginRegistration
					dadosCadastrais={data}
					etapas={etapasCadastrais}
					onSubmit={(e, vals) => handleSubmit(e, vals)}
					onPrevious={() => setEtapasCadastrais(3)}
				/>
			)}
		</section>
	);
};

export default Registration;
