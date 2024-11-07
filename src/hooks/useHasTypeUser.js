import { TYPE_OF_SIGNIN } from "../consts/storageKeys";
import { useGetUserInfos } from "../pages/login/hooks/useGetUserInfos";
import { getStorage } from "../services/storage/storage";
import useUserInfos from "../stores/userStore";
import { useHasTokenInLocal } from "./useHasTokenInLocal";

export function useHasTypeUser() {
	const { setUserType, setDados, setDisciplinas, setDiplomas } = useUserInfos();
	const { hasToken } = useHasTokenInLocal();
	const typeUser = getStorage(TYPE_OF_SIGNIN);
	const { data: userInfos } = useGetUserInfos(typeUser);
	const getFromLocalTypeUser = () => {
		// biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
		if (!!typeUser) {
			setUserType(typeUser);
		}
	};

	const fetchUserInfos = () => {
		if (hasToken) {
			setDados(userInfos?.dados);
			setDiplomas(userInfos?.diplomas);
			setDisciplinas(userInfos?.disciplinas);
		}
	};

	return {
		pushTypeUser: getFromLocalTypeUser,
		fetchUserInfos,
	};
}
