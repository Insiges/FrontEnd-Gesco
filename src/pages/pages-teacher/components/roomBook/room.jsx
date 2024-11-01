import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Calendar } from "../../../dashboard/components";

const Room = () => {
	const sala = decodeURIComponent(useParams().sala);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [reservas, setReservas] = useState([
		{
			id: uuidv4(),
			sala: "Laboratorio de Informatica",
			data: "12/11",
			turno: "Manhã",
			professor: "Jacques",
		},
		{
			id: uuidv4(),
			sala: "Sala de Artes",
			data: "20/11",
			turno: "Tarde",
			professor: "Edu",
		},
		{
			id: uuidv4(),
			sala: "Laboratorio de Informatica",
			data: "21/11",
			turno: "Manhã",
			professor: "Hyago",
		},
	]);

	const [formData, setFormData] = useState({
		professor: "",
		data: "",
		turno: "",
	});

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const newReserva = {
			id: uuidv4(),
			sala,
			data: formData.data,
			turno: formData.turno,
			professor: formData.professor,
		};
		setReservas([...reservas, newReserva]);
		setFormData({ professor: "", data: "", turno: "" });
		closeModal();
	};

	const handleDateSelect = (selectedDate) => {
		setFormData((prevData) => ({ ...prevData, data: selectedDate }));
	};

	const reservasFiltradas = reservas.filter((reserva) => reserva.sala === sala);

	return (
		<div className="font-alatsi w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
			<div className="container mx-auto">
				<h1 className="text-lg sm:text-2xl font-bold text-[#060343] mb-4 text-center sm:text-left">
					{sala}
				</h1>
				<p className="text-sm sm:text-base text-[#060343] mb-4">
					Selecione a data desejada para agendar a sala. Atente-se que não é
					possível selecionar para o mesmo dia e turno que outra reserva.
				</p>

				<table className="min-w-full border">
					<thead>
						<tr>
							<th className="px-4 py-2">Data</th>
							<th className="px-4 py-2">Turno</th>
							<th className="px-4 py-2">Professor</th>
						</tr>
					</thead>
					<tbody>
						{reservasFiltradas.map((reserva) => (
							<tr key={reserva.id}>
								<td className="border px-4 py-2">{reserva.data}</td>
								<td className="border px-4 py-2">{reserva.turno}</td>
								<td className="border px-4 py-2">{reserva.professor}</td>
							</tr>
						))}
					</tbody>
				</table>
				<button
					onClick={openModal}
					type="button"
					className="bg-[#060343] text-white px-4 py-2 rounded hover:bg-blue-600 mt-[10px]"
				>
					Agendar Nova Reserva
				</button>

				{isModalOpen && (
					<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg w-80 p-6">
							<div className="flex justify-between items-center">
								<h2 className="text-lg font-semibold">Agendar Nova Data</h2>
								<button
									onClick={closeModal}
									className="text-gray-500 hover:text-gray-700"
									type="button"
								>
									&times;
								</button>
							</div>
							<form className="mt-4" onSubmit={handleFormSubmit}>
								<div className="mb-4">
									<label className="block text-sm font-medium text-gray-700">
										Professor
										<input
											type="text"
											name="professor"
											value={formData.professor}
											onChange={handleInputChange}
											className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
											placeholder="Digite o nome do professor"
										/>
									</label>
								</div>
								<div className="mb-4">
									<label className="block text-sm font-medium text-gray-700">
										Data
										<input
											type="text"
											name="data"
											className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</label>

									<Calendar
										title="Selecione a Data"
										onDateSelect={handleDateSelect}
									/>
								</div>
								<div className="mb-4">
									<label className="block text-sm font-medium text-gray-700">
										Turno
										<input
											type="text"
											name="turno"
											value={formData.turno}
											onChange={handleInputChange}
											className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
											placeholder="Digite o turno (ex: Manhã)"
										/>
									</label>
								</div>
								<div className="flex justify-end space-x-4">
									<button
										type="button"
										onClick={closeModal}
										className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
									>
										Cancelar
									</button>
									<button
										type="submit"
										className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
									>
										Reservar
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Room;
