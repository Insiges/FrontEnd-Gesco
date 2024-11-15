import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { editStudent } from "../../../services/api/students";

export function useEditStudent() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: editStudent,
		onSuccess: (data, vavriables, context) => {
			queryClient.invalidateQueries(QUERY_KEYS.STUDENTS);
			queryClient.invalidateQueries(QUERY_KEYS.STUDENTS_BY_ID);
		},
		onError: (error) => {
			alert("Erro ao editar esse aluno");
			console.log({ error });
		},
	});
}
