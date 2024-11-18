import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getCounters } from "../../../services/api/school";

export const useGetCounters = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.COUNTERS],
		queryFn: getCounters,
	});
};
