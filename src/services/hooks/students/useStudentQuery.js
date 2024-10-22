import { useQuery } from "@tanstack/react-query";

import { getStudent } from "../../api/students";

import { queryStudentsKey } from "./queryKeyFactory";

export const useStudentQuery = (studentId) => {
	return useQuery({
		queryKey: queryStudentsKey.byId(studentId),
		queryFn: () => getStudent(studentId),
		// 'Enabled' permite a opção de não chamar a API de forma nenhuma caso valor seja falso, ou seja, evitamos de bombardear a API caso não tenhamos uma ID valida. Contudo, a condição ternaria é apenas para o caso do infeliz do estudante com ID zero ser interpretado pelo JS como falso e não poder ter seus dados buscados para edição.
		enabled: studentId === 0 ? true : !!studentId,
		onSuccess: (data) => {
			console.log("Fetched student successfully", data);
		},
		onError: (error) => {
			console.error("Error fetching student", error);
		},
	});
};
