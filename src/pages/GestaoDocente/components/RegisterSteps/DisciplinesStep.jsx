import React, { useEffect, useState } from "react";
import { Button, Flex } from "../../../../components/ui";
import { getDisciplines } from "../../../../services/api/teachers";

import { inputClassName } from "../../const/classConst";

const DisciplinesStep = ({
	disciplinas,
	etapas,
	onChange,
	onNext,
	onPrevious,
}) => {
	const [disciplina, setDisciplina] = useState([]); // Disciplinas disponíveis para seleção
	const [disciplineList, setDisciplineList] = useState([]);
	const [nameDisciplina, setNameDisciplina] = useState(
		disciplinas?.map((disciplina) => ({ nome: disciplina.nome })) || [],
	);

	useEffect(() => {
		const ids = disciplinas.map((it) => {
			return it.id;
		});

		setDisciplineList(ids);
	}, [disciplinas]);

	// Função para buscar disciplinas
	useEffect(() => {
		async function fetchDiscipline() {
			try {
				const response = await getDisciplines();
				setDisciplina(response);
			} catch (error) {
				console.error("Erro ao buscar disciplinas:", error);
			}
		}
		fetchDiscipline();
	}, []); // Esse efeito só será executado uma vez, ao montar o componente

	const handleSaveDiscipline = (e) => {
		const selectedDisciplineId = Number(e.target.value);
		const selectedDisciplineName = e.target.selectedOptions[0].innerHTML;

		// Verifica se a disciplina já foi adicionada
		if (disciplineList.some((d) => d === Number(selectedDisciplineId))) {
			alert("Disciplina já adicionada.");
			return;
		}

		// Atualiza as listas de disciplinas
		setDisciplineList((prev) => [...prev, selectedDisciplineId]);
		setNameDisciplina((prev) => [...prev, { nome: selectedDisciplineName }]);
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
		const unique = Array.from(new Set(disciplineList));
		onNext({ disciplinas: unique });
	};

	return (
		<>
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
				<Flex direction="row" className="items-end gap-2 p-4">
					<Button onClick={onPrevious}>Voltar</Button>
					<Button onClick={handleSave}>Continuar</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default DisciplinesStep;
