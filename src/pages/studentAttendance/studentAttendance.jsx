import React, { useEffect, useState } from "react";
import { getStudentsByClass } from "../../services/api/class";
import { saveFrequency } from "../../services/api/frequency";
import useUserInfos from "../../stores/userStore";

import { useGetClassByProfessor } from "../activities/hooks/useGetClassByProfessor";
import { inputClassName } from "../gestaoDocente/common";

// Não é claro se este componente será importado dentro de algum modulo ou
// se ele será acessado no root das rotas. Por isso coloquei como prop 'professorId'
// para caso de que este componente seja acessado trazendo informações de algum parente.

// Caso contrário, teremos que capturar a id do professor via query param na url, ou seja lá
// como for…
export const StudentAttendance = ({ professorId = null }) => {
	const [students, setStudents] = useState([]);
	const { data: classes } = useGetClassByProfessor();
	const [disciplineId, setDisciplineId] = useState(null);
	const [classId, setClassId] = useState(null);
	const [isPosting, setIsPosting] = useState(false);
	const [date, setDate] = useState("");
	const { userInfos } = useUserInfos();

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

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await getStudentsByClass(classId);
				setStudents(response);
			} catch (error) {
				console.error(error);
			}
		};

		fetchStudents();
	}, [classId]);

	const onSubmit = async () => {
		if (!disciplineId) {
			alert("Por favor, selecione uma matéria antes de enviar presenças.");
			return;
		}

		const onlyPresentStudents =
			!!students &&
			students.length > 0 &&
			students
				.map((student) =>
					student.presenca === "PRESENTE" ? student.id : false,
				)
				.filter(Boolean);

		const submitFrequency = async () => {
			const body = {
				alunos: onlyPresentStudents,
				disciplina: Number(disciplineId),
				professor: userInfos.dados.id,
				dia: date,
				presenca: "PRESENTE",
				turma: classId,
			};

			try {
				await saveFrequency(body);
				alert("Os dados foram salvo com sucesso");
			} catch (error) {
				console.error(error);
			}
		};

		submitFrequency();
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
					<input
						onChange={(e) => setDate(e.target.value)}
						type="date"
						className="text-black px-4 py-2 border border-gray-300 rounded-md"
					/>
					<p className="text-lg font-medium p-8 my-4">
						{" "}
						{userInfos.dados.nome}
					</p>
					<select
						className={inputClassName}
						style={{ color: "black" }}
						onChange={(e) => setClassId(e.target.value)}
					>
						<option value="">Selecione a turma</option>
						{!!classes &&
							classes.length > 0 &&
							classes.map((team) => {
								return (
									<option key={team.id} value={`${team.id}`}>
										{team.serie} {team.nome} {team.ano}
									</option>
								);
							})}
					</select>
					<select
						className={inputClassName}
						style={{ color: "black" }}
						onChange={(e) => setDisciplineId(e.target.value)}
					>
						<option value="" disabled selected>
							Selecione uma disciplina
						</option>
						{userInfos?.disciplinas?.map((it) => (
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
