import { useMutation } from "@tanstack/react-query";
import { ACCESS_TOKEN } from "../../../consts/storageKeys";
import { signIn } from "../../../services/api/signIn";
import { setStorage } from "../../../services/storage/storage";
import { useAuthStore } from "../../../stores/authStore";

export const useSignIn = () => {
	const { setToken } = useAuthStore();
	return useMutation({
		mutationFn: signIn,
		onSuccess: (data, variables, context) => {
			setToken(data.token);
			setStorage(ACCESS_TOKEN, data.token);

			if (context?.onSuccess) {
				context.onSuccess();
			}
		},
		onError: (error, variables, context) => {
			if (context?.onError) {
				context.onError();
			}
		},
	});
};
