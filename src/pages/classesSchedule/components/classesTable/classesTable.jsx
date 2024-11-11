import React from "react";
import { MdGroups2 } from "react-icons/md";
import { TbEditCircle } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export const ClassTable = ({ turmas }) => {
	const navigate = useNavigate();

	const handleRowClick = (id) => {
		navigate(`/classSchedule/${id}`);
	};

	return (
		<div className="flex mx-4 justify-center rounded-lg shadow-lg border-firstBlue">
			{!turmas || (!!turmas && turmas.length === 0) ? (
				<p className="text-center text-xl text-gray-500 py-4">
					Não há turmas cadastradas
				</p>
			) : (
				<table className="table-fixed w-full h-full rounded-lg">
					<thead>
						<tr className="bg-firstBlue">
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tl-lg  text-white text-center">
								Turma
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Serie
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl text-white text-center">
								Ano letivo
							</th>
							<th className="w-1/6 px-2 py-1 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-tr-lg  text-white text-center">
								Ação
							</th>
						</tr>
					</thead>

					<tbody>
						{turmas.map((turma) => (
							<tr
								key={turma.id}
								className="bg-white hover:cursor-pointer"
								onClick={() => handleRowClick(turma.id)}
							>
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									<div className="flex items-center justify-center">
										<MdGroups2 className="mr-2 hidden sm:block  align-middle" />
										<span className="inline-block align-middle">
											{turma.nome}
										</span>
									</div>
								</td>
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									{turma.serie}
								</td>
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									{turma.ano}
								</td>
								<td className="px-2 py-4 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-lg text-center">
									<button
										type="button"
										className="text-green-400 hover:underline"
									>
										<TbEditCircle />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};
