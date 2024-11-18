import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { deleteEvent } from "../../../services/api/school";

export const useDeleteEvent = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteEvent,
		onSuccess: (data, variables, context) => {
			const { currentlyClickedDate } = variables;
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.EVENTS],
			});

			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.EVENTS_BY_DATE, currentlyClickedDate],
			});

			if (context?.onSuccess) {
				context.onSuccess();
			}
		},
	});
};
