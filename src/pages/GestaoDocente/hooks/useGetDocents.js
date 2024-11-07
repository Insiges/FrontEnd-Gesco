import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { getDocents } from "../../../services/api/school";

export function useGetDocents() {
	return useQuery({
		queryKey: [QUERY_KEYS.DOCENTS],
		queryFn: getDocents,
	});
}
