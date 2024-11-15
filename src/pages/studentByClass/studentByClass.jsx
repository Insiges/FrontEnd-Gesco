import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../../services/api/students";
import { StudentData } from "./components/index";

export const StudentByClass = () => {
	const [student, setStudent] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchStudent = async () => {
			try {
				const response = await getStudent(id);
				setStudent(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStudent();
	}, [id]);

	return (
		<div>{student.length !== 0 && <StudentData studentData={student} />}</div>
	);
};
