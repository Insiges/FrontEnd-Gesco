import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentsByClass } from "../../services/api/class";
import { Button, SearchFilter, StudentsTable } from "./components/index";

export const ClassesStudents = () => {
	const [student, setStudent] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await getStudentsByClass(id);
				setStudent(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchStudents();
	}, [id]);

	return (
		<div>
			{/* // adicionar o nome da turma */}
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">Estudantes -</h1>
				<Button id={id} />
			</div>
			<SearchFilter />
			<StudentsTable students={student} />
		</div>
	);
};
