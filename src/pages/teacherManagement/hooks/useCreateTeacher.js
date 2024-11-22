import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { saveTeacher } from "../../../services/api/teachers";

export function useCreateTeacher() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: saveTeacher,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.TEACHERS],
			});
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.TEACHER_BY_ID],
			});
		},
	});
}
