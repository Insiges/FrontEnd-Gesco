import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGridByClass } from "../../services/api/timeTable";
import { Grid, Modal, TitleClass } from "./components";
import { ModalEdit } from "./components/modal/modalEdit";

export const Timetable = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [selectedGrid, setSelectedGrid] = useState(null);
	const [grid, setGrid] = useState([]);
	const [horario, setHorario] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		async function fetchGrid() {
			try {
				const response = await getGridByClass(id);
				setGrid(response);
			} catch (error) {
				console.error(error);
			}
		}
		fetchGrid();
	}, [id]);

	useEffect(() => {
		const hora = grid.map((it) => {
			return it.hora;
		});

		const horariosUnicos = [...new Set(hora)];
		horariosUnicos.sort();
		setHorario(horariosUnicos);
	}, [grid]);

	return (
		<div>
			{/* Alterar o nome da turma conmforme o banco de dados */}
			<TitleClass title={`Turma ${id}`} />
			<Grid
				table={grid}
				horario={horario}
				openModal={() => setShowModalEdit(true)}
				selectedGrid={setSelectedGrid}
			/>

			<button
				type="button"
				className="mt-4 w-32 bg-firstBlue text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
				onClick={() => setShowModal(true)}
			>
				Salvar Horário
			</button>
			{showModal && <Modal closeModal={() => setShowModal(false)} />}
			{showModalEdit && (
				<ModalEdit
					closeModal={() => setShowModalEdit(false)}
					id={selectedGrid}
				/>
			)}
		</div>
	);
};
