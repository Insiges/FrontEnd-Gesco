import React, { useEffect, useState } from "react";
import { getDisciplines } from "../../../../services/api/teachers";
import {
	Button,
	Flex,
	FormGuiaEtapas,
	Title,
	inputClassName,
} from "../../common";

const MemberDisciplines = ({
	disciplinas,
	etapas,
	onChange,
	onNext,
	onPrevious,
}) => {
	const [disciplina, setDisciplina] = useState([]);
	const [disciplineList, setDisciplineList] = useState(disciplinas || {});
	const [nameDisciplina, setNameDisciplina] = useState([]);

	useEffect(() => {
		async function fetchDiscipline() {
			try {
				const response = await getDisciplines();

				setDisciplina(response);
			} catch (error) {
				console.error("Erro ao buscar tipos de educacao:", error);
			}
		}
		fetchDiscipline();
	}, []);

	const handleSaveDiscipline = (e) => {
		setDisciplineList((prev) => [...prev, e.target.value]);
		setNameDisciplina((prev) => [
			...prev,
			{ nome: e.target.selectedOptions[0].innerHTML },
		]);
	};

	const handleDelete = (index) => {
		setNameDisciplina((prev) =>
			prev.filter((_, discIndex) => discIndex !== index),
		);
		setDisciplineList((prev) =>
			prev.filter((_, discIndex) => discIndex !== index),
		);
	};

	const handleSave = () => {
		onNext({ disciplinas: disciplineList });
	};
	return (
		<Flex>
			<Flex>
				<Title fontSize={34} subTitle="Disciplinas Ministradas">
					Adicionar Docentes
				</Title>

				<FormGuiaEtapas etapas={etapas} />

				<Flex>
					<Flex
						className="items-center gap-2"
						style={{ justifyContent: "center" }}
					>
						<label htmlFor="disc">Adicionar Disciplina</label>
						<select className={inputClassName} onChange={handleSaveDiscipline}>
							<option value="" disabled selected>
								Selecione uma opção
							</option>
							{disciplina.map((it) => (
								<option key={it.id} value={it.id}>
									{it.nome}
								</option>
							))}
						</select>
					</Flex>

					<Flex>
						<h1 className="text-xl text-blue-900">Disciplinas</h1>
						<ul>
							{nameDisciplina.map((disciplina, index) => (
								<li key={disciplina.nome}>
									<Flex
										direction="row"
										className="items-start gap-4"
										style={{ justifyContent: "start" }}
									>
										<h3>{disciplina.nome}</h3>
										<button
											className="text-red-500 hover:underline"
											onClick={() => handleDelete(index)}
											type="button"
										>
											Remover
										</button>
									</Flex>
								</li>
							))}
						</ul>
					</Flex>
					<Flex
						direction="row"
						className="items-end gap-2 p-4"
						style={{ justifyContent: "flex-end" }}
					>
						<Button onClick={onPrevious}>Voltar</Button>
						<Button onClick={handleSave}>Continuar</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MemberDisciplines;
