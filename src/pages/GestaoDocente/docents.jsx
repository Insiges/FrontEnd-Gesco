import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import MembersList from "./components/MembersList";
import Registration from "./components/MembersRegistration";
import LoginRegistration from "./components/MembersRegistration/LoginRegistration";

import { getDocents } from "../../services/api/school";
import data from "./data";

export const GestaoDocente = () => {
	const navigate = useNavigate();

	const [docentes, setDocentes] = useState([]);

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

	const handleEditarDocente = (id) =>
		navigate(`/gestao-docente/cadastro/${id}`);

	const handleDeletarDocente = (id) => {
		setDocentes((prevDocentes) =>
			prevDocentes.filter((docente) => docente.id !== id),
		);
	};

	return (
		<section style={styles.container}>
			<Routes>
				{/* Rota com parametro de ID para tela de formulário de cadastro para editar um docente existente */}
				<Route
					path="/cadastro/:id"
					element={
						<Registration
							onAdicionar={handleAdicionarDocente}
							docentes={docentes}
						/>
					}
				/>

				{/* Rota para tela de formulário de cadastro de um novo docente */}
				<Route
					path="/cadastro"
					element={<Registration onAdicionar={handleAdicionarDocente} />}
				/>

				{/* Rota da tela inicial do modulo Gestao Docente */}
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
