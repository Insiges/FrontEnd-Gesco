import { useGetEvents } from "../../pages/events/hooks/useGetEvents";

const EventsTable = () => {
	// const [events, setEvents] = useState([]);

	// useEffect(() => {
	// 	const fetchEvents = async () => {
	// 		const response = await getEvents();
	// 		setEvents(response.eventos);
	// 	};
	// 	fetchEvents();
	// }, []);

	//TODO
	// - Tirar o select quando tiver nessa página

	const { data: events, isLoading } = useGetEvents(true);

	console.log(events);

	return (
		<section className="p-6 max-w-7xl mx-auto">
			<h2 className="text-3xl font-bold mb-4 text-firstBlue">
				Eventos Cadastrados
			</h2>

			<table className="min-w-full rounded-t-3xl overflow-hidden border border-gray-300 shadow-2xl">
				<thead className="bg-firstBlue text-white">
					<tr className="">
						<th className="p-3 border-b">Nome Evento</th>
						<th className="p-3 border-b">Data</th>
						<th className="p-3 border-b">Horário</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading &&
						events?.eventos.map((event) => (
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
