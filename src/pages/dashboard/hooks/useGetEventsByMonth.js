import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getEventsByMonth } from "../../../services/api/school";

export function useGetEventsByMonth(month) {
	return useQuery({
		queryKey: [QUERY_KEYS.EVENTS_BY_MONTH],
		queryFn: () => getEventsByMonth(month),
		select: (data) => {
			const eventsPerDay = data.reduce((acc, evento) => {
				// Extrai o dia como um número
				const dayNumber = Number.parseInt(evento.dia.split("-")[2], 10); // Pega o dia e converte para número

				// Cria o objeto com o formato desejado
				const eventObject = {
					day: dayNumber,
					eventName: evento.nome,
				};

				// Adiciona o objeto ao array acumulador
				acc.push(eventObject);

				return acc;
			}, []); // Inicializa o acumulador como um array vazio
			return eventsPerDay;
		},
		enabled: !!month,
	});
}
