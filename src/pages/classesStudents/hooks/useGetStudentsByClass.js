import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { getStudentsByClass } from "../../../services/api/class";

export function useGetStudentsByClass(id) {
	return useQuery({
		queryKey: [QUERY_KEYS.STUDENTS_BY_CLASS],
		queryFn: () => getStudentsByClass(id),
		enabled: !!id,
	});
}
