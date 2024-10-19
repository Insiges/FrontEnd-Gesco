import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { editEvent } from "../../../services/api/school";

export const useEditEvent = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editEvent,
		onSuccess: () => {
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
