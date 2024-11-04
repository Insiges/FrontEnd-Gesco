import React from "react";
import { FaBook } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { Outlet } from "react-router-dom";

const RoomBook = () => {
	const navigate = useNavigate();

	const handleReserveClick = (sala) => {
		navigate(`/sala/${sala}`);
	};

	const location = useLocation();

	const isChildRoute = location.pathname !== "/sala";

	return (
		<div className="font-alatsi w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
			{!isChildRoute && (
				<div className="container mx-auto">
					<h1 className="text-lg sm:text-2xl font-bold text-[#060343] mb-4 text-center sm:text-left">
						Reserva de Salas
					</h1>

					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr className="bg-blue-900 text-white">
									<th className="text-left py-3 px-4">Sala</th>
									<th className="text-left py-3 px-4 flex justify-center items-center">
										Reservar
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b font-bold">
									<td className="py-3 px-4">Laboratório de Informática</td>
									<td className="py-3 px-4 text-center flex ">
										<FaBook
											className="w-5 h-5 mx-auto text-gray-600 cursor-pointer"
											onClick={() =>
												handleReserveClick("Laboratorio de Informatica")
											}
										/>
									</td>
								</tr>
								<tr className="bg-[#f4f4f4] border-b font-bold">
									<td className="py-3 px-4">Sala de Artes</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-gray-600 cursor-pointer"
											onClick={() => handleReserveClick("Sala de Artes")}
										/>
									</td>
								</tr>
								<tr className="border-b font-bold">
									<td className="py-3 px-4">Auditório</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-gray-600 cursor-pointer"
											onClick={() => handleReserveClick("Auditorio")}
										/>
									</td>
								</tr>
								<tr className="bg-[#f4f4f4] border-b font-bold">
									<td className="py-3 px-4">Laboratório de Ciências</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-gray-600 cursor-pointer"
											onClick={() =>
												handleReserveClick("Laboratorio de Ciencias")
											}
										/>
									</td>
								</tr>
								<tr>
									<td className="py-3 px-4 font-bold">Biblioteca</td>
									<td className="py-3 px-4 text-center">
										<FaBook
											className="w-5 h-5 mx-auto text-gray-600 cursor-pointer"
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
};

export default RoomBook;
