import { TYPE_OF_SIGNIN } from "../consts/storageKeys";
import { getStorage } from "../services/storage/storage";
import useUserInfos from "../stores/userStore";

export function useHasTypeUser() {
	const { setUserType } = useUserInfos();
	const getFromLocalTypeUser = () => {
		const typeUser = getStorage(TYPE_OF_SIGNIN);
		// biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
		if (!!typeUser) {
			setUserType(typeUser);
		}
	};

	return {
		pushTypeUser: getFromLocalTypeUser,
	};
}
