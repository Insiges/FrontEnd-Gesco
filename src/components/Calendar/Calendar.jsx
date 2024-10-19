import dayjs from "dayjs";
import React, { useState } from "react";
import { useGetEvents } from "../../pages/events/hooks/useGetEvents";
import { EventDialog } from "./Events/event-dialog";
import { CalendarBody } from "./calendar-body";
import { CalendarHeader } from "./calendar-header";

export default function Calendar({ title }) {
	const { data: events, isLoading, error: eventsError } = useGetEvents();
	const today = dayjs();
	const [currentDate, setCurrentDate] = useState(today);
	const [selectedDay, setSelectedDay] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [clickedDate, setClickedDate] = useState("");
	const [showModalEdit, setShowModalEdit] = useState(false);

	const [error, setError] = useState("");

	const handleDayClick = (day) => {
		setSelectedDay(day);
		const dia = String(day).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");
		const fullDate = dayjs(`${currentDate.year()}-${mes}-${dia}`).format(
			"YYYY-MM-DD",
		);
		setClickedDate(fullDate);
		if (events?.[`${currentDate.$y}-${mes}-${dia}`]) {
			setShowModalEdit(true);
			// setFormData(events?.[`${currentDate.$y}-${mes}-${dia}`]);
		} else {
			setShowModal(true);
		}
		setError("");
	};

	const closeModal = () => {
		setShowModal(false);
		setError("");
	};

	if (isLoading) return <div>Loading...</div>;
	if (eventsError) return <div>Error loading events</div>;

	// TODO
	// - Mudar a aparencia do component que cria os eventos
	// - Passar as infos do evento para um zustand
	// - Criar um select para horário

	return (
		<div className="w-full h-full bg-white shadow-lg rounded-lg p-6">
			<CalendarHeader
				title={title}
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
			/>

			<CalendarBody
				currentDate={currentDate}
				today={today}
				events={events}
				onDayClick={handleDayClick}
			/>

			<EventDialog
				isOpen={showModal}
				closeDialog={closeModal}
				selectedDay={selectedDay}
				error={error}
				currentlyClickedDate={clickedDate}
			/>
		</div>
	);
}
