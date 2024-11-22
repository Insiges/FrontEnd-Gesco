import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getOneClass } from "../../../services/api/class";

export function useGetOneClass(id) {
	return useQuery({
		queryKey: [QUERY_KEYS.ONE_CLASS_GRID],
		queryFn: () => getOneClass(id),
		enabled: !!id,
	});
}
