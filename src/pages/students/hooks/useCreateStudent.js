import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudent } from "../../../services/api/students";

export function useCreateStudent() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: addStudent,
		onSuccess: () => {
			queryClient.invalidateQueries(QUERY_KEYS.STUDENTS);
			queryClient.invalidateQueries(QUERY_KEYS.STUDENTS_BY_ID);
		},
		onError: (error) => {
			alert("Erro ao criar o aluno");
			console.log({ error });
		},
	});
}
