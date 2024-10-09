import { FaRegCalendarAlt, FaUserTie } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { Link } from "react-router-dom";
import logoImg from "/logoGesco2.png";
import LinkSideBar from "./LinkSideBar/LinkSideBar";

export function SideBar() {
	return (
		<nav className="lg:min-w-full max-w-10 min-h-screen bg-blue-900  flex flex-col items-center gap-7 overflow-visible relative">
			<Link
				to="/"
				className="flex items-center justify-center gap-2 p-3 no-underline bg-orange-600 absolute top-0 left-0 w-[100%]"
			>
				<img src={logoImg} alt="Logo" className="w-8 " />
				<h2 className="text-2xl text-white font-bold drop-shadow-[0px_0px_3px_rgba(0,0,0,0.75)] hidden lg:block">
					Gesco
				</h2>
			</Link>
			<ul className="flex flex-col gap-3 w-full pt-20">
				<LinkSideBar url="/dashboard" icone={<FiHome />} nome="Dashboard" />
				<LinkSideBar url="/students" icone={<GrUserManager />} nome="Alunos" />
				<LinkSideBar url="/teachers" icone={<FaUserTie />} nome="Docentes" />
				<LinkSideBar
					url="/events"
					icone={<FaRegCalendarAlt />}
					nome="Eventos"
				/>
				<LinkSideBar
					url="/finance"
					icone={<GiReceiveMoney />}
					nome="Finanças"
				/>
			</ul>
		</nav>
	);
}
