import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import {
	Dashboard,
	Events,
	GestaoDocente,
	LandingPage,
	Students,
	Timetable,
} from "../pages/index";
import LoginAdmin from "../pages/login/LoginAdmin";
import LoginTeacher from "../pages/login/LoginTeacher";
import LoginType from "../pages/login/LoginType";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
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
		element: <ProtectedRoute />,
		children: [
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
					{
						path: "/events",
						element: <Events />,
					},
					{
						path: "/docents",
						element: <GestaoDocente />,
					},
				],
			},
			{
				path: "/ClassSchedule",
				element: <Timetable />,
			},
		],
	},
]);

export default router;
