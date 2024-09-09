import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

export function Default() {
	return (
		<div className="grid grid-cols-[250px_1fr] grid-rows-[1fr_auto] min-h-screengrid ">
			<aside className="row-span-2 bg-gray-200">
				<SideBar />
			</aside>

			<main className="p-6 h-[calc(100vh-58px)] overflow-y-auto">
				<Outlet />
			</main>
			<footer className="col-span-2 bg-gray-800 text-white p-4 text-center">
				<div>Footer content here</div>
			</footer>
		</div>
	);
}
