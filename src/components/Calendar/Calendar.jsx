import dayjs from "dayjs";
import React, { useState } from "react";
import { deleteEvent, editEvent, saveEvent } from "../../services/api/school";
import { useGetEvents } from "../../services/hooks/useSchoolAPI";
import { CalendarBody } from "./calendar-body";
import { CalendarHeader } from "./calendar-header";
import { EditEventDialog } from "./edit-event-dialog";

export default function Calendar({ title }) {
	const { data: events, isLoading, error: eventsError } = useGetEvents();
	const today = dayjs();
	const [currentDate, setCurrentDate] = useState(today);
	const [selectedDay, setSelectedDay] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);

	const [formData, setFormData] = useState({
		id: 0,
		name: "",
		time: "",
		description: "",
	});
	const [error, setError] = useState("");

	const handleDayClick = (day) => {
		setSelectedDay(day);
		const dia = String(day).padStart(2, "0");
		const mes = String(currentDate.$M + 1).padStart(2, "0");
		if (events?.[`${currentDate.$y}-${mes}-${dia}`]) {
			setShowModalEdit(true);
			setFormData(events?.[`${currentDate.$y}-${mes}-${dia}`]);
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

	if (isLoading) return <div>Loading...</div>;
	if (eventsError) return <div>Error loading events</div>;

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
