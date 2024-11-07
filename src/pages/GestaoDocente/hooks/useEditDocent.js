import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { editTeacher } from "../../../services/api/teachers";

export function useEditDocent() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editTeacher,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.DOCENTS],
			});
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.DOCENTS_BY_ID],
			});
		},
	});
}
