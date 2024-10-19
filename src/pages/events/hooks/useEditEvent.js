import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { editEvent } from "../../../services/api/school";

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
