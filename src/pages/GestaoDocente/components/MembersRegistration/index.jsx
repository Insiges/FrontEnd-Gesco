import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import LoginRegistration from "./LoginRegistration";
import TeacherDisciplines from "./MemberDisciplines";
import MemberEducation from "./MemberEducation";
import PersonalInformation from "./PersonalInformation";

const Registration = ({ onAdicionar, docentes = [] }) => {
	const navigate = useNavigate();

	const { id } = useParams();

	const [etapasCadastrais, setEtapasCadastrais] = useState(1);

	const [data, setData] = useState({
		nome: "",
		sobrenome: "",
		endereco: "",
		complemento: "",
		cidade: "",
		estado: "",
		nascimento: "",
		cep: "",
		cpf: "",
		disciplinas: [],

		// Propriedades para Login
		email: "",
		password: "",
	});

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

	const handleSubmit = (e, finalData) => {
		e.preventDefault();
		onAdicionar(finalData);
		navigate("/gestao-docente");
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
					onChange={setData}
					onNext={() => setEtapasCadastrais(4)}
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
