import { useEffect, useState } from "react";

export const Grid = ({ table, horario, openModal, selectedGrid }) => {
	const handleClick = (e) => {
		openModal();
		selectedGrid(e.target.id);
	};
	const diasDaSemana = [
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
	];
	// Função para encontrar o horário correspondente a um dia e hora
	const getHorario = (dia, hora) => {
		return table.find((h) => h.dia === dia && h.hora === hora);
	};

	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex justify-center rounded-lg border-firstBlue w-full h-full">
				<table className="table-fixed w-full h-full rounded-lg">
					<thead>
						<tr className="bg-firstBlue">
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tl-lg  text-white text-center">
								Time
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Segunda
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Terça
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Quarta
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Quinta
							</th>
							<th className="w-1/6 px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tr-lg  text-white text-center">
								Sexta
							</th>
						</tr>
					</thead>
					<tbody>
						{horario.map((hora) => (
							<tr key={hora}>
								<td className="w-1/6 border border-firstBlue px-2 py-1 md:px-16 md:py-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center">
									{hora}
								</td>
								{diasDaSemana.map((dia) => {
									const horario = getHorario(dia, hora);
									return (
										<td
											key={dia + hora}
											className="border border-gray-400 px-4 py-2 text-center"
										>
											{horario ? (
												<div onClick={handleClick} id={horario.id}>
													<p id={horario.id}>{horario.professor}</p>
													<strong id={horario.id}>{horario.disciplina}</strong>
												</div>
											) : (
												"—"
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
