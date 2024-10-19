import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { saveEvent } from "../../../services/api/school";

export const useCreateEvent = () => {
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
