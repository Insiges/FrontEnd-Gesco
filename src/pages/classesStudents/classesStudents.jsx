import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentsByClass } from "../../services/api/class";
import { useGetStudentsWithOutClass } from "../addStudentClass/hooks/useGetStudentsWithOutClass";
import { Button, SearchFilter, StudentsTable } from "./components/index";
import { useGetStudentsByClass } from "./hooks/useGetStudentsByClass";

export const ClassesStudents = () => {
	// const { data: students } = useGetStudentsWithOutClass();
	const { id } = useParams();
	const { data: studentsByClass } = useGetStudentsByClass(id);

	// useEffect(() => {
	// 	const fetchStudents = async () => {
	// 		try {
	// 			const response = await getStudentsByClass(id);
	// 			setStudent(response);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchStudents();
	// }, [id]);

	return (
		<div>
			{/* // adicionar o nome da turma */}
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Estudantes - </h1>
				<Button id={id} />
			</div>
			<SearchFilter />
			<StudentsTable students={studentsByClass} />
		</div>
	);
};
