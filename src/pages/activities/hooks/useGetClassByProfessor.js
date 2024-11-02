import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { getClassByProfessor } from "../../../services/api/teachers";

export const useGetClassByProfessor = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.CLASS_BY_PROFESSOR],
		queryFn: getClassByProfessor,
	});
};
