import { useEffect, useState } from "react";
import {
	BoxView,
	Button,
	Flex,
	FormGuiaEtapas,
	Title,
	containerClass,
	inputClassName,
} from "../../common";

import { getEducationType } from "../../../../services/api/teachers";
import { deleteIcon } from "../../common/icons";

const MemberEducation = ({
	formacaoDados,
	etapas,
	onChange,
	onNext,
	onPrevious,
}) => {
	const [personData, setPersonData] = useState(formacaoDados || {});
	const [educations, setEducations] = useState([]);
	const [typeEducation, setTypeEducation] = useState([]);

	useEffect(() => {
		if (formacaoDados) {
			setPersonData(formacaoDados);
		}
	}, [formacaoDados]);

	useEffect(() => {
		async function fetchTypeEducation() {
			try {
				const response = await getEducationType();
				setTypeEducation(response);
			} catch (error) {
				console.error("Erro ao buscar tipos de educacao:", error);
			}
		}
		fetchTypeEducation();
	}, []);

	const [educationFields, setEducationFields] = useState({
		faculdade: "",
		curso: "",
		tipo_graduacao: "",
	});

	const handleAddEducation = () => {
		if (educationFields.faculdade === "" || educationFields.curso === "") {
			alert("Todos os campos são obrigatórios!");
			return;
		}
		if (educationFields.tipo_graduacao === "") {
			alert("Selecione um tipo de graduação!");
			return;
		}
		if (
			educations.some(
				(edu) =>
					edu.faculdade === educationFields.faculdade &&
					edu.curso === educationFields.curso &&
					edu.tipo === educationFields.tipo_graduacao,
			)
		) {
			alert("Esta formação já foi adicionada!");
			return;
		}

		setEducations((prevEducations) => [
			...prevEducations,
			{
				faculdade: educationFields.faculdade,
				curso: educationFields.curso,
				id_tipo_graduacao: educationFields.tipo_graduacao,
			},
		]);

		setEducationFields({ faculdade: "", curso: "", tipo_graduacao: "" });
	};

	const handleDelete = (index) => {
		setEducations((prevEducations) =>
			prevEducations.filter((edu, eduIndex) => eduIndex !== index),
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Atualiza o personData com as formações
		const updatedPersonData = { ...personData, diplomas: educations };
		setPersonData(updatedPersonData);
		// Chama a função onNext passando os dados atualizados
		onNext(updatedPersonData);
	};

	return (
		<Flex>
			<Title fontSize={34} subTitle="Formação Acadêmica">
				Adicionar Docentes
			</Title>

			<FormGuiaEtapas etapas={etapas} />

			<form onSubmit={handleSubmit}>
				<Flex direction="row" justify="center" className="flex-wrap gap-4">
					{/* Formulario para adicionar formações */}
					<Flex>
						<BoxView className="p-8">
							<Flex>
								<label htmlFor="faculdade">faculdade:</label>
								<input
									type="text"
									id="faculdade"
									value={educationFields.faculdade}
									onChange={(e) =>
										setEducationFields((prev) => ({
											...prev,
											faculdade: e.target.value,
										}))
									}
									className={inputClassName}
								/>
							</Flex>
							<Flex>
								<label htmlFor="cursos">Cursos:</label>
								<input
									type="text"
									id="cursos"
									value={educationFields.curso}
									onChange={(e) =>
										setEducationFields((prev) => ({
											...prev,
											curso: e.target.value,
										}))
									}
									className={inputClassName}
								/>
							</Flex>
							<Flex>
								<label htmlFor="email">Tipo Formação:</label>
								<select
									className={inputClassName}
									onChange={(e) =>
										setEducationFields((prev) => ({
											...prev,
											tipo_graduacao: e.target.value,
										}))
									}
								>
									<option value="" disabled selected>
										Selecione uma opção
									</option>
									{typeEducation.map((it) => (
										<option key={it.id} value={it.id}>
											{it.nome}
										</option>
									))}
								</select>
							</Flex>
							<Flex className="gap-2  my-4">
								<Button type="button" onClick={handleAddEducation}>
									Adicionar
								</Button>
							</Flex>
						</BoxView>
					</Flex>

					{/* Lista de formações */}
					<Flex className="flex-1">
						<BoxView>
							<div className=" rounded-md ">
								<div className="bg-blue-800 min-w-full rounded-md p-6">
									<p className="text-white">
										<strong>Lista de Formações</strong>
									</p>
								</div>
								<div>
									{educations.map((education, index) => (
										<Flex
											key={education.curso}
											direction="row"
											justify="between"
											className="p-6 odd:bg-white even:bg-blue-50"
										>
											<Flex direction="row" justify="start" className="gap-12">
												<p>{education.faculdade}</p>
												<p>{education.curso}</p>
											</Flex>
											<button
												type="button"
												className="px-6"
												onClick={() => handleDelete(index)}
											>
												{deleteIcon}
											</button>
										</Flex>
									))}
								</div>
							</div>
						</BoxView>
						<Flex
							direction="row"
							className="gap-2 my-4"
							style={{ justifyContent: "flex-end" }}
						>
							<Button type="button" onClick={onPrevious}>
								Voltar
							</Button>
							<Button type="submit">Continuar</Button>
						</Flex>
					</Flex>
				</Flex>
			</form>
		</Flex>
	);
};

export default MemberEducation;
