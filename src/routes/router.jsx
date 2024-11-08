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
	LandingPage,
	Login,
	RegisterTeacher,
	Reservation,
	Room,
	StudentAttendance,
	Students,
	TeacherManagement,
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
						element: <TeacherManagement />,
					},
					{
						path: "/docents/register/:id?",
						element: <RegisterTeacher />,
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
