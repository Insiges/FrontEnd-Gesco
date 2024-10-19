import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../consts/QueryKeys";
import {
	deleteEvent,
	editEvent,
	getCounters,
	getDocents,
	getEvents,
	saveEvent,
} from "../api/school";

export const useGetDocents = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.DOCENTS],
		queryFn: getDocents,
	});
};

export const useGetCounters = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.COUNTERS],
		queryFn: getCounters,
	});
};

export const useGetEvents = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.EVENTS],
		queryFn: getEvents,
		select: (data) => {
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
			console.log(eventsPerDay);
			return eventsPerDay;
		},
	});
};

export const useSaveEvent = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: saveEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.EVENTS],
			});
		},
	});
};

export const useEditEvent = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.EVENTS],
			});
		},
	});
};

export const useDeleteEvent = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.EVENTS],
			});
		},
	});
};
