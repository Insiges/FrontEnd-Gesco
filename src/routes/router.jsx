import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import {
	Dashboard,
	Events,
	LandingPage,
	Login,
	Students,
	Timetable,
} from "../pages/index";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
		element: <Login />,
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
