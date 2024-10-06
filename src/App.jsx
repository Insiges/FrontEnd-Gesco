import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import router from "./routes/router";

export function App() {
	return (
		<RouterProvider router={router}>
			<AuthProvider></AuthProvider>
		</RouterProvider>
	);
}
