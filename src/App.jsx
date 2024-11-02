import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import router from "./routes/router";
import { initializeAuthStore } from "./stores/authStore";

export function App() {
	useEffect(() => {
		initializeAuthStore();
	}, []);

	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	);
}
