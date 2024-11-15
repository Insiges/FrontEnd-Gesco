import { ACCESS_TOKEN } from "../consts/storageKeys";
import { getStorage } from "../services/storage/storage";

export function useHasTokenInLocal() {
	const token = getStorage(ACCESS_TOKEN);

	return { hasToken: !!token };
}
