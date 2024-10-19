import dayjs from "dayjs";
import React, { useState, useEffect, useCallback } from "react";
import {
	deleteEvent,
	editEvent,
	getEvents,
	saveEvent,
} from "../../services/api/school";
import { Days } from "./days";
import { EditEventDialog } from "./edit-event-dialog";

export default function Calendar({ title }) {
	const today = dayjs();
	const [currentDate, setCurrentDate] = useState(today);
	const [selectedDay, setSelectedDay] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
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

	const handleDeleteEventConfirm = () => {
		deleteEvent(formData.id);

		setTimeout(async () => {
			await fetchEvents();
		}, 2000);

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
			<Days
				key={day}
				day={day}
				currentDate={currentDate}
				today={today}
				isToday={isToday}
				hasEvent={hasEvent}
				onDayClick={handleDayClick}
			/>
		);
	});

	return (
		<div className="w-full h-full bg-white shadow-lg rounded-lg p-6">
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

			<div className="grid grid-cols-7 gap-2 text-center text-gray-600 font-medium text-xs sm:text-base">
				{daysOfWeek.map((day) => (
					<div key={day} className="py-2">
						{day}
					</div>
				))}
			</div>

			<div className="grid grid-cols-9 gap-2 mt-4">
				{emptyDays}
				{days}
			</div>

			<EditEventDialog
				isOpen={showModal}
				closeDialog={closeModal}
				selectedDay={selectedDay}
				formData={formData}
				handleInputChange={handleInputChange}
				handleSaveEvent={showModalEdit ? handleEditEvent : handleSaveEvent}
				handleDeleteEvent={handleDeleteEventConfirm}
				isEditing={showModalEdit}
				error={error}
			/>
		</div>
	);
}
