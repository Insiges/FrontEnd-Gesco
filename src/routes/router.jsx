import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import { Dashboard } from "../pages/dashboard/dashboard";

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
		],
	},
]);

export default router;
