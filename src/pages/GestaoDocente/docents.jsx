import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import MembersList from "./components/MembersList";
import Registration from "./components/MembersRegistration";
import LoginRegistration from "./components/MembersRegistration/LoginRegistration";

import { getDocents } from "../../services/api/school";
import { deleteTeacher } from "../../services/api/teachers";

export const GestaoDocente = () => {
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [docentes, setDocentes] = useState([]);
	const [idDocente, setIdDocente] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTeachers = async () => {
			try {
				const response = await getDocents();
				setDocentes(response);
			} catch (error) {
				console.error("Error fetching teachers", error);
			}
		};
		fetchTeachers();
	}, []);

	const handleAdicionarDocente = (dadosCadastrais) => {
		setDocentes((prevDocentes) => {
			if (dadosCadastrais?.id) {
				return prevDocentes.map((docente) =>
					docente.id === dadosCadastrais.id
						? { ...docente, ...dadosCadastrais }
						: docente,
				);
			}

			return [
				...prevDocentes,
				{ id: prevDocentes.length + 1, ...dadosCadastrais },
			];
		});
	};

	const handleEditarDocente = (id) => navigate(`/docents/edit/${id}`);

	const handleDeletarDocente = (id) => {
		setShowModalDelete(true);
		setIdDocente(id);
	};

	const handleDeleteTeacherConfirm = async () => {
		await deleteTeacher(idDocente);

		setShowModalDelete(false);
		setTimeout(async () => {
			const response = await getDocents();
			setDocentes(response);
		}, 2000);
	};

	const closeModal = () => {
		setShowModalDelete(false);
		setError("");
	};

	return (
		<section style={styles.container}>
			<Routes>
				<Route
					path="/"
					element={
						<MembersList
							docentes={docentes}
							onEditar={handleEditarDocente}
							onDeletar={handleDeletarDocente}
						/>
					}
				/>
			</Routes>

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
								onClick={(e) => handleDeleteTeacherConfirm()}
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
};

const styles = {
	container: {
		margin: "auto",
		maxWidth: "1400px",
		padding: 4,
	},
};
