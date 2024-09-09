import { useState } from "react";

export function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex  max-w-fit">
			{/* Botão de menu para mobile */}
			<button
				onClick={toggleSidebar}
				className="md:hidden p-4 text-white bg-blue-900"
				type="button"
			></button>

			{/* Sidebar */}
			<div
				className={`${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0 fixed inset-y-0 left-0 w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out`}
			>
				<div className="flex items-center justify-center h-20 bg-orange-600">
					<span className="text-2xl font-semibold">College</span>
				</div>
				<nav className="flex flex-col mt-10 space-y-6">
					<a
						href="#dashboard"
						className="flex items-center px-6 py-3 text-lg hover:bg-blue-800"
					>
						Dashboard
					</a>
					<a
						href="#alunos"
						className="flex items-center px-6 py-3 text-lg hover:bg-blue-800"
					>
						Alunos
					</a>
					<a
						href="#docentes"
						className="flex items-center px-6 py-3 text-lg hover:bg-blue-800"
					>
						Docentes
					</a>
					<a
						href="#eventos"
						className="flex items-center px-6 py-3 text-lg hover:bg-blue-800"
					>
						Eventos
					</a>
					<a
						href="#financas"
						className="flex items-center px-6 py-3 text-lg hover:bg-blue-800"
					>
						Finanças
					</a>
				</nav>
			</div>

			{/* Overlay para quando a sidebar estiver aberta no mobile */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
					onClick={toggleSidebar}
				/>
			)}
		</div>
	);
}
