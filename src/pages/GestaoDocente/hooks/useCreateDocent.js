import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { saveTeacher } from "../../../services/api/teachers";

export function useCreateDocent() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: saveTeacher,
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
