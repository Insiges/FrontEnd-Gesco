import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getClasses } from "../../../services/api/class";

export function useGetClasses() {
	return useQuery({
		queryKey: [QUERY_KEYS.CLASSES],
		queryFn: getClasses,
	});
}
