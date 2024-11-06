import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../consts/QueryKeys";
import { getCounters, getDocents } from "../api/school";

export const useGetDocents = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.DOCENTS],
		queryFn: getDocents,
	});
};
