import { ClassTable, SearchFilter } from "./components/index";

// Para acessar a página de timeTable use o "localhost:{port}/ClassSchedule", pois ele foi substituído pelo componente ClassesSchedule (que mostra as tumas, antes de mostrar a grade de horários de cada uma)

// testes
const turmas = [
	{ nome: "Turma A", serie: "1° ano", ano: 2021, id: 1235 },
	{ nome: "Turma A", serie: "1° ano", ano: 2024, id: 1235 },
	{ nome: "Turma A", serie: "1° ano", ano: 2023, id: 1235 },
	{ nome: "Turma A", serie: "1° ano", ano: 2024, id: 1235 },
	{ nome: "Turma A", serie: "1° ano", ano: 2021, id: 1235 },
	{ nome: "Turma A", serie: "1° ano", ano: 2022, id: 1245 },
	{ nome: "Turma A", serie: "1° ano", ano: 2024, id: 12345 },
	{ nome: "Turma B", serie: "1° ano", ano: 2022, id: 1345 },
	{ nome: "Turma C", serie: "1° ano", ano: 2024, id: 2345 },
];

export const ClassesSchedule = () => {
	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Grade de Horários</h1>
			</div>
			<SearchFilter />
			<ClassTable turmas={turmas} />
		</div>
	);
};
