import React from "react";

export function PostedActivities() {
	return (
		<div class="bg-white p-4 rounded-lg mt-6 border border-[#060343]">
			<div class="bg-[#4E54BF] w-full text-white text-center text-lg font-bold p-2 rounded-t-lg">
				Atividades postadas
			</div>
			<table class="w-full border-collapse mt-0">
				<thead>
					<tr>
						<th class="p-2 text-left border-b">Tarefa</th>
						<th class="p-2 text-left border-b">Turma</th>
						<th class="p-2 text-left border-b">Entrega</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="p-2">Trabalho Soluções Química</td>
						<td class="p-2">8º Ano D</td>
						<td class="p-2">13/11/24</td>
					</tr>
					<tr>
						<td class="p-2">Trabalho Elementos</td>
						<td class="p-2">8º Ano B</td>
						<td class="p-2">13/11/24</td>
					</tr>
					<tr>
						<td class="p-2">Prova Soluções Química</td>
						<td class="p-2">8º Ano D</td>
						<td class="p-2">20/11/24</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
