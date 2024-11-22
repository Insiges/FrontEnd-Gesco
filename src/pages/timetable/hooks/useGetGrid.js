import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getGridByClass } from "../../../services/api/timeTable";

export function useGetGrid(id) {
	return useQuery({
		queryKey: [QUERY_KEYS.GRID_CLASSES, id],
		queryFn: () => getGridByClass(id), // Função anônima para passar o ID dinamicamente
		enabled: !!id,
	});
}
