import React, { useState } from "react";
// import { useParams } from "react-router-dom";

import LoginRegistration from "./LoginRegistration";
import PersonalInformation from "./PersonalInformation";
import StudentAffiliation from "./StudentAffiliation";

// import { useStudentQuery } from "../../../../services/hooks/students/useStudentQuery";

const initialState = {
	nome: "",
	foto: "any-value-here",
	cpf: "",
	datanascimento: "",
	id_escola: 1, // @TODO - Hard coded aqui, não foi possível buscar na API resultado de escolas pra fazer escolha no form.
	sexo: "",
	matricula: "",
	emails: [],
	telefones: [],
	endereco: {
		logradouro: "",
		bairro: "",
		cep: "",
		cidade: "",
		estado: "",
		numero: "",
		complemento: "",
	},
	responsaveis: [],
	login: {
		email: "",
		senha: "",
	},
};

const Registration = ({ onSubmit }) => {
	const [data, setData] = useState(initialState);
	const [formSteps, setFormSteps] = useState(1);

	// const { id } = useParams();

	// @TODO - API apresentando problemas em relação a este endpoint (aluno/id).
	// const { data: student } = useStudentQuery(id);

	const handleChangeOnNext = (newData) => {
		setData((prevData) => ({
			...prevData,
			...newData,
		}));
	};

	return (
		<section className="p-4">
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
					onSubmit={onSubmit}
					onPrevious={() => setFormSteps(2)}
				/>
			)}
		</section>
	);
};

export default Registration;
