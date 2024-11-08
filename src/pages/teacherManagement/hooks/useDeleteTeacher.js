import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { deleteTeacher } from "../../../services/api/teachers";

export function useDeleteTeacher() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteTeacher,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.TEACHERS],
			});
		},
	});
}
