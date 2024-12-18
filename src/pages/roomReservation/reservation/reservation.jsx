import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import {
	getReservationRoom,
	saveReservationRoom,
} from "../../../services/api/rooms";
import useUserInfos from "../../../stores/userStore";
import "react-toastify/dist/ReactToastify.css";

export function Reservation() {
	const sala = decodeURIComponent(useParams().sala);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { userInfos } = useUserInfos();
	const [reservas, setReservas] = useState([]);

	useEffect(() => {
		async function fetchReservas() {
			try {
				const response = await getReservationRoom(sala);
				setReservas(response);
			} catch (error) {
				console.error(error);
			}
		}
		fetchReservas();
	}, [sala]);

	console.log(reservas);

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			professor: "",
			data: null,
			turno: "",
		},
	});

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const onSubmit = async (data) => {
		const date = new Date(data.data);
		const formattedDate = format(date, "yyyy-MM-dd");
		const body = {
			dia: formattedDate,
			turno: data.turno,
			id_professor: userInfos.dados.id,
			sala,
		};
		const toastId = toast.loading("Salvando...");

		await saveReservationRoom(body);
		reset();
		closeModal();

		// Simule o carregamento de dados
		setTimeout(() => {
			toast.update(toastId, {
				render: "Reserva cadastrada com sucesso!",
				type: toast.success,
				isLoading: false, // Finaliza o carregamento
				autoClose: 2500, // Fecha após 3 segundos
			});
		}, 1000); // Ajuste conforme necessário para o seu carregamento
	};

	return (
		<div className="font-alatsi w-full  mx-auto p-4 sm:p-6 lg:p-8">
			<ToastContainer
				position="top-right"
				autoClose={3000} // O toast será fechado após 3 segundos
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="container mx-auto">
				<h1 className="text-lg sm:text-2xl font-bold text-[#060343] mb-4 text-center sm:text-left">
					{sala}
				</h1>
				<p className="text-sm sm:text-base text-[#060273] mb-4">
					Selecione a data desejada para agendar a sala. Atente-se que não é
					possível selecionar para o mesmo dia e turno que outra reserva.
				</p>

				<table className="min-w-full border text-[#060343] rounded-lg overflow-hidden">
					<thead>
						<tr className="bg-[#C5CFE4] text-[17px] font-semibold">
							<th className="px-4 py-2">Data</th>
							<th className="px-4 py-2">Turno</th>
							<th className="px-4 py-2">Professor</th>
						</tr>
					</thead>
					<tbody>
						{reservas.map((reserva) => (
							<tr key={reserva.id}>
								<td className="border px-4 py-2">
									{dayjs(reserva.data).format("DD/MM/YYYY")}
								</td>
								<td className="border px-4 py-2">{reserva.turno}</td>
								<td className="border px-4 py-2">{reserva.professor}</td>
							</tr>
						))}
					</tbody>
				</table>
				<button
					onClick={openModal}
					type="button"
					className="bg-custom-blue text-white px-4 py-2 rounded hover:opacity-80 mt-[10px]"
				>
					Agendar Nova Reserva
				</button>

				{isModalOpen && (
					<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg w-80 p-6">
							<div className="flex justify-between items-center">
								<h2 className="text-lg font-semibold text-[#060343]">
									Agendar Nova Data
								</h2>
								<button
									onClick={closeModal}
									className="text-[#060343] hover:text-gray-700"
									type="button"
								>
									&times;
								</button>
							</div>
							<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-4">
									<label className="block text-sm font-medium text-gray-700">
										Data
									</label>
									<Controller
										control={control}
										name="data"
										render={({ field }) => (
											<DatePicker
												{...field}
												selected={field.value}
												onChange={(date) => field.onChange(date)}
												className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
												locale={ptBR}
												dateFormat="dd/MM/yyyy"
												placeholderText="Selecione uma data"
												minDate={new Date()}
											/>
										)}
									/>
								</div>
								<div className="mb-4">
									<label className="block text-sm font-medium text-[#060343]">
										Turno
										<Controller
											name="turno"
											control={control}
											render={({ field }) => (
												<input
													{...field}
													type="text"
													className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
													placeholder="Digite o turno (ex: Manhã)"
												/>
											)}
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
}
