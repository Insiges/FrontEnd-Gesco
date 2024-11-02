import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";

import {
	Activities,
	Classes,
	ClassesSchedule,
	ClassesStudents,
	ClassesStudentsAdd,
	Dashboard,
	Events,
	GestaoDocente,
	LandingPage,
	Login,
	Students,
	Timetable,
} from "../pages/index";
import Registration from "../pages/students/components/StudentRegistration";
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
						path: "/Classes/",
						element: <Classes />,
					},
					{
						path: "/classSchedule/:id",
						element: <Timetable />,
					},
					{
						path: "/classesSchedule",
						element: <ClassesSchedule />,
					},
          {
						path: "/activities",
						element: <Activities />,
					},
					{
						path: "/Classes/:id/students",
						element: <ClassesStudents />,
					},
					{
						path: "/Classes/:id/students/add",
						element: <ClassesStudentsAdd />,
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
]);

export default router;
