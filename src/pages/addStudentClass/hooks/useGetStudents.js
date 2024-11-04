import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { getStudentsNoClass } from "../../../services/api/class";

export function useGetStudents() {
	return useQuery({
		queryKey: [QUERY_KEYS.STUDENTS],
		queryFn: getStudentsNoClass,
	});
}
