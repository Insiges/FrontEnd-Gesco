import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import { Dashboard } from "../pages/dashboard/dashboard";
import Students from "../pages/students/students";
import LoginPage from "../pages/login/LoginPage";
import LoginType from "../pages/login/LoginType";
import EventCalendar from "../pages/eventCalendar/eventCalendar";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginType />,
	},
	{
		path: "/login",
		element: <LoginPage />,
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
			{
				path: "/eventCalendar",
				element: <EventCalendar />,
			},
		],
	},
]);

export default router;
