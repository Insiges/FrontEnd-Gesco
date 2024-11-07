import { createBrowserRouter } from "react-router-dom";
import { Default } from "../components/layouts/default";

import Registration from "../pages/gestaoDocente/components/MembersRegistration/MembersRegistration.jsx";
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
	Reservation,
	Room,
	StudentAttendance,
	StudentByClass,
	Students,
	Timetable,
} from "../pages/index";

import StudentsRegistration from "../pages/students/components/StudentRegistration/StudentsRegistration.jsx";
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
						path: "/students/*", // Manter este asterisco.
						element: <Students />,
					},
					{
						path: "/students/register",
						element: <StudentsRegistration />,
					},
					{
						path: "/students/registration/edit/:id",
						element: <StudentsRegistration />,
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
						path: "/classes/:id/students",
						element: <ClassesStudents />,
					},
					{
						path: "/classes/student/:id", // usar o classes/:id/students/:id
						element: <StudentByClass />,
					},
					{
						path: "/classes/:id/students/add",
						element: <ClassesStudentsAdd />,
					},
					{
						path: "/sala",
						element: <Room />,
						children: [
							{
								path: ":sala",
								element: <Reservation />,
							},
						],
					},
					{ path: "/students-attendance", element: <StudentAttendance /> },
				],
			},
		],
	},
]);

export default router;
