import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import { Dashboard } from "../pages/dashboard/dashboard";
import { LandingPage } from "../pages/landingPage/landingPage";

const router = createBrowserRouter([
	{
		path: "/",
	},
	{
		element: <Default />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/landing",
				element: <LandingPage />,
			},
		],
	},
]);

export default router;
