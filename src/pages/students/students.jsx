import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Modal } from "./components/Modal";
import StudentRegistration from "./components/StudentRegistration";
import StudentsList from "./components/StudentsList";

import { useAddStudentMutation } from "../../services/hooks/students/useAddStudentMutation";
import { useDeleteStudentMutation } from "../../services/hooks/students/useDeleteStudentMutation";
import { useStudentsQuery } from "../../services/hooks/students/useStudentsQuery";

// Temporario, apenas para cumprir o necessario para API retornar o estudante.
// Cumprir requisito de associação da query feita no spring boot
const emails = [`${Math.random().toString(36).substring(2, 6)}@example.com`];

export const Students = () => {
	const navigate = useNavigate();

	const [showModalWithId, setShowModalWithId] = useState(null);

	const { data } = useStudentsQuery();

	const { mutateAsync: addStudent } = useAddStudentMutation();

	const { mutateAsync: deleteStudent } = useDeleteStudentMutation();

	const onAddNewStudent = async (newStudentData) => {
		await addStudent(
			{ ...newStudentData, emails },
			{
				onSuccess: () => window.alert("Estudante Cadastrado com Sucesso!"),
			},
		);

		navigate("/students");
	};

	// @TODO - Problema no endpoint ao buscar aluno especifico
	// solução temporariamente não implementada.
	const onUpdateStudent = () => null;

	const onConfirmDeleteStudent = async () => {
		await deleteStudent(showModalWithId);
		setShowModalWithId(null);
	};

	const students = data?.content ?? [];
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
							onEdit={() => navigate(`/students/registration/edit/${id}`)}
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
