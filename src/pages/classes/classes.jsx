import { Button, ClassTable, SearchFilter } from "./components/index";

// base de dados apenas para testes

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

export const Classes = () => {
	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Turmas</h1>
				<Button />
			</div>
			<SearchFilter />
			<ClassTable turmas={turmas} />
		</div>
	);
};
