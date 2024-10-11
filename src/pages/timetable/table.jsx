import { useEffect, useState } from "react";
import { getGridByClass } from "../../services/api/timeTable";
import { Grid, Modal, TitleClass } from "./components";
import { ModalEdit } from "./components/modal/modalEdit";

const sampleTableData = [
	["08:00", "Math", "English", "Science", "History", "PE"],
	["09:00", "Geography", "Math", "Art", "English", "Music"],
	["10:00", "Science", "History", "Math", "PE", "Geography"],
	["11:00", "English", "Science", "History", "Math", "Art"],
	["12:00", "PE", "Geography", "Music", "Science", "History"],
];
export const Timetable = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [selectedGrid, setSelectedGrid] = useState(null);
	const [grid, setGrid] = useState([]);
	const [horario, setHorario] = useState([]);

	useEffect(() => {
		async function fetchGrid() {
			try {
				const response = await getGridByClass(1);
				setGrid(response);
			} catch (error) {
				console.error(error);
			}
		}
		fetchGrid();
	}, []);

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
			<TitleClass title="Truma 6° - B" />
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
