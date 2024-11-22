import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getTeachers } from "../../../services/api/school";

export function useGetTeachers() {
	return useQuery({
		queryKey: [QUERY_KEYS.TEACHERS],
		queryFn: getTeachers,
	});
}
