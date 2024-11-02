import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export const ProtectedRoute = () => {
	const { isAuthenticated, isInitialized } = useAuthStore();

	if (!isInitialized) return null;

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
