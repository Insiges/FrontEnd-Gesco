import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { deleteClass } from "../../../services/api/class";

export function useDeleteClasses() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteClass,
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
