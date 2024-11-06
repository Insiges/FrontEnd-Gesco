import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useHasTypeUser } from "./hooks/useHasTypeUser";
import router from "./routes/router";
import { useAuthStore } from "./stores/authStore";

const queryClient = new QueryClient();

export function App() {
	const { initializeAuth } = useAuthStore();
	const { pushTypeUser } = useHasTypeUser();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		initializeAuth();
		pushTypeUser();
	}, [initializeAuth]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
