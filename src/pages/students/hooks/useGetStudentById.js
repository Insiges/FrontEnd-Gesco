import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getStudent } from "../../../services/api/students";

export function useGetStudentById(id) {
	return useQuery({
		queryKey: [QUERY_KEYS.STUDENTS_BY_ID, id],
		queryFn: () => getStudent(id),
		enabled: !!id,
	});
}
