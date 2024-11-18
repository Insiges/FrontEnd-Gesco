import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { editClass } from "../../../services/api/class";

export function useEditClasses() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editClass,
		onSuccess: (data, variables, context) => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.CLASSES],
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
