import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getEvents, getEventsByDate } from "../../../services/api/school";

export const useGetEvents = (shouldNotSelect = false) => {
	return useQuery({
		queryKey: [QUERY_KEYS.EVENTS],
		queryFn: getEvents,
		select: !shouldNotSelect
			? (data) => {
					const eventsPerDay = data.eventos.reduce((acc, evento) => {
						if (!acc[evento.dia]) {
							acc[evento.dia] = {
								id: evento.id,
								name: evento.nome,
								description: evento.descricao,
								time: evento.horario.slice(0, 5),
							};
						}
						return acc;
					}, {});

					return eventsPerDay;
				}
			: undefined,
	});
};

export const useGetEventsByDate = (date) => {
	return useQuery({
		queryKey: [QUERY_KEYS.EVENTS_BY_DATE, date],
		queryFn: () => getEventsByDate(date),
		enabled: !!date,
	});
};
