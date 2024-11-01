import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../consts/QueryKeys";
import { getAllActivitiesByProfessor } from "../../../services/api/activities";
import useUserInfos from "../../../stores/userStore";

export const useGetActivies = () => {
	const { userInfos } = useUserInfos();
	return useQuery({
		queryKey: [QUERY_KEYS.ACTIVIES, userInfos.dados.id],
		queryFn: () => getAllActivitiesByProfessor(userInfos.dados.id),
		enabled: !!userInfos.dados.id,
	});
};
