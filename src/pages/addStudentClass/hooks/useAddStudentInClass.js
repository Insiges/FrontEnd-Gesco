import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { saveStudentInOneClass } from "../../../services/api/class";

export function useAddStudentInClass() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: saveStudentInOneClass,
		onSuccess: (data, variables, context) => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.STUDENTS_WITHOUT_CLASS],
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
