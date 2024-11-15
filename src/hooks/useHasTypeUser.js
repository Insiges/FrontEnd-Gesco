import { useCallback } from "react";
import { TYPE_OF_SIGNIN } from "../consts/storageKeys";
import { useGetUserInfos } from "../pages/login/hooks/useGetUserInfos";
import { getStorage } from "../services/storage/storage";
import useUserInfos from "../stores/userStore";

export function useHasTypeUser() {
	const { setUserType, setDados, setDisciplinas, setDiplomas } = useUserInfos();

	const typeUser = getStorage(TYPE_OF_SIGNIN);
	const { data: userInfos, isSuccess, isLoading } = useGetUserInfos(typeUser);
	const getFromLocalTypeUser = () => {
		// biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
		if (!!typeUser) {
			setUserType(typeUser);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const fetchUserInfos = useCallback(() => {
		if (isSuccess && !isLoading) {
			console.log("", userInfos);
			setDados(userInfos?.dados);
			setDiplomas(userInfos?.diplomas);
			setDisciplinas(userInfos?.disciplinas);
		}
	}, [isSuccess, isLoading, setDados, userInfos]);

	return {
		pushTypeUser: getFromLocalTypeUser,
		fetchUserInfos,
	};
}
