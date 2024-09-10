import { Calendar, User } from "lucide-react";

export function Counters() {
	return (
		<div className="bg-transparent shadow-xl rounded-lg py-12 flex justify-evenly">
			<div className="grid grid-flow-col grid-rows-1 place-items-center gap-x-4">
				<div className="bg-[#28C2A0] grid place-items-center p-4 rounded-2xl max-h-max">
					<User size={40} color="#fff" />
				</div>
				<div>
					<p className="text-[#4A90E2] font-medium">Estudantes</p>
					<p className="text-3xl font-bold">932</p>
				</div>
			</div>
			<div className="grid grid-flow-col grid-rows-1 place-items-center gap-x-4">
				<div className="bg-[#FBC709] grid place-items-center p-4 rounded-2xl">
					<Calendar size={40} color="#fff" />
				</div>
				<div>
					<p className="text-[#4A90E2]">Eventos</p>
					<p className="text-3xl font-bold">42</p>
				</div>
			</div>
			<div className="grid grid-flow-col grid-rows-1 place-items-center gap-x-4">
				<div className="bg-[#003366] grid place-items-center p-4 rounded-2xl">
					<User size={40} color="#fff" />
				</div>
				<div>
					<p className="text-[#4A90E2]">Estudantes</p>
					<p className="text-3xl font-bold">932</p>
				</div>
			</div>
		</div>
	);
}
