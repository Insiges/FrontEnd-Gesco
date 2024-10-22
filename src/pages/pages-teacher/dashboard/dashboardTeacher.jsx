import React, { useEffect, useState } from "react";
import Calendar from "../../../components/Calendar/Calendar";
import { getCounters } from "../../../services/api/school";
import { Counters } from "../../dashboard/components";
import { PostedActivities } from "../components/activities/activities";

const DashboardTeacher = () => {
	const [counters, setCounter] = useState([]);

	useEffect(() => {
		async function fetchCounters() {
			try {
				const response = await getCounters();
				setCounter(response);
			} catch (error) {
				console.error("Erro ao buscar contadores:", error);
			}
		}

		fetchCounters();
	}, []);

	return (
		<div class="flex h-screen font-alatsi bg-white text-[#060343]">
			<div class="flex-1 flex flex-col p-4">
				<header class="mb-4">
					<h1 class="text-2xl font-bold">Dashboard Docente</h1>
				</header>

				<div class="flex justify-center mb-8">
					<div class="flex flex-col space-y-4">
						<div class="h-[200px] mb-0">
							<Counters counters={counters} />
						</div>

						<div class="w-[500px]">
							<PostedActivities />
						</div>
					</div>

					<div class="flex w-[450px] h-[500px] rounded-lg ml-3 border border-[#060343]">
						<Calendar />
					</div>
				</div>

				<div class="flex justify-center">
					<div class="text-center bg-[#f4f4f4] p-4 rounded-lg mt-1 text-[#060343] w-[970px] mb-[10px]">
						<h3 class="text-lg font-bold">Grade de horários</h3>
						<table class="w-full border-collapse mt-2">
							<thead>
								<tr>
									<th class="border font-bold p-2">Aulas</th>
									<th class="border font-bold p-2">1º Período</th>
									<th class="border font-bold p-2">2º Período</th>
									<th class="border font-bold p-2">3º Período</th>
									<th class="border font-bold p-2">4º Período</th>
									<th class="border font-bold p-2">5º Período</th>
									<th class="border font-bold p-2">6º Período</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="border p-2 font-bold">Segunda</td>
									<td class="border p-2">8º Ano - Turma A</td>
									<td class="border p-2">9º Ano - Turma C</td>
									<td class="border p-2">9º Ano - Turma A</td>
									<td class="border p-2">8º Ano - Turma D</td>
									<td class="border p-2">8º Ano - Turma C</td>
									<td class="border p-2">----</td>
								</tr>
								<tr>
									<td class="border p-2 font-bold">Terça</td>
									<td class="border p-2">8º Ano - Turma C</td>
									<td class="border p-2">9º Ano - Turma C</td>
									<td class="border p-2">9º Ano - Turma A</td>
									<td class="border p-2">----</td>
									<td class="border p-2">----</td>
									<td class="border p-2">9º Ano - Turma D</td>
								</tr>
								<tr>
									<td class="border p-2 font-bold">Quarta</td>
									<td class="border p-2">8º Ano - Turma A</td>
									<td class="border p-2">9º Ano - Turma D</td>
									<td class="border p-2">9º Ano - Turma C</td>
									<td class="border p-2">8º Ano - Turma B</td>
									<td class="border p-2">8º Ano - Turma A</td>
									<td class="border p-2">9º Ano - Turma D</td>
								</tr>
								<tr>
									<td class="border p-2 font-bold">Quinta</td>
									<td class="border p-2">8º Ano - Turma C</td>
									<td class="border p-2">----</td>
									<td class="border p-2">9º Ano - Turma C</td>
									<td class="border p-2">8º Ano - Turma B</td>
									<td class="border p-2">8º Ano - Turma C</td>
									<td class="border p-2">9º Ano - Turma D</td>
								</tr>
								<tr>
									<td class="border p-2 font-bold">Sexta</td>
									<td class="border p-2">8º Ano - Turma A</td>
									<td class="border p-2">9º Ano - Turma D</td>
									<td class="border p-2">9º Ano - Turma B</td>
									<td class="border p-2">8º Ano - Turma A</td>
									<td class="border p-2">----</td>
									<td class="border p-2">9º Ano - Turma A</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardTeacher;
