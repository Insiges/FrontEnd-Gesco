import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { useDeleteEvent } from "../../../pages/events/hooks/useDeleteEvent";

export function EventList({ events, handleEditEvent, currentlyClickedDate }) {
	const { mutate: deleteEvent } = useDeleteEvent();
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

	return (
		<div className="flex flex-col space-y-4">
			{events.map((event) => (
				<div
					key={event.id}
					className="border p-4 rounded-md shadow-sm flex justify-between items-center"
				>
					<div>
						<h3 className="text-lg font-semibold text-white">{event.nome}</h3>
						<p className="text-white">Horário: {event.horario}</p>
						<p className="text-white">{event.description}</p>
					</div>
					<div className="flex space-x-2">
						<button
							type="button"
							onClick={() => handleEditEvent(event)}
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
				</div>
			))}
		</div>
	);
}
