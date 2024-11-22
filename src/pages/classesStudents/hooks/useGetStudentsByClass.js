import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getStudentsByClass } from "../../../services/api/class";

export function useGetStudentsByClass(id) {
	return useQuery({
		queryKey: [QUERY_KEYS.STUDENTS_BY_CLASS, id],
		queryFn: () => getStudentsByClass(id),
		enabled: !!id,
	});
}
