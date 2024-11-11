import { useParams } from "react-router-dom";

import { Button, SearchFilter, StudentsTable } from "./components/index";
import { useGetStudentsByClass } from "./hooks/useGetStudentsByClass";

export const ClassesStudents = () => {
	const { id } = useParams();
	const { data: studentsByClass } = useGetStudentsByClass(id);
	console.log("qw");

	return (
		<div>
			<div className="flex justify-between mx-4 items-center">
				<h1 className="text-2xl font-bold text-firstBlue">
					Estudantes - {`${!!studentsByClass && studentsByClass[0]?.turma}`}
				</h1>
				<Button id={id} />
			</div>
			<SearchFilter />
			<StudentsTable students={studentsByClass} />
		</div>
	);
};
