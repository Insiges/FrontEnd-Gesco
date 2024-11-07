import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys";
import { getGridByClass } from "../../../services/api/timeTable";

export function useGetGrid() {
	return useQuery({
		queryKey: [QUERY_KEYS.GRID_CLASSES],
		queryFn: getGridByClass,
	});
}
