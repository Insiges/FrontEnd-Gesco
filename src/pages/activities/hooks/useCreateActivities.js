import { useMutation, useQueryClient } from "@tanstack/react-query";

import QUERY_KEYS from "../../../consts/queryKeys";
import { createActivity } from "../../../services/api/activities";

export const useCreateActivities = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createActivity,
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
};
