import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../../services/api/signIn";
import { useAuthStore } from "../../../stores/authStore";

export const useSignIn = () => {
	const { setToken } = useAuthStore();
	return useMutation({
		mutationFn: signIn,
		onSuccess: (data, variables, context) => {
			setToken(data.token);
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
