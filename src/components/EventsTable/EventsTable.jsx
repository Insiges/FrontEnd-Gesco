import { useEffect, useState } from "react";
import { useGetEvents } from "../../pages/events/hooks/useGetEvents";
import { getEvents } from "../../services/api/school";

const events = [
	{
		id: 1,
		name: "Workshop de React",
		date: "2024-10-28",
		time: "10:00 AM",
	},
	{
		id: 2,
		name: "Hackathon JavaScript",
		date: "2024-11-01",
		time: "09:00 AM",
	},
	{
		id: 3,
		name: "Conferência TailwindCSS",
		date: "2024-11-15",
		time: "02:00 PM",
	},
];

const EventsTable = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			const response = await getEvents();
			setEvents(response.eventos);
		};
		fetchEvents();
	}, []);

	console.log(events);

	return (
		<section className="p-6 max-w-7xl mx-auto">
			<h2 className="text-2xl font-bold mb-4 text-[#060343]">
				Eventos Cadastrados
			</h2>

			<table className="min-w-full rounded-t-3xl overflow-hidden border border-gray-300 ">
				<thead className="bg-[#C5CFE4] text-[#060343] font-semibold text-[17px]">
					<tr className="">
						<th className="p-3 border-b">Nome Evento</th>
						<th className="p-3 border-b">Data</th>
						<th className="p-3 border-b">Horário</th>
					</tr>
				</thead>
				<tbody>
					{events.map((event) => (
						<tr key={event.id} className="text-center">
							<td className="py-5 px-4 border-b">{event.nome}</td>
							<td className="py-5 px-4 border-b">{event.dia}</td>
							<td className="py-5 px-4 border-b">{event.horario}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default EventsTable;
