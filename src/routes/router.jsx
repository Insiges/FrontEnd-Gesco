import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import { Dashboard } from "../pages/dashboard/dashboard";
import LoginAdmin from "../pages/login/LoginAdmin";
import LoginTeacher from "../pages/login/LoginTeacher";
import LoginType from "../pages/login/LoginType";
import Students from "../pages/students/students";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginType />,
	},
	{
		path: "/login/teacher",
		element: <LoginTeacher />,
	},
	{
		path: "/login/admin",
		element: <LoginAdmin />,
	},

	{
		element: <Default />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/students",
				element: <Students />,
			},
		],
	},
]);

export default router;
