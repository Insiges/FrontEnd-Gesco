import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneClass } from "../../services/api/class";
import { getGridByClass } from "../../services/api/timeTable";
import { Grid, Modal, TitleClass } from "./components";
import { ModalEdit } from "./components/modal/modalEdit";

export const Timetable = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [selectedGrid, setSelectedGrid] = useState(null);
	const [grid, setGrid] = useState([]);
	const [classe, setClasse] = useState({});
	const [horario, setHorario] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		async function fetchClass() {
			try {
				const path = window.location.pathname.split("/")[2];
				const response = await getOneClass(path);
				setClasse(response);
			} catch (error) {
				console.error(error);
			}
		}
		async function fetchGrid() {
			try {
				const path = window.location.pathname.split("/")[2];
				const response = await getGridByClass(path);
				setGrid(response);
			} catch (error) {
				console.error(error);
			}
		}
		fetchGrid();
		fetchClass();
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
			{/* Alterar o nome da turma conmforme o banco de dados */}
			<TitleClass title={`${classe.nome}`} />
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
