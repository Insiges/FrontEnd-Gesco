import React from "react";
import { FaBook } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { Outlet } from "react-router-dom";

export function Room() {
	const navigate = useNavigate();

	const handleReserveClick = (sala) => {
		navigate(`/sala/${sala}`);
	};

	const location = useLocation();

	const isChildRoute = location.pathname !== "/sala";

	return (
		<div className="font-alatsi w-full mx-auto p-4 sm:p-6 lg:p-8">
			{!isChildRoute && (
				<div className="container mx-auto">
					<h1 className="text-lg sm:text-2xl font-bold text-[#060343] mb-4 text-center sm:text-left">
						Reserva de Salas
					</h1>

					<div className="overflow-x-auto rounded-lg">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr className="bg-[#C5CFE4] text-[#060343] text-[19px] font-semibold">
									<th className="text-left py-3 px-4">Sala</th>
									<th className="text-left py-3 px-4 flex justify-center items-center">
										Reservar
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b font-bold text-[#060343] text-[18px]">
									<td className="py-3 px-4">Laboratório de Informática</td>
									<td className="py-3 px-4 text-center flex ">
										<FaBook
											className="w-5 h-5 mx-auto text-[#FFB400] cursor-pointer"
											onClick={() =>
												handleReserveClick("Laboratório de Informática")
											}
										/>
									</td>
								</tr>
								<tr className="bg-[#f4f4f4] border-b font-bold text-[#060343] text-[18px]">
									<td className="py-3 px-4">Sala de Artes</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-[#FFB400] cursor-pointer"
											onClick={() => handleReserveClick("Sala de Artes")}
										/>
									</td>
								</tr>
								<tr className="border-b font-bold text-[#060343] text-[18px]">
									<td className="py-3 px-4">Auditório</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-[#FFB400] cursor-pointer"
											onClick={() => handleReserveClick("Auditório")}
										/>
									</td>
								</tr>
								<tr className="bg-[#f4f4f4] border-b font-bold text-[#060343] text-[18px]">
									<td className="py-3 px-4">Laboratório de Ciências</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-[#FFB400] cursor-pointer"
											onClick={() =>
												handleReserveClick("Laboratório de Ciências")
											}
										/>
									</td>
								</tr>
								<tr>
									<td className="py-3 px-4 font-bold text-[#060343] text-[18px]">
										Biblioteca
									</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-[#FFB400] cursor-pointer"
											onClick={() => handleReserveClick("Biblioteca")}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
			<Outlet />
		</div>
	);
}
