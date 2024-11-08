import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ListTeachers from "./components/ListTeachers";

import { useDeleteTeacher } from "./hooks/useDeleteTeacher";
import { useGetTeachers } from "./hooks/useGetTeachers";

export function TeacherManagement() {
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [idTeacher, setIdTeacher] = useState("");
	const navigate = useNavigate();

	const { data: teachers } = useGetTeachers();
	const { mutateAsync: deleteTeacher } = useDeleteTeacher();

	const handleEditTeacher = (id) => navigate(`register/${id}`);

	const handleDelete = (id) => {
		setShowModalDelete(true);
		setIdTeacher(id);
	};

	const handleConfirmDelete = async () => {
		await deleteTeacher(idTeacher, {
			onSuccess: () => {
				setShowModalDelete(false);
			},
		});
	};

	const closeModal = () => {
		setShowModalDelete(false);
		setError("");
	};

	return (
		<section style={styles.container}>
			<ListTeachers
				teachers={teachers ?? []}
				onEditar={handleEditTeacher}
				onDeletar={handleDelete}
			/>

			{showModalDelete && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white max-h-96  w-[20%] min-w-64 p-3 rounded-lg shadow-lg">
						<div className="flex justify-between text-center items-center mb-2">
							<h2>Excluir Docente</h2>
						</div>
						<div className="flex justify-center gap-3">
							<button
								type="button"
								onClick={closeModal}
								className="w-[40%] px-2 py-1 bg-red-500 text-white rounded"
							>
								Cancelar
							</button>
							<button
								type="button"
								onClick={(e) => handleConfirmDelete()}
								className="w-[40%] px-2 py-1 bg-green-500 text-white rounded"
							>
								Excluir
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

const styles = {
	container: {
		margin: "auto",
		maxWidth: "1400px",
		padding: 4,
	},
};
