import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getStudentsNoClass } from "../../../services/api/class";

export function useGetStudentsWithOutClass() {
	return useQuery({
		queryKey: [QUERY_KEYS.STUDENTS_WITHOUT_CLASS],
		queryFn: getStudentsNoClass,
	});
}
