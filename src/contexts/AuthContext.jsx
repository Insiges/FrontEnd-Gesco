import { createContext } from "react";
import { useContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const auth = useAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	const context = useContext(AuthProvider);
	if (context === undefined) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
};
