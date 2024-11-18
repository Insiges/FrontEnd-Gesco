import dayjs from "dayjs";
import { useGetEvents } from "../../pages/events/hooks/useGetEvents";

const EventsTable = () => {
	const { data: events, isLoading } = useGetEvents(true);

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
					{!isLoading &&
						events?.eventos.map((event) => (
							<tr key={event.id} className="text-center">
								<td className="py-5 px-4 border-b">{event.nome}</td>
								<td className="py-5 px-4 border-b">
									{dayjs(event.dia).format("DD/MM/YYYY")}
								</td>
								<td className="py-5 px-4 border-b">{event.horario}</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default EventsTable;
