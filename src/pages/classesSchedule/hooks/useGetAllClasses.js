import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { getClasses } from "../../../services/api/class";

export function useGetAllClasses(id) {
	return useQuery({
		queryKey: [QUERY_KEYS.ALL_CLASSES],
		queryFn: () => getClasses(id),
		enabled: !!id,
	});
}
