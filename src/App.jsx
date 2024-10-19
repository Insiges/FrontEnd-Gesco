import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext";
import router from "./routes/router";

export function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	);
}
