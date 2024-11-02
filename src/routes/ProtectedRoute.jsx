import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuthStore();
	console.log({ isAuthenticated });

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};
