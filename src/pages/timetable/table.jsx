import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Modal, TitleClass } from "./components";
import { ModalEdit } from "./components/modal/modalEdit";
import { useGetGrid } from "./hooks/useGetGrid";
import { useGetOneClass } from "./hooks/useGetOneClass";

export const Timetable = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [selectedGrid, setSelectedGrid] = useState(null);
	const [horario, setHorario] = useState([]);
	const { id } = useParams();

	const { data: classe } = useGetOneClass(id);
	const { data: grid } = useGetGrid(id);

	useEffect(() => {
		let horariosUnicos;

		if (!!grid && grid.length > 0) {
			const hora = grid.map((it) => it.hora);
			horariosUnicos = [...new Set(hora)];
			horariosUnicos.sort();
		} else {
			// Se o array grid estiver vazio, preencha com horários do dia (por exemplo, de 00:00 a 23:00)
			horariosUnicos = Array.from(
				{ length: 5 },
				(_, index) => `${String(index).padStart(2, "0")}:00`,
			);
		}

		setHorario(horariosUnicos);
	}, [grid]);

	return (
		<div>
			{/* Alterar o nome da turma conmforme o banco de dados */}
			<TitleClass title={`${!!classe && classe.nome}`} />
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
