import { GraduationCap, ListChecks, Projector } from "lucide-react";
import { FaRegCalendarAlt, FaUserTie } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { IoTime } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
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
		id: "1213",
		name: "Grade de Horáros",
		url: "/classesSchedule",
		icon: <IoTime />,
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
		icon: <FiHome />,
	},
];

const sideBarOptionsAdmin = [
	{
		id: "4567",
		name: "Alunos",
		url: "/students",
		icon: <GrUserManager />,
	},
	{
		id: "7891",
		name: "Docentes",
		url: "/docents",
		icon: <FaUserTie />,
	},

	{
		id: "1112",
		name: "Turmas",
		url: "/classes",
		icon: <MdGroups2 />,
	},
	{
		id: "1011",
		name: "Eventos",
		url: "/events",
		icon: <FaRegCalendarAlt />,
	},
];
