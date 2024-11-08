import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

export function Default() {
	return (
		<div className="grid grid-cols-[auto_auto] grid-rows-[1fr_auto] min-h-screengrid font-alatsi lg:grid-cols-[250px_1fr]">
			<aside className="lg:row-span-2 bg-gray-200 lg:max-w-full max-w-10">
				<SideBar />
			</aside>

			<main className="p-6 h-[calc(100vh-32px)] overflow-y-auto  ">
				<Outlet />
			</main>

			{/* <footer className="bg-gray-800 text-white p-1 text-center">
				<div>GESCO LTDA</div>
			</footer> */}
		</div>
	);
}
