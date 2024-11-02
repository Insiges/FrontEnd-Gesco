import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useAuthStore } from "./stores/authStore";

const queryClient = new QueryClient();

export function App() {
	const { initializeAuth } = useAuthStore();

	useEffect(() => {
		initializeAuth();
	}, [initializeAuth]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
