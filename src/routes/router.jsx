import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";
import Registration from "../pages/GestaoDocente/components/MembersRegistration";
import {
	Classes,
	ClassesSchedule,
	Dashboard,
	Events,
	GestaoDocente,
	LandingPage,
	Login,
	Students,
	Timetable,
} from "../pages/index";
import Room from "../pages/pages-teacher/components/roomBook/room";
import RoomBook from "../pages/pages-teacher/components/roomBook/roomBook";
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
					{
						path: "/docents",
						element: <GestaoDocente />,
					},
					{
						path: "/docents/register",
						element: <Registration />,
					},
					{
						path: "docents/edit/:id",
						element: <Registration />,
					},
					{
						path: "/Classes",
						element: <Classes />,
					},
					{
						path: "/ClassSchedule/:id",
						element: <Timetable />,
					},
					{
						path: "/ClassesSchedule",
						element: <ClassesSchedule />,
					},
					{
						path: "/sala",
						element: <RoomBook />,
						children: [
							{
								path: ":sala",
								element: <Room />,
							},
						],
					},
				],
			},
		],
	},
]);

export default router;
