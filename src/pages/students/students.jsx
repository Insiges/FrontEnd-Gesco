import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Modal } from "./components/Modal";
import StudentRegistration from "./components/StudentRegistration/StudentsRegistration";
import StudentsList from "./components/StudentsList";

import { useCreateStudent } from "./hooks/useCreateStudent";
import { useDeleteStudent } from "./hooks/useDeleteStudent";
import { useEditStudent } from "./hooks/useEditStudent";
import { useGetAllStudents } from "./hooks/useGetAllStudents";

export const Students = () => {
	const navigate = useNavigate();

	const [showModalWithId, setShowModalWithId] = useState(null);

	const { data } = useGetAllStudents();

	const { mutateAsync: addStudent } = useCreateStudent();

	const { mutateAsync: deleteStudent } = useDeleteStudent();
	const { mutateAsync: editStudent } = useEditStudent();

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
		await editStudent(dados, {
			onSuccess: () => {
				navigate("/students");
			},
		});
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
