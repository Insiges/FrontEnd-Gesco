import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { saveFrequency } from "../../../services/api/frequency";

export function useSaveFrequency() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: saveFrequency,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.STUDENTS_BY_CLASS],
			});
		},
		onError: () => {
			alert("Erro ao tentar marcar presença do aluno");
		},
	});
}
