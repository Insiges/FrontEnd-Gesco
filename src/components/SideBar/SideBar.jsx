import {
	BookOpenCheck,
	CalendarDays,
	GraduationCap,
	House,
	ListChecks,
	Projector,
	Ruler,
	UserRound,
	Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import logoImg from "/logoGesco.png";
import useUserInfos from "../../stores/userStore";
import LinkSideBar from "./LinkSideBar/LinkSideBar";

export function SideBar() {
	const { userType } = useUserInfos();
	const sideBarOptions =
		userType === "professor"
			? [...commonSideBarOptions, ...sideBarOptionsTeacher]
			: [...commonSideBarOptions, ...sideBarOptionsAdmin];
	return (
		<nav className="lg:min-w-full max-w-10 min-h-screen bg-firstBlue  flex flex-col items-center gap-7 overflow-visible relative">
			<Link
				to="/"
				className="flex items-center justify-center gap-2 p-3 no-underline absolute top-0 left-0 w-[100%] border-white"
			>
				<img src={logoImg} alt="Logo" className="w-12" />
				<h2 className="text-2xl text-lightGray font-bold hidden lg:block">
					Gesco
				</h2>
			</Link>
			<ul className="flex flex-col gap-3 w-full pt-20">
				{sideBarOptions.map((sideBarOption) => {
					return (
						<LinkSideBar
							key={sideBarOption.id}
							nome={sideBarOption.name}
							url={sideBarOption.url}
							icone={sideBarOption.icon}
						/>
					);
				})}
			</ul>
		</nav>
	);
}

const sideBarOptionsTeacher = [
	{
		id: "1415",
		name: "Presença",
		url: "/students-attendance",
		icon: <ListChecks />,
	},
	{
		id: "1314",
		name: "Atividades",
		url: "/activities",
		icon: <GraduationCap />,
	},
	{
		id: "1866",
		name: "Reserva de Salas",
		url: "/sala",
		icon: <Projector />,
	},
];

const commonSideBarOptions = [
	{
		id: "1234",
		name: "Dashboard",
		url: "/dashboard",
		icon: <House />,
	},
];

const sideBarOptionsAdmin = [
	{
		id: "4567",
		name: "Alunos",
		url: "/students",
		icon: <UserRound />,
	},
	{
		id: "7891",
		name: "Docentes",
		url: "/docents",
		icon: <Ruler />,
	},

	{
		id: "1112",
		name: "Turmas",
		url: "/classes",
		icon: <Users />,
	},
	{
		id: "1011",
		name: "Eventos",
		url: "/events",
		icon: <CalendarDays />,
	},
	{
		id: "1213",
		name: "Grade de Horáros",
		url: "/classesSchedule",
		icon: <BookOpenCheck />,
	},
];
