import dayjs from "dayjs";
import React, { useState, useEffect, useCallback } from "react";
import {
	deleteEvent,
	editEvent,
	getEvents,
	saveEvent,
} from "../../services/api/School";

export default function Calendar({ title }) {
	const today = dayjs();
	const [currentDate, setCurrentDate] = useState(today);
	const [selectedDay, setSelectedDay] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [events, setEvents] = useState({});
	const [formData, setFormData] = useState({
		id: 0,
		name: "",
		time: "",
		description: "",
	});
	const [error, setError] = useState("");

	const startOfMonth = currentDate.startOf("month");
	const endOfMonth = currentDate.endOf("month");
	const daysInMonth = endOfMonth.date();
	const startDay = startOfMonth.day();

	const fetchEvents = useCallback(async () => {
		console.log("Fetching events...");

		try {
			const response = await getEvents();
			const eventosPorDia = response.eventos.reduce((acc, evento) => {
				if (!acc[evento.dia]) {
					acc[evento.dia] = {
						id: evento.id,
						name: evento.nome,
						description: evento.descricao,
						time: evento.horario.slice(0, 5), // Mantém apenas as horas e minutos
					};
				}
				return acc;
			}, {});

			setEvents(eventosPorDia);
		} catch (error) {
			console.error("Erro ao buscar eventos:", error);
		}
	}, []);

	useEffect(() => {
		fetchEvents();
	}, [fetchEvents]);

	const prevMonth = () => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const nextMonth = () => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	const emptyDays = Array.from({ length: startDay }).map((element) => (
		<div key={element} className="text-center p-2" />
	));

	const handleDayClick = (day) => {
		setSelectedDay(day);
		const dia = String(day).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");
		if (events[`${currentDate.$y}-${mes}-${dia}`]) {
			setShowModalEdit(true);
			setFormData(events[`${currentDate.$y}-${mes}-${dia}`]);
		} else {
			setShowModal(true);
			setFormData({ name: "", time: "", description: "" });
		}
		setError("");
	};

	const closeModal = () => {
		setShowModal(false);
		setShowModalEdit(false);
		setShowModalDelete(false);
		setFormData({ name: "", time: "", description: "" });
		setError("");
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSaveEvent = () => {
		const { name, time, description } = formData;
		const dia = String(selectedDay).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");
		if (!name || !time || !description) {
			setError("Todos os campos precisam estar preenchidos.");
			setTimeout(() => {
				setError("");
			}, 4000);
			return;
		}

		formData.selectedDay = `${currentDate.$y}-${mes}-${dia}`;
		saveEvent(formData);

		setTimeout(async () => {
			await fetchEvents();
		}, 2000);
		setShowModal(false);
	};

	const handleEditEvent = () => {
		const { name, time, description } = formData;
		const dia = String(selectedDay).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");
		if (!name || !time || !description) {
			setError("Todos os campos precisam estar preenchidos.");
			setTimeout(() => {
				setError("");
			}, 4000);
			return;
		}

		formData.selectedDay = `${currentDate.$y}-${mes}-${dia}`;
		editEvent(formData);

		setTimeout(async () => {
			await fetchEvents();
		}, 2000);
		setShowModalEdit(false);
	};

	const handleDeleteEvent = () => {
		setShowModalDelete(true);
	};

	const handleDeleteEventConfirm = () => {
		deleteEvent(formData.id);

		setTimeout(async () => {
			await fetchEvents();
		}, 2000);
		setShowModalDelete(false);
		setShowModalEdit(false);
	};

	const days = Array.from({ length: daysInMonth }, (_, index) => {
		const day = index + 1;
		const dia = String(day).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");

		const isToday =
			currentDate.date() === day && currentDate.isSame(today, "month");

		const hasEvent = events[`${currentDate.$y}-${mes}-${dia}`];

		return (
			<div
				key={day}
				className={`text-center p-4 rounded-full cursor-pointer ${
					isToday ? "bg-blue-500 text-white" : "hover:bg-gray-200"
				} ${hasEvent ? "border-2 border-green-500" : ""}`}
				onClick={() => handleDayClick(day)}
			>
				{day}
			</div>
		);
	});

	return (
		<div className="w-full bg-white shadow-lg rounded-lg p-6">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-bold">{title}</h2>
				<div className="flex items-center space-x-4">
					<button
						type="button"
						onClick={prevMonth}
						className="p-2 text-gray-500 hover:text-black"
					>
						&lt;
					</button>
					<span className="text-lg font-semibold">
						{currentDate.format("MMMM YYYY")}
					</span>
					<button
						type="button"
						onClick={nextMonth}
						className="p-2 text-gray-500 hover:text-black"
					>
						&gt;
					</button>
				</div>
			</div>

			<div className="grid grid-cols-7 gap-4 text-center text-gray-600 font-medium">
				{daysOfWeek.map((day) => (
					<div key={day}>{day}</div>
				))}
			</div>

			<div className="grid grid-cols-7 gap-4 mt-4">
				{emptyDays}
				{days}
			</div>

			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white max-h-96  w-[30%] min-w-64 p-3 rounded-lg shadow-lg">
						<div className="flex justify-between text-center items-center mb-2">
							<h2>Criar Evento no Dia</h2>
							<strong className="p-2 rounded-full bg-blue-500 text-white">
								{selectedDay}
							</strong>
						</div>

						<div className="border-t border-blue-500 px-2 py-4 flex flex-col gap-2">
							<input
								className="outline-none p-1 shadow-md rounded-md"
								type="text"
								placeholder="Nome*"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
							/>
							<input
								className="outline-none p-1 shadow-md rounded-md"
								type="text"
								placeholder="Horário*"
								name="time"
								value={formData.time}
								onChange={handleInputChange}
							/>
							<textarea
								className="outline-none p-1 shadow-md rounded-md"
								name="description"
								cols="30"
								rows="5"
								placeholder="Descrição"
								value={formData.description}
								onChange={handleInputChange}
							></textarea>

							{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
						</div>

						<div className="flex justify-around gap-2">
							<button
								type="button"
								onClick={closeModal}
								className="w-[50%] px-2 py-1 bg-red-500 text-white rounded"
							>
								Cancelar
							</button>
							<button
								type="button"
								onClick={handleSaveEvent}
								className="w-[50%] px-2 py-1 bg-green-500 text-white rounded"
							>
								Salvar
							</button>
						</div>
					</div>
				</div>
			)}

			{showModalEdit && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white max-h-96  w-[30%] min-w-64 p-3 rounded-lg shadow-lg">
						<div className="flex justify-between text-center items-center mb-2">
							<h2>Editar Evento</h2>
							<strong className="p-2 rounded-full bg-blue-500 text-white">
								{selectedDay}
							</strong>
						</div>

						<div className="border-t border-blue-500 px-2 py-4 flex flex-col gap-2">
							<input
								className="outline-none p-1 shadow-md rounded-md"
								type="text"
								placeholder="Nome*"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
							/>
							<input
								className="outline-none p-1 shadow-md rounded-md"
								type="text"
								placeholder="Horário*"
								name="time"
								value={formData.time}
								onChange={handleInputChange}
							/>
							<textarea
								className="outline-none p-1 shadow-md rounded-md"
								name="description"
								cols="30"
								rows="5"
								placeholder="Descrição"
								value={formData.description}
								onChange={handleInputChange}
							></textarea>

							{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
						</div>

						<div className="flex justify-end gap-2 pr-2">
							<button
								type="button"
								onClick={handleDeleteEvent}
								className="w-[15%] px-2 py-1 bg-red-500 text-white rounded mr-20"
							>
								Excluir
							</button>
							<button
								type="button"
								onClick={closeModal}
								className="w-[30%] px-2 py-1 bg-red-500 text-white rounded"
							>
								Cancelar
							</button>
							<button
								type="button"
								onClick={handleEditEvent}
								className="w-[30%] px-2 py-1 bg-green-500 text-white rounded"
							>
								Salvar
							</button>
						</div>
					</div>
				</div>
			)}

			{showModalDelete && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white max-h-96  w-[20%] min-w-64 p-3 rounded-lg shadow-lg">
						<div className="flex justify-between text-center items-center mb-2">
							<h2>Excluir Evento</h2>
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
								onClick={handleDeleteEventConfirm}
								className="w-[40%] px-2 py-1 bg-green-500 text-white rounded"
							>
								Excluir
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
