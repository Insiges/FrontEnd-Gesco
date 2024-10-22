import { useEffect, useState } from "react";
import { getDocents } from "../../../../services/api/school";
import {
	getHours,
	getWeek,
	saveGrid,
} from "../../../../services/api/timeTable";

export const Modal = ({ closeModal }) => {
	const [materia, setMateria] = useState("");
	const [day, setDay] = useState("");
	const [horario, setHorario] = useState("");
	const [docentes, setDocentes] = useState([]);
	const [selectedTeacherId, setSelectedTeacherId] = useState("");
	const [disciplines, setDisciplines] = useState([]);
	const [week, setWeek] = useState([]);
	const [cronograma, setCronograma] = useState([]);
	const [formData, setFormData] = useState({
		id: 0,
		turma: 0,
		disciplina: 0,
		professor: 0,
		dia: 0,
		horario: 0,
	});

	useEffect(() => {
		async function fetchDocents() {
			try {
				const response = await getDocents();
				setDocentes(response);
			} catch (error) {
				console.error("Erro ao buscar docentes:", error);
			}
		}

		async function fetchWeek() {
			try {
				const response = await getWeek();

				setWeek(response);
			} catch (e) {
				console.error("Erro ao buscar week:", e);
			}
		}

		async function fetchCrono() {
			try {
				const response = await getHours();

				setCronograma(response);
			} catch (e) {
				console.error("Erro ao buscar week:", e);
			}
		}

		fetchCrono();
		fetchWeek();
		fetchDocents();
	}, []);

	// Manipular a seleção do professor
	const handleFirstSelectChange = (e) => {
		const teacherId = e.target.value; // Pega o ID do professor
		setSelectedTeacherId(teacherId); // Atualiza o estado do professor selecionado

		// Encontra o professor selecionado para acessar suas disciplinas
		const selectedTeacher = docentes.find(
			(teacher) => teacher.dados.id === Number(teacherId),
		);
		if (selectedTeacher) {
			setDisciplines(selectedTeacher.disciplinas); // Define as disciplinas no estado
		}
	};

	const handleSubmitGrid = () => {
		const path = window.location.pathname.split("/")[2];
		formData.disciplina = materia;
		formData.professor = selectedTeacherId;
		formData.dia = day;
		formData.horario = horario;
		formData.id = path;

		saveGrid(formData);
		closeModal();
	};
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold">Salvar Horário</h2>
					<button
						type="button"
						onClick={closeModal}
						className="text-gray-700 hover:text-gray-900"
					>
						&times;
					</button>
				</div>
				<form>
					<div className="mb-4">
						<label htmlFor="turma" className="block text-gray-700">
							Professor:
						</label>
						<select
							className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
							value={selectedTeacherId}
							onChange={handleFirstSelectChange}
						>
							<option value="" disabled>
								Selecione uma opção
							</option>
							{docentes.map((it) => (
								<option key={it.dados.id} value={it.dados.id}>
									{it.dados.nome}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label htmlFor="materia" className="block text-gray-700">
							Matéria:
						</label>
						<select
							className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
							value={materia}
							onChange={(e) => setMateria(e.target.value)}
						>
							<option value="" disabled>
								Selecione uma opção
							</option>
							{disciplines.map((disciplina) => (
								<option key={disciplina.id} value={disciplina.id}>
									{disciplina.nome}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label htmlFor="materia" className="block text-gray-700">
							Dia:
						</label>
						<select
							className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
							value={day}
							onChange={(e) => setDay(e.target.value)}
						>
							<option value="" disabled>
								Selecione uma opção
							</option>
							{week.map((it) => (
								<option key={it.id} value={it.id}>
									{it.dia}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label htmlFor="materia" className="block text-gray-700">
							Horário:
						</label>
						<select
							className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
							value={horario}
							onChange={(e) => setHorario(e.target.value)}
						>
							<option value="" disabled>
								Selecione uma opção
							</option>
							{cronograma.map((it) => (
								<option key={it.id} value={it.id}>
									{it.hora}
								</option>
							))}
						</select>
					</div>

					<button
						type="button"
						onClick={handleSubmitGrid}
						className="w-full bg-firstBlue text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firstBlue"
					>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};
