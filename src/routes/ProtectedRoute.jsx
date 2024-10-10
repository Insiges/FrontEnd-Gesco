import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();
	console.log(isAuthenticated);
	if (!isAuthenticated) {
		return <Navigate to="/" />;
	}
	return children;
};
