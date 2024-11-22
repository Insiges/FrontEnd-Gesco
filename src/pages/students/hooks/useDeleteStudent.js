import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { deleteStudent } from "../../../services/api/students";

export function useDeleteStudent() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteStudent,
		onSuccess: () => {
			queryClient.invalidateQueries(QUERY_KEYS.STUDENTS);
			queryClient.invalidateQueries(QUERY_KEYS.STUDENTS_BY_ID);
		},
		onError: (error) => {
			alert("Erro ao excluir esse aluno");
			console.log({ error });
		},
	});
}
