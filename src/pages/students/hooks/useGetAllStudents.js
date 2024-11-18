import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getStudents } from "../../../services/api/students";

export const useGetAllStudents = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.STUDENTS],
		queryFn: getStudents,
		onSuccess: (data) => {
			console.log("Fetched students successfully", data);
		},
		onError: (error) => {
			console.error("Error fetching students", error);
		},
	});
};
