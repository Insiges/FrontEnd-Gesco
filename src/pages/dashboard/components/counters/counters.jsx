import { Calendar, User } from "lucide-react";

export function Counters({ counters }) {
	return (
		<div className="w-full bg-transparent shadow rounded-lg py-8 px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
			<div className="flex items-center gap-4">
				<div className="bg-[#7C93C3] grid place-items-center p-4 rounded-2xl max-h-max">
					<User size={40} color="#fff" />
				</div>
				<div>
					<p className="text-[#060343] font-medium">Estudantes</p>
					<p className="text-3xl font-bold">{counters?.alunos ?? 0}</p>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<div className="bg-[#FFB400] grid place-items-center p-4 rounded-2xl">
					<Calendar size={40} color="#fff" />
				</div>
				<div>
					<p className="text-[#060343] font-medium">Eventos</p>
					<p className="text-3xl font-bold">{counters?.eventos ?? 0}</p>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<div className="bg-[#6B71F2] grid place-items-center p-4 rounded-2xl">
					<User size={40} color="#fff" />
				</div>
				<div>
					<p className="text-[#060343] font-medium">Professores</p>
					<p className="text-3xl font-bold">{counters?.professores ?? 0}</p>
				</div>
			</div>
		</div>
	);
}
