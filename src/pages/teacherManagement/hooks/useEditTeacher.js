import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { editTeacher } from "../../../services/api/teachers";

export function useEditTeacher() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editTeacher,
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
