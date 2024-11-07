export function ScheduleTeacher() {
	return (
		<div className="flex justify-center ">
			<div className=" text-center border-2   p-4 rounded-lg mt-1 text-[#060343] w-[970px] mb-[20px]">
				<h3 className="text-lg font-bold">Grade de horários</h3>
				<table className="w-full border-collapse mt-2 ">
					<thead>
						<tr>
							<th className="border font-bold p-2">Aulas</th>
							<th className="border font-bold p-2">1º Período</th>
							<th className="border font-bold p-2">2º Período</th>
							<th className="border font-bold p-2">3º Período</th>
							<th className="border font-bold p-2">4º Período</th>
							<th className="border font-bold p-2">5º Período</th>
							<th className="border font-bold p-2">6º Período</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border p-2 font-bold">Segunda</td>
							<td className="border p-2">8º Ano - Turma A</td>
							<td className="border p-2">9º Ano - Turma C</td>
							<td className="border p-2">9º Ano - Turma A</td>
							<td className="border p-2">8º Ano - Turma D</td>
							<td className="border p-2">8º Ano - Turma C</td>
							<td className="border p-2">----</td>
						</tr>
						<tr>
							<td className="border p-2 font-bold">Terça</td>
							<td className="border p-2">8º Ano - Turma C</td>
							<td className="border p-2">9º Ano - Turma C</td>
							<td className="border p-2">9º Ano - Turma A</td>
							<td className="border p-2">----</td>
							<td className="border p-2">----</td>
							<td className="border p-2">9º Ano - Turma D</td>
						</tr>
						<tr>
							<td className="border p-2 font-bold">Quarta</td>
							<td className="border p-2">8º Ano - Turma A</td>
							<td className="border p-2">9º Ano - Turma D</td>
							<td className="border p-2">9º Ano - Turma C</td>
							<td className="border p-2">8º Ano - Turma B</td>
							<td className="border p-2">8º Ano - Turma A</td>
							<td className="border p-2">9º Ano - Turma D</td>
						</tr>
						<tr>
							<td className="border p-2 font-bold">Quinta</td>
							<td className="border p-2">8º Ano - Turma C</td>
							<td className="border p-2">----</td>
							<td className="border p-2">9º Ano - Turma C</td>
							<td className="border p-2">8º Ano - Turma B</td>
							<td className="border p-2">8º Ano - Turma C</td>
							<td className="border p-2">9º Ano - Turma D</td>
						</tr>
						<tr>
							<td className="border p-2 font-bold">Sexta</td>
							<td className="border p-2">8º Ano - Turma A</td>
							<td className="border p-2">9º Ano - Turma D</td>
							<td className="border p-2">9º Ano - Turma B</td>
							<td className="border p-2">8º Ano - Turma A</td>
							<td className="border p-2">----</td>
							<td className="border p-2">9º Ano - Turma A</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
