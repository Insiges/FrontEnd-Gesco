import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
	getStudentsNoClass,
	saveStudentInOneClass,
} from "../../services/api/class";
import { AddStudentsTable, Button, SearchFilter } from "./components/index";
import { useAddStudentInClass } from "./hooks/useAddStudentInClass";

export const ClassesStudentsAdd = () => {
	const [selectedStudents, setSelectedStudents] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();
	const { mutateAsync: addStudent } = useAddStudentInClass();

	const handleSelectionChange = (newSelectedStudents) => {
		setSelectedStudents(newSelectedStudents);
	};

	const saveStudents = async () => {
		await addStudent(
			{ id_turma: id, id_aluno: selectedStudents },
			{
				onSuccess: () => {
					navigate(`/classes/${id}/students`);
				},
				onError: () => {
					alert("Erro ao tentar adicionar estudante na turma!");
				},
			},
		);
	};

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">
					Adicionar estudantes - Turma {"10A"}
				</h1>

				<Button onSave={saveStudents} />
			</div>
			<SearchFilter />
			<AddStudentsTable onSelectionChange={handleSelectionChange} />
		</div>
	);
};
