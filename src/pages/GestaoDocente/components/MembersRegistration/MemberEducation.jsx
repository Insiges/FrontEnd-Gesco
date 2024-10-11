import { useState } from "react";
import {
	BoxView,
	Button,
	Flex,
	FormGuiaEtapas,
	Title,
	containerClass,
	inputClassName,
} from "../../common";

import { deleteIcon } from "../../common/icons";

const educationFake = [
	{ title: "Universidade Federal de Sao Joao del Rey", local: "Cetan" },
	{ title: "Universidade Santo Antonio", local: "Marte" },
	{ title: "USP", local: "Sao Paulo" },
	{ title: "Universidade Federal do Parana", local: "Curitiba" },
];

// @TODO Tenho mais trabalho aqui
const MemberEducation = ({
	formacaoDados,
	etapas,
	onChange,
	onNext,
	onPrevious,
}) => {
	const [educations, setEducations] = useState(educationFake);

	const [educationFields, setEducationFields] = useState({
		universidade: "",
		cursos: "",
		graduacao: "",
		pos: "",
	});

	const handleAddEducation = () => {
		setEducations((prevEducations) => [
			...prevEducations,
			{ title: educationFields.universidade, local: "N/A" },
		]);
	};

	const handleDelete = (index) => {
		setEducations((prevEducations) =>
			prevEducations.filter((edu, eduIndex) => eduIndex !== index),
		);
	};

	return (
		<Flex>
			<Title fontSize={34} subTitle="Formação Acadêmica">
				Adicionar Docentes
			</Title>

			<FormGuiaEtapas etapas={etapas} />

			<form
				onSubmit={(e) => {
					e.preventDefault();
					onNext();
				}}
			>
				<Flex direction="row" justify="center" className="flex-wrap gap-4">
					{/* Formulario para adicionar formações */}
					<Flex>
						<BoxView className="p-8">
							<Flex>
								<label htmlFor="universidade">Universidade:</label>
								<input
									type="text"
									id="universidade"
									value={educationFields.universidade}
									onChange={(e) =>
										setEducationFields({ universidade: e.target.value })
									}
									className={inputClassName}
									required
								/>
							</Flex>
							<Flex>
								<label htmlFor="cursos">Cursos:</label>
								<input
									type="text"
									id="cursos"
									value={educationFields.cursos}
									onChange={(e) =>
										setEducationFields({ cursos: e.target.value })
									}
									className={inputClassName}
									required
								/>
							</Flex>
							<Flex>
								<label htmlFor="graduacao">Graduação:</label>
								<input
									type="text"
									id="graduacao"
									value={educationFields.graduacao}
									onChange={(e) =>
										setEducationFields({ graduacao: e.target.value })
									}
									className={inputClassName}
									required
								/>
							</Flex>
							<Flex>
								<label htmlFor="pos">Pós-graduação:</label>
								<input
									type="text"
									id="pos"
									value={educationFields.pos}
									onChange={(e) => setEducationFields({ pos: e.target.value })}
									className={inputClassName}
									required
								/>
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
											key={education.title}
											direction="row"
											justify="between"
											className="p-6 odd:bg-white even:bg-blue-50"
										>
											<Flex direction="row" justify="start" className="gap-12">
												<p>{education.title}</p>
												<p>{education.local}</p>
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
