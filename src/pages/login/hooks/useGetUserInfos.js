import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { getUserInfos } from "../../../services/api/user";

export const useGetUserInfos = (userType) => {
	return useQuery({
		queryKey: [QUERY_KEYS.USER_INFO, userType],
		queryFn: () => getUserInfos(userType),
		enabled: !!userType && userType === "professor",
		refetchOnWindowFocus: false,
	});
};
