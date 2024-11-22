import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { useHasTokenInLocal } from "../../../hooks/useHasTokenInLocal";
import { getUserInfos } from "../../../services/api/user";

export const useGetUserInfos = (userType) => {
	const { hasToken } = useHasTokenInLocal();
	return useQuery({
		queryKey: [QUERY_KEYS.USER_INFO, userType],
		queryFn: () => getUserInfos(userType),
		enabled: !!hasToken && !!userType && userType === "professor",
		refetchOnWindowFocus: false,
	});
};
