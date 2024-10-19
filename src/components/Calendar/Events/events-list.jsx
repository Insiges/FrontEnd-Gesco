import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDeleteEvent } from "../../../pages/events/hooks/useDeleteEvent";
import { useEditEvent } from "../../../pages/events/hooks/useEditEvent";
import { eventsSchema } from "./events-schema";

export function EventList({ events, currentlyClickedDate }) {
	const { mutate: deleteEvent } = useDeleteEvent();
	const { mutate: editEvent } = useEditEvent();
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		resolver: zodResolver(eventsSchema),
		mode: "onChange",
	});
	const [editingEventId, setEditingEventId] = useState(null); // Controla o evento que está sendo editado

	const handleDelete = (eventId) => {
		deleteEvent(
			{ eventId, currentlyClickedDate },
			{
				onSuccess: () => {
					closeDialog();
				},
			},
		);
	};

	// Ativa o modo de edição e preenche os campos com os dados do evento selecionado
	const handleEditClick = (event) => {
		setEditingEventId(event.id); // Define o evento que está sendo editado
		const formattedTime = event.horario.slice(0, 5);
		console.log(event);

		// Preenche os campos do formulário com os valores atuais do evento
		setValue("name", event.nome);
		setValue("time", formattedTime);
		setValue("description", event.descricao);
	};

	// Confirma a edição e chama a função de atualização
	const handleConfirmEdit = (data) => {
		editEvent(
			{
				name: data.name,
				time: data.time,
				description: data.description,
				date: currentlyClickedDate,
			},
			{
				onSuccess: () => {
					closeDialog();
				},
				onError: () => {
					console.log("errour");
				},
			},
		);
		setEditingEventId(null);
		reset();
	};

	// Cancela a edição e sai do modo de edição
	const handleCancelEdit = () => {
		setEditingEventId(null);
		reset();
	};

	const generateTimeOptions = () => {
		const times = [];
		for (let i = 0; i < 24; i++) {
			const hour = String(i).padStart(2, "0");
			times.push(`${hour}:00`);
			times.push(`${hour}:30`);
		}
		return times;
	};

	const timeOptions = generateTimeOptions();

	return (
		<div className="flex flex-col space-y-4">
			{events.map((event) => (
				<div
					key={event.id}
					className="border p-4 rounded-md shadow-sm flex justify-between items-center"
				>
					{/* Se o evento estiver em edição, exibe os inputs */}
					{editingEventId === event.id ? (
						<form
							onSubmit={handleSubmit(handleConfirmEdit)}
							className="flex flex-col space-y-2"
						>
							<input
								className="outline-none p-1 shadow-md rounded-md"
								type="text"
								placeholder="Nome"
								{...register("name")}
							/>
							<select
								className="outline-none p-1 shadow-md rounded-md"
								{...register("time")}
							>
								<option value="">Selecione o horário*</option>
								{timeOptions.map((time) => (
									<option key={time} value={time}>
										{time}
									</option>
								))}
							</select>
							<textarea
								className="outline-none p-1 shadow-md rounded-md"
								cols="30"
								rows="2"
								placeholder="Descrição"
								{...register("description")}
							></textarea>

							<div className="flex space-x-2">
								<button
									type="submit"
									className="p-2 bg-green-500 text-white rounded-full disabled:cursor-not-allowed disabled:bg-green-300"
									disabled={!isDirty}
								>
									<Check />
								</button>
								<button
									type="button"
									onClick={handleCancelEdit}
									className="p-2 bg-red-500 text-white rounded-full"
								>
									<X />
								</button>
							</div>
						</form>
					) : (
						<>
							<div>
								<h3 className="text-lg font-semibold text-white">
									{event.nome}
								</h3>
								<p className="text-white">Horário: {event.horario}</p>
								<p className="text-white">{event.description}</p>
							</div>
							<div className="flex space-x-2">
								<button
									type="button"
									onClick={() => handleEditClick(event)}
									className="p-2 bg-blue-500 text-white rounded-full"
								>
									<Pencil />
								</button>
								<button
									type="button"
									onClick={() => handleDelete(event.id)}
									className="p-2 bg-red-500 text-white rounded-full"
								>
									<Trash2 />
								</button>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
}
