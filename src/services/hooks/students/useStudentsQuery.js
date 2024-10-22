import { useQuery } from "@tanstack/react-query";

import { getStudents } from "../../api/students";

import { queryStudentsKey } from "./queryKeyFactory";

export const useStudentsQuery = () =>
	useQuery({
		queryKey: queryStudentsKey.all,
		queryFn: getStudents,
		onSuccess: (data) => {
			console.log("Fetched students successfully", data);
		},
		onError: (error) => {
			console.error("Error fetching students", error);
		},
	});
