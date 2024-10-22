import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteStudent } from "../../api/students";
import { queryStudentsKey } from "./queryKeyFactory";

export const useDeleteStudentMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteStudent,
		onSuccess: (data) => {
			// Nada está sendo retornado, entao o meljor a se fazer é invalidar a query em cache
			// causando uma nova chamada na API automaticamente.
			queryClient.invalidateQueries(queryStudentsKey.all);
		},
		onError: (error) => {
			console.error("Error deleting student", error);
		},
	});
};
