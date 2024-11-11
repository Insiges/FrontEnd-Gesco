import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { saveClass } from "../../../services/api/class";

export function useCreateClass() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: saveClass,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.CLASSES],
			});
		},
	});
}
