import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { getUserInfos } from "../../../services/api/user";
import useUserInfos from "../../../stores/userStore";

export const useGetUserInfos = (userType) => {
	return useQuery({
		queryKey: [QUERY_KEYS.USER_INFO, userType],
		queryFn: () => getUserInfos(userType),
		enabled: !!userType,
	});
};
