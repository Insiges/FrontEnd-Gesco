import React, { useEffect, useState } from "react";
import { getStudentsByClass } from "../../services/api/class";
import { getFrequencyClass, saveFrequency } from "../../services/api/frequency";
import useUserInfos from "../../stores/userStore";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useGetClassByProfessor } from "../activities/hooks/useGetClassByProfessor";
import { useGetStudentsByClass } from "../classesStudents/hooks/useGetStudentsByClass";
import { inputClassName } from "../teacherManagement/const/classConst";
import { studentsAttendanceSchema } from "./form/schema";
import { useSaveFrequency } from "./hooks/useSaveFrequency";
import "react-toastify/dist/ReactToastify.css";

export const StudentAttendance = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { isDirty, isValid, errors },
	} = useForm({
		resolver: zodResolver(studentsAttendanceSchema),
		defaultValues: {
			date: "",
			crew: "",
			subject: "",
			checkPresence: "",
		},
	});

	const crewId = watch("crew");
	const subjectId = watch("subject");
	const dateId = watch("date");
	const { data: students } = useGetStudentsByClass(crewId);
	const { data: classes, isError } = useGetClassByProfessor();
	const { userInfos } = useUserInfos();
	const { mutateAsync: saveFrequency } = useSaveFrequency();
	const [selectedIds, setSelectedIds] = useState([]);
	const [checkedStudents, setCheckedStudents] = useState([]);

	const handleMarkAsPresence = async (data) => {
		const body = {
			alunos: data.checkPresence,
			disciplina: Number(data.subject),
			professor: userInfos.dados.id,
			dia: data.date,
			presenca: "PRESENTE",
			turma: data.crew,
		};
		const toastId = toast.loading("Salvando...");

		await saveFrequency(body, {
			onSuccess: () => {
				toast.update(toastId, {
					render: "Os dados foram cadastrados com sucesso!",
					type: toast.success,
					isLoading: false, // Finaliza o carregamento
					autoClose: 2500, // Fecha após 3 segundos
				});
			},
		});
	};

	useEffect(() => {
		const fetchFrequency = async () => {
			if (crewId !== "" && subjectId !== "" && dateId !== "") {
				try {
					const response = await getFrequencyClass(
						dateId,
						crewId,
						subjectId,
						userInfos.dados.id,
					);
					setCheckedStudents(response);
				} catch (error) {
					console.error(error);
				}
			}
		};

		fetchFrequency();
	}, [crewId, subjectId, dateId, userInfos.dados.id]);

	useEffect(() => {
		// Filtra os IDs dos estudantes presentes na lista `checkedStudents`
		if (students) {
			const initialSelectedIds = students
				.filter((student) => checkedStudents.includes(student.id))
				.map((student) => student.id);

			setSelectedIds(initialSelectedIds);
		}
	}, [students, checkedStudents]);

	const isChecked = (id) => selectedIds.includes(id);

	const handleCheckboxChange = (id) => {
		setSelectedIds((prevSelectedIds) =>
			prevSelectedIds.includes(id)
				? prevSelectedIds.filter((selectedId) => selectedId !== id)
				: [...prevSelectedIds, id],
		);
	};

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={3000} // O toast será fechado após 3 segundos
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-[#060343]">
					Frequência de Alunos
				</h1>
			</div>
			<form onSubmit={handleSubmit(handleMarkAsPresence)}>
				<div className="gap-12 p-4">
					<div className="flex justify-between bg-firstBlue text-white h-16 rounded-t-lg items-center w-full p-4">
						<p className="text-lg font-medium p-8 my-4">
							{userInfos.dados.nome}
						</p>

						<input
							type="date"
							className="text-black px-4 py-2 border border-gray-300 rounded-md"
							{...register("date")}
						/>
						<select
							className={inputClassName}
							style={{ color: "black" }}
							{...register("crew")}
						>
							<option value="" defaultValue>
								Selecione a turma
							</option>
							{!isError &&
								classes?.length > 0 &&
								classes.map((team) => {
									return (
										<option key={team.id} value={`${team.id}`}>
											{team.serie} {team.nome}
										</option>
									);
								})}
						</select>
						<select
							className={inputClassName}
							style={{ color: "black" }}
							{...register("subject")}
						>
							<option value="" disabled defaultValue>
								Selecione uma disciplina
							</option>
							{userInfos?.disciplinas?.map((it) => (
								<option key={it.id} value={`${it.id}`}>
									{it.nome}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="flex mx-4 justify-center rounded-lg shadow-lg border-firstBlue">
					{!!students && students?.length ? (
						<table className="table-fixed w-full h-full rounded-lg text-black">
							<thead>
								<tr className="bg-firstBlue">
									<th className={`${thClass} rounded-tl-lg`}>Estudante</th>
									<th className={thClass}>Matricula</th>
									<th className={thClass}>Presença</th>
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
												{...register("checkPresence")}
												value={student.id}
												checked={isChecked(student.id)}
												onChange={() => handleCheckboxChange(student.id)}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p className="text-center text-xl text-gray-500 py-4">
							Não há alunos cadastrados
						</p>
					)}
				</div>

				<div className="m-4 w-full">
					<button
						type="submit"
						className="w-full sm:w-auto px-4 py-2 bg-firstBlue cursor-pointer text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
						// disabled={!isValid}
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

const thClass =
	"w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center";

const tdClass =
	"px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center";
