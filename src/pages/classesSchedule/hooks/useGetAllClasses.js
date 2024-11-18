import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getClasses } from "../../../services/api/class";

export function useGetAllClasses() {
	return useQuery({
		queryKey: [QUERY_KEYS.ALL_CLASSES],
		queryFn: () => getClasses(),
	});
}
