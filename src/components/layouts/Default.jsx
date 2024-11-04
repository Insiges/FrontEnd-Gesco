import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "../../routes/ProtectedRoute";
import { SideBar } from "../SideBar/SideBar";

export function Default() {
	return (
		<div className="grid grid-cols-[40px] grid-rows-[1fr_auto] min-h-screengrid font-alatsi lg:grid-cols-[250px_1fr]">
			<aside className="row-span-2 bg-gray-200 lg:max-w-full max-w-10">
				<SideBar />
			</aside>

			<main className="p-6 h-[calc(100vh-32px)] overflow-y-auto">
				<Outlet />
			</main>

			<footer className="bg-gray-800 text-white p-1 text-center">
				<div>Footer content here</div>
			</footer>
		</div>
	);
}
