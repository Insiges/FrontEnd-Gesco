import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/queryKeys.js";
import { getAllActivitiesByProfessor } from "../../../services/api/activities";
import useUserInfos from "../../../stores/userStore";

export const useGetActivies = () => {
	const { userInfos } = useUserInfos();
	return useQuery({
		queryKey: [QUERY_KEYS.ACTIVITIES, userInfos.dados.id],
		queryFn: () => getAllActivitiesByProfessor(userInfos.dados.id),
		enabled: !!userInfos.dados.id,
	});
};
