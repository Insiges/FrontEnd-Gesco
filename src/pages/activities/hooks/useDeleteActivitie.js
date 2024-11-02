import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { deleteActivity } from "../../../services/api/activities";

export function useDeleteActivie() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteActivity,
		onSuccess: (data, variables, context) => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.ACTIVITIES],
			});

			if (context?.onSuccess) {
				context.onSuccess();
			}
		},
		onError: (error, variables, context) => {
			if (context?.onError) {
				context.onError();
			}
		},
	});
}
