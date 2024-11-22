import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { deleteStudentClass } from "../../../services/api/class";

export function useDeleteStudentOnClass() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteStudentClass,
		onSuccess: (data, variables, context) => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.STUDENTS_BY_CLASS],
			});

			if (context?.onSuccess) {
				context.onSuccess();
			}
		},
		onError: () => {
			if (context?.onError) {
				context.onError();
			}
		},
	});
}
