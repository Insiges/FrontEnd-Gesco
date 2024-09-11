import { Mail, Phone } from "lucide-react";
export function DocentTable() {
	const docentes = [
		{
			name: "Joana Silva Orrego",
			subject: "Matemática",
			contact: {
				phone: true,
				email: true,
			},
		},
		{
			name: "Joana Silva Orrego",
			subject: "Matemática",
			contact: {
				phone: true,
				email: true,
			},
		},
		{
			name: "Joana Silva Orrego",
			subject: "Matemática",
			contact: {
				phone: true,
				email: true,
			},
		},
		{
			name: "Joana Silva Orrego",
			subject: "Matemática",
			contact: {
				phone: true,
				email: true,
			},
		},
	];

	return (
		<div className="bg-white shadow-lg rounded-lg p-6">
			<h3 className="text-lg font-bold mb-4">Docente</h3>
			<table className="w-full table-auto">
				<thead>
					<tr className="bg-[#003366] text-white">
						<th className="px-4 py-2 text-left">Docente</th>
						<th className="px-4 py-2 text-left">Disciplina</th>
						<th className="px-4 py-2 text-left">Contato</th>
					</tr>
				</thead>
				<tbody>
					{docentes.map((docente, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<tr key={index} className="border-b">
							<td className="px-4 py-4 flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
								<span className="font-semibold">{docente.name}</span>
							</td>
							<td className="px-4 py-4">{docente.subject}</td>
							<td className="px-4 py-4">
								<div className="flex space-x-4">
									{docente.contact.phone && (
										// biome-ignore lint/a11y/useButtonType: <explanation>
										<button className="bg-[#28C2A0] p-2 rounded-full">
											<Phone size={20} color="#fff" />
										</button>
									)}
									{docente.contact.email && (
										// biome-ignore lint/a11y/useButtonType: <explanation>
										<button className="bg-[#FBC709] p-2 rounded-full">
											<Mail size={20} color="#fff" />
										</button>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
