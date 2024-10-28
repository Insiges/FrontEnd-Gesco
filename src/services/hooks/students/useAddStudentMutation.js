import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudent } from "../../api/students";
import { queryStudentsKey } from "./queryKeyFactory";

export const useAddStudentMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addStudent,
		onSuccess: (newData) => {
			// Atualiza os dados em cache de estudantes
			queryClient.setQueryData(queryStudentsKey.all, (oldData) => ({
				...oldData,
				content: [...(oldData?.content || []), newData], // Verifica se content existe e é um array
			}));
		},
		onError: (error) => {
			console.error("Error adding students", error);
		},
	});
};
