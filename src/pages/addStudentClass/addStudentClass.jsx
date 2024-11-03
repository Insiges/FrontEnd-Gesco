import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
	getStudentsNoClass,
	saveStudentInOneClass,
} from "../../services/api/class";
import { AddStudentsTable, Button, SearchFilter } from "./components/index";

export const ClassesStudentsAdd = () => {
	const [selectedStudents, setSelectedStudents] = useState([]);
	const [student, setStudent] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSelectionChange = (newSelectedStudents) => {
		setSelectedStudents(newSelectedStudents);
	};

	const saveStudents = async () => {
		await saveStudentInOneClass(id, selectedStudents);
		console.log("Estudantes selecionados salvos:", selectedStudents);
		navigate(`/classes/${id}/students`);
	};

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await getStudentsNoClass();
				setStudent(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchStudents();
	}, []);

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">
					Adicionar estudantes - Turma {"10A"}
				</h1>

				<Button onSave={saveStudents} />
			</div>
			<SearchFilter />
			<AddStudentsTable
				students={student}
				onSelectionChange={handleSelectionChange}
			/>
		</div>
	);
};
