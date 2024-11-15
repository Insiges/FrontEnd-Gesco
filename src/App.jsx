import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { useHasTypeUser } from "./hooks/useHasTypeUser";
import router from "./routes/router";
import { useAuthStore } from "./stores/authStore";

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppWithInitialization />
		</QueryClientProvider>
	);
}

function AppWithInitialization() {
	const { initializeAuth } = useAuthStore();
	const { pushTypeUser, fetchUserInfos } = useHasTypeUser();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		initializeAuth();
		pushTypeUser();
		fetchUserInfos();
	}, [initializeAuth, fetchUserInfos]);

	return <RouterProvider router={router} />;
}
