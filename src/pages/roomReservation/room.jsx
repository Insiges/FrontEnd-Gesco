import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router";
import { Outlet } from "react-router-dom";
import { getRooms } from "../../services/api/rooms";

export function Room() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		const fetchRooms = async () => {
			try {
				const response = await getRooms();

				setRooms(response);
			} catch (error) {
				console.log(error);
			}
		};

		fetchRooms();
	}, []);

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
								{rooms.map((room) => {
									return (
										<tr key={room.id} className="border-b font-bold">
											<td className="py-3 px-4">{room.nome}</td>
											<td className="py-3 px-4 text-center flex ">
												<FaBook
													className="w-5 h-5 mx-auto text-gray-600 cursor-pointer"
													onClick={() => handleReserveClick(room.nome)}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}
			<Outlet />
		</div>
	);
}
