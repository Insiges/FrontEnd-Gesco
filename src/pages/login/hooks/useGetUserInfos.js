import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { getUserInfos } from "../../../services/api/user";
import { useAuthStore } from "../../../stores/authStore";

export const useGetUserInfos = (userType) => {
	const { isAuthenticated } = useAuthStore();
	return useQuery({
		queryKey: [QUERY_KEYS.USER_INFO, userType],
		queryFn: () => getUserInfos(userType),
		enabled: isAuthenticated && !!userType,
	});
};
