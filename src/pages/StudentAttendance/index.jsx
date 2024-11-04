import React, { useState } from "react";
import { inputClassName } from "../GestaoDocente/common";

const mockData = [
	{
		id: 1,
		nome: "Alice Silva",
		matricula: "123456",
		presenca: "",
		id_escola: 101,
	},
	{
		id: 2,
		nome: "Bob Souza",
		matricula: "123457",
		presenca: "",
		id_escola: 101,
	},
	{
		id: 3,
		nome: "Carlos Oliveira",
		matricula: "123458",
		presenca: "",
		id_escola: 102,
	},
	{
		id: 4,
		nome: "Diana Santos",
		matricula: "123459",
		presenca: "",
		id_escola: 102,
	},
	{
		id: 5,
		nome: "Eduardo Almeida",
		matricula: "123460",
		presenca: "",
		id_escola: 103,
	},
	{
		id: 6,
		nome: "Fernanda Costa",
		matricula: "123461",
		presenca: "",
		id_escola: 103,
	},
];

// tabela disciplinas joined com prof
const profDisciplinasFromApi = [
	{ id: 1, nome: "Matematica" },
	{ id: 2, nome: "Outra" },
];

// Não é claro se este componente será importado dentro de algum modulo ou
// se ele será acessado no root das rotas. Por isso coloquei como prop 'professorId'
// para caso de que este componente seja acessado trazendo informações de algum parente.

// Caso contrário, teremos que capturar a id do professor via query param na url, ou seja lá
// como for…
export const StudentAttendance = ({ professorId = null }) => {
	const [students, setStudents] = useState(mockData);
	const [disciplineId, setDisciplineId] = useState(null);
	const [isPosting, setIsPosting] = useState(false);

	const dateNow = new Date().toLocaleDateString("pt-BR");

	const onChange = (studentId) => {
		const student = students.map((student) =>
			student.id === studentId
				? {
						...student,
						presenca: student.presenca === "PRESENTE" ? "AUSENTE" : "PRESENTE",
					}
				: student,
		);
		setStudents(student);
	};

	// Integrar com a API
	// Simulando o POST
	const onSubmit = async () => {
		if (!disciplineId) {
			alert("Por favor, selecione uma matéria antes de enviar presenças.");
			return;
		}

		const onlyPresentStudents = students
			.map((student) =>
				student.presenca === "PRESENTE"
					? {
							idAluno: student.id,
							disciplinaId: Number(disciplineId),
							professorId,
							dia: dateNow,
							presenca: student.presenca,
						}
					: false,
			)
			.filter(Boolean);

		setIsPosting(true);

		// A documentação sugere que a API aceita 1 objeto (presença-aluno) por POST request(???)
		// Neste caso teriamos que loopar 'onlyPresentStudents' postando programaticamente cada
		// um deles. Talvez sendo melhor o uso de for loop para assegurar operação async await.
		for (const studentToBePosted of onlyPresentStudents) {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			alert("STUDENT POSTED", JSON.stringify(studentToBePosted));
			console.log("STUDENT POSTED", JSON.stringify(studentToBePosted));
		}

		setIsPosting(false);
	};

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">
					Frequência de Alunos
				</h1>
			</div>

			{/* Header da pagina */}
			<div className="gap-12 p-4">
				<div className="flex justify-between bg-firstBlue text-white h-16 rounded-t-lg items-center w-full p-4">
					<p className="text-lg font-medium p-8 my-4">{dateNow}</p>
					<p className="text-lg font-medium p-8 my-4">PROF NAME FROM API</p>
					<p className="text-lg font-medium p-8 my-4">TURMA FROM API</p>
					<select
						className={inputClassName}
						style={{ color: "black" }}
						onChange={(e) => setDisciplineId(e.target.value)}
					>
						<option value="" disabled selected>
							Selecione uma disciplina
						</option>
						{profDisciplinasFromApi.map((it) => (
							<option key={it.id} value={it.id}>
								{it.nome}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Tabela que lista alunos */}
			<div className="flex mx-4 justify-center rounded-lg shadow-lg border-firstBlue">
				{students.length && !isPosting ? (
					<table className="table-fixed w-full h-full rounded-lg text-black">
						<thead>
							<tr className="bg-firstBlue">
								<th className={`${thClass} rounded-tl-lg`}>Estudante</th>
								<th className={thClass}>Matricula</th>
								<th className={thClass}>Presença</th>
								<th className={`${thClass} rounded-tr-lg`}>Faltas</th>
							</tr>
						</thead>

						<tbody>
							{students.map((student) => (
								<tr
									key={student.id}
									className="bg-white hover:cursor-pointer"
									onClick={() => {}}
								>
									<td className={tdClass}>{student.nome}</td>
									<td className={tdClass}>{student.matricula}</td>
									<td className={tdClass}>
										<input
											type="checkbox"
											onChange={() => onChange(student.id)}
											checked={student.presenca === "PRESENTE"}
										/>
									</td>
									<td className={tdClass}>MySQL Count de Ausencias</td>
								</tr>
							))}
						</tbody>
					</table>
				) : isPosting ? (
					<p className="text-center text-xl text-gray-500 py-4">
						AGUARDE NA PÁGINA ENQUANTO SALVAMOS ESTAS INFORMAÇÕES.
					</p>
				) : (
					<p className="text-center text-xl text-gray-500 py-4">
						Não há alunos cadastrados
					</p>
				)}
			</div>

			<div className="m-4 w-full">
				<button
					type="submit"
					className="w-full sm:w-auto px-4 py-2 bg-firstBlue text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={onSubmit}
				>
					Enviar
				</button>
			</div>
		</div>
	);
};

const thClass =
	"w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center";

const tdClass =
	"px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center";
