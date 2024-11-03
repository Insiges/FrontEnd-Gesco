import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Modal } from "./components/Modal";
import StudentRegistration from "./components/StudentRegistration/StudentsRegistration";
import StudentsList from "./components/StudentsList";

import { editStudent } from "../../services/api/students";
import { useAddStudentMutation } from "../../services/hooks/students/useAddStudentMutation";
import { useDeleteStudentMutation } from "../../services/hooks/students/useDeleteStudentMutation";
import { useStudentsQuery } from "../../services/hooks/students/useStudentsQuery";

export const Students = () => {
	const navigate = useNavigate();

	const [showModalWithId, setShowModalWithId] = useState(null);

	const { data } = useStudentsQuery();

	const { mutateAsync: addStudent } = useAddStudentMutation();

	const { mutateAsync: deleteStudent } = useDeleteStudentMutation();

	const onAddNewStudent = async (newStudentData) => {
		await addStudent(
			{ ...newStudentData },
			{
				onSuccess: () => window.alert("Estudante Cadastrado com Sucesso!"),
			},
		);

		navigate("/students");
	};

	const onUpdateStudent = async (dados) => {
		await editStudent(dados);

		navigate("/students");
		window.location.reload();
	};

	const onConfirmDeleteStudent = async () => {
		await deleteStudent(showModalWithId);
		setShowModalWithId(null);
	};

	const students = data ?? [];
	return (
		<section style={styles.container}>
			<Routes>
				<Route
					path="/registration/edit/:id"
					element={
						<StudentRegistration
							onSubmit={onUpdateStudent}
							docentes={students}
						/>
					}
				/>
				<Route
					path="/register"
					element={<StudentRegistration onSubmit={onAddNewStudent} />}
				/>
				<Route
					path="/"
					element={
						<StudentsList
							students={students}
							onEdit={(id) => navigate(`/students/registration/edit/${id}`)}
							onDelete={setShowModalWithId}
						/>
					}
				/>
			</Routes>

			<Modal
				title="Certeza de que deseja excluir este aluno?"
				show={!!showModalWithId}
				close={() => setShowModalWithId(null)}
				confirm={onConfirmDeleteStudent}
			/>
		</section>
	);
};

const styles = {
	container: {
		margin: "auto",
		maxWidth: "1400px",
		padding: 4,
	},
};
